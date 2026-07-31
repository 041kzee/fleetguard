import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Create maintenance log and upload invoice
export async function POST(request) {
    try {
        const formData = await request.formData();

        const vehicle_id = formData.get("vehicle_id");
        const service_date = formData.get("service_date");
        const service_type = formData.get("service_type");
        const description = formData.get("description");
        const odometer_reading = Number(formData.get("odometer_reading"));
        const cost = Number(formData.get("cost"));

        const file = formData.get("invoice");

        let invoice_url = null;

        // Upload invoice if provided
        if (file && file.size > 0) {
            const allowedTypes = [
                "application/pdf",
                "image/jpeg",
                "image/png",
            ];

            if (!allowedTypes.includes(file.type)) {
                return NextResponse.json(
                    {
                        message: "Only PDF, JPG and PNG files are allowed.",
                    },
                    {
                        status: 400,
                    }
                );
            }

            const extension = file.name.split(".").pop();

            const fileName = `${vehicle_id}/${Date.now()}.${extension}`;

            const { error: uploadError } = await supabase.storage
                .from("maintenance-invoices")
                .upload(fileName, file, {
                    upsert: false,
                });

            if (uploadError) {
                return NextResponse.json(
                    {
                        message: uploadError.message,
                    },
                    {
                        status: 500,
                    }
                );
            }

            invoice_url = fileName;
        }

        // Calculate next maintenance date (6 months later)
        const nextMaintenanceDate = new Date(service_date);
        nextMaintenanceDate.setMonth(nextMaintenanceDate.getMonth() + 6);

        const formattedNextMaintenanceDate =
            nextMaintenanceDate.toISOString().split("T")[0];

        // Insert into database
        const { data, error } = await supabase
            .from("maintenance_logs")
            .insert({
                vehicle_id,
                service_date,
                service_type,
                odometer_reading,
                next_service_date: formattedNextMaintenanceDate,
                description,
                cost,
                invoice_url,
            })
            .select()
            .single();

        if (error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json(
            {
                message: "Maintenance log created successfully",
                maintenance: data,
            },
            {
                status: 201,
            }
        );
    } catch (err) {
        return NextResponse.json(
            {
                message: err.message,
            },
            {
                status: 500,
            }
        );
    }
}

// Get latest 5 maintenance logs
export async function GET() {
    const { data, error } = await supabase
        .from("maintenance_logs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

    if (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }

    return NextResponse.json(data);
}
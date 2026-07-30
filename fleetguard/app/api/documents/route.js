import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

//upload document
export async function POST(request) {
    try {
        const formData = await request.formData();

        const vehicle_id = formData.get("vehicle_id");
        const document_type = formData.get("document_type");
        const document_number = formData.get("document_number");
        const issue_date = formData.get("issue_date");
        const expiry_date = formData.get("expiry_date");

        const file = formData.get("file");

        if (!file) {
            return NextResponse.json(
                { message: "Document file is required" },
                { status: 400 }
            );
        }

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { message: "Only PDF, JPG and PNG are allowed" },
                { status: 400 }
            );
        }

        const extension = file.name.split(".").pop();

        const fileName = `${vehicle_id}/${document_type}.${extension}`;

        const { error: uploadError } = await supabase.storage
            .from("vehicle-documents")
            .upload(fileName, file, {
                upsert: true,
            });

        if (uploadError) {
            console.log(uploadError);

            return NextResponse.json(
                { message: uploadError.message },
                { status: 500 }
            );
        }

        const { data, error } = await supabase
            .from("documents")
            .insert({
                vehicle_id,
                document_type,
                document_number,
                issue_date,
                expiry_date,
                file_url: fileName,
            })
            .select()
            .single();

        if (error) {
            console.log(error);

            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: "Document uploaded successfully",
                document: data,
            },
            { status: 201 }
        );

    } catch (err) {
        return NextResponse.json(
            { message: err.message },
            { status: 500 }
        );
    }
}

//get every document of one vehicle
export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const vehicle_id = searchParams.get("vehicle_id");

    const { data, error } = await supabase
        .from("documents")
        .select("*")
        .eq("vehicle_id", vehicle_id)
        .order("created_at");

    if (error)
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );

    return NextResponse.json(data);
}
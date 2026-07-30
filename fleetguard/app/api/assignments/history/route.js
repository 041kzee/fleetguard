import { supabase } from "@/lib/supabase";

export async function GET() {

    try {

        const { data, error } = await supabase
            .from("vehicle_assignments")
            .select(`
                id,
                assigned_date,
                status,
                is_override,
                override_reason,
                created_at,

                vehicle:vehicle_id(
                    vehicle_number,
                    vehicle_type,
                    brand,
                    model
                ),

                driver:driver_id(
                    license_number,
                    user:user_id(
                        full_name,
                        email,
                        phone
                    )
                ),

                fleet_manager:fleet_manager_id(
                    full_name,
                    email
                )
            `)
            .order("assigned_date", {
                ascending: false
            });

        if (error) {

            return Response.json(
                {
                    message: error.message
                },
                {
                    status: 400
                }
            );

        }

        return Response.json({
            count: data.length,
            history: data
        });

    } catch (error) {

        return Response.json(
            {
                message: error.message
            },
            {
                status: 500
            }
        );

    }

}
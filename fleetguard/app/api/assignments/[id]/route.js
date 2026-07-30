import { supabase } from "@/lib/supabase";



// GET SINGLE ASSIGNMENT

export async function GET(req, { params }) {

    try {

        const { id } = await params;


        if (!id) {

            return Response.json(
                {
                    message: "Assignment ID is required"
                },
                {
                    status: 400
                }
            );

        }



        const { data, error } = await supabase
            .from("vehicle_assignments")
            .select(`
                id,
                status,
                assigned_date,
                created_at,

                vehicle:vehicle_id(
                    id,
                    vehicle_number,
                    vehicle_type,
                    brand,
                    model
                ),

                driver:driver_id(
                    id,
                    license_number,
                    license_expiry,

                    user:user_id(
                        id,
                        full_name,
                        email,
                        phone
                    )
                ),

                fleet_manager:fleet_manager_id(
                    id,
                    full_name,
                    email,
                    phone
                )
            `)
            .eq("id", id)
            .single();



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



        return Response.json(data);



    } catch(error) {

        return Response.json(
            {
                message:error.message
            },
            {
                status:500
            }
        );

    }

}







// UPDATE ASSIGNMENT STATUS

export async function PATCH(req, { params }) {

    try {

        const { id } = await params;


        if (!id) {

            return Response.json(
                {
                    message:"Assignment ID is required"
                },
                {
                    status:400
                }
            );

        }



        const body = await req.json();


        const {
            status
        } = body;



        const allowedStatus = [
            "ACTIVE",
            "CLOSED",
            "CANCELLED"
        ];



        if(!allowedStatus.includes(status)){

            return Response.json(
                {
                    message:
                    "Invalid status. Use ACTIVE, CLOSED or CANCELLED"
                },
                {
                    status:400
                }
            );

        }



        const { data, error } = await supabase
            .from("vehicle_assignments")
            .update({

                status

            })
            .eq("id", id)
            .select(`
                id,
                status,
                assigned_date
            `)
            .single();



        if(error){

            return Response.json(
                {
                    message:error.message
                },
                {
                    status:400
                }
            );

        }



        return Response.json(
            {
                message:"Assignment updated successfully",
                assignment:data
            }
        );



    } catch(error){

        return Response.json(
            {
                message:error.message
            },
            {
                status:500
            }
        );

    }

}







// DELETE ASSIGNMENT

export async function DELETE(req, { params }) {

    try {

        const { id } = await params;


        if (!id) {

            return Response.json(
                {
                    message:"Assignment ID is required"
                },
                {
                    status:400
                }
            );

        }



        const { error } = await supabase
            .from("vehicle_assignments")
            .delete()
            .eq("id", id);



        if(error){

            return Response.json(
                {
                    message:error.message
                },
                {
                    status:400
                }
            );

        }



        return Response.json(
            {
                message:"Assignment deleted successfully"
            }
        );



    } catch(error){

        return Response.json(
            {
                message:error.message
            },
            {
                status:500
            }
        );

    }

}
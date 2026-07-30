import { supabase } from "@/lib/supabase";


// CREATE OVERRIDE LOG

export async function POST(req){

    try{

        const body = await req.json();


        const {
            assignment_id,
            fleet_manager_id,
            reason
        } = body;



        if(
            !assignment_id ||
            !fleet_manager_id ||
            !reason
        ){

            return Response.json(
                {
                    message:
                    "Assignment ID, fleet manager ID and reason are required"
                },
                {
                    status:400
                }
            );

        }



        // 1. Update assignment as override

        const {data:updateData,error:updateError}
        =
        await supabase
            .from("vehicle_assignments")
            .update({

                is_override:true,

                override_reason:reason

            })
            .eq(
                "id",
                assignment_id
            )
            .select()
            .single();



        if(updateError){

            return Response.json(
                {
                    message:updateError.message
                },
                {
                    status:400
                }
            );

        }




        // 2. Create override log

        const {data,error}
        =
        await supabase
            .from("override_logs")
            .insert({

                assignment_id,

                fleet_manager_id,

                reason

            })
            .select()
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
                message:
                "Override recorded successfully",

                override:data,

                assignment:updateData
            },
            {
                status:201
            }
        );



    }
    catch(error){

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
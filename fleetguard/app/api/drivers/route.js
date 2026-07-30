import { supabase } from "@/lib/supabase";


// CREATE DRIVER

export async function POST(req) {

    try {

        const body = await req.json();


        const {
            user_id,
            license_number,
            license_expiry,
            address,
            experience_years
        } = body;



        const { data, error } = await supabase
            .from("drivers")
            .insert({

                user_id,

                license_number,

                license_expiry,

                address,

                experience_years,

                status:"ACTIVE"

            })
            .select(`
                id,
                license_number,
                license_expiry,
                address,
                experience_years,
                status,

                user:user_id(
                    id,
                    full_name,
                    email,
                    phone
                )
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
                message:"Driver profile created successfully",
                driver:data
            },
            {
                status:201
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





// GET ALL DRIVERS

export async function GET(req){

    try{


        const {data,error}=await supabase
            .from("drivers")
            .select(`
                id,
                license_number,
                license_expiry,
                address,
                experience_years,
                status,

                user:user_id(
                    id,
                    full_name,
                    email,
                    phone
                )
            `);



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



        return Response.json(data);



    }catch(error){

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
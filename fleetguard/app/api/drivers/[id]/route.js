import { supabase } from "@/lib/supabase";




// GET SINGLE DRIVER

export async function GET(req,{params}){


    try{


        const { id } = await params;



        if(!id){

            return Response.json(
                {
                    message:"Driver ID is required"
                },
                {
                    status:400
                }
            );

        }



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
            `)
            .eq("id",id)
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





// UPDATE DRIVER

export async function PATCH(req,{params}){


    try{


        const { id } = await params;


        if(!id){

            return Response.json(
                {
                    message:"Driver ID is required"
                },
                {
                    status:400
                }
            );

        }



        const body = await req.json();



        const {data,error}=await supabase
            .from("drivers")
            .update(body)
            .eq("id",id)
            .select(`
                id,
                license_number,
                license_expiry,
                address,
                experience_years,
                status
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
                message:"Driver updated successfully",
                driver:data
            }
        );



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





// DELETE DRIVER

export async function DELETE(req,{params}){


    try{


        const { id } = await params;


        if(!id){

            return Response.json(
                {
                    message:"Driver ID is required"
                },
                {
                    status:400
                }
            );

        }



        const {error}=await supabase
            .from("drivers")
            .delete()
            .eq("id",id);



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
                message:"Driver deleted successfully"
            }
        );



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
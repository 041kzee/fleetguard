import { supabase } from "@/lib/supabase";



// CREATE ASSIGNMENT

export async function POST(req) {

    try {

        const body = await req.json();


        const {
            vehicle_number,
            driver_name,
            fleet_manager_id
        } = body;



        // 1. Find vehicle using registration number

        const { data: vehicle, error: vehicleError } =
            await supabase
                .from("vehicles")
                .select(`
                    id,
                    vehicle_number
                `)
                .eq(
                    "vehicle_number",
                    vehicle_number
                )
                .single();



        if(vehicleError || !vehicle){

            return Response.json(
                {
                    message:"Vehicle not found"
                },
                {
                    status:404
                }
            );

        }



        // 2. Check compliance documents

        const today = new Date()
            .toISOString()
            .split("T")[0];



        const { data: expiredDocuments, error: documentError } =
            await supabase
                .from("documents")
                .select(`
                    id,
                    document_type,
                    expiry_date,
                    status
                `)
                .eq(
                    "vehicle_id",
                    vehicle.id
                )
                .lt(
                    "expiry_date",
                    today
                );



        if(documentError){

            return Response.json(
                {
                    message:documentError.message
                },
                {
                    status:400
                }
            );

        }



        if(expiredDocuments.length > 0){

            return Response.json(
                {
                    message:
                    "Vehicle cannot be assigned. Compliance document expired.",
                    
                    expired_documents:
                    expiredDocuments
                },
                {
                    status:400
                }
            );

        }




        // 3. Find driver by name


        const { data: drivers, error: driverError } =
            await supabase
                .from("drivers")
                .select(`
                    id,
                    user:user_id(
                        full_name
                    )
                `);



        if(driverError){

            return Response.json(
                {
                    message:driverError.message
                },
                {
                    status:400
                }
            );

        }



        const driver =
            drivers.find(
                d =>
                d.user.full_name.toLowerCase()
                === driver_name.toLowerCase()
            );



        if(!driver){

            return Response.json(
                {
                    message:"Driver not found"
                },
                {
                    status:404
                }
            );

        }




        // 4. Create assignment


        const { data, error } =
            await supabase
                .from("vehicle_assignments")
                .insert({

                    vehicle_id:
                    vehicle.id,

                    driver_id:
                    driver.id,

                    fleet_manager_id,

                    status:"ACTIVE"

                })
                .select(`
                    id,
                    status,
                    assigned_date,

                    vehicle:vehicle_id(
                        vehicle_number
                    ),

                    driver:driver_id(
                        user:user_id(
                            full_name
                        )
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
                message:
                "Vehicle assigned successfully",

                assignment:data
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
import { supabase } from "@/lib/supabase";


export async function GET() {

    try {

        const today = new Date();

        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);



        const [
            vehicles,
            drivers,
            assignments,
            documents,
            maintenance
        ] = await Promise.all([


            // VEHICLES

            supabase
                .from("vehicles")
                .select("id"),



            // DRIVERS

            supabase
                .from("drivers")
                .select("id"),



            // ASSIGNMENTS

            supabase
                .from("vehicle_assignments")
                .select(`
                    id,
                    status,
                    is_override
                `),



            // DOCUMENTS

            supabase
                .from("documents")
                .select(`
                    id,
                    vehicle_id,
                    document_type,
                    expiry_date,
                    status
                `),



            // MAINTENANCE LOGS

            supabase
                .from("maintenance_logs")
                .select(`
                    id,
                    vehicle_id,
                    next_service_date
                `)

        ]);




        // ERROR HANDLING

        if (
            vehicles.error ||
            drivers.error ||
            assignments.error ||
            documents.error ||
            maintenance.error
        ) {

            return Response.json(
                {
                    message:"Failed to load dashboard",

                    error:{
                        vehicles:vehicles.error?.message,
                        drivers:drivers.error?.message,
                        assignments:assignments.error?.message,
                        documents:documents.error?.message,
                        maintenance:maintenance.error?.message
                    }
                },
                {
                    status:400
                }
            );

        }




        // TOTAL COUNTS

        const totalVehicles =
            vehicles.data.length;


        const totalDrivers =
            drivers.data.length;



        const activeAssignments =
            assignments.data.filter(
                item =>
                    item.status === "ACTIVE"
            ).length;



        const overrideAssignments =
            assignments.data.filter(
                item =>
                    item.is_override === true
            ).length;




        // DOCUMENT COMPLIANCE


        const expiredDocuments =
            documents.data.filter(doc => {

                const expiry =
                    new Date(doc.expiry_date);


                return (
                    expiry < today ||
                    doc.status === "EXPIRED"
                );

            }).length;



        const expiringDocuments =
            documents.data.filter(doc => {

                const expiry =
                    new Date(doc.expiry_date);


                return (
                    expiry >= today &&
                    expiry <= next30Days
                );

            }).length;




        // MAINTENANCE DUE


        const maintenanceDue =
            maintenance.data.filter(item => {


                if(!item.next_service_date)
                    return false;


                return (
                    new Date(item.next_service_date)
                    <= today
                );


            }).length;




        // COMPLIANCE SCORE

        const compliantVehicles =
            totalVehicles - expiredDocuments;


        const compliancePercentage =
            totalVehicles === 0
                ? 0
                :
                Number(
                    (
                        compliantVehicles /
                        totalVehicles
                    ) * 100
                ).toFixed(2);





        return Response.json({

            fleetOverview:{

                totalVehicles,

                totalDrivers,

                activeAssignments,

                overrideAssignments

            },


            compliance:{

                expiredDocuments,

                expiringDocuments,

                compliancePercentage

            },


            maintenance:{

                vehiclesDueForMaintenance:
                maintenanceDue

            }


        });



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
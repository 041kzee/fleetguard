import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request, context) {
  const { vehicleId } = await context.params;

  const { data, error } = await supabase
    .from("maintenance_logs")
    .select("*")
    .eq("vehicle_id", vehicleId)
    .order("service_date", { ascending: false });

  if (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }

  if (!data || data.length === 0) {
    return NextResponse.json(
      { message: "No maintenance history found for this vehicle." },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Create Vehicle
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      vehicle_number,
      vehicle_type,
      brand,
      model,
      manufacturing_year,
      fuel_type,
      capacity,
      chassis_number,
      engine_number,
      registration_date,
      insurance_expiry,
      emission_expiry,
    } = body;

    const { data: duplicate } = await supabase
      .from("vehicles")
      .select("id")
      .or(
        `vehicle_number.eq.${vehicle_number},chassis_number.eq.${chassis_number},engine_number.eq.${engine_number}`
      );

    if (duplicate?.length > 0) {
      return NextResponse.json(
        {
          message:
            "Vehicle number, chassis number or engine number already exists.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("vehicles")
      .insert({
        vehicle_number,
        vehicle_type,
        brand,
        model,
        manufacturing_year,
        fuel_type,
        capacity,
        chassis_number,
        engine_number,
        registration_date,
        insurance_expiry,
        emission_expiry,
      })
      .select()
      .single();

    if (error)
      return NextResponse.json({ message: error.message }, { status: 500 });

    return NextResponse.json(
      {
        message: "Vehicle created successfully",
        vehicle: data,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// Get All Vehicles
export async function GET() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error)
    return NextResponse.json({ message: error.message }, { status: 500 });

  return NextResponse.json(data);
}
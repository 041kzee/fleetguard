import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Get Vehicle
export async function GET(request, context) {
  const { id } = await context.params;

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { message: "Vehicle not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

// Update Vehicle
export async function PUT(request, context) {
  const { id } = await context.params;

  const body = await request.json();

  const updates = {};

  if (body.insurance_expiry)
    updates.insurance_expiry = body.insurance_expiry;

  if (body.emission_expiry)
    updates.emission_expiry = body.emission_expiry;

  if (body.capacity)
    updates.capacity = body.capacity;

  if (body.status)
    updates.status = body.status;

  updates.updated_at = new Date();

  const { data, error } = await supabase
    .from("vehicles")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Vehicle updated successfully",
    vehicle: data,
  });
}

// Delete Vehicle
export async function DELETE(request, context) {
  const { id } = await context.params;

  const { error } = await supabase
    .from("vehicles")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Vehicle deleted successfully",
  });
}
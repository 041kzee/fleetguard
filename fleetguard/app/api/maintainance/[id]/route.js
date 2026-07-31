import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request, context) {

  const { id } = await context.params;

  const { data, error } = await supabase
    .from("maintenance_logs")
    .select("*")
    .eq("id", id)
    .single();

  if (error)
    return NextResponse.json(
      { message: "Maintenance log not found" },
      { status: 404 }
    );

  return NextResponse.json(data);
}
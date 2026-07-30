import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request, context) {

    const { id } = await context.params;

    const { data, error } = await supabase
        .from("documents")
        .select("*")
        .eq("id", id)
        .single();

    if (error)
        return NextResponse.json(
            { message: "Document not found" },
            { status: 404 }
        );

    return NextResponse.json(data);
}

export async function PUT(request, context) {

    const { id } = await context.params;

    const body = await request.json();

    const updates = {};

    if (body.document_number)
        updates.document_number = body.document_number;

    if (body.issue_date)
        updates.issue_date = body.issue_date;

    if (body.expiry_date)
        updates.expiry_date = body.expiry_date;

    if (body.status)
        updates.status = body.status;

    updates.updated_at = new Date();

    const { data, error } = await supabase
        .from("documents")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error)
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );

    return NextResponse.json({
        message: "Document updated successfully",
        document: data,
    });
}

export async function DELETE(request, context) {

    const { id } = await context.params;

    const { data } = await supabase
        .from("documents")
        .select("file_url")
        .eq("id", id)
        .single();

    if (!data) {
        return NextResponse.json(
            { message: "Document not found" },
            { status: 404 }
        );
    }

    await supabase.storage
        .from("vehicle-documents")
        .remove([data.file_url]);

    const { error } = await supabase
        .from("documents")
        .delete()
        .eq("id", id);

    if (error)
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );

    return NextResponse.json({
        message: "Document deleted successfully",
    });
}
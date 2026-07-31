import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Firebase authentication
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();

    // Find user in database
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("firebase_uid", userCredential.user.uid)
      .single();

    if (error || !data) {
      return Response.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Role check
    if (data.role !== "FLEET_MANAGER") {
      return Response.json(
        { message: "You are not a Fleet Manager." },
        { status: 403 }
      );
    }

    // Status check
    if (data.status === "PENDING") {
      return Response.json(
        { message: "Waiting for admin approval" },
        { status: 403 }
      );
    }

    if (data.status === "REJECTED") {
      return Response.json(
        { message: "Account rejected" },
        { status: 403 }
      );
    }

    return Response.json({
      message: "Login successful",
      token,
      user: data,
    });

  } catch (err) {
    return Response.json(
      { message: err.message },
      { status: 400 }
    );
  }
}
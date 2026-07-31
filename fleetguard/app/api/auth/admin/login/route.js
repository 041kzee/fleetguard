import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { email, password } = await req.json();

  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("firebase_uid", userCredential.user.uid)
      .single();

    if (!data) {
      return Response.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    if (data.role !== "ADMIN") {
      return Response.json(
        { message: "You are not an Admin." },
        { status: 403 }
      );
    }

    return Response.json({
      message: "Admin login successful",
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
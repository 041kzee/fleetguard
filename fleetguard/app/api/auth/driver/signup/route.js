import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const {
    name,
    email,
    password,
    phone
  } = await req.json();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const firebaseUid = userCredential.user.uid;

    const { error } = await supabase
      .from("users")
      .insert({
        firebase_uid: firebaseUid,
        full_name: name,
        email,
        phone,
        role: "DRIVER",
        status: "APPROVED"
      });

    if (error) {
      return Response.json(
        { message: error.message },
        { status: 400 }
      );
    }

    return Response.json({
      message: "Driver registered"
    });

  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 400 }
    );
  }
}
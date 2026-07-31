import { firebaseAdminAuth } from "@/lib/firebaseAdmin";
import { supabase } from "@/lib/supabase";

export async function verifyUser(request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { error: "Unauthorized" };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await firebaseAdminAuth.verifyIdToken(token);

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("firebase_uid", decodedToken.uid)
      .single();

    if (error || !user) {
      return { error: "User not found" };
    }

    return { user };

  } catch {
    return { error: "Invalid or expired token" };
  }
}

export async function verifyRole(request, allowedRoles) {

  const result = await verifyUser(request);

  if (result.error) {
    return result;
  }

  if (!allowedRoles.includes(result.user.role)) {
    return {
      error: "Forbidden",
    };
  }

  return result;
}
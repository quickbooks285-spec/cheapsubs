"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_prevState: { error: string } | null, formData: FormData) {
  const password = formData.get("password") as string;

  if (password === process.env.DASHBOARD_PASSWORD) {
    (await cookies()).set("dashboard_session", process.env.DASHBOARD_SESSION_TOKEN!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect("/dashboard");
  }

  return { error: "Invalid password" };
}

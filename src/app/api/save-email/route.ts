import { NextRequest, NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const filePath = path.join(process.cwd(), "emails.txt");
    const timestamp = new Date().toISOString();
    await appendFile(filePath, `${timestamp} - ${email}\n`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}

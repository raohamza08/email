// ✅ App Router API route (Node.js runtime for nodemailer)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name  = (searchParams.get("name")  || "Candidate").trim();
  const email = (searchParams.get("email") || "").trim();

  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const from = (process.env.EMAIL_FROM || user || "").trim();

    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS");
      return NextResponse.json(
        { ok: false, error: "Missing email credentials" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass }, // Gmail App Password or SMTP credentials
    });

    // Optional: verify SMTP connectivity (helps debugging)
    await transporter.verify();

    const subjectLine =
      `Email Received Confirmation — ${name}` +
      (email ? ` <${email}>` : "");

    const textBody =
      `${name}${email ? ` <${email}>` : ""} has confirmed receiving the offer email.`;

    await transporter.sendMail({
      from,                          // should match the authenticated mailbox
      to: "hamzabadar.euroshub@gmail.com",
      subject: subjectLine,
      text: textBody,
      ...(email ? { replyTo: email } : {}), // reply goes to candidate if supplied
    });

    // Nicer UX: redirect to your thank-you page
    return NextResponse.redirect(new URL("/thank-you", req.url));
  } catch (err: any) {
    console.error("Email send failed:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}

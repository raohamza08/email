// ✅ App Router API route (Node.js runtime required for nodemailer)
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "Candidate";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (or your SMTP pass)
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "hamzabadar.euroshub@gmail.com",
      subject: `Email Received Confirmation - ${name}`,
      text: `${name} has confirmed receiving the offer email.`,
    });

    // Option A: return JSON (simple)
    // return NextResponse.json({ ok: true, message: "Confirmation recorded." });

    // Option B: redirect to a thank-you page (nicer UX)
    return NextResponse.redirect(new URL("/thank-you", req.url));
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}

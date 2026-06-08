import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn(
        "SMTP credentials not configured. Email not sent. Form data:",
        { name, email, subject }
      );
      return NextResponse.json(
        {
          success: true,
          message:
            "Message received! (Note: Email delivery is not configured yet.)",
        },
        { status: 200 }
      );
    }

    // Configure NodeMailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const contactEmail =
      process.env.CONTACT_EMAIL || "nkanzariya40@gmail.com";

    // Send email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #a855f7); padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 20px;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">Name</p>
              <p style="color: #f1f5f9; font-size: 16px; margin: 0;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">Email</p>
              <p style="color: #f1f5f9; font-size: 16px; margin: 0;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">Subject</p>
              <p style="color: #f1f5f9; font-size: 16px; margin: 0;">${subject}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">Message</p>
              <p style="color: #f1f5f9; font-size: 16px; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send auto-reply confirmation to sender
    await transporter.sendMail({
      from: `"Nitin Kanzariya" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #a855f7); padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Thanks for reaching out! 🚀</h2>
          </div>
          <div style="padding: 32px;">
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">
              Hi ${name},<br><br>
              Thank you for getting in touch! I've received your message about "<strong>${subject}</strong>" and will get back to you within 24–48 hours.<br><br>
              In the meantime, feel free to check out my latest work on <a href="https://github.com/nitinkanzariya" style="color: #60a5fa;">GitHub</a> or connect with me on <a href="https://linkedin.com/in/nitinkanzariya" style="color: #60a5fa;">LinkedIn</a>.<br><br>
              Best regards,<br>
              <strong>Nitin Kanzariya</strong><br>
              <span style="color: #94a3b8;">Full Stack Developer & AI Platform Engineer</span>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

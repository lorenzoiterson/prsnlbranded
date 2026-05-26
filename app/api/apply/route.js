import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    const {
      firstName = "",
      lastName = "",
      email = "",
      instagram = "",
      linkedin = "",
      goal = "",
      role = "",
      revenue = "",
      industry = "",
      plan = "",
    } = data;

    const subject = `New PRSNLBRANDED application: ${firstName} ${lastName} (${plan})`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f7f6f2; color: #0a0a0a;">
        <div style="border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 16px; margin-bottom: 24px;">
          <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #999; margin-bottom: 8px;">PRSNLBRANDED</div>
          <h1 style="font-size: 22px; font-weight: 600; letter-spacing: -0.02em; margin: 0;">New application received</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #888; width: 130px;">Plan</td><td style="padding: 8px 0; font-weight: 500;">${plan}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Instagram</td><td style="padding: 8px 0;">${instagram || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">LinkedIn</td><td style="padding: 8px 0;">${linkedin || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Goal</td><td style="padding: 8px 0;">${goal || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Role</td><td style="padding: 8px 0;">${role || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Revenue</td><td style="padding: 8px 0;">${revenue || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Industry</td><td style="padding: 8px 0;">${industry || "—"}</td></tr>
        </table>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.1); font-size: 11px; color: #999;">
          Reply within 48 hours.
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "PRSNLBRANDED <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

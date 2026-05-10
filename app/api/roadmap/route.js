import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await req.json();
    const { name, email, audience, blocker, handle } = data;

    if (!email || !name) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const notifyEmail = process.env.NOTIFICATION_EMAIL || "lorenzo@itersonmedia.com";

    // Send notification to Lorenzo
    await resend.emails.send({
      from: "PRSNLBRANDED <onboarding@resend.dev>",
      to: notifyEmail,
      subject: `New roadmap request: ${name} (${audience})`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0a0a0a;">
          <h2 style="font-weight:600;letter-spacing:-0.02em;">New roadmap request</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;color:#666;">Name</td><td style="padding:8px 0;font-weight:500;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;font-weight:500;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Handle</td><td style="padding:8px 0;font-weight:500;">${handle}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Audience size</td><td style="padding:8px 0;font-weight:500;">${audience}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Biggest blocker</td><td style="padding:8px 0;font-weight:500;">${blocker}</td></tr>
          </table>
          <p style="margin-top:24px;color:#666;font-size:13px;">Add to CRM and trigger email sequence.</p>
        </div>
      `,
    });

    // Send playbook to user
    await resend.emails.send({
      from: "PRSNLBRANDED <onboarding@resend.dev>",
      to: email,
      subject: `${name}, your personal brand roadmap is here`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#0a0a0a;background:#f5f2ec;">
          <h2 style="font-weight:600;letter-spacing:-0.02em;font-size:24px;margin:0 0 16px;">Hey ${name},</h2>
          <p style="font-size:15px;line-height:1.6;color:#333;margin:0 0 16px;">Thanks for grabbing the playbook. Here's what's inside:</p>
          <ul style="font-size:14px;color:#333;line-height:1.8;padding-left:20px;">
            <li>The 6-step system to build a personal brand</li>
            <li>Frameworks for positioning, content, and growth</li>
            <li>Real examples from our client work</li>
            <li>Templates you can use immediately</li>
          </ul>
          <div style="margin:32px 0;text-align:center;">
            <a href="https://prsnlbranded.com/playbook.pdf" style="background:#0a0a0a;color:#f5f2ec;padding:14px 28px;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:0.04em;">DOWNLOAD THE PLAYBOOK</a>
          </div>
          <p style="font-size:14px;line-height:1.6;color:#333;margin:24px 0 0;">Based on what you shared (audience: ${audience}, biggest blocker: ${blocker}), I'll personally review your handle ${handle} and reach out within 48h with a custom note on what I'd focus on first.</p>
          <p style="font-size:14px;line-height:1.6;color:#333;margin:16px 0 0;">If you want to skip ahead and book a 30-min strategy call, here's my calendar:</p>
          <p style="margin:16px 0;"><a href="https://calendly.com/lorenzoiterson/30min" style="color:#0a0a0a;font-weight:500;">→ Book a call</a></p>
          <p style="font-size:14px;line-height:1.6;color:#333;margin:24px 0 0;">Talk soon,<br/>Lorenzo Iterson<br/><span style="color:#888;">Founder, PRSNLBRANDED</span></p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("roadmap error:", e);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}

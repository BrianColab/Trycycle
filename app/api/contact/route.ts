import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, message } = body as { name: string; email: string; message: string };

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.APPOINTMENT_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@trycycle.ca";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — email skipped");
    return NextResponse.json({ ok: true, emailSkipped: true });
  }

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
    <hr/>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Contact form: ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: true, emailSkipped: true });
  }

  return NextResponse.json({ ok: true, emailSent: true });
}

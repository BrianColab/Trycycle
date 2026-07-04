import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, phone, area, links, message } = body as {
    name: string;
    email: string;
    phone?: string;
    area?: string;
    links?: string;
    message: string;
  };

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.APPOINTMENT_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail = process.env.CAREERS_TO_EMAIL ?? "careers@trycycle.ca";

  if (!apiKey) {
    console.warn("[apply] RESEND_API_KEY not set — email skipped");
    return NextResponse.json({ ok: true, emailSkipped: true });
  }

  const html = `
    <h2>New General Application</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
    ${area ? `<p><strong>Area of interest:</strong> ${area}</p>` : ""}
    ${links ? `<p><strong>Portfolio / LinkedIn:</strong> ${links}</p>` : ""}
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
      subject: `General application: ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[apply] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: true, emailSkipped: true });
  }

  return NextResponse.json({ ok: true, emailSent: true });
}

import { Resend } from "resend";
import { formatTimeSlot } from "@/lib/booking-data";

const TIMEZONE = "America/Toronto";

export interface AppointmentEmailData {
  id: string;
  staffName: string;
  staffEmail: string;
  staffRole: string;
  date: string;       // "2026-06-15"
  time: string;       // "09:00"
  name: string;
  email: string;
  organization: string;
  phone?: string | null;
  reason: string;
  message?: string | null;
}

/** Format "2026-06-15" as "Monday, June 15, 2026" in Toronto time. */
function formatDate(dateStr: string): string {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-CA", {
    timeZone: TIMEZONE,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── HTML email shell ── */
function emailShell(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#0f1923;font-family:Inter,ui-sans-serif,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1923;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#152030;border-radius:12px 12px 0 0;padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
            <p style="margin:0;font-size:20px;font-weight:700;color:#e8f0f5;letter-spacing:-0.3px;">TryCycle</p>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(232,240,245,0.55);">${title}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#152030;padding:32px;border-radius:0 0 12px 12px;">
            ${body}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 0 0;text-align:center;">
            <p style="margin:0;font-size:12px;color:rgba(232,240,245,0.35);">
              TryCycle &mdash; Digital Mental Health Solutions<br/>
              This message was sent from a booking form. Do not reply directly to this email.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── Shared appointment summary table ── */
function summaryTable(d: AppointmentEmailData): string {
  const rows = [
    ["Staff / Demo Contact", d.staffName],
    ["Role", d.staffRole],
    ["Date", formatDate(d.date)],
    ["Time", `${formatTimeSlot(d.time)} ET`],
    ["Reason", d.reason],
    ["Organization", d.organization],
    ...(d.phone ? [["Phone", d.phone]] : []),
    ...(d.message ? [["Message", d.message]] : []),
  ] as [string, string][];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-size:13px;color:rgba(232,240,245,0.55);white-space:nowrap;vertical-align:top;">${label}</td>
        <td style="padding:8px 12px;font-size:13px;color:#e8f0f5;vertical-align:top;">${value}</td>
      </tr>`
    )
    .join("");

  return `
    <table width="100%" cellpadding="0" cellspacing="0"
      style="border:1px solid rgba(255,255,255,0.10);border-radius:8px;margin:20px 0;overflow:hidden;">
      ${rowsHtml}
    </table>`;
}

/* ── User confirmation email ── */
export function buildConfirmationEmail(d: AppointmentEmailData): { subject: string; html: string; text: string } {
  const subject = `Appointment Confirmed — ${formatDate(d.date)} at ${formatTimeSlot(d.time)} ET`;

  const body = `
    <p style="margin:0 0 20px;font-size:15px;color:#e8f0f5;line-height:1.6;">
      Hi ${d.name},<br/><br/>
      Your appointment request has been received. Here is a summary:
    </p>

    ${summaryTable(d)}

    <p style="margin:20px 0 0;font-size:13px;color:rgba(232,240,245,0.60);line-height:1.6;">
      If you need to cancel or reschedule, please reply to the confirmation you received
      at least 24 hours before your appointment.
    </p>

    <div style="margin:28px 0 0;padding:16px;background:rgba(255,165,0,0.07);border:1px solid rgba(255,165,0,0.20);border-radius:8px;">
      <p style="margin:0;font-size:12px;color:rgba(232,240,245,0.55);line-height:1.6;">
        <strong style="color:rgba(232,240,245,0.80);">Important:</strong>
        This appointment is for demos, partnerships, media, program inquiries, and general meetings only.
        It is not for emergency, crisis, counselling, treatment, clinical support, or urgent help of any kind.
        If you or someone you know is in crisis, please contact your local emergency services or a crisis helpline.
      </p>
    </div>`;

  const text = `Hi ${d.name},

Your appointment request has been received.

Staff / Demo Contact: ${d.staffName} (${d.staffRole})
Date: ${formatDate(d.date)}
Time: ${formatTimeSlot(d.time)} ET
Reason: ${d.reason}
Organization: ${d.organization}
${d.message ? `Message: ${d.message}\n` : ""}
If you need to cancel or reschedule, please reply to this email at least 24 hours before your appointment.

Important: This appointment is for demos, partnerships, media, program inquiries, and general meetings only.
It is NOT for emergency, crisis, counselling, treatment, clinical support, or urgent help.

TryCycle — Digital Mental Health Solutions`;

  return { subject, html: emailShell(subject, body), text };
}

/* ── Staff notification email ── */
export function buildStaffNotificationEmail(d: AppointmentEmailData): { subject: string; html: string; text: string } {
  const subject = `New Appointment Request — ${d.name} on ${formatDate(d.date)}`;

  const body = `
    <p style="margin:0 0 16px;font-size:15px;color:#e8f0f5;line-height:1.6;">
      You have a new appointment request.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0"
      style="border:1px solid rgba(255,255,255,0.10);border-radius:8px;margin:0 0 20px;overflow:hidden;">
      ${[
        ["Appointment ID", d.id],
        ["Requester Name", d.name],
        ["Requester Email", d.email],
        ...(d.phone ? [["Phone", d.phone]] : []),
        ["Organization", d.organization],
        ["Reason", d.reason],
        ["Date", formatDate(d.date)],
        ["Time", `${formatTimeSlot(d.time)} ET`],
        ...(d.message ? [["Message", d.message]] : []),
      ]
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-size:13px;color:rgba(232,240,245,0.55);white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:8px 12px;font-size:13px;color:#e8f0f5;vertical-align:top;">${value}</td>
        </tr>`
        )
        .join("")}
    </table>

    <div style="padding:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;">
      <p style="margin:0;font-size:12px;color:rgba(232,240,245,0.45);line-height:1.6;">
        <strong style="color:rgba(232,240,245,0.65);">Note:</strong>
        Staff names shown in this system are demo/placeholder data.
        Replace with real team members before going live.
      </p>
    </div>`;

  const text = `New Appointment Request

Appointment ID: ${d.id}
Requester: ${d.name} <${d.email}>
${d.phone ? `Phone: ${d.phone}\n` : ""}Organization: ${d.organization}
Reason: ${d.reason}
Date: ${formatDate(d.date)}
Time: ${formatTimeSlot(d.time)} ET
${d.message ? `Message: ${d.message}\n` : ""}
Note: Staff shown in this system are demo/placeholder data.

TryCycle — Digital Mental Health Solutions`;

  return { subject, html: emailShell(subject, body), text };
}

/* ── Send helper ── */
export interface SendEmailResult {
  sent: boolean;
  skipped?: boolean;
  error?: string;
}

export async function sendAppointmentEmails(
  data: AppointmentEmailData
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.APPOINTMENT_FROM_EMAIL;
  const adminEmail = process.env.APPOINTMENT_ADMIN_FALLBACK_EMAIL;

  if (!apiKey || !fromEmail) {
    console.warn(
      "[email] RESEND_API_KEY or APPOINTMENT_FROM_EMAIL is not set — emails skipped."
    );
    return { sent: false, skipped: true };
  }

  const resend = new Resend(apiKey);

  const confirmation = buildConfirmationEmail(data);
  const notification = buildStaffNotificationEmail(data);

  const sends: Promise<unknown>[] = [
    resend.emails.send({
      from: fromEmail,
      to: [data.email],
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    }),
    resend.emails.send({
      from: fromEmail,
      to: [data.staffEmail],
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
    }),
  ];

  if (adminEmail) {
    sends.push(
      resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        subject: `[Admin Copy] ${notification.subject}`,
        html: notification.html,
        text: notification.text,
      })
    );
  }

  try {
    await Promise.all(sends);
    return { sent: true };
  } catch (err) {
    console.error("[email] Resend error:", err);
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }
}

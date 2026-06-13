import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendAppointmentEmails } from "@/lib/email";
import { STAFF_MEMBERS, TIME_SLOTS, isWeekday } from "@/lib/booking-data";

interface BookingPayload {
  staffId: string;
  date: string;       // YYYY-MM-DD
  timeSlot: string;   // "09:00" (24-hour)
  name: string;
  email: string;
  organization: string;
  phone?: string | null;
  reason: string;
  message?: string | null;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  let body: BookingPayload;
  try {
    body = await req.json() as BookingPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { staffId, date, timeSlot, name, email, organization, reason, honeypot } = body;

  // ── Anti-spam honeypot ──────────────────────────────────────────────────────
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // ── Validate staff ──────────────────────────────────────────────────────────
  const staff = STAFF_MEMBERS.find((s) => s.id === staffId);
  if (!staff) {
    return NextResponse.json({ ok: false, error: "Invalid staff member." }, { status: 400 });
  }

  // ── Validate date ───────────────────────────────────────────────────────────
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ ok: false, error: "Invalid date." }, { status: 400 });
  }

  const parsedDate = new Date(date + "T12:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (parsedDate < today) {
    return NextResponse.json({ ok: false, error: "Cannot book a past date." }, { status: 400 });
  }
  if (!isWeekday(parsedDate)) {
    return NextResponse.json({ ok: false, error: "Appointments are available on weekdays only." }, { status: 400 });
  }

  // ── Validate time slot ──────────────────────────────────────────────────────
  if (!(TIME_SLOTS as readonly string[]).includes(timeSlot)) {
    return NextResponse.json({ ok: false, error: "Invalid time slot." }, { status: 400 });
  }

  // ── Validate required fields ────────────────────────────────────────────────
  if (!name?.trim()) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "A valid email address is required." }, { status: 400 });
  }
  if (!organization?.trim()) {
    return NextResponse.json({ ok: false, error: "Organization is required." }, { status: 400 });
  }
  if (!reason?.trim()) {
    return NextResponse.json({ ok: false, error: "Reason for appointment is required." }, { status: 400 });
  }

  // ── Save to DB (atomic duplicate prevention via unique constraint) ───────────
  let appointment: { id: string; staffName: string; date: string; time: string };
  try {
    appointment = await prisma.appointment.create({
      data: {
        staffId: staff.id,
        staffName: staff.name,
        staffEmail: staff.email,
        staffRole: staff.role,
        date,
        time: timeSlot,
        timezone: "America/Toronto",
        name: name.trim(),
        email: email.trim().toLowerCase(),
        organization: organization.trim(),
        phone: body.phone?.trim() || null,
        reason: reason.trim(),
        message: body.message?.trim() || null,
        status: "PENDING",
      },
      select: { id: true, staffName: true, date: true, time: true },
    });
  } catch (err: unknown) {
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { ok: false, error: "That time slot was just booked by someone else. Please choose a different time." },
        { status: 409 }
      );
    }
    console.error("[book-appointment] DB error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our end. Please try again in a moment." },
      { status: 500 }
    );
  }

  // ── Send emails (after DB save — booking is safe regardless of email outcome) ─
  const emailResult = await sendAppointmentEmails({
    id: appointment.id,
    staffName: staff.name,
    staffEmail: staff.email,
    staffRole: staff.role,
    date,
    time: timeSlot,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    organization: organization.trim(),
    phone: body.phone?.trim() || null,
    reason: reason.trim(),
    message: body.message?.trim() || null,
  });

  return NextResponse.json(
    {
      ok: true,
      booking: {
        id: appointment.id,
        staffName: appointment.staffName,
        date: appointment.date,
        time: appointment.time,
      },
      emailSent: emailResult.sent,
      emailSkipped: emailResult.skipped ?? false,
    },
    { status: 201 }
  );
}

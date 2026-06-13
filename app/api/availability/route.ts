import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { STAFF_MEMBERS } from "@/lib/booking-data";

/**
 * GET /api/availability?staffId=s1&date=2026-06-20
 *
 * Returns the list of time slots already booked for the given
 * staff member on the given date.
 *
 * Response: { bookedSlots: string[] }
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const staffId = searchParams.get("staffId");
  const date = searchParams.get("date");

  if (!staffId || !date) {
    return NextResponse.json(
      { error: "staffId and date are required." },
      { status: 400 }
    );
  }

  // Validate staffId is a known staff member
  const staff = STAFF_MEMBERS.find((s) => s.id === staffId);
  if (!staff) {
    return NextResponse.json({ error: "Unknown staff member." }, { status: 400 });
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date format." }, { status: 400 });
  }

  try {
    const booked = await prisma.appointment.findMany({
      where: {
        staffId,
        date,
        status: { not: "CANCELLED" },
      },
      select: { time: true },
    });

    const bookedSlots = booked.map((a) => a.time);

    return NextResponse.json({ bookedSlots }, { status: 200 });
  } catch (err) {
    console.error("[availability] DB error:", err);
    // Fail open — let the server catch duplicates at booking time
    return NextResponse.json({ bookedSlots: [] }, { status: 200 });
  }
}

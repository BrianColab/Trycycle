export interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  description: string;
}

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: "s1",
    name: "John Demo 1",
    role: "Partnerships",
    email: "john1@example.com",
    description: "Organizational partnerships, funders, and government relations.",
  },
  {
    id: "s2",
    name: "John Demo 2",
    role: "Product Demo",
    email: "john2@example.com",
    description: "Live demonstrations of our solutions and platform walkthroughs.",
  },
  {
    id: "s3",
    name: "John Demo 3",
    role: "Technical Questions",
    email: "john3@example.com",
    description: "Integration, implementation, and technical platform questions.",
  },
  {
    id: "s4",
    name: "Sarah Demo 1",
    role: "Community Programs",
    email: "sarah1@example.com",
    description: "Indigenous health, youth programs, and community wellness initiatives.",
  },
  {
    id: "s5",
    name: "Michael Demo 1",
    role: "Media / General Inquiry",
    email: "michael1@example.com",
    description: "Media requests, press inquiries, and general organizational questions.",
  },
];

export const APPOINTMENT_REASONS = [
  "Demos",
  "Partnerships",
  "Media",
  "Program Inquiries",
  "General Meetings",
] as const;

export type AppointmentReason = (typeof APPOINTMENT_REASONS)[number];

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

/** Convert "09:00" → "9:00 AM", "13:00" → "1:00 PM" for display only. */
export function formatTimeSlot(slot: string): string {
  const [hStr, mStr] = slot.split(":");
  const h = parseInt(hStr, 10);
  const period = h < 12 ? "AM" : "PM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${mStr} ${period}`;
}

/** Returns true if the given Date is a weekday (Mon–Fri). */
export function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

/** Returns true if the given Date is strictly in the future (past today). */
export function isFutureDate(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

/** Format a Date as YYYY-MM-DD in local time. */
export function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

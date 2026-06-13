import type { Metadata } from "next";
import { BookingClient } from "./BookingClient";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a meeting with the TryCycle team for demos, partnerships, media, program inquiries, and general meetings.",
};

export default function BookAppointmentPage() {
  return <BookingClient />;
}

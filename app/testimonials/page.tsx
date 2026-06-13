import type { Metadata } from "next";
import { TestimonialsClient } from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from the communities, healthcare organizations, veterans, and partners who work with TryCycle.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}

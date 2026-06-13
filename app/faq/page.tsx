import type { Metadata } from "next";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to frequently asked questions about TryCycle, our solutions, partnerships, privacy, appointments, and support.",
};

export default function FaqPage() {
  return <FaqClient />;
}

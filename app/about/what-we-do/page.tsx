import type { Metadata } from "next";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "What We Do",
  description: "TryCycle builds culturally responsive digital mental health tools — designed with the communities they serve, supporting Indigenous peoples, veterans, youth, and healthcare organizations.",
};

const PILLARS = [
  {
    title: "We Build Culturally Responsive Tools",
    description:
      "Every solution TryCycle develops is shaped by the communities it serves — not designed externally and applied uniformly. Cultural safety, language, and lived experience inform every design decision.",
  },
  {
    title: "We Partner, Not Just Deliver",
    description:
      "Our relationships are collaborative from the start. We work alongside community organizations, health authorities, and frontline providers — listening first, building second.",
  },
  {
    title: "We Focus on Prevention and Early Intervention",
    description:
      "TryCycle solutions are designed to reach people before crisis — building protective factors, strengthening connections, and supporting wellbeing before it becomes an emergency.",
  },
  {
    title: "We Measure What Matters",
    description:
      "Outcomes matter more than outputs. Our platform generates actionable insight for care teams and organizations — not just usage data, but indicators of real impact.",
  },
] as const;

const POPULATIONS = [
  "Indigenous communities (First Nations, Métis, Inuit)",
  "Veterans and active service members",
  "Children, youth, and families",
  "People navigating transitional care",
  "Rural and remote communities",
  "Healthcare organizations and care teams",
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="What We Do"
        description="TryCycle builds culturally responsive digital mental health tools — designed with the communities they serve, not just for them."
      />

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="space-y-5 mb-16">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 flex gap-5"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[0.72rem] font-bold shrink-0 mt-0.5"
                  style={{
                    background: "oklch(0.72 0.19 45 / 0.12)",
                    color: "var(--color-teal)",
                    border: "1px solid oklch(0.72 0.19 45 / 0.20)",
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    className="text-[0.92rem] font-semibold mb-1.5"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Who We Serve</SectionEyebrow>
              <ul className="space-y-2.5">
                {POPULATIONS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      style={{ color: "var(--color-teal)" }}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[0.85rem] leading-snug" style={{ color: "var(--color-muted)" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
            >
              <p
                className="text-[0.92rem] font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Want to learn more?
              </p>
              <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                Book a meeting with our team to explore how TryCycle can support your organization
                or community.
              </p>
              <Button href="/book-appointment" variant="primary" size="sm">
                Book an Appointment
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

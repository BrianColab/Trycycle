import type { Metadata } from "next";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Buddy's Quest",
  description: "Buddy's Quest is TryCycle's digital mental health companion for children and youth — age-appropriate tools supporting early intervention, family involvement, and protective wellbeing.",
};

const FEATURES = [
  {
    title: "Age-Appropriate Tools",
    description:
      "Interactive, engaging content built for young people ages 8–18 — accessible, safe, and informed by developmental research.",
    iconPath:
      "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  },
  {
    title: "Family Involvement",
    description:
      "Caregivers are included in the journey. A family dashboard keeps parents and guardians informed and able to support their child.",
    iconPath:
      "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Early Intervention Focus",
    description:
      "Reaching young people before challenges escalate. Buddy's Quest supports protective factors and healthy habits at a critical stage.",
    iconPath: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
] as const;

const PARTNERS = [
  "Schools and school boards",
  "Pediatric mental health programs",
  "Children's aid and family services organizations",
  "Youth outreach and prevention programs",
  "Community health centres",
  "Pediatric hospital departments",
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Youth & Family"
        title="Buddy's Quest"
        description="A digital companion supporting children, youth, and families navigating mental health challenges — with engaging, age-appropriate tools built for early intervention."
      />

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "oklch(0.65 0.12 185 / 0.12)",
                    border: "1px solid oklch(0.65 0.12 185 / 0.20)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-teal)" }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.iconPath} />
                  </svg>
                </div>
                <h3
                  className="text-[0.92rem] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {f.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionEyebrow className="mb-5 block">Who It Serves</SectionEyebrow>
              <ul className="space-y-3">
                {PARTNERS.map((p) => (
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
                className="text-[0.95rem] font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Interested in Buddy&apos;s Quest?
              </p>
              <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                Connect with our team to learn how Buddy&apos;s Quest can support your program,
                school, or community.
              </p>
              <Button href="/book-appointment" variant="primary" size="sm">
                Book a Demo
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

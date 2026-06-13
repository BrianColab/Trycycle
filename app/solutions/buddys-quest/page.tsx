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
  },
  {
    title: "Family Involvement",
    description:
      "Caregivers are included in the journey. A family dashboard keeps parents and guardians informed and able to support their child.",
  },
  {
    title: "Early Intervention Focus",
    description:
      "Reaching young people before challenges escalate. Buddy's Quest supports protective factors and healthy habits at a critical stage.",
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
        className="py-16 lg:py-20"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ background: "var(--color-teal)" }}
                  aria-hidden="true"
                />
                <h3
                  className="text-[0.9rem] font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "var(--color-ivory)",
                  }}
                >
                  {f.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Who it serves + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Who It Serves</SectionEyebrow>
              <ul className="space-y-2.5">
                {PARTNERS.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--color-teal)" }}
                      aria-hidden="true"
                    />
                    <span className="text-[0.85rem]" style={{ color: "var(--color-muted)" }}>{p}</span>
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
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  color: "var(--color-ivory)",
                }}
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

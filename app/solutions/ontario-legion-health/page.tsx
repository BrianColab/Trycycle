import type { Metadata } from "next";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ontario Legion Health",
  description: "Ontario Legion Health is TryCycle's purpose-built digital wellness platform for veterans and military families — culturally competent, peer-supported, and family-inclusive.",
};

const FEATURES = [
  {
    title: "Military Culture Competence",
    description:
      "Built by people who understand service, sacrifice, and transition. No explaining required — the platform meets veterans where they are.",
  },
  {
    title: "Peer Support Integration",
    description:
      "Veteran-to-veteran connection and shared experience — because some things are best understood by those who have been there.",
  },
  {
    title: "Family Tools",
    description:
      "Supporting the families who serve alongside. Ontario Legion Health recognizes that military wellbeing extends to the whole family unit.",
  },
] as const;

const PARTNERS = [
  "Royal Canadian Legion branches",
  "Veterans Affairs Canada partner programs",
  "Military transition and reintegration services",
  "Canadian Armed Forces support programs",
  "Veterans mental health clinics",
  "Military family resource centres",
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Veterans"
        title="Ontario Legion Health"
        description="Purpose-built digital wellness tools for veterans and their families — designed with military culture competence and a deep respect for service."
      />

      <section
        className="py-16 lg:py-20"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ background: "oklch(0.62 0.10 30)" }}
                  aria-hidden="true"
                />
                <h3
                  className="text-[0.9rem] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {f.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Who It Serves</SectionEyebrow>
              <ul className="space-y-2.5">
                {PARTNERS.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-teal)" }} aria-hidden="true" />
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
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Interested in Ontario Legion Health?
              </p>
              <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                Connect with our team to explore how Ontario Legion Health can support veterans
                and military families in your organization.
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

import type { Metadata } from "next";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "TetherAll",
  description: "TetherAll bridges individuals and their support networks — coordinated check-ins, network mapping, and shared progress so no one faces mental health challenges alone.",
};

const FEATURES = [
  {
    title: "Support Network Mapping",
    description:
      "Visualize and strengthen the relationships that matter most — family, peers, clinicians, and community connections in one place.",
  },
  {
    title: "Coordinated Check-Ins",
    description:
      "Simple, regular connection points between individuals and their support network — keeping everyone aligned without adding burden.",
  },
  {
    title: "Shared Progress",
    description:
      "Care teams, families, and support persons stay informed and coordinated, reducing gaps and improving continuity of care.",
  },
] as const;

const PARTNERS = [
  "Mental health care teams and clinics",
  "Hospital discharge and transitional care programs",
  "Peer support organizations",
  "Community mental health centres",
  "Recovery and rehabilitation programs",
  "Family support services",
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Connection & Support"
        title="TetherAll"
        description="A platform that bridges individuals and their support networks — ensuring no one navigates mental health challenges alone."
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
                  style={{ background: "oklch(0.65 0.10 215)" }}
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
                Interested in TetherAll?
              </p>
              <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                Learn how TetherAll can strengthen coordination between individuals, families,
                and care teams in your program.
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

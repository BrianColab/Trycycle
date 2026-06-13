import type { Metadata } from "next";
import { PageHero, SectionEyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Our Story" };

const MILESTONES = [
  {
    year: "2018",
    heading: "The Idea Takes Shape",
    body: "TryCycle began with a simple observation: the communities most in need of mental health support were being underserved by solutions designed without them in mind. A small team of health technology advocates and community leaders started asking a different question — what if communities built their own tools?",
  },
  {
    year: "2020",
    heading: "First Partnerships",
    body: "Through early relationships with Indigenous health organizations and veterans support networks, TryCycle began co-developing its first digital wellness tools. These weren't products sold to communities — they were built alongside them, shaped by the people who would use them.",
  },
  {
    year: "2022",
    heading: "Platform Expansion",
    body: "The TryCycle platform expanded to include Buddy's Quest for youth and families, and TetherAll for transitional care coordination. Each solution grew from a specific community need — informed by frontline workers, caregivers, and the individuals seeking support.",
  },
  {
    year: "Today",
    heading: "Growing Reach, Same Roots",
    body: "TryCycle now supports a growing number of organizations across Canada. The team has grown, the solutions have deepened, and the partnerships have multiplied — but the founding principle hasn't changed: community first, technology second.",
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="TryCycle was founded on the belief that the communities most underserved by the mental health system deserve tools built with them — not for them."
      />

      <section
        className="py-16 lg:py-20"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-3xl px-6">

          <div className="relative">
            <div
              className="absolute left-[3.25rem] top-0 bottom-0 w-px"
              style={{ background: "var(--color-border)" }}
              aria-hidden="true"
            />

            <div className="space-y-10">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0 w-[6.5rem]">
                    <div
                      className="text-[0.75rem] font-bold tracking-wide px-3 py-1 rounded-full relative z-10"
                      style={{
                        background: "oklch(0.65 0.12 185 / 0.12)",
                        color: "var(--color-teal)",
                        border: "1px solid oklch(0.65 0.12 185 / 0.22)",
                      }}
                    >
                      {m.year}
                    </div>
                  </div>
                  <div
                    className="rounded-2xl p-6 flex-1 -mt-1"
                    style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
                  >
                    <h3
                      className="text-[0.92rem] font-semibold mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                    >
                      {m.heading}
                    </h3>
                    <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 pt-10" style={{ borderTop: "1px solid var(--color-border)" }}>
            <SectionEyebrow className="mb-4 block">Across Canada</SectionEyebrow>
            <p className="text-[0.85rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
              From urban centres to remote communities, TryCycle solutions are deployed across a growing number of
              provinces and territories. Every deployment is a relationship — one built on trust, accountability, and
              a shared commitment to the people who need support most.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

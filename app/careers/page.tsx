import type { Metadata } from "next";
import { PageHero, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the TryCycle team. We build culturally responsive digital health tools with and for the communities they serve.",
};

const VALUES = [
  {
    label: "Community-First",
    description: "We build with communities, not for them. Genuine partnership shapes everything we do.",
  },
  {
    label: "Culturally Responsive",
    description: "Cultural safety, respect, and humility guide every decision we make.",
  },
  {
    label: "Evidence-Informed",
    description: "We hold rigour and real-world impact to the same standard.",
  },
  {
    label: "Equitable by Design",
    description: "Access, inclusion, and representation are built into our work — not added after.",
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the"
        titleAccent="TryCycle Team"
        description="We're building something meaningful. If our mission resonates, we'd love to meet you."
      />

      <section className="pb-20 lg:pb-28" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-4xl px-6">

          {/* Current openings */}
          <div
            className="rounded-2xl p-10 mb-12 text-center"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-[0.68rem] font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-teal)" }}
            >
              Current Openings
            </p>
            <p
              className="text-xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "var(--color-ivory)",
              }}
            >
              No positions listed at this time
            </p>
            <p className="text-[0.85rem] mb-6 max-w-sm mx-auto" style={{ color: "var(--color-muted)" }}>
              We&apos;re growing. Check back soon — or send us a general application
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button href="mailto:careers@trycycle.ca" variant="ghost" size="md">
              Send a General Application
            </Button>
          </div>

          {/* Values */}
          <p
            className="text-[0.68rem] font-semibold tracking-widest uppercase mb-5"
            style={{ color: "var(--color-teal)" }}
          >
            What We Value
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="rounded-xl p-5 flex gap-3"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]"
                  style={{ background: "var(--color-teal)" }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-[0.85rem] font-semibold mb-0.5"
                    style={{
                      fontFamily: "var(--font-space-grotesk, sans-serif)",
                      color: "var(--color-ivory)",
                    }}
                  >
                    {v.label}
                  </p>
                  <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

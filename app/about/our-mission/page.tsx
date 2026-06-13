import type { Metadata } from "next";
import { PageHero, SectionEyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "TryCycle's mission: to build culturally responsive digital mental health tools that reach underserved communities before crisis — grounded in six core values.",
};

const VALUES = [
  {
    title: "Community Sovereignty",
    description:
      "Communities are the experts on their own needs. We build tools that reinforce — not replace — community leadership and decision-making authority.",
  },
  {
    title: "Cultural Humility",
    description:
      "We listen before we build. Every TryCycle solution is shaped by the cultural knowledge, lived experience, and wisdom of the communities it serves.",
  },
  {
    title: "Equity by Design",
    description:
      "Reaching underserved populations isn't a secondary goal — it's the foundation. We design for those most likely to be left out of mainstream solutions.",
  },
  {
    title: "Radical Transparency",
    description:
      "We are honest about what our tools can and cannot do. We do not overpromise. We do not substitute technology for human care.",
  },
  {
    title: "Accountability to Impact",
    description:
      "We measure outcomes, not just outputs. If a solution isn't working for the people it was built for, we change it.",
  },
  {
    title: "Prevention First",
    description:
      "The best intervention is the one that arrives early. Our work is oriented toward building protective factors before crisis takes hold.",
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Mission"
        description="To build culturally responsive digital mental health tools that reach the communities most underserved by the existing system — before crisis, not after."
      />

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">

          <div
            className="rounded-2xl p-8 mb-14 text-center"
            style={{
              background: "oklch(0.65 0.12 185 / 0.07)",
              border: "1px solid oklch(0.65 0.12 185 / 0.18)",
            }}
          >
            <p
              className="text-[1.05rem] leading-relaxed font-medium"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              &ldquo;Mental wellness is not a privilege. It is a right — and the tools to support it
              should be built by and for the communities that need them most.&rdquo;
            </p>
          </div>

          <SectionEyebrow className="mb-6 block">Our Values</SectionEyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
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
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

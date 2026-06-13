import type { Metadata } from "next";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = { title: "Talking Stick" };

const FEATURES = [
  {
    title: "Cultural Safety",
    description:
      "Designed with Indigenous frameworks, knowledge keepers, and community guidance at every step — never imposed from the outside.",
  },
  {
    title: "Community Ownership",
    description:
      "Communities lead. TryCycle provides the technology and support. Decision-making authority stays where it belongs.",
  },
  {
    title: "Holistic Wellness",
    description:
      "Integrating mental, spiritual, emotional, and physical wellbeing — grounded in the understanding that health is whole.",
  },
] as const;

const PARTNERS = [
  "First Nations health authorities",
  "Métis Nation organizations",
  "Inuit wellness programs",
  "Indigenous friendship centres",
  "Urban Indigenous service organizations",
  "Community-controlled health services",
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Indigenous Communities"
        title="Talking Stick"
        description="Culturally grounded digital wellness tools built with and for Indigenous communities — honouring tradition, supporting healing, and respecting community sovereignty."
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
                  style={{ background: "oklch(0.65 0.10 145)" }}
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
                Interested in Talking Stick?
              </p>
              <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                We partner with communities on their own terms. Reach out to start a conversation
                about what Talking Stick could look like for your community.
              </p>
              <Button href="/book-appointment" variant="primary" size="sm">
                Start a Conversation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

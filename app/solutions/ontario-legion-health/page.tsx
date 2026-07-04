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
    iconPath:
      "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Peer Support Integration",
    description:
      "Veteran-to-veteran connection and shared experience — because some things are best understood by those who have been there.",
    iconPath:
      "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "Family Tools",
    description:
      "Supporting the families who serve alongside. Ontario Legion Health recognizes that military wellbeing extends to the whole family unit.",
    iconPath:
      "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
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

      {/* ── Video ── */}
      <section className="py-14 lg:py-18 section-light" style={{ background: "oklch(0.97 0.005 60)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <SectionEyebrow className="mb-3 block">Watch</SectionEyebrow>
            <h2
              className="text-[1.45rem] font-bold"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              See Ontario Legion Health in action
            </h2>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              paddingBottom: "56.25%",
              background: "oklch(0.12 0.04 240)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 20px 60px -12px oklch(0 0 0 / 0.25)",
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://player.vimeo.com/video/1075476038?badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Ontario Legion Health"
            />
          </div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0 0 0 / 0.07)", boxShadow: "0 2px 14px oklch(0 0 0 / 0.05)" }}
              >
                {/* Animated top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "linear-gradient(to right, oklch(0.72 0.19 45), oklch(0.80 0.16 55))" }}
                  aria-hidden="true"
                />
                {/* Watermark index */}
                <span
                  className="absolute -top-4 right-3 text-[5rem] font-bold leading-none pointer-events-none select-none"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.72 0.19 45 / 0.07)" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {/* Icon tile */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 45), oklch(0.66 0.19 36))", boxShadow: "0 8px 18px -6px oklch(0.72 0.19 45 / 0.50)" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
                    strokeWidth={1.6}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.iconPath} />
                  </svg>
                </div>
                <h3
                  className="relative text-[1rem] font-bold mb-2.5"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
                >
                  {f.title}
                </h3>
                <p className="relative text-[0.82rem] leading-[1.75]" style={{ color: "oklch(0.44 0.02 240)" }}>
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

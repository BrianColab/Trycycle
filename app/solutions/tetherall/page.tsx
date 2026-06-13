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
    iconPath:
      "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
  },
  {
    title: "Coordinated Check-Ins",
    description:
      "Simple, regular connection points between individuals and their support network — keeping everyone aligned without adding burden.",
    iconPath:
      "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
  },
  {
    title: "Shared Progress",
    description:
      "Care teams, families, and support persons stay informed and coordinated, reducing gaps and improving continuity of care.",
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
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
                    background: "oklch(0.65 0.10 215 / 0.12)",
                    border: "1px solid oklch(0.65 0.10 215 / 0.20)",
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

import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Advisory Committee" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Advisory Committee"
        description="TryCycle's Advisory Committee brings specialized knowledge in Indigenous health, clinical practice, veteran wellness, youth development, and digital ethics."
      />

      <section
        className="py-16 lg:py-20"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">

          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{
                background: "oklch(0.65 0.12 185 / 0.12)",
                border: "1px solid oklch(0.65 0.12 185 / 0.22)",
              }}
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                style={{ color: "var(--color-teal)" }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Advisory profiles coming soon
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-sm mx-auto" style={{ color: "var(--color-muted)" }}>
              Profiles for TryCycle&apos;s Advisory Committee members will be published here shortly.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "TryCycle's Board of Directors provides strategic guidance and governance across health systems, community development, law, and finance.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Board of Directors"
        description="TryCycle's Board of Directors provides strategic guidance and governance — bringing diverse expertise in health systems, community development, law, and finance."
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Board profiles coming soon
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-sm mx-auto" style={{ color: "var(--color-muted)" }}>
              Individual profiles for TryCycle&apos;s Board of Directors will be published here shortly.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

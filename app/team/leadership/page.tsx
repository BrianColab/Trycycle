import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the TryCycle leadership team — experts in digital health, community partnerships, Indigenous wellness, and social enterprise.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Leadership"
        description="The TryCycle leadership team brings together expertise in digital health, community partnerships, Indigenous wellness, and social enterprise."
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Profiles being finalized
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-sm mx-auto" style={{ color: "var(--color-muted)" }}>
              Individual bios and photos for the TryCycle leadership team are being prepared
              and will be published here shortly.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

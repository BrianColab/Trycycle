import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "TryCycle's commitment to digital accessibility and our accessibility statement.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
        description="TryCycle's commitment to building accessible digital experiences for everyone."
      />
      <section
        className="pb-20 lg:pb-28"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Accessibility statement coming soon
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
              Our full accessibility statement is being prepared and will be published here shortly.
              To report an accessibility issue, please contact{" "}
              <a
                href="mailto:info@trycycle.ca"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ color: "var(--color-teal)" }}
              >
                info@trycycle.ca
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

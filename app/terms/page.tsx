import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms / Waiver",
  description: "TryCycle's terms of use and waiver information.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms / Waiver"
        description="Terms of use and waiver information for TryCycle services and platform."
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
              Terms being finalized
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
              Our full terms and waiver document is being prepared and will be published here shortly.
              For questions in the meantime, please contact{" "}
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

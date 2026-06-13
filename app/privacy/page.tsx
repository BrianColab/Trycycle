import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "TryCycle's privacy notice — how we collect, use, and protect personal information.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Notice"
        description="How TryCycle collects, uses, and protects personal information."
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
              Privacy Notice being finalized
            </p>
            <p className="text-[0.82rem] leading-relaxed max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
              Our full privacy notice is being prepared and will be published here shortly.
              For privacy questions in the meantime, please contact{" "}
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

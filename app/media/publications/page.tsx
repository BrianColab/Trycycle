import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Publications",
  description: "Research, reports, and publications from TryCycle on digital mental health, community wellness, and our solutions.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Publications"
        description="Research, reports, white papers, and published work from TryCycle and our community partners."
      />
      <section
        className="pb-20 lg:pb-28 section-light"
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
              Publications being compiled
            </p>
            <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Our publications library is being compiled. Check back shortly for research,
              reports, and white papers from TryCycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

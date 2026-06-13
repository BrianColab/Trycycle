import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news and announcements from TryCycle — updates on our solutions, partnerships, and community impact.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="News"
        description="The latest updates, announcements, and stories from TryCycle and the communities we serve."
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
              News content being prepared
            </p>
            <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
              We are preparing our news archive. Check back shortly for announcements,
              updates, and stories from TryCycle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

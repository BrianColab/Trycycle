import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookies Notice",
  description: "TryCycle's cookies notice — how we use cookies and similar technologies on our websites.",
};

const COOKIE_TYPES = [
  {
    type: "Strictly Necessary",
    status: "Not currently used",
    statusPositive: false,
    description:
      "Our websites and applications do not currently use strictly necessary cookies. Such cookies would ordinarily be required for login and form functions.",
    examples: [],
  },
  {
    type: "Performance",
    status: "Used",
    statusPositive: true,
    description:
      "We use analytics tools to understand how visitors interact with our websites. This information helps us improve our services.",
    examples: [
      {
        name: "Clicky Analytics",
        detail:
          "Collects visit and device information. Data is NOT associated with other third parties or shared with other companies.",
      },
      {
        name: "PostHog Analytics",
        detail:
          "Tracks behavioral patterns. Data is NOT associated with other third parties.",
      },
    ],
  },
  {
    type: "Functionality",
    status: "Used",
    statusPositive: true,
    description:
      "Functionality cookies allow our websites to remember your preferences and provide enhanced, more personal features.",
    examples: [
      {
        name: "wp-wpml_current_language",
        detail: "Manages language preferences across sessions.",
      },
    ],
  },
  {
    type: "Targeting",
    status: "Not used",
    statusPositive: false,
    description:
      "We do not allow third parties to use tracking or targeting cookies on our websites.",
    examples: [],
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookies Notice"
        description="How TryCycle uses cookies and similar technologies across our websites and applications."
      />

      <section
        className="pb-20 lg:pb-28 section-light"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-3xl px-6">

          {/* Last updated */}
          <p className="text-[0.75rem] mb-8" style={{ color: "oklch(0.52 0.02 240)" }}>
            Last updated: <strong>September 2025</strong>
          </p>

          {/* Intro */}
          <div
            className="rounded-xl p-5 mb-10"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.08)" }}
          >
            <p className="text-[0.83rem] leading-[1.80]" style={{ color: "oklch(0.38 0.02 240)" }}>
              TryCycle uses cookies across its websites to collect visitor information. This notice should be read
              alongside our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "oklch(0.55 0.17 45)" }}
              >
                Privacy Notice
              </Link>{" "}
              for a complete understanding of our data practices.
            </p>
          </div>

          {/* What are cookies */}
          <h2
            className="text-[1.05rem] font-bold mb-3"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
          >
            What are cookies?
          </h2>
          <p className="text-[0.83rem] leading-[1.80] mb-4" style={{ color: "oklch(0.38 0.02 240)" }}>
            Cookies are small text files stored on your device when you visit a website. They come in two forms:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                label: "Session cookies",
                detail: "Temporary cookies that are deleted automatically when you close your browser.",
              },
              {
                label: "Permanent cookies",
                detail: "Cookies that remain on your device until you manually delete them or they expire.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.07)" }}
              >
                <p
                  className="text-[0.80rem] font-semibold mb-1.5"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.24 0.04 240)" }}
                >
                  {item.label}
                </p>
                <p className="text-[0.78rem] leading-relaxed" style={{ color: "oklch(0.46 0.02 240)" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[0.83rem] leading-[1.80] mb-10" style={{ color: "oklch(0.38 0.02 240)" }}>
            We distinguish between <strong>first-party cookies</strong> (set by TryCycle) and{" "}
            <strong>third-party cookies</strong> (set by other companies). The types we use are described below.
          </p>

          {/* Cookie types */}
          <h2
            className="text-[1.05rem] font-bold mb-6"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
          >
            Cookie types we use
          </h2>

          <div className="space-y-4 mb-12">
            {COOKIE_TYPES.map((ct) => (
              <div
                key={ct.type}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid oklch(0 0 0 / 0.08)" }}
              >
                {/* Header row */}
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ background: "oklch(0 0 0 / 0.03)", borderBottom: "1px solid oklch(0 0 0 / 0.06)" }}
                >
                  <p
                    className="text-[0.85rem] font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.20 0.04 240)" }}
                  >
                    {ct.type} Cookies
                  </p>
                  <span
                    className="text-[0.68rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded"
                    style={{
                      background: ct.statusPositive
                        ? "oklch(0.72 0.19 45 / 0.10)"
                        : "oklch(0 0 0 / 0.06)",
                      color: ct.statusPositive
                        ? "oklch(0.48 0.15 45)"
                        : "oklch(0.52 0.02 240)",
                    }}
                  >
                    {ct.status}
                  </span>
                </div>

                <div className="px-5 py-4">
                  <p className="text-[0.82rem] leading-relaxed mb-3" style={{ color: "oklch(0.38 0.02 240)" }}>
                    {ct.description}
                  </p>
                  {ct.examples.length > 0 && (
                    <div className="space-y-2">
                      {ct.examples.map((ex) => (
                        <div
                          key={ex.name}
                          className="flex gap-3 rounded-lg px-4 py-3"
                          style={{ background: "oklch(0 0 0 / 0.025)", border: "1px solid oklch(0 0 0 / 0.05)" }}
                        >
                          <div
                            className="w-1 self-stretch rounded-full shrink-0"
                            style={{ background: "oklch(0.72 0.19 45 / 0.35)" }}
                            aria-hidden="true"
                          />
                          <div>
                            <p
                              className="text-[0.78rem] font-semibold mb-0.5"
                              style={{ color: "oklch(0.28 0.04 240)" }}
                            >
                              {ex.name}
                            </p>
                            <p className="text-[0.76rem] leading-relaxed" style={{ color: "oklch(0.46 0.02 240)" }}>
                              {ex.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Managing cookies */}
          <h2
            className="text-[1.05rem] font-bold mb-3"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
          >
            Managing your cookie preferences
          </h2>
          <p className="text-[0.83rem] leading-[1.80] mb-4" style={{ color: "oklch(0.38 0.02 240)" }}>
            You can manage your cookie preferences through the Digital Advertising Alliance of Canada's opt-out
            tools, or through the cookie settings on our website.
          </p>
          <p className="text-[0.83rem] leading-[1.80] mb-10" style={{ color: "oklch(0.38 0.02 240)" }}>
            Please note that disabling certain cookies may affect the functionality of our websites and applications.
          </p>

          {/* Contact */}
          <div
            className="rounded-xl p-5 text-[0.82rem] leading-relaxed"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.08)", color: "oklch(0.38 0.02 240)" }}
          >
            <p className="font-semibold mb-1" style={{ color: "oklch(0.20 0.04 240)" }}>
              Questions about this notice?
            </p>
            <p>
              Contact our Chief Privacy Officer at{" "}
              <a
                href="mailto:privacy@trycycle.ca"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "oklch(0.55 0.17 45)" }}
              >
                privacy@trycycle.ca
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

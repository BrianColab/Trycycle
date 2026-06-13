import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security Reporting",
  description: "Report security vulnerabilities or concerns to TryCycle's security team through responsible disclosure.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Security Reporting"
        description="Found a security issue? We take all reports seriously and respond promptly."
      />
      <section
        className="pb-20 lg:pb-28"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-3xl px-6 space-y-5">

          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Report a Vulnerability
            </p>
            <p className="text-[0.82rem] leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
              If you discover a security vulnerability, privacy issue, or other concern with TryCycle&#39;s
              platform or website, please contact our security team directly. We will acknowledge your
              report promptly and keep you informed as we investigate.
            </p>
            <a
              href="mailto:security@trycycle.ca"
              className="inline-flex items-center gap-2 text-[0.85rem] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--color-teal)" }}
            >
              security@trycycle.ca
            </a>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-[0.92rem] font-semibold mb-2"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Responsible Disclosure
            </p>
            <ul className="space-y-2">
              {[
                "Please do not publicly disclose the issue before we have had a chance to address it.",
                "Do not access, modify, or delete data that does not belong to you.",
                "Do not use automated scanning tools against our production systems without prior consent.",
                "Include as much detail as possible — steps to reproduce, affected URLs, impact assessment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.82rem]" style={{ color: "var(--color-muted)" }}>
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-[5px]"
                    style={{ background: "var(--color-teal)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[0.78rem] text-center" style={{ color: "var(--color-muted)" }}>
            We appreciate the security community&#39;s help in keeping TryCycle safe.
          </p>

        </div>
      </section>
    </>
  );
}

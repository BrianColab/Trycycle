import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TryCycle for demos, partnerships, media inquiries, and general questions.",
};

const METHODS = [
  {
    tag: "Appointments & Demos",
    description:
      "To schedule a demo, partnership meeting, media call, or program inquiry — use our booking system to find the right person and time.",
    cta: { label: "Book an Appointment", href: "/book-appointment" },
    primary: true,
  },
  {
    tag: "General Inquiries",
    description:
      "For general questions about TryCycle, our platform, or our work in the community.",
    cta: { label: "info@trycycle.ca", href: "mailto:info@trycycle.ca" },
    primary: false,
  },
  {
    tag: "Media & Press",
    description:
      "Journalists and content creators can reach our communications team directly.",
    cta: { label: "media@trycycle.ca", href: "mailto:media@trycycle.ca" },
    primary: false,
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With"
        titleAccent="TryCycle"
        description="We'd love to hear from you. Use the options below to reach the right team."
      />

      <section className="pb-20 lg:pb-28" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-4xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {METHODS.map((m) => (
              <div
                key={m.tag}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: m.primary ? "oklch(0.65 0.12 185 / 0.08)" : "var(--color-card)",
                  border: m.primary
                    ? "1px solid oklch(0.65 0.12 185 / 0.28)"
                    : "1px solid var(--color-border)",
                }}
              >
                <div>
                  <p
                    className="text-[0.68rem] font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "var(--color-teal)" }}
                  >
                    {m.tag}
                  </p>
                  <p className="text-[0.83rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {m.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button href={m.cta.href} variant={m.primary ? "primary" : "ghost"} size="sm">
                    {m.cta.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Safety notice */}
          <div
            className="rounded-2xl p-5 mb-6"
            style={{
              background: "oklch(0.65 0.10 45 / 0.07)",
              border: "1px solid oklch(0.65 0.10 45 / 0.20)",
            }}
          >
            <p className="text-[0.82rem] font-semibold mb-1" style={{ color: "oklch(0.85 0.10 65)" }}>
              Not for emergency or clinical support
            </p>
            <p className="text-[0.8rem] leading-relaxed" style={{ color: "oklch(0.74 0.04 65)" }}>
              This contact page is for general inquiries, partnerships, media, and program questions only.
              If you or someone you know is in crisis, please contact your local emergency services
              or a crisis helpline immediately.
            </p>
          </div>

          <p className="text-[0.78rem] text-center" style={{ color: "var(--color-muted)" }}>
            Found a security issue?{" "}
            <Link
              href="/security"
              style={{ color: "var(--color-teal)" }}
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Report it here
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}

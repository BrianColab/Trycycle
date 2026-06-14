import type { Metadata } from "next";
import Image from "next/image";
import { SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "TetherAll",
  description: "TetherAll — a behavioural health gap-management platform that keeps people connected between counselling sessions, enabling proactive care with clinically validated assessment tools.",
};

const FEATURES = [
  {
    title: "Proactive Care",
    body: "Practitioners manage caseloads based on daily indicators rather than waiting for scheduled appointments — enabling earlier intervention when it matters most.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Light-Touch Engagement",
    body: "Client engagement is intentionally light — typically five to ten minutes per week. Brief check-in messages arrive several times per week, with responses taking just one to three minutes.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Practitioner Dashboard",
    body: "Responses are securely delivered to a private practitioner dashboard with optional alerts when elevated risk is identified — keeping clinicians informed between sessions.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  },
] as const;

const INSTRUMENTS = ["PHQ (Patient Health Questionnaire)", "BAM (Brief Addiction Monitor)", "GAD (Generalized Anxiety Disorder)", "ACE (Adverse Childhood Experiences)", "And other validated tools"];

const SERVES = [
  "Mental health care teams and clinics",
  "Hospital discharge and transitional care programs",
  "Addiction and substance use programs",
  "Peer support and recovery organizations",
  "Community mental health centres",
  "Workplace mental health programs",
];

const STATS = [
  { value: "5–10", label: "Minutes per week engagement" },
  { value: "Daily", label: "Practitioner insight, not just appointments" },
  { value: "Fewer", label: "Missed appointments & relapse events" },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-28 pb-20 section-light"
        style={{ background: "var(--color-navy)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Product image */}
            <div className="order-last lg:order-first flex justify-center">
              <div
                className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden"
                style={{
                  background: "oklch(0.18 0.04 230)",
                  border: "1px solid oklch(0.65 0.12 185 / 0.20)",
                  boxShadow: "0 24px 64px -12px oklch(0 0 0 / 0.35)",
                }}
              >
                <Image
                  src="https://trycycle.ca/wp-content/uploads/2023/08/tetherall-22.png"
                  alt="TetherAll platform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <SectionEyebrow className="mb-4 block">Our Solutions</SectionEyebrow>
              <h1
                className="font-bold leading-[1.1] mb-5"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  color: "var(--color-ivory)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Tether<span style={{ color: "var(--color-teal)" }}>All</span>
              </h1>
              <p
                className="text-[1rem] leading-[1.70] mb-8"
                style={{ color: "var(--color-muted)", maxWidth: "480px" }}
              >
                A behavioural health gap-management platform designed to keep people connected between counselling sessions — when support is often most needed. Fewer missed appointments. Fewer relapse events.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-[1.6rem] font-bold leading-none mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[0.72rem] leading-snug" style={{ color: "var(--color-muted)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/book-appointment" variant="primary" size="md">Book a Demo</Button>
                <Button href="/contact" variant="ghost" size="md">Contact Us</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="py-14 lg:py-18 section-light" style={{ background: "oklch(0.97 0.005 60)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <SectionEyebrow className="mb-3 block">Watch</SectionEyebrow>
            <h2
              className="text-[1.45rem] font-bold"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              See TetherAll in action
            </h2>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              paddingBottom: "56.25%",
              background: "oklch(0.12 0.04 240)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 20px 60px -12px oklch(0 0 0 / 0.25)",
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://player.vimeo.com/video/1040879181?badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="TetherAll"
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <SectionEyebrow className="mb-3 block">How It Works</SectionEyebrow>
            <h2
              className="text-[1.75rem] font-bold"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Bridging the gap between sessions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-7"
                style={{ background: "oklch(1 0 0)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "oklch(0.65 0.12 185 / 0.10)", border: "1px solid oklch(0.65 0.12 185 / 0.20)" }}
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: "var(--color-teal)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3
                  className="text-[0.95rem] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {f.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.75]" style={{ color: "var(--color-muted)" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinical tools ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(1 0 0)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Clinical Design</SectionEyebrow>
              <h2
                className="text-[1.55rem] font-bold mb-5"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Assessment tools tailored to each client
              </h2>
              <p className="text-[0.88rem] leading-[1.80] mb-4" style={{ color: "var(--color-muted)" }}>
                Practitioners can select from clinically validated instruments, tailoring assessments to each client&apos;s clinical needs and the policies of their workplace or program.
              </p>
              <p className="text-[0.88rem] leading-[1.80] mb-6" style={{ color: "var(--color-muted)" }}>
                Clients cannot initiate contact through the platform. Instead, practitioners reach out when indicators suggest support is needed — keeping clinical authority where it belongs.
              </p>

              <div
                className="rounded-xl p-5"
                style={{ background: "oklch(0.97 0.005 60)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--color-teal)" }}>
                  Supported Assessment Tools
                </p>
                <ul className="space-y-2">
                  {INSTRUMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.82rem]" style={{ color: "var(--color-ivory)" }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-teal)" }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who it serves + CTA */}
            <div>
              <SectionEyebrow className="mb-4 block">Who It Serves</SectionEyebrow>
              <ul className="space-y-3 mb-8">
                {SERVES.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" style={{ color: "var(--color-teal)" }} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[0.85rem] leading-snug" style={{ color: "var(--color-ivory)" }}>{s}</span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-2xl p-7"
                style={{ background: "oklch(0.97 0.005 60)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-[0.95rem] font-bold mb-2" style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}>
                  Ready to close the gap?
                </p>
                <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                  Learn how TetherAll can reduce missed appointments and strengthen continuity of care across your program or clinic.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/book-appointment" variant="primary" size="sm">Book a Demo</Button>
                  <Button href="/contact" variant="ghost" size="sm">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

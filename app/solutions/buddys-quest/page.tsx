import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Buddy's Quest",
  description: "Buddy's Quest — a first-of-its-kind game designed exclusively for Indigenous children and youth, helping advocates listen and act on real-time community data.",
};

const FEATURES = [
  {
    title: "Completely Anonymous",
    body: "No logins. No usernames. No email addresses or phone numbers. Youth access Buddy's Quest using community-issued codes — functioning like a software licence assigned to a device, not a child.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
  {
    title: "Real-Time Population Insight",
    body: "Child advocates receive real-time, population-level insight into the wellbeing of the communities they serve — while youth remain completely anonymous within the platform.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Feels Like a Game",
    body: "Quality matters. If it doesn't feel fun, polished, and high-quality, kids won't engage. Buddy's Quest is intentionally designed to feel like a game, not homework.",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
] as const;

const CURRENT_MODULES = [
  "Risk indicators",
  "Substance use",
  "Bullying",
  "Gender and identity",
  "Domestic violence",
  "Self-harm",
];

const FUTURE_MODULES = [
  "Human trafficking",
  "Disordered eating",
  "Gambling",
  "ADHD",
  "Autism",
];

const SERVES = [
  "Indigenous child and family service organizations",
  "Schools and school boards serving Indigenous youth",
  "Jordan's Principle service providers",
  "Community-based child advocates",
  "Youth outreach and prevention programs",
  "Pediatric mental health programs",
];

const STATS = [
  { value: "3+", label: "Years in development" },
  { value: "16 mo", label: "Community research phase" },
  { value: "30", label: "Indigenous youth in focus groups" },
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
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  background: "oklch(0.24 0.06 155 / 0.15)",
                  border: "1px solid oklch(0.42 0.10 145 / 0.25)",
                  boxShadow: "0 24px 64px -12px oklch(0.22 0.07 155 / 0.30)",
                }}
              >
                <div className="relative w-48 h-48 lg:w-60 lg:h-60">
                  <Image
                    src="https://trycycle.ca/wp-content/uploads/2024/11/buddysquest-icon-3.png"
                    alt="Buddy's Quest"
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="240px"
                    priority
                  />
                </div>
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
                Buddy&apos;s{" "}
                <span style={{ color: "var(--color-teal)" }}>Quest</span>
              </h1>
              <p
                className="text-[1rem] leading-[1.70] mb-8"
                style={{ color: "var(--color-muted)", maxWidth: "480px" }}
              >
                A first-of-its-kind game designed exclusively for Indigenous children and youth — a safe, engaging, and culturally grounded place to play that helps advocates listen, even when children are not speaking directly to adults.
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
                <Link
                  href="https://buddysquest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[0.82rem] font-medium rounded-md transition-colors duration-200"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-ivory)",
                  }}
                >
                  Visit buddysquest.com
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
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
              See Buddy&apos;s Quest in action
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
              src="https://player.vimeo.com/video/1040889807?badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Buddy's Quest"
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
              Built for kids. Designed for advocates.
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
                  style={{ background: "oklch(0.72 0.19 45 / 0.10)", border: "1px solid oklch(0.72 0.19 45 / 0.20)" }}
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

      {/* ── Research foundation ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(1 0 0)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Research Foundation</SectionEyebrow>
              <h2
                className="text-[1.55rem] font-bold mb-5"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Community-led from the very beginning
              </h2>
              <p className="text-[0.88rem] leading-[1.80] mb-4" style={{ color: "var(--color-muted)" }}>
                Development of Buddy&apos;s Quest involved psychiatrists, psychologists, and child protection advocates — alongside Chiefs and Councils, community-based child advocates, Jordan&apos;s Principle experts, school principals, guidance counsellors, and Elders.
              </p>
              <p className="text-[0.88rem] leading-[1.80]" style={{ color: "var(--color-muted)" }}>
                Over 16 months, a dedicated focus group of 30 Indigenous youth shaped the platform to ensure it truly reflects their world — their stories, their needs, and their voices.
              </p>
            </div>

            {/* Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                className="rounded-xl p-5"
                style={{ background: "oklch(0.97 0.005 60)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--color-teal)" }}>
                  Active Modules
                </p>
                <ul className="space-y-2">
                  {CURRENT_MODULES.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-[0.82rem]" style={{ color: "var(--color-ivory)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--color-teal)" }}
                        aria-hidden="true"
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "oklch(0.97 0.005 60)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--color-muted)" }}>
                  Under Exploration
                </p>
                <ul className="space-y-2">
                  {FUTURE_MODULES.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-[0.82rem]" style={{ color: "var(--color-muted)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(0 0 0 / 0.18)" }}
                        aria-hidden="true"
                      />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it serves ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Who It Serves</SectionEyebrow>
              <h2
                className="text-[1.55rem] font-bold mb-8"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Built for the communities that need it most
              </h2>
              <ul className="space-y-3">
                {SERVES.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" style={{ color: "var(--color-teal)" }} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-[0.85rem] leading-snug" style={{ color: "var(--color-ivory)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ background: "oklch(1 0 0)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
            >
              <p
                className="text-[1.05rem] font-bold mb-3"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                Ready to bring Buddy&apos;s Quest to your community?
              </p>
              <p className="text-[0.85rem] leading-[1.70] mb-6" style={{ color: "var(--color-muted)" }}>
                Connect with our team to learn how Buddy&apos;s Quest can support your program, school, or community organization.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/book-appointment" variant="primary" size="sm">
                  Book a Demo
                </Button>
                <Button href="/contact" variant="ghost" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Talking Stick",
  description: "Talking Stick — the free digital wellness platform intentionally designed as the opposite of social media, serving 55,000+ users across Canada and the United States.",
};

const FEATURES = [
  {
    title: "First Alerts",
    body: "A sovereign alerting system that puts communities in control of critical safety communications — from MMIWG/MMIP alerts to public safety notices — without relying on external platforms.",
    icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  },
  {
    title: "Special Teams",
    body: "An ask-the-expert feature connecting users with specialists in STI support, domestic violence, Two-Spirit/LGBTQ+ support, public safety, and MMIWG/MMIP — on their own terms, anonymously.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "Anonymity as Foundation",
    body: "Talking Stick prioritizes dignity, safety, and empathy — not visibility. It is a place people turn to when they don't want to feel alone, built as the intentional opposite of social media.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
] as const;

const REGIONS = [
  "Saskatchewan",
  "British Columbia",
  "Alberta",
  "Ontario",
  "Quebec",
  "Atlantic Canada",
  "Wisconsin (USA)",
  "New York State (USA)",
];

const SERVES = [
  "First Nations communities and health authorities",
  "Métis Nation organizations",
  "Inuit wellness programs",
  "Indigenous friendship centres and urban organizations",
  "Two-Spirit and LGBTQ+ support services",
  "MMIWG/MMIP advocacy organizations",
];

const STATS = [
  { value: "55K+", label: "Users in Saskatchewan alone" },
  { value: "Free", label: "Apple, Android & web" },
  { value: "8", label: "Provinces & US states" },
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
                  background: "oklch(0.22 0.06 155 / 0.12)",
                  border: "1px solid oklch(0.42 0.10 155 / 0.25)",
                  boxShadow: "0 24px 64px -12px oklch(0.22 0.07 155 / 0.25)",
                }}
              >
                <div className="relative w-48 h-48 lg:w-60 lg:h-60">
                  <Image
                    src="https://trycycle.ca/wp-content/uploads/2025/06/talkingstick-appicon-2025.png"
                    alt="Talking Stick"
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
                Talking{" "}
                <span style={{ color: "var(--color-teal)" }}>Stick</span>
              </h1>
              <p
                className="text-[1rem] leading-[1.70] mb-8"
                style={{ color: "var(--color-muted)", maxWidth: "480px" }}
              >
                A free platform intentionally designed as the opposite of social media. Talking Stick prioritizes dignity, safety, and anonymity — because anonymity is foundational to healing.
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
                <Button href="/book-appointment" variant="primary" size="md">Partner With Us</Button>
                <Link
                  href="https://my.talkingstick.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[0.82rem] font-medium rounded-full transition-colors duration-200"
                  style={{ border: "1px solid var(--color-border)", color: "var(--color-ivory)" }}
                >
                  Visit talkingstick.app
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
              See Talking Stick in action
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
              src="https://player.vimeo.com/video/1040871688?badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Talking Stick"
            />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(0.97 0.005 60)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <SectionEyebrow className="mb-3 block">Platform Features</SectionEyebrow>
            <h2
              className="text-[1.75rem] font-bold"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              A platform for listening, not broadcasting
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

      {/* ── Reach ── */}
      <section className="py-16 lg:py-20 section-light" style={{ background: "oklch(1 0 0)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionEyebrow className="mb-4 block">Growing Reach</SectionEyebrow>
              <h2
                className="text-[1.55rem] font-bold mb-5"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
              >
                From Saskatchewan to New York State
              </h2>
              <p className="text-[0.88rem] leading-[1.80] mb-6" style={{ color: "var(--color-muted)" }}>
                Talking Stick serves more than 55,000 users in Saskatchewan alone, with rapid expansion underway across Canada and into the United States.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {REGIONS.map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[0.80rem]"
                    style={{ background: "oklch(0.97 0.005 60)", color: "var(--color-ivory)", border: "1px solid var(--color-border)" }}
                  >
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--color-teal)" }} aria-hidden="true">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.496 3.5-7.327A8.25 8.25 0 006 9.75c0 2.83 1.556 5.314 3.5 7.327a19.58 19.58 0 002.538 2.026 16.974 16.974 0 00.502.298zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    {r}
                  </div>
                ))}
              </div>
            </div>

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
                  Partner with Talking Stick
                </p>
                <p className="text-[0.82rem] leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                  We partner with communities on their own terms. Reach out to start a conversation about what Talking Stick could look like for your community.
                </p>
                <Button href="/book-appointment" variant="primary" size="sm">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

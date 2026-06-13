import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

/* ── Impact strip data ── */
const IMPACT = [
  {
    label: "Earlier Engagement",
    description: "Connecting people sooner",
    iconColor: "oklch(0.78 0.18 55)",
    iconPath: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    label: "Real-Time Insight",
    description: "Actionable information",
    iconColor: "oklch(0.80 0.16 80)",
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  },
  {
    label: "Prevention-Focused",
    description: "Better decisions",
    iconColor: "oklch(0.70 0.15 230)",
    iconPath:
      "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    label: "Healthier Communities",
    description: "Stronger together",
    iconColor: "oklch(0.72 0.12 185)",
    iconPath:
      "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
] as const;

/* ── Solution cards ── */
const SOLUTIONS = [
  {
    href: "/solutions/buddys-quest",
    name: "Buddy's Quest",
    tag: "Youth & Family",
    description: "Empowering youth through engaging digital experiences.",
    iconBg: "#2a7a3b",
    iconPath:
      "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 0 0 1.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  },
  {
    href: "/solutions/talking-stick",
    name: "Talking Stick",
    tag: "Indigenous Communities",
    description: "Anonymous, culturally safe support for communities.",
    iconBg: "#6a1b9a",
    iconPath:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    href: "/solutions/tetherall",
    name: "TetherAll",
    tag: "Connection & Support",
    description: "Real-time data and analytics for better health outcomes.",
    iconBg: "#1565c0",
    iconPath:
      "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
  },
  {
    href: "/solutions/ontario-legion-health",
    name: "Ontario Legion Health",
    tag: "Veterans",
    description: "Supporting veterans and families with compassionate tools.",
    iconBg: "#b71c1c",
    iconPath:
      "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
] as const;

/* ── Preview videos ── */
const PREVIEW_VIDEOS = [
  { title: "TryCycle Overview", label: "Our mission and approach" },
  { title: "Talking Stick", label: "Indigenous community wellness" },
  { title: "TetherAll", label: "Connecting care networks" },
] as const;

/* ── Preview testimonials ── */
const PREVIEW_TESTIMONIALS = [
  {
    quote: "Talking Stick has created a safe space in our community where people feel heard and supported.",
    name: "Community Leader",
    org: "Northern Ontario",
    cat: "Community",
  },
  {
    quote: "TetherAll has transformed the way we access data and make decisions that improve care.",
    name: "Healthcare Administrator",
    org: "Saskatchewan",
    cat: "Healthcare",
  },
  {
    quote: "Buddy's Quest helps youth build confidence and resilience in such important ways.",
    name: "Youth Program Coordinator",
    org: "Ontario",
    cat: "Youth",
  },
  {
    quote: "Working with TryCycle has been a game changer for our organization.",
    name: "Non-profit Partner",
    org: "Alberta",
    cat: "Partners",
  },
] as const;

const FILTER_PILLS = ["All", "Community", "Healthcare", "Veterans", "Indigenous", "Youth", "Partners"] as const;

/* ── Preview FAQ ── */
const PREVIEW_FAQS_LEFT = [
  "What is TryCycle?",
  "How is data protected?",
  "Who can use your solutions?",
] as const;

const PREVIEW_FAQS_RIGHT = [
  "How do I book an appointment?",
  "Are your platforms secure and compliant?",
  "How can my organization partner with TryCycle?",
] as const;

/* ════════════════════════════════════════
   Section components
════════════════════════════════════════ */

function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "82vh" }}
      aria-label="TryCycle — digital health solutions"
    >
      <Image
        src="/assets/trycycle/hero/hero-landscape.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Primary overlay — very light at top so hero connects to white header */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.04 240 / 0.08) 0%, oklch(0.12 0.04 240 / 0.55) 45%, oklch(0.12 0.04 240 / 0.82) 100%)",
        }}
      />
      {/* Left-column text readability gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.12 0.04 240 / 0.42) 30%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <div className="max-w-[580px]">
          <h1
            className="font-bold leading-[1.05] mb-5"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)",
              letterSpacing: "-0.02em",
              color: "oklch(0.97 0.01 90)",
            }}
          >
            Innovative solutions.
            <br />
            Stronger communities.
            <br />
            <span style={{ color: "var(--color-teal)" }}>Better outcomes.</span>
          </h1>

          <p
            className="text-[0.92rem] leading-[1.65] mb-9 max-w-[460px]"
            style={{ color: "oklch(0.84 0.02 90)" }}
          >
            TryCycle builds secure, accessible, and easy-to-use platforms
            that support people, inform decisions, and improve lives.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
            <Button href="/media/videos" variant="ghost" size="lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              Watch Overview
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to dark section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.14 0.04 235))" }}
      />
    </section>
  );
}

/* ── Impact strip ── */
function ImpactStrip() {
  return (
    <section
      aria-label="Key impact areas"
      style={{
        background: "oklch(0.14 0.04 235)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-3 py-7 px-4 lg:px-6"
              style={{
                borderRight: i < IMPACT.length - 1 ? "1px solid oklch(1 0 0 / 0.08)" : "none",
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                viewBox="0 0 24 24"
                style={{ color: item.iconColor, width: "20px", height: "20px", flexShrink: 0, marginTop: "2px" }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
              </svg>
              <div>
                <p
                  className="text-[0.80rem] font-semibold mb-0.5"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "oklch(0.96 0.01 90)",
                  }}
                >
                  {item.label}
                </p>
                <p className="text-[0.73rem] leading-snug" style={{ color: "oklch(0.65 0.02 90)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Our Solutions ── */
function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="py-16 lg:py-20"
      style={{ background: "var(--color-navy)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2
            className="text-[1.8rem] font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "oklch(0.96 0.01 90)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              style={{
                background: "oklch(0.97 0.004 60)",
                border: "1px solid oklch(0 0 0 / 0.07)",
                boxShadow: "0 2px 12px oklch(0 0 0 / 0.06)",
              }}
            >
              {/* Product icon placeholder */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ background: s.iconBg }}
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                </svg>
              </div>

              <p
                className="text-[0.75rem] font-medium text-center mb-1"
                style={{ color: "oklch(0.55 0.05 185)" }}
              >
                {s.tag}
              </p>
              <h3
                className="text-[0.90rem] font-bold mb-2 text-center"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  color: "oklch(0.14 0.04 240)",
                }}
              >
                {s.name}
              </h3>
              <p
                className="text-[0.78rem] leading-relaxed text-center flex-1"
                style={{ color: "oklch(0.43 0.02 90)" }}
              >
                {s.description}
              </p>

              <div
                className="flex items-center justify-center gap-1 mt-5 text-[0.74rem] font-semibold"
                style={{ color: "oklch(0.55 0.10 185)" }}
              >
                Learn More
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Videos preview ── */
function VideosSection() {
  return (
    <section
      className="py-14 lg:py-16"
      style={{
        background: "oklch(0.13 0.04 235)",
        borderTop: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Row header */}
        <div className="flex items-end justify-between mb-7">
          <div>
            <h2
              className="text-[1.5rem] font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "oklch(0.96 0.01 90)",
                letterSpacing: "-0.02em",
              }}
            >
              Videos
            </h2>
            <p className="text-[0.80rem] mt-0.5" style={{ color: "oklch(0.62 0.02 90)" }}>
              See our solutions in action.
            </p>
          </div>
          <Link
            href="/media/videos"
            className="text-[0.76rem] font-semibold flex items-center gap-1 hover:opacity-75 transition-opacity"
            style={{ color: "var(--color-teal)" }}
          >
            View all videos
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PREVIEW_VIDEOS.map((v) => (
            <Link
              key={v.title}
              href="/media/videos"
              className="group block rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              style={{
                background: "var(--color-card)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              {/* Thumbnail placeholder */}
              <div
                className="relative h-40 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, oklch(0.19 0.05 220) 0%, oklch(0.12 0.04 240) 100%)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "oklch(1 0 0 / 0.88)" }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "oklch(0.12 0.04 240)" }} aria-hidden="true">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>
              <div className="px-4 py-3">
                <p
                  className="text-[0.82rem] font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.96 0.01 90)" }}
                >
                  {v.title}
                </p>
                <p className="text-[0.73rem] mt-0.5" style={{ color: "oklch(0.62 0.02 90)" }}>
                  {v.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials preview — WHITE BACKGROUND ── */
function TestimonialsSection() {
  return (
    <section
      className="py-14 lg:py-16"
      style={{ background: "oklch(0.97 0.004 60)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Row header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h2
              className="text-[1.5rem] font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "oklch(0.14 0.04 240)",
                letterSpacing: "-0.02em",
              }}
            >
              Testimonials
            </h2>
            <p className="text-[0.78rem] mt-0.5" style={{ color: "oklch(0.48 0.02 90)" }}>
              Search by keyword or filter by category.
            </p>
          </div>
          {/* Search bar (decorative) */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg w-full sm:w-52"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0 0 0 / 0.12)",
            }}
            aria-hidden="true"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" style={{ color: "oklch(0.60 0.01 90)" }} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className="text-[0.76rem]" style={{ color: "oklch(0.68 0.01 90)" }}>
              Search testimonials…
            </span>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          {FILTER_PILLS.map((label, i) => (
            <span
              key={label}
              className="px-3 py-1 rounded-full text-[0.70rem] font-medium"
              style={
                i === 0
                  ? { background: "oklch(0.55 0.10 185)", color: "oklch(1 0 0)" }
                  : {
                      background: "oklch(0.90 0.005 90)",
                      color: "oklch(0.40 0.02 90)",
                      border: "1px solid oklch(0 0 0 / 0.08)",
                    }
              }
              aria-hidden="true"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {PREVIEW_TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-5 flex flex-col"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0 0 0 / 0.07)",
                boxShadow: "0 2px 10px oklch(0 0 0 / 0.05)",
              }}
            >
              <svg
                className="w-5 h-5 mb-3 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "oklch(0.55 0.10 185)" }}
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p
                className="text-[0.78rem] leading-relaxed flex-1 mb-3"
                style={{ color: "oklch(0.38 0.02 90)" }}
              >
                {t.quote}
              </p>
              <div
                className="pt-3"
                style={{ borderTop: "1px solid oklch(0 0 0 / 0.06)" }}
              >
                <p
                  className="text-[0.75rem] font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.20 0.04 240)" }}
                >
                  {t.name}
                </p>
                <p className="text-[0.70rem]" style={{ color: "oklch(0.55 0.02 90)" }}>
                  {t.org} · {t.cat}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="text-[0.76rem] font-semibold hover:opacity-75 transition-opacity"
            style={{ color: "oklch(0.45 0.10 185)" }}
          >
            View all testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ preview — WHITE BACKGROUND ── */
function FaqSection() {
  return (
    <section
      className="py-14 lg:py-16"
      style={{
        background: "oklch(0.94 0.006 60)",
        borderTop: "1px solid oklch(0 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-7">
          <h2
            className="text-[1.5rem] font-bold mb-0.5"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "oklch(0.14 0.04 240)",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[0.78rem]" style={{ color: "oklch(0.48 0.02 90)" }}>
            Browse common questions or visit our full FAQ for more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div>
            {PREVIEW_FAQS_LEFT.map((q) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: "1px solid oklch(0 0 0 / 0.08)" }}
              >
                <summary
                  className="flex items-center justify-between py-4 cursor-pointer list-none"
                  style={{ color: "oklch(0.18 0.04 240)" }}
                >
                  <span
                    className="text-[0.84rem] font-medium pr-3"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {q}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    style={{ color: "oklch(0.55 0.02 90)" }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <p
                  className="pb-4 text-[0.78rem] leading-relaxed"
                  style={{ color: "oklch(0.48 0.02 90)" }}
                >
                  Visit our{" "}
                  <Link href="/faq" className="underline underline-offset-2" style={{ color: "oklch(0.45 0.10 185)" }}>
                    full FAQ page
                  </Link>{" "}
                  for the complete answer.
                </p>
              </details>
            ))}
          </div>
          <div>
            {PREVIEW_FAQS_RIGHT.map((q) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: "1px solid oklch(0 0 0 / 0.08)" }}
              >
                <summary
                  className="flex items-center justify-between py-4 cursor-pointer list-none"
                  style={{ color: "oklch(0.18 0.04 240)" }}
                >
                  <span
                    className="text-[0.84rem] font-medium pr-3"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {q}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    style={{ color: "oklch(0.55 0.02 90)" }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <p
                  className="pb-4 text-[0.78rem] leading-relaxed"
                  style={{ color: "oklch(0.48 0.02 90)" }}
                >
                  Visit our{" "}
                  <Link href="/faq" className="underline underline-offset-2" style={{ color: "oklch(0.45 0.10 185)" }}>
                    full FAQ page
                  </Link>{" "}
                  for the complete answer.
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <Link
            href="/faq"
            className="text-[0.76rem] font-semibold hover:opacity-75 transition-opacity"
            style={{ color: "oklch(0.45 0.10 185)" }}
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA — FOREST GREEN ── */
function CtaStrip() {
  const CTA_CARDS = [
    {
      href: "/book-appointment",
      title: "Book an Appointment",
      description: "Schedule a time to connect with our team.",
      iconPath:
        "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
    },
    {
      href: "/contact",
      title: "Contact Us",
      description: "We're here to help.",
      iconPath:
        "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    },
    {
      href: "/security",
      title: "Security Reporting",
      description: "Report a security concern confidentially.",
      iconPath:
        "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
  ] as const;

  return (
    <section
      className="py-14 lg:py-16"
      style={{ background: "var(--color-forest)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CTA_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col items-center text-center p-7 rounded-2xl transition-all duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{ border: "1px solid oklch(1 0 0 / 0.14)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "oklch(1 0 0 / 0.12)" }}
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  style={{ color: "oklch(1 0 0)" }}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                </svg>
              </div>
              <p
                className="text-[0.88rem] font-bold mb-1"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.97 0.01 90)" }}
              >
                {card.title}
              </p>
              <p className="text-[0.76rem] leading-relaxed mb-4" style={{ color: "oklch(0.85 0.03 155)" }}>
                {card.description}
              </p>
              <div
                className="flex items-center gap-1 text-[0.74rem] font-semibold"
                style={{ color: "oklch(1 0 0 / 0.70)" }}
              >
                Learn more
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <SolutionsSection />
      <VideosSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaStrip />
    </>
  );
}

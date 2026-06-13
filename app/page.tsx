import Image from "next/image";
import Link from "next/link";
import { Button, SectionEyebrow } from "@/components/ui";

/* ── Static data ── */

const SOLUTIONS = [
  {
    href: "/solutions/buddys-quest",
    name: "Buddy's Quest",
    tag: "Youth & Family",
    description:
      "A digital companion supporting children and families navigating mental health challenges with engaging, age-appropriate tools built for early intervention.",
    hue: "185",
    iconPath:
      "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    href: "/solutions/talking-stick",
    name: "Talking Stick",
    tag: "Indigenous Communities",
    description:
      "Culturally grounded digital wellness tools built with and for Indigenous communities, honouring tradition and supporting healing pathways.",
    hue: "145",
    iconPath:
      "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z",
  },
  {
    href: "/solutions/tetherall",
    name: "TetherAll",
    tag: "Connection & Support",
    description:
      "A platform bridging individuals with their support networks — ensuring no one faces challenges alone.",
    hue: "215",
    iconPath:
      "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244",
  },
  {
    href: "/solutions/ontario-legion-health",
    name: "Ontario Legion Health",
    tag: "Veterans",
    description:
      "Purpose-built digital wellness tools for veterans and their families — supporting mental health and community connection.",
    hue: "30",
    iconPath:
      "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
] as const;

/* ── Hero ── */
function Hero() {
  return (
    <section
      className="relative flex items-center min-h-[92dvh] overflow-hidden"
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

      {/* Dark overlay — navy gradient per DESIGN.md */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.04 240 / 0.60) 0%, oklch(0.12 0.04 240 / 0.90) 100%)",
        }}
      />

      {/* Left gradient for text legibility */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.12 0.04 240 / 0.55) 35%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
        <div className="max-w-[640px]">
          <SectionEyebrow className="mb-6 block">
            Digital Health Solutions
          </SectionEyebrow>

          <h1
            className="font-bold leading-[1.05] mb-7"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              fontSize: "clamp(2.8rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--color-ivory)" }}>
              Innovative solutions.
              <br />
              Stronger communities.
            </span>
            <br />
            <span style={{ color: "var(--color-teal)" }}>Better outcomes.</span>
          </h1>

          <p
            className="text-[0.95rem] leading-[1.65] mb-10 max-w-[480px]"
            style={{ color: "oklch(0.82 0.02 90)" }}
          >
            TryCycle delivers culturally responsive digital health tools —
            supporting Indigenous communities, veterans, youth, and healthcare
            organizations across Canada.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/book-appointment" variant="primary" size="lg">
              Book an Appointment
            </Button>
            <Button href="/about/what-we-do" variant="ghost" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-navy))",
        }}
      />
    </section>
  );
}

/* ── Editorial intro statement ── */
function IntroStatement() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: "var(--color-navy)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p
          className="text-[1rem] sm:text-[1.1rem] leading-[1.8]"
          style={{ color: "oklch(0.80 0.02 90)" }}
        >
          We build culturally grounded digital health tools for the communities
          that need them most — Indigenous Peoples, veterans, youth, and
          families. Our solutions reach people{" "}
          <span
            style={{
              color: "var(--color-ivory)",
              fontWeight: 500,
            }}
          >
            before crisis
          </span>
          , not after.
        </p>
      </div>
    </section>
  );
}

/* ── Solutions ── */
function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="py-20 lg:py-28"
      style={{ background: "var(--color-navy)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <SectionEyebrow className="mb-3 block">What We Build</SectionEyebrow>
          <h2
            className="text-[2rem] font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "var(--color-ivory)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, transparent, oklch(0.65 0.12 ${s.hue} / 0.60), transparent)`,
                }}
                aria-hidden="true"
              />

              {/* Visual thumbnail */}
              <div
                className="relative h-48 w-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, oklch(0.19 0.06 ${s.hue}) 0%, oklch(0.13 0.04 240) 100%)`,
                }}
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 192"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <circle
                    cx="370"
                    cy="-20"
                    r="140"
                    fill="none"
                    stroke={`oklch(0.65 0.12 ${s.hue} / 0.13)`}
                    strokeWidth="1"
                  />
                  <circle
                    cx="370"
                    cy="-20"
                    r="95"
                    fill="none"
                    stroke={`oklch(0.65 0.12 ${s.hue} / 0.09)`}
                    strokeWidth="1"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "oklch(0.65 0.12 185 / 0.12)",
                      border: "1px solid oklch(0.65 0.12 185 / 0.22)",
                    }}
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      style={{ color: "var(--color-teal)" }}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={s.iconPath}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <span
                  className="text-[0.63rem] font-semibold tracking-[0.20em] uppercase mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  {s.tag}
                </span>
                <h3
                  className="text-[1.05rem] font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "var(--color-ivory)",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[0.82rem] leading-relaxed flex-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  {s.description}
                </p>
                <div
                  className="flex items-center gap-1.5 text-[0.78rem] font-semibold mt-5"
                  style={{ color: "var(--color-teal)" }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA strip ── */
function CtaStrip() {
  return (
    <section
      className="py-20 lg:py-28 text-center"
      style={{
        background: "var(--color-forest)",
        borderTop: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-2xl px-6">
        <SectionEyebrow dim className="mb-4 block">
          Let&apos;s Connect
        </SectionEyebrow>
        <h2
          className="text-[2rem] font-bold mb-4"
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            color: "var(--color-ivory)",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to work together?
        </h2>
        <p
          className="text-[0.95rem] leading-relaxed mb-10"
          style={{ color: "oklch(0.78 0.03 90)" }}
        >
          Whether you&apos;re a healthcare partner, government agency, Indigenous
          organization, or community group — we&apos;d love to hear from you.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button href="/book-appointment" variant="primary" size="lg">
            Book an Appointment
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact Us
          </Button>
        </div>

        <p className="text-[0.78rem]" style={{ color: "oklch(1 0 0 / 0.35)" }}>
          Found a security issue?{" "}
          <Link
            href="/security"
            style={{ color: "oklch(1 0 0 / 0.50)" }}
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Report it here
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <SolutionsSection />
      <CtaStrip />
    </>
  );
}

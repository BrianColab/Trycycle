import Link from "next/link";
import { Button } from "@/components/ui";
import { SectionEyebrow } from "@/components/ui";

/* ── Static data ── */

const SOLUTIONS = [
  {
    href: "/solutions/buddys-quest",
    name: "Buddy's Quest",
    tag: "Youth & Family",
    description:
      "A digital companion supporting children and families navigating mental health challenges with engaging, age-appropriate tools.",
    glowHue: "185",
  },
  {
    href: "/solutions/talking-stick",
    name: "Talking Stick",
    tag: "Indigenous Communities",
    description:
      "Culturally grounded digital wellness tools built with and for Indigenous communities, honouring tradition and supporting healing.",
    glowHue: "145",
  },
  {
    href: "/solutions/tetherall",
    name: "TetherAll",
    tag: "Connection & Support",
    description:
      "A platform that bridges individuals and their support networks, ensuring no one faces challenges alone.",
    glowHue: "215",
  },
  {
    href: "/solutions/ontario-legion-health",
    name: "Ontario Legion Health",
    tag: "Veterans",
    description:
      "Purpose-built digital wellness tools for veterans and their families, supporting mental health and community connection.",
    glowHue: "30",
  },
] as const;

const IMPACT_ITEMS = [
  {
    label: "Earlier Engagement",
    description: "Reaching people before crisis — building protective factors when they matter most.",
  },
  {
    label: "Real-Time Insight",
    description: "Actionable data that helps care teams make informed, timely decisions.",
  },
  {
    label: "Prevention-Focused",
    description: "Built for long-term wellbeing, not just crisis response.",
  },
  {
    label: "Healthier Communities",
    description: "Measurable outcomes that strengthen individuals, families, and communities.",
  },
] as const;

const EXPLORE_ITEMS = [
  {
    href: "/media/videos",
    label: "Videos",
    description:
      "Watch our solutions in action — demos, community stories, and partner perspectives.",
    iconPath:
      "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    description:
      "Hear from the communities, partners, and healthcare organizations we serve.",
    iconPath:
      "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
  },
  {
    href: "/faq",
    label: "FAQ",
    description:
      "Answers to common questions about our platform, partnerships, and programs.",
    iconPath:
      "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  },
] as const;

/* ── Shared arrow icon ── */
function ArrowRight() {
  return (
    <svg
      className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section
      className="relative flex items-center min-h-[92dvh] overflow-hidden"
      style={{ background: "var(--color-navy)" }}
      aria-label="TryCycle — digital health solutions"
    >
      {/* Layered glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 72% 44%, oklch(0.20 0.07 185 / 0.22) 0%, transparent 65%)," +
            "radial-gradient(ellipse 55% 70% at 8% 88%, oklch(0.18 0.06 155 / 0.18) 0%, transparent 55%)",
        }}
      />
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-20">
        <div className="max-w-2xl">
          <SectionEyebrow className="mb-6 block">
            Digital Mental Health Solutions
          </SectionEyebrow>

          <h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            <span style={{ color: "var(--color-ivory)" }}>Innovative Solutions.</span>
            <br />
            <span style={{ color: "var(--color-teal)" }}>Stronger Communities.</span>
          </h1>

          <p
            className="text-[1.05rem] leading-relaxed mb-10 max-w-xl"
            style={{ color: "oklch(0.80 0.02 90)" }}
          >
            TryCycle delivers culturally responsive digital health tools — supporting
            Indigenous communities, veterans, youth, and healthcare organizations
            across Canada.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/book-appointment" variant="primary" size="lg">
              Book an Appointment
            </Button>
            <Button href="#solutions" variant="ghost" size="lg">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.14 0.04 235))",
        }}
      />
    </section>
  );
}

/* ── Impact strip ── */
function ImpactStrip() {
  return (
    <section
      className="py-14"
      style={{
        background: "oklch(0.14 0.04 235)",
        borderBottom: "1px solid var(--color-border)",
      }}
      aria-label="Our approach"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--color-teal)" }}
                  aria-hidden="true"
                />
                <p
                  className="text-[0.85rem] font-semibold"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "var(--color-ivory)",
                  }}
                >
                  {item.label}
                </p>
              </div>
              <p
                className="text-[0.8rem] leading-relaxed pl-3.5"
                style={{ color: "var(--color-muted)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Solutions cards ── */
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
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "var(--color-ivory)",
            }}
          >
            Our Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Accent top line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, transparent, oklch(0.65 0.12 ${s.glowHue}), transparent)`,
                }}
                aria-hidden="true"
              />

              <div>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold tracking-widest uppercase mb-3"
                  style={{
                    background: "oklch(0.65 0.12 185 / 0.10)",
                    color: "var(--color-teal)",
                    border: "1px solid oklch(0.65 0.12 185 / 0.18)",
                  }}
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
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {s.description}
                </p>
              </div>

              <div
                className="flex items-center gap-1.5 text-[0.78rem] font-semibold mt-auto"
                style={{ color: "var(--color-teal)" }}
              >
                Learn more
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Explore preview cards ── */
function ExploreSection() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "oklch(0.14 0.04 235)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <SectionEyebrow className="mb-3 block">Go Deeper</SectionEyebrow>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "var(--color-ivory)",
            }}
          >
            Explore More
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {EXPLORE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "oklch(0.65 0.12 185 / 0.12)",
                  color: "var(--color-teal)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>

              <div className="flex-1">
                <h3
                  className="text-[1rem] font-bold mb-1.5"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "var(--color-ivory)",
                  }}
                >
                  {item.label}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {item.description}
                </p>
              </div>

              <div
                className="flex items-center gap-1.5 text-[0.78rem] font-semibold"
                style={{ color: "var(--color-teal)" }}
              >
                View all
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA strip ── */
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
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            color: "var(--color-ivory)",
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
      <ImpactStrip />
      <SolutionsSection />
      <ExploreSection />
      <CtaStrip />
    </>
  );
}

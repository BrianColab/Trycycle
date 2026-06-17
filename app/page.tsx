import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const STATS = [
  { value: "55,000+", label: "People Supported" },
  { value: "4",       label: "Platforms Deployed" },
  { value: "6+",      label: "Years of Innovation" },
  { value: "Pan-Canadian", label: "Community Reach" },
] as const;

const SOLUTIONS = [
  {
    href: "/solutions/buddys-quest",
    name: "Buddy's Quest",
    tag: "Youth & Family",
    description: "An anonymous, gamified wellbeing tool for Indigenous children and youth — built with communities, not just for them.",
    accentColor: "#2a7a3b",
    iconPath: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
  },
  {
    href: "/solutions/talking-stick",
    name: "Talking Stick",
    tag: "Indigenous Communities",
    description: "A culturally grounded, anonymous platform supporting Indigenous community wellness — co-designed with the communities it serves.",
    accentColor: "#6a1b9a",
    iconPath: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    href: "/solutions/tetherall",
    name: "TetherAll",
    tag: "Connection & Support",
    description: "Real-time data and coordination tools that help care teams intervene earlier and allocate resources where they're needed most.",
    accentColor: "#1565c0",
    iconPath: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
  },
  {
    href: "/solutions/ontario-legion-health",
    name: "Ontario Legion Health",
    tag: "Veterans",
    description: "Dignified, accessible digital health tools for veterans and their families — developed in partnership with the Royal Canadian Legion.",
    accentColor: "#b71c1c",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
] as const;

const VIDEOS = [
  {
    id: "1040889807",
    title: "Buddy's Quest",
    label: "Youth & Indigenous wellness",
    href: "/solutions/buddys-quest",
  },
  {
    id: "1040871688",
    title: "Talking Stick",
    label: "Indigenous community platform",
    href: "/solutions/talking-stick",
  },
  {
    id: "1040879181",
    title: "TetherAll",
    label: "Real-time care coordination",
    href: "/solutions/tetherall",
  },
  {
    id: "1075476038",
    title: "Ontario Legion Health",
    label: "Veterans digital wellness",
    href: "/solutions/ontario-legion-health",
  },
] as const;

const TESTIMONIALS = [
  {
    quote: "TryCycle earned our trust by listening. They did not arrive with a solution ready-made. They sat with our community, they learned from us, and they built something that reflects who we are. Talking Stick is a tool we can call our own.",
    name: "Elder Jean",
    title: "Knowledge Keeper",
    org: "First Nations Health Council",
    cat: "Indigenous",
    initials: "EJ",
  },
  {
    quote: "Ontario Legion Health has given our branch members something we've been trying to build for years — easy, dignified access to information about the supports available to them. The TryCycle team understood the veterans community and delivered a solution that reflects our values.",
    name: "Robert B.",
    title: "Branch President",
    org: "Royal Canadian Legion, Ontario Command",
    cat: "Veterans",
    initials: "RB",
  },
  {
    quote: "TryCycle has built something genuinely useful for front-line health teams. The data visibility we now have allows us to intervene earlier and allocate resources where they're needed most.",
    name: "Dr. James M.",
    title: "Medical Director",
    org: "Regional Health Authority",
    cat: "Healthcare",
    initials: "JM",
  },
  {
    quote: "Buddy's Quest meets young people where they are. It doesn't feel like a clinical tool — it feels like something designed for them, by people who actually understand young people. We've seen real engagement and real impact.",
    name: "Michelle A.",
    title: "Program Lead",
    org: "Youth Wellness Foundation",
    cat: "Youth",
    initials: "MA",
  },
] as const;

const FAQ_PREVIEW = [
  {
    q: "What is TryCycle?",
    a: "TryCycle is a health-tech organization that develops digital wellness solutions for Indigenous communities, veterans, youth, and healthcare organizations — built alongside communities, not just for them.",
  },
  {
    q: "Who are your solutions designed for?",
    a: "Our solutions serve Indigenous health programs, veterans' services, youth organizations, and community health providers. Each platform is adapted to the specific culture and context of the communities it serves.",
  },
  {
    q: "Does TryCycle offer clinical or crisis services?",
    a: "No. TryCycle builds technology platforms. We do not provide clinical, therapeutic, or crisis services. If you or someone you know is in crisis, please contact local emergency services or a crisis helpline immediately.",
  },
  {
    q: "How does TryCycle protect community data?",
    a: "We collect only what's necessary to deliver our services. All data is handled under applicable Canadian privacy law (PIPEDA), and community data is never shared with third parties for commercial purposes.",
  },
  {
    q: "Can my organization pilot a TryCycle solution?",
    a: "Yes. We work with organizations to assess fit and design appropriate pilots. Book an appointment with our Partnerships team and we'll discuss your context, the relevant solution, and what a pilot would involve.",
  },
  {
    q: "What types of appointments can I book?",
    a: "Our booking system is for demos, partnership meetings, media calls, and program inquiries. It is not for clinical or crisis support. Select a staff member whose focus matches your inquiry to get started.",
  },
] as const;

/* ════════════════════════════════════════
   SECTIONS
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
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.04 240 / 0.08) 0%, oklch(0.12 0.04 240 / 0.55) 45%, oklch(0.12 0.04 240 / 0.82) 100%)",
        }}
      />
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
            <Button href="#videos" variant="ghost" size="lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
              Watch Videos
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.14 0.04 235))" }}
      />
    </section>
  );
}

/* ── Stats strip ── */
function StatsStrip() {
  return (
    <section
      aria-label="Impact at a glance"
      style={{
        background: "oklch(0.14 0.04 235)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid oklch(1 0 0 / 0.08)" : "none",
              }}
            >
              <p
                className="font-bold leading-none mb-2"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "oklch(0.72 0.19 45)",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-[0.75rem] font-medium tracking-wide uppercase"
                style={{ color: "oklch(0.62 0.02 90)" }}
              >
                {stat.label}
              </p>
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
      className="py-16 lg:py-24"
      style={{ background: "var(--color-navy)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p
            className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.19 45)" }}
          >
            Our Solutions
          </p>
          <h2
            className="text-[1.9rem] font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "oklch(0.96 0.01 90)",
              letterSpacing: "-0.02em",
            }}
          >
            Four platforms built{" "}
            <span style={{ color: "oklch(0.72 0.19 45)" }}>with</span> the communities
            that need them most
          </h2>
          <p className="text-[0.85rem] leading-relaxed" style={{ color: "oklch(0.62 0.02 90)" }}>
            Every TryCycle solution is developed alongside community partners — shaped by lived
            experience, cultural knowledge, and frontline expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              style={{
                background: "oklch(0.97 0.004 60)",
                border: "1px solid oklch(0 0 0 / 0.07)",
                boxShadow: "0 2px 12px oklch(0 0 0 / 0.06)",
              }}
            >
              {/* Product color accent bar */}
              <div className="h-1 w-full" style={{ background: s.accentColor }} aria-hidden="true" />

              <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: s.accentColor }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
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
                  className="text-[0.68rem] font-semibold tracking-wide uppercase mb-1.5"
                  style={{ color: "oklch(0.62 0.14 45)" }}
                >
                  {s.tag}
                </p>
                <h3
                  className="text-[0.92rem] font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "oklch(0.14 0.04 240)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[0.78rem] leading-relaxed flex-1"
                  style={{ color: "oklch(0.43 0.02 90)" }}
                >
                  {s.description}
                </p>

                <div
                  className="flex items-center gap-1 mt-5 text-[0.74rem] font-semibold"
                  style={{ color: "oklch(0.56 0.17 45)" }}
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Videos ── */
function VideosSection() {
  return (
    <section
      id="videos"
      className="py-16 lg:py-20"
      style={{
        background: "oklch(0.13 0.04 235)",
        borderTop: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p
              className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "oklch(0.72 0.19 45)" }}
            >
              In Action
            </p>
            <h2
              className="text-[1.5rem] font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "oklch(0.96 0.01 90)",
                letterSpacing: "-0.02em",
              }}
            >
              See TryCycle solutions first-hand
            </h2>
          </div>
          <Link
            href="/media/videos"
            className="hidden sm:flex text-[0.76rem] font-semibold items-center gap-1 hover:opacity-75 transition-opacity shrink-0"
            style={{ color: "var(--color-teal)" }}
          >
            View all
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VIDEOS.map((v) => (
            <div key={v.id} className="flex flex-col gap-2">
              <div
                className="relative w-full rounded-xl overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={v.title}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <p
                    className="text-[0.83rem] font-semibold"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.94 0.01 90)" }}
                  >
                    {v.title}
                  </p>
                  <p className="text-[0.72rem]" style={{ color: "oklch(0.60 0.02 90)" }}>
                    {v.label}
                  </p>
                </div>
                <Link
                  href={v.href}
                  className="text-[0.72rem] font-semibold hover:opacity-70 transition-opacity shrink-0"
                  style={{ color: "oklch(0.72 0.19 45)" }}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "oklch(0.97 0.004 60)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "oklch(0.56 0.17 45)" }}
            >
              Community Voices
            </p>
            <h2
              className="text-[1.5rem] font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "oklch(0.14 0.04 240)",
                letterSpacing: "-0.02em",
              }}
            >
              What people are saying
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="text-[0.76rem] font-semibold hover:opacity-75 transition-opacity shrink-0"
            style={{ color: "oklch(0.53 0.17 45)" }}
          >
            View all testimonials →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-5 flex flex-col"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0 0 0 / 0.07)",
                boxShadow: "0 2px 10px oklch(0 0 0 / 0.05)",
              }}
            >
              {/* Quote mark */}
              <svg
                className="w-5 h-5 mb-3 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "oklch(0.62 0.17 45)" }}
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="flex-1 mb-4">
                <p
                  className="text-[0.78rem] leading-relaxed italic"
                  style={{ color: "oklch(0.30 0.02 90)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <div
                className="pt-3 flex items-center gap-2.5"
                style={{ borderTop: "1px solid oklch(0 0 0 / 0.06)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[0.67rem] font-bold shrink-0"
                  style={{ background: "oklch(0.72 0.19 45 / 0.15)", color: "oklch(0.56 0.17 45)" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[0.75rem] font-semibold truncate"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.20 0.04 240)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[0.68rem] truncate" style={{ color: "oklch(0.52 0.02 90)" }}>
                    {t.org}
                  </p>
                </div>
                <span
                  className="ml-auto shrink-0 text-[0.60rem] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background: "oklch(0.62 0.17 45 / 0.10)",
                    color: "oklch(0.53 0.17 45)",
                  }}
                >
                  {t.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: "oklch(0.94 0.006 60)",
        borderTop: "1px solid oklch(0 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "oklch(0.56 0.17 45)" }}
            >
              Help & Information
            </p>
            <h2
              className="text-[1.5rem] font-bold"
              style={{
                fontFamily: "var(--font-space-grotesk, sans-serif)",
                color: "oklch(0.14 0.04 240)",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently asked questions
            </h2>
          </div>
          <Link
            href="/faq"
            className="text-[0.76rem] font-semibold hover:opacity-75 transition-opacity shrink-0"
            style={{ color: "oklch(0.53 0.17 45)" }}
          >
            View all FAQs →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {FAQ_PREVIEW.map((item) => (
            <div
              key={item.q}
              className="rounded-xl p-5"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0 0 0 / 0.08)",
                boxShadow: "0 1px 4px oklch(0 0 0 / 0.04)",
              }}
            >
              <p
                className="text-[0.85rem] font-semibold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
              >
                {item.q}
              </p>
              <p className="text-[0.78rem] leading-relaxed" style={{ color: "oklch(0.46 0.02 90)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ── */
function CtaStrip() {
  const CTA_CARDS = [
    {
      href: "/book-appointment",
      title: "Book an Appointment",
      description: "Schedule a demo, partnership call, or program inquiry with the right person on our team.",
      iconPath:
        "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
    },
    {
      href: "/contact",
      title: "Contact Us",
      description: "General questions, media inquiries, or just want to say hello — we'd love to hear from you.",
      iconPath:
        "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    },
    {
      href: "/about/our-mission",
      title: "Our Mission",
      description: "Learn why we build what we build — and the six values that guide every decision we make.",
      iconPath:
        "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253",
    },
  ] as const;

  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: "oklch(0.11 0.04 240)",
        borderTop: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="text-center mb-10">
          <p
            className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "oklch(0.72 0.19 45)" }}
          >
            Get in Touch
          </p>
          <h2
            className="text-[1.5rem] font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: "oklch(0.96 0.01 90)",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to connect?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CTA_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col items-center text-center p-7 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              style={{
                background: "oklch(1 0 0 / 0.04)",
                border: "1px solid oklch(1 0 0 / 0.10)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-teal/10"
                style={{ background: "oklch(0.72 0.19 45 / 0.12)" }}
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  style={{ color: "oklch(0.72 0.19 45)" }}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                </svg>
              </div>
              <p
                className="text-[0.88rem] font-bold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.97 0.01 90)" }}
              >
                {card.title}
              </p>
              <p className="text-[0.76rem] leading-relaxed mb-5" style={{ color: "oklch(0.62 0.02 90)" }}>
                {card.description}
              </p>
              <div
                className="flex items-center gap-1 text-[0.74rem] font-semibold mt-auto"
                style={{ color: "oklch(0.72 0.19 45)" }}
              >
                Get started
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
      <StatsStrip />
      <SolutionsSection />
      <VideosSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaStrip />
    </>
  );
}

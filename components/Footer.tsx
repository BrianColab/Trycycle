import Link from "next/link";
import Image from "next/image";

const SOLUTIONS = [
  { label: "Buddy's Quest", href: "/solutions/buddys-quest" },
  { label: "Talking Stick", href: "/solutions/talking-stick" },
  { label: "TetherAll", href: "/solutions/tetherall" },
  { label: "Ontario Legion Health", href: "/solutions/ontario-legion-health" },
];

const COMPANY = [
  { label: "What We Do", href: "/about/what-we-do" },
  { label: "Our Story", href: "/about/our-story" },
  { label: "Our Mission", href: "/about/our-mission" },
  { label: "Our Team", href: "/team/leadership" },
  { label: "Careers", href: "/careers" },
];

const RESOURCES = [
  { label: "News", href: "/media/news" },
  { label: "Publications", href: "/media/publications" },
  { label: "Videos", href: "/media/videos" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const LEGAL = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Terms / Waiver", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap-page" },
  { label: "Security Reporting", href: "/security" },
];

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] uppercase text-teal">
        {heading}
      </p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[0.82rem] text-muted hover:text-ivory transition-colors duration-150"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export function Footer() {
  return (
    <footer
      className="border-t border-white/[0.08]"
      style={{ background: "oklch(0.10 0.04 240)" }}
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.webp"
                alt="TryCycle"
                width={130}
                height={44}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[0.82rem] leading-relaxed text-muted">
              Innovative solutions.<br />
              Stronger communities.<br />
              Better outcomes.
            </p>

          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterCol heading="Solutions" links={SOLUTIONS} />
            <FooterCol heading="Company" links={COMPANY} />
            <FooterCol heading="Resources" links={RESOURCES} />
            <FooterCol heading="Legal" links={LEGAL} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.08]">
          <p className="text-[0.78rem] text-muted">
            &copy; {new Date().getFullYear()} TryCycle. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {LEGAL.slice(0, 3).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.78rem] text-muted hover:text-ivory transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

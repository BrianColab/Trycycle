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

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
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

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryCycle on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-muted hover:border-teal hover:text-teal transition-colors duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryCycle on X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-muted hover:border-teal hover:text-teal transition-colors duration-200"
              >
                <XIcon />
              </a>
            </div>
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

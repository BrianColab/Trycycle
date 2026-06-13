import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionEyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A full index of all pages on the TryCycle website.",
};

const SECTIONS = [
  {
    heading: "About Us",
    links: [
      { label: "What We Do", href: "/about/what-we-do" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Mission", href: "/about/our-mission" },
    ],
  },
  {
    heading: "Our Solutions",
    links: [
      { label: "Buddy's Quest", href: "/solutions/buddys-quest" },
      { label: "Talking Stick", href: "/solutions/talking-stick" },
      { label: "TetherAll", href: "/solutions/tetherall" },
      { label: "Ontario Legion Health", href: "/solutions/ontario-legion-health" },
    ],
  },
  {
    heading: "Our Team",
    links: [
      { label: "Leadership", href: "/team/leadership" },
      { label: "Board of Directors", href: "/team/board" },
      { label: "Advisory Committee", href: "/team/advisory" },
    ],
  },
  {
    heading: "Media",
    links: [
      { label: "News", href: "/media/news" },
      { label: "Publications", href: "/media/publications" },
      { label: "Videos", href: "/media/videos" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Book an Appointment", href: "/book-appointment" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Terms / Waiver", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Security Reporting", href: "/security" },
    ],
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        description="A complete index of all pages on the TryCycle website."
      />
      <section
        className="pb-20 lg:pb-28"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <SectionEyebrow className="mb-4 block">{s.heading}</SectionEyebrow>
                <ul className="space-y-2">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[0.85rem] hover:opacity-80 transition-opacity"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

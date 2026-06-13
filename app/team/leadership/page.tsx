import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the TryCycle leadership team — experts in digital health, community partnerships, Indigenous wellness, and social enterprise.",
};

const LEADERS = [
  {
    name: "John MacBeth",
    title: "Founder & CEO",
    bio: "For more than 20 years, John has been in the business of creating digital technologies and solutions. He holds a BA from Carleton University, an MA from The Graduate Institute (Connecticut), and is a PhD student at Carleton University and Trent University.",
    linkedin: "https://www.linkedin.com/in/john-d-macbeth-88888211/",
    initials: "JM",
  },
  {
    name: "Steve Burwash",
    title: "Chief Financial Officer",
    bio: "Finance executive with global experience in finance, accounting, and operations across cannabis, aerospace/defence, tech, and manufacturing. CPA with an MBA from the University of Ottawa.",
    linkedin: null,
    initials: "SB",
  },
  {
    name: "Ken House",
    title: "Cofounder & Director of Business Development",
    bio: "Member of the Oneida Nation of Wisconsin. Ken's background spans communications, governance, social services, and entrepreneurship. He holds an undergraduate degree from Georgetown University and a Master's in organizational leadership from The Graduate Institute.",
    linkedin: "https://www.linkedin.com/in/kenneth-g-house-jr-34918b8/",
    initials: "KH",
  },
  {
    name: "Kelly Gregoire",
    title: "Chief Operating Officer",
    bio: "Kelly has held senior management positions for more than 20 years in startups and established enterprises. She holds an Applied Management credential from Algonquin College.",
    linkedin: "https://www.linkedin.com/in/kgregoire/",
    initials: "KG",
  },
  {
    name: "Geoff Schaadt",
    title: "Chief Information Officer",
    bio: "Working at the intersection of technology and medical services for more than 25 years. Geoff holds degrees from Purdue University and the University of Arizona, and an MBA from the University of Ottawa.",
    linkedin: "https://www.linkedin.com/in/gschaadt/",
    initials: "GS",
  },
  {
    name: "Sam Silverman",
    title: "MD — Chief Medical Officer",
    bio: "Dr. Silverman directed an addiction medicine fellowship and served as Past-President of the Connecticut Chapter of the addiction medicine association. He is certified by the American Board of Psychiatry/Neurology and the American Board of Addiction Medicine.",
    linkedin: null,
    initials: "SS",
  },
  {
    name: "Cameron MacLeod",
    title: "VP, Strategy & Alliances",
    bio: "Working in the health and social services community since 1984, addressing the needs of marginalized populations. Cameron holds a Bachelor's from Carleton University (Sociology/Law) and has completed leadership programs at Queen's and the University of Toronto.",
    linkedin: "https://www.linkedin.com/in/cameron-macleod-6954913/",
    initials: "CM",
  },
  {
    name: "Donna Keogh",
    title: "Director of Nursing and Indigenous Business Development",
    bio: "Registered nurse with more than eight years of experience serving remote Northern Ontario First Nations communities. A dedicated advocate for culturally responsive care.",
    linkedin: "https://ca.linkedin.com/in/donna-keogh-156050277",
    initials: "DK",
  },
];

function LinkedInIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Leadership"
        description="The TryCycle leadership team brings together expertise in digital health, community partnerships, Indigenous wellness, and social enterprise."
      />

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LEADERS.map((person) => (
              <article
                key={person.name}
                className="flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[1rem] font-bold mb-4 shrink-0"
                  style={{
                    background: "oklch(0.65 0.12 185 / 0.15)",
                    color: "var(--color-teal)",
                    border: "1px solid oklch(0.65 0.12 185 / 0.25)",
                  }}
                  aria-hidden="true"
                >
                  {person.initials}
                </div>

                {/* Name + title */}
                <p
                  className="text-[0.95rem] font-bold leading-tight mb-1"
                  style={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    color: "var(--color-ivory)",
                  }}
                >
                  {person.name}
                </p>
                <p
                  className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-4 leading-snug"
                  style={{ color: "var(--color-teal)" }}
                >
                  {person.title}
                </p>

                {/* Bio */}
                <p
                  className="text-[0.80rem] leading-[1.70] flex-1 mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  {person.bio}
                </p>

                {/* LinkedIn */}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.75rem] font-medium transition-colors duration-150 mt-auto"
                    style={{ color: "var(--color-teal)" }}
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

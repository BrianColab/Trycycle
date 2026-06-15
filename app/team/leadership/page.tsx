import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the TryCycle leadership team — experts in digital health, community partnerships, Indigenous wellness, and social enterprise.",
};

const LEADERS = [
  {
    name: "John MacBeth",
    credentials: null,
    title: "Founder & CEO",
    bio: "For more than 20 years, John has been in the business of creating digital technologies and solutions. He holds a BA from Carleton University, an MA from The Graduate Institute, and is pursuing a PhD at Carleton and Trent Universities.",
    photo: "/images/team/JOHNMACBETH-2023.png",
    linkedin: "https://www.linkedin.com/in/john-d-macbeth-88888211/",
  },
  {
    name: "Steve Burwash",
    credentials: "CPA, MBA",
    title: "Chief Financial Officer",
    bio: "Finance executive with global experience across cannabis, aerospace/defence, tech, and manufacturing. MBA from the University of Ottawa.",
    photo: "/images/team/SteveBurwash.png",
    linkedin: null,
  },
  {
    name: "Ken House",
    credentials: null,
    title: "Cofounder & Director, Business Development",
    bio: "Member of the Oneida Nation of Wisconsin. Ken's background spans communications, governance, social services, and entrepreneurship. Master's in organizational leadership from The Graduate Institute.",
    photo: "/images/team/ken-house.png",
    linkedin: "https://www.linkedin.com/in/kenneth-g-house-jr-34918b8/",
  },
  {
    name: "Kelly Gregoire",
    credentials: null,
    title: "Chief Operating Officer",
    bio: "Senior management roles for more than 20 years in startups and established enterprises. Applied Management from Algonquin College.",
    photo: "/images/team/KELLYGREGOIRE-2023.png",
    linkedin: "https://www.linkedin.com/in/kgregoire/",
  },
  {
    name: "Geoff Schaadt",
    credentials: "MBA",
    title: "Chief Information Officer",
    bio: "Working at the intersection of technology and medical services for more than 25 years. Degrees from Purdue, University of Arizona, and an MBA from the University of Ottawa.",
    photo: "/images/team/GEOFFSCHAADT-2023.png",
    linkedin: "https://www.linkedin.com/in/gschaadt/",
  },
  {
    name: "Sam Silverman",
    credentials: "MD",
    title: "Chief Medical Officer",
    bio: "Directed an addiction medicine fellowship and served as Past-President of the Connecticut Chapter of the addiction medicine association. Board certified in Psychiatry/Neurology and Addiction Medicine.",
    photo: "/images/team/SAMSILVERMAN.png",
    linkedin: null,
  },
  {
    name: "Cameron MacLeod",
    credentials: null,
    title: "VP, Strategy & Alliances",
    bio: "Working in health and social services since 1984, addressing the needs of marginalized populations. BA from Carleton University, leadership programs at Queen's and University of Toronto.",
    photo: "/images/team/CAMMACLEOD-1.png",
    linkedin: "https://www.linkedin.com/in/cameron-macleod-6954913/",
  },
  {
    name: "Donna Keogh",
    credentials: "RN",
    title: "Director of Nursing & Indigenous Business Development",
    bio: "Registered nurse with more than eight years serving remote Northern Ontario First Nations communities. A dedicated advocate for culturally responsive care.",
    photo: "/images/team/DONNAKOEGH.png",
    linkedin: "https://ca.linkedin.com/in/donna-keogh-156050277",
  },
];

function LinkedInIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
        description="The people building TryCycle's mission — bringing decades of experience in digital health, Indigenous community partnerships, clinical medicine, and social enterprise."
      />

      <section className="py-16 lg:py-24" style={{ background: "oklch(0.96 0.006 60)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((person) => (
              <article
                key={person.name}
                className="group flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0 0 0 / 0.08)",
                  boxShadow: "0 2px 12px oklch(0 0 0 / 0.07)",
                }}
              >
                {/* Photo — overflow-hidden isolated here, not on article */}
                <div className="relative aspect-[4/5] rounded-t-2xl overflow-hidden bg-[oklch(0.88_0.005_240)]">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark gradient — name/title overlaid here */}
                  <div
                    className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4"
                    style={{
                      background: "linear-gradient(to top, oklch(0.10 0.04 240 / 0.92) 0%, oklch(0.10 0.04 240 / 0.60) 55%, transparent 100%)",
                    }}
                  >
                    <p
                      className="text-[0.95rem] font-bold leading-tight text-white mb-0.5"
                      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                    >
                      {person.name}
                      {person.credentials && (
                        <span className="font-normal text-[0.75rem] ml-1.5 text-white/60">{person.credentials}</span>
                      )}
                    </p>
                    <p
                      className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase leading-snug"
                      style={{ color: "oklch(0.75 0.12 185)" }}
                    >
                      {person.title}
                    </p>
                  </div>
                </div>

                {/* Text body */}
                <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                  {/* Teal accent rule */}
                  <div
                    className="w-8 h-[2px] mb-3 rounded-full"
                    style={{ background: "var(--color-teal)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-[0.80rem] leading-[1.72] flex-1"
                    style={{ color: "oklch(0.42 0.02 240)" }}
                  >
                    {person.bio}
                  </p>
                  {person.linkedin && (
                    <Link
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 self-start px-3 py-1.5 rounded-full text-[0.72rem] font-semibold transition-all duration-200 hover:opacity-80"
                      style={{
                        background: "oklch(0.20 0.10 240 / 0.08)",
                        color: "oklch(0.25 0.10 240)",
                        border: "1px solid oklch(0.20 0.10 240 / 0.14)",
                      }}
                      aria-label={`${person.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

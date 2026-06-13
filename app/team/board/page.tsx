import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the TryCycle Board of Directors — experienced leaders in life sciences, Indigenous advocacy, health insurance, and social enterprise.",
};

const BOARD = [
  {
    name: "Ken Newport",
    title: "Executive Chair",
    credentials: "CA, ICD.D",
    bio: "A Chartered Accountant by training, Ken is an entrepreneur and business executive with a focus on life sciences. He co-founded CroMedica Global Inc., growing it to 2,600 employees across 13 offices in 9 countries. Ken chairs BioCanRx, Canada's National Centre of Excellence for Immunotherapy Cancer Research, and has previously served the Ottawa Hospital Research Institute.",
    linkedin: "https://www.linkedin.com/in/ken-newport-bb846217/",
    initials: "KN",
  },
  {
    name: "Wendy Jocko",
    title: "Director",
    credentials: null,
    bio: "A leader and champion of Indigenous rights. Former Chief of Algonquins of Pikwàkanagàn First Nation, member of the Assembly of First Nations Veterans Council, and Indigenous Liaison for Innovation7. Recipient of an honourary degree from Algonquin College (2023). Her work focuses on reconciliation, government accountability, education, and equitable partnerships.",
    linkedin: "https://www.linkedin.com/in/wendy-jocko-89927ab8/",
    initials: "WJ",
  },
  {
    name: "John MacBeth",
    title: "Founder, TryCycle Data Systems",
    credentials: null,
    bio: "Over 25+ years, John has founded several companies leveraging technology to improve the lives of thousands of people. He holds a BA from Carleton University, an MA in Organizational Leadership from The Graduate Institute, and is pursuing a PhD at Carleton and Trent Universities. He is a long-standing advocate and ally for Indigenous peoples and Canadian Veterans.",
    linkedin: "https://www.linkedin.com/in/john-d-macbeth-88888211/",
    initials: "JM",
  },
  {
    name: "Jonathan Mayhew",
    title: "Director",
    credentials: null,
    bio: "Executive Vice President, Group Benefits at Guardian Life Insurance Company of America. Jonathan has an extensive track record in the health and insurance industries, with previous roles at Ontrak, CVS Health, Aetna, Freedom Disability, and Cigna. He also serves on the board of Strong Center, a non-profit youth empowerment organization.",
    linkedin: "https://www.linkedin.com/in/jonathan-mayhew-97894ba8/",
    initials: "JMy",
  },
  {
    name: "Brett Merriman",
    title: "CEO, TryCycle Data Systems",
    credentials: "CPA, CA",
    bio: "Brett brings 15+ years of executive experience helping growing companies across Commercial Real Estate, Oceanography, Security, Video Management (SaaS), and Amusement. He holds a Bachelor of Commerce from Carleton University and earned his CPA, CA designation in 2010.",
    linkedin: "https://www.linkedin.com/in/brett-merriman-cpa-ca/",
    initials: "BM",
  },
];

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Board of Directors"
        description="Experienced leaders in life sciences, Indigenous advocacy, health insurance, and social enterprise guiding TryCycle's mission."
      />

      <section
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((person) => (
              <article
                key={person.name}
                className="flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
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

                <p
                  className="text-[0.95rem] font-bold leading-tight mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {person.name}
                </p>
                {person.credentials && (
                  <p className="text-[0.72rem] font-medium mb-0.5" style={{ color: "var(--color-muted)" }}>
                    {person.credentials}
                  </p>
                )}
                <p
                  className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-4 leading-snug"
                  style={{ color: "var(--color-teal)" }}
                >
                  {person.title}
                </p>

                <p className="text-[0.80rem] leading-[1.70] flex-1 mb-4" style={{ color: "var(--color-muted)" }}>
                  {person.bio}
                </p>

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

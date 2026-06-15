import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    bio: "A Chartered Accountant by training, Ken is an entrepreneur and business executive with a focus on life sciences. He co-founded CroMedica Global Inc., growing it to 2,600 employees across 13 offices in 9 countries. Ken chairs BioCanRx, Canada's National Centre of Excellence for Immunotherapy Cancer Research.",
    photo: "/images/team/KENNEWPORT.webp",
    linkedin: "https://www.linkedin.com/in/ken-newport-bb846217/",
  },
  {
    name: "Wendy Jocko",
    title: "Director",
    credentials: null,
    bio: "A leader and champion of Indigenous rights. Former Chief of Algonquins of Pikwàkanagàn First Nation, member of the Assembly of First Nations Veterans Council, and Indigenous Liaison for Innovation7. Recipient of an honourary degree from Algonquin College (2023).",
    photo: "https://trycycle.ca/wp-content/uploads/2024/07/WENDYJOCKO-1.png",
    linkedin: "https://www.linkedin.com/in/wendy-jocko-89927ab8/",
  },
  {
    name: "John MacBeth",
    title: "Founder, TryCycle Data Systems",
    credentials: null,
    bio: "Over 25+ years, John has founded several companies leveraging technology to improve the lives of thousands of people. He holds a BA from Carleton University, an MA from The Graduate Institute, and is pursuing a PhD at Carleton and Trent Universities.",
    photo: "/images/team/JOHNMACBETH.webp",
    linkedin: "https://www.linkedin.com/in/john-d-macbeth-88888211/",
  },
  {
    name: "Jonathan Mayhew",
    title: "Director",
    credentials: null,
    bio: "Executive Vice President, Group Benefits at Guardian Life Insurance Company of America. Jonathan has an extensive track record in the health and insurance industries, with previous roles at CVS Health, Aetna, Freedom Disability, and Cigna.",
    photo: "/images/team/JONATHANMAYHEW.webp",
    linkedin: "https://www.linkedin.com/in/jonathan-mayhew-97894ba8/",
  },
  {
    name: "Brett Merriman",
    title: "CEO, TryCycle Data Systems",
    credentials: "CPA, CA",
    bio: "Brett brings 15+ years of executive experience helping growing companies across Commercial Real Estate, Oceanography, Security, Video Management (SaaS), and Amusement. He holds a Bachelor of Commerce from Carleton University and earned his CPA, CA designation in 2010.",
    photo: "/images/team/BMERRIMAN-2023.webp",
    linkedin: "https://www.linkedin.com/in/brett-merriman-cpa-ca/",
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
        title="Board of Directors"
        description="Experienced leaders in life sciences, Indigenous advocacy, health insurance, and social enterprise guiding TryCycle's mission."
      />

      <section
        className="py-16 lg:py-24 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOARD.map((person) => (
              <article
                key={person.name}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[oklch(0.92_0.006_60)]">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top, var(--color-card), transparent)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 p-5">
                  <p
                    className="text-[0.90rem] font-bold leading-tight mb-0.5"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    {person.name}
                    {person.credentials && (
                      <span className="font-normal text-[0.78rem] ml-1.5" style={{ color: "var(--color-muted)" }}>
                        {person.credentials}
                      </span>
                    )}
                  </p>
                  <p
                    className="text-[0.68rem] font-semibold tracking-[0.10em] uppercase mb-3 leading-snug"
                    style={{ color: "var(--color-teal)" }}
                  >
                    {person.title}
                  </p>
                  <p className="text-[0.78rem] leading-[1.65] flex-1 mb-4" style={{ color: "var(--color-muted)" }}>
                    {person.bio}
                  </p>
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.73rem] font-medium mt-auto transition-opacity duration-150 hover:opacity-70"
                    style={{ color: "var(--color-teal)" }}
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

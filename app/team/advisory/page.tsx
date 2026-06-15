import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Advisory Committee",
  description: "TryCycle's Advisory Committee brings specialized expertise in addiction medicine, behavioral health, oncology, veteran wellness, and justice reform.",
};

const ADVISORS = [
  {
    name: "Jonathan Craig Allen",
    credentials: "MD",
    title: "Medical Director, Rushford Center — Connecticut",
    bio: "Dr. Allen serves as Medical Director of Rushford Center, Chief of Psychiatry at Midstate Medical Center, and VP of Addiction Services for the Behavioral Health Network of Hartford Healthcare. He holds faculty appointments at UConn School of Medicine and Quinnipiac University, and advocates for prevention, screening, and treatment access for substance use disorders.",
    photo: "/images/team/JONATHANALLEN.webp",
  },
  {
    name: "Jennifer Black",
    credentials: "MA, LPC",
    title: "VP, Head of Business Development & Strategy, Beacon Health Options — Connecticut",
    bio: "A behavioral health professional with over 20 years' experience developing specialty programs. Jennifer leads regional sales strategy at Beacon Health Options. She holds a BA from Cornell University and an MA in Clinical Psychology from the University of Hartford.",
    photo: "/images/team/JENNIFERBLACK.png",
  },
  {
    name: "Henry Conter",
    credentials: "BESC, MD, MSF, MSC",
    title: "Strategic Health Care Partner, Hoffmann-La Roche — Ontario",
    bio: "Dr. Conter focuses on re-imagining how all types of people can take control of their care. He practices as a medical oncologist/hematologist at William Osler Health System and is an adjunct professor at Western University's Schulich School of Medicine & Dentistry.",
    photo: "/images/team/HENRYCONTER.png",
  },
  {
    name: "Joanne Gooley",
    credentials: null,
    title: "Director – Adult and Family Medicine, Kaiser Permanente — California",
    bio: "Director of five primary care sites in Sacramento. Joanne began as a Registered Dietitian, spent six years in public health, and transitioned to operations management in 2011. She holds degrees from Trent University, Western Ontario, and a Master's in Organizational Leadership from Chapman University.",
    photo: "/images/team/joannegooley.png",
  },
  {
    name: "Glynne Hines",
    credentials: "CMM, CD",
    title: "Major-General (ret'd) — Ontario",
    bio: "Joined the Canadian Armed Forces in 1970, serving as gunner, crew commander, naval officer on destroyers and submarines, and CELE communications officer. Deployed in the first Gulf War and to Sarajevo with NATO. Retired in 2011, Maj.-Gen. Hines now works with veterans experiencing mental health issues.",
    photo: "/images/team/GLYNNEHINES.png",
  },
  {
    name: "Michael Hines",
    credentials: "BS",
    title: "Deputy Director, Connecticut Judicial Branch – Court Support Services Division",
    bio: "Deputy Director III overseeing 100+ employees across five state regions. Michael started the first Opioid Diversion Program in Connecticut in 2015 and was appointed to represent the branch on the New England Regional Judicial Opioid Initiative in 2018. His career spans 31+ years in bail services and probation.",
    photo: "/images/team/MICHAELHINES.webp",
  },
  {
    name: "Richard Kopelman",
    credentials: null,
    title: "CEO and Managing Partner, Aprio — Georgia",
    bio: "Leads Aprio, a nationally-recognized top-50 CPA and advisory firm. Richard championed the firm's 2017 rebrand and directed combinations with 12+ firms, expanding to five regions. He believes investing in clients' success starts with investing in the firm's own people, culture, and capabilities.",
    photo: "/images/team/RICHARDKOPELMAN.webp",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Advisory Committee"
        description="Specialized expertise in addiction medicine, behavioral health, oncology, veteran wellness, and justice reform — advising TryCycle's strategic direction."
      />

      <section
        className="py-16 lg:py-24 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORS.map((person) => (
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
                  <p className="text-[0.78rem] leading-[1.65]" style={{ color: "var(--color-muted)" }}>
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

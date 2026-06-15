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
    bio: "Dr. Allen serves as Medical Director of Rushford Center, Chief of Psychiatry at Midstate Medical Center, and VP of Addiction Services for the Behavioral Health Network of Hartford Healthcare. He holds faculty appointments at UConn School of Medicine and Quinnipiac University.",
    photo: "/images/team/JONATHANALLEN.png",
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
    bio: "Deputy Director III overseeing 100+ employees across five state regions. Michael started the first Opioid Diversion Program in Connecticut in 2015 and was appointed to the New England Regional Judicial Opioid Initiative in 2018. His career spans 31+ years in bail services and probation.",
    photo: "/images/team/MICHAELHINES.png",
  },
  {
    name: "Richard Kopelman",
    credentials: null,
    title: "CEO and Managing Partner, Aprio — Georgia",
    bio: "Leads Aprio, a nationally-recognized top-50 CPA and advisory firm. Richard championed the firm's 2017 rebrand and directed combinations with 12+ firms, expanding to five regions. He believes investing in clients' success starts with investing in the firm's own people, culture, and capabilities.",
    photo: "/images/team/RICHARDKOPELMAN.png",
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

      <section className="py-16 lg:py-24" style={{ background: "oklch(0.96 0.006 60)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVISORS.map((person) => (
              <article
                key={person.name}
                className="group flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0 0 0 / 0.08)",
                  boxShadow: "0 2px 12px oklch(0 0 0 / 0.07)",
                }}
              >
                <div className="relative aspect-[4/5] rounded-t-2xl overflow-hidden bg-[oklch(0.88_0.005_240)]">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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

                <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                  <div
                    className="w-8 h-[2px] mb-3 rounded-full"
                    style={{ background: "var(--color-teal)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-[0.80rem] leading-[1.72]"
                    style={{ color: "oklch(0.42 0.02 240)" }}
                  >
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

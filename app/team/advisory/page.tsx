import type { Metadata } from "next";
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
    bio: "Dr. Allen serves as Medical Director of Rushford Center, Chief of Psychiatry at Midstate Medical Center, and Vice President of Addiction Services for the Behavioral Health Network of Hartford Healthcare. He holds faculty appointments at the University of Connecticut School of Medicine and Quinnipiac University, trains addiction medicine and psychiatry fellows, and advocates for prevention, screening, early intervention, and treatment access for substance use disorders.",
    initials: "JA",
  },
  {
    name: "Jennifer Black",
    credentials: "MA, LPC",
    title: "VP, Head of Business Development & Strategy, Beacon Health Options — Connecticut",
    bio: "A behavioral health professional with over 20 years' experience developing specialty programs. Jennifer leads regional sales strategy at Beacon Health Options and places individual and family whole health outcomes at the heart of all she does. She holds a BA from Cornell University and an MA in Clinical Psychology from the University of Hartford.",
    initials: "JB",
  },
  {
    name: "Henry Conter",
    credentials: "BESC, MD, MSF, MSC",
    title: "Strategic Health Care Partner, Hoffmann-La Roche — Ontario",
    bio: "Dr. Conter focuses on re-imagining how all types of people can take control of their care. He practices as a medical oncologist/hematologist at William Osler Health System and is an adjunct professor at Western University's Schulich School of Medicine & Dentistry. He holds degrees from Western Ontario (Mechanical Engineering), McMaster (Medicine), University of Alberta (HTA), and the University of Houston (Finance).",
    initials: "HC",
  },
  {
    name: "Joanne Gooley",
    credentials: null,
    title: "Director – Adult and Family Medicine, Kaiser Permanente — California",
    bio: "Director of five primary care sites in Sacramento. Joanne began as a Registered Dietitian working with chronic disease patients, spent six years in public health, and transitioned to operations management in 2011. She believes access to quality, affordable, respectful health care is essential for health and wellness. She holds degrees from Trent University, Western Ontario, and a Master's in Organizational Leadership from Chapman University.",
    initials: "JG",
  },
  {
    name: "Glynne Hines",
    credentials: "CMM, CD",
    title: "Major-General (ret'd) — Ontario",
    bio: "Joined the Canadian Armed Forces in 1970, serving as gunner, crew commander, naval officer on destroyers and submarines, and CELE communications officer. Deployed in the first Gulf War and to Sarajevo with NATO. Retired in 2011, Maj.-Gen. Hines now works with veterans experiencing mental health issues, bringing a life of service and deep compassion to TryCycle's mission.",
    initials: "GH",
  },
  {
    name: "Michael Hines",
    credentials: "BS",
    title: "Deputy Director, Connecticut Judicial Branch – Court Support Services Division",
    bio: "Deputy Director III overseeing 100+ employees across five state regions. Michael started the first Opioid Diversion Program in Connecticut in 2015 and was appointed to represent the branch on the New England Regional Judicial Opioid Initiative in 2018. His career spans 31+ years in bail services and probation. He holds a BS from Eastern Connecticut State University.",
    initials: "MH",
  },
  {
    name: "Richard Kopelman",
    credentials: null,
    title: "CEO and Managing Partner, Aprio — Georgia",
    bio: "Leads Aprio, a nationally-recognized top-50 CPA and advisory firm. Richard championed the firm's 2017 rebrand and directed combinations with 12+ firms, expanding to five regions. He believes investing in clients' success starts with investing in the firm's own people, culture, and capabilities.",
    initials: "RK",
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
        className="py-16 lg:py-20 section-light"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((person) => (
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
                  {person.credentials && (
                    <span className="font-normal text-[0.80rem] ml-1.5" style={{ color: "var(--color-muted)" }}>
                      {person.credentials}
                    </span>
                  )}
                </p>
                <p
                  className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-4 leading-snug"
                  style={{ color: "var(--color-teal)" }}
                >
                  {person.title}
                </p>

                <p className="text-[0.80rem] leading-[1.70]" style={{ color: "var(--color-muted)" }}>
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

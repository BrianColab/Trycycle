import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news and announcements from TryCycle — updates on our solutions, partnerships, and community impact.",
};

const NEWS = [
  {
    title: "Talking Stick FirstAlerts is saving lives in southern Saskatchewan",
    date: "Jun 27, 2025",
    url: "https://trycycle.ca/talking-stick-firstalerts-is-saving-lives-in-southern-saskatchewan/",
    image: "https://trycycle.ca/wp-content/uploads/2025/06/SaskToday-400x250.png",
    excerpt: "The Yorkton Tribal Council Emergency Management highlights how the First Alerts feature helps Indigenous communities locate missing persons quickly.",
    tag: "Community Impact",
  },
  {
    title: "Introducing Buddy's Quest for Indigenous Youth – A Gamified Mental Wellness App",
    date: "Jun 10, 2025",
    url: "https://trycycle.ca/introducing-buddys-quest-for-indigenous-youth-a-gamified-mental-wellness-app/",
    image: "https://trycycle.ca/wp-content/uploads/2025/06/June2025-BuddysQuest-400x250.png",
    excerpt: "TryCycle launches Buddy's Quest, a mobile game and wellness platform designed with Indigenous youth across Canada for mental health support.",
    tag: "Product Launch",
  },
  {
    title: "Talking Stick App among first of seven mental health apps nationally to earn Badge of Compliance",
    date: "May 29, 2025",
    url: "https://trycycle.ca/talking-stick-mhcc-compliance/",
    image: "https://trycycle.ca/wp-content/uploads/2025/05/TS-BLOG-MHCC-ORCHA-3-400x250.png",
    excerpt: "Talking Stick receives national recognition from the Mental Health Commission of Canada for compliance standards, one of only seven apps in the country.",
    tag: "Recognition",
  },
  {
    title: "The Burns Way Launches with Over 50 Volunteer Veteran Peers",
    date: "Jan 15, 2025",
    url: "https://trycycle.ca/the-burns-way-launches-with-over-50-volunteer-veteran-peers/",
    image: "https://trycycle.ca/wp-content/uploads/2025/01/TBW-NowLive-400x250.png",
    excerpt: "A new anonymous peer support program for Canadian veterans launches with over 50 volunteer peers ready to provide assistance.",
    tag: "Launch",
  },
  {
    title: "TryCycle Recognized in Deloitte's 2024 Technology Fast 50 Companies to Watch",
    date: "Nov 6, 2024",
    url: "https://trycycle.ca/trycycle-named-one-of-canadas-companies-to-watch-in-deloittes-technology-fast-50-program/",
    image: "https://trycycle.ca/wp-content/uploads/2024/11/TDSxDELOITTE-400x250.png",
    excerpt: "TryCycle ranks #12 among Canada's leading technology companies in Deloitte's Technology Fast 50 Program.",
    tag: "Recognition",
  },
  {
    title: "In memoriam – Steve Barban",
    date: "Nov 5, 2024",
    url: "https://trycycle.ca/in-memoriam-steve-barban/",
    image: "https://trycycle.ca/wp-content/uploads/2024/11/SteveBarban-400x250.png",
    excerpt: "Remembering Steve Barban, an original investor and steadfast supporter of TryCycle's mission, who passed away on October 30th, 2024.",
    tag: "Announcement",
  },
  {
    title: "TryCycle Ranks #20 on Canada's Top Growing Companies List",
    date: "Oct 2, 2024",
    url: "https://trycycle.ca/trycycle-ranks-20-in-the-globe-and-mails-2024-fastest-growing-companies-list/",
    image: "https://trycycle.ca/wp-content/uploads/2024/10/theGlobeandmail-400x250.png",
    excerpt: "TryCycle achieves a #20 ranking in the Globe and Mail's 2024 list of Canada's fastest-growing companies.",
    tag: "Recognition",
  },
  {
    title: "New veteran mental health initiative launches volunteer recruitment campaign",
    date: "Aug 12, 2024",
    url: "https://trycycle.ca/new-veteran-mental-health-initiative-launches-volunteer-recruitment-campaign/",
    image: "https://trycycle.ca/wp-content/uploads/2024/08/TBW-NEWS-PR-RECRUITMENT-400x250.png",
    excerpt: "The Burns Way begins recruitment of volunteer veteran peers to support fellow veterans through anonymous peer-to-peer chat.",
    tag: "Veterans",
  },
  {
    title: "Wendy Jocko joins TryCycle Data Systems Board of Directors",
    date: "Jul 3, 2024",
    url: "https://trycycle.ca/wendy-jocko-joins-trycycle-data-systems-board-of-directors/",
    image: "https://trycycle.ca/wp-content/uploads/2024/07/WENDY-JOCKO-1-400x250.png",
    excerpt: "Wendy Jocko, a 23-year Canadian Armed Forces veteran, joins the TryCycle board as a director, bringing deep experience in Indigenous advocacy and veteran affairs.",
    tag: "Team",
  },
  {
    title: "TryCycle receives $1M investment from the Government of Canada to scale and grow",
    date: "Jun 24, 2024",
    url: "https://trycycle.ca/trycycle-receives-1m-investment-from-the-government-of-canada-to-scale-and-grow/",
    image: "https://trycycle.ca/wp-content/uploads/2024/06/jennasudds-400x250.png",
    excerpt: "Government funding supports TryCycle's expansion into Indigenous, Veteran, First Responder, and Student markets across Canada.",
    tag: "Funding",
  },
  {
    title: "TryCycle extends their commitment to veterans at a reception with the Governor General of Canada",
    date: "Jun 6, 2024",
    url: "https://trycycle.ca/trycycle-data-extends-their-commitment-to-veterans-at-a-reception-with-the-governor-general-of-canada/",
    image: "https://trycycle.ca/wp-content/uploads/2024/06/MACBETH-MARYSIMON-400x250.png",
    excerpt: "TryCycle's founder and guests meet with Canada's Governor General in Regina, Saskatchewan to reaffirm the company's commitment to veteran wellness.",
    tag: "Community Impact",
  },
  {
    title: "Saskatchewan Blue Cross recognizes Talking Stick's contribution to health literacy",
    date: "May 22, 2024",
    url: "https://trycycle.ca/saskatchewan-blue-cross-recognizes-talking-sticks-contribution-to-health-literacy/",
    image: "https://trycycle.ca/wp-content/uploads/2024/05/bluecross-sask-400x250.png",
    excerpt: "Saskatchewan Blue Cross acknowledges Talking Stick's measurable positive impact on community health education and digital wellness literacy.",
    tag: "Recognition",
  },
] as const;

const TAG_COLORS: Record<string, string> = {
  "Community Impact": "oklch(0.22 0.07 155 / 0.15)",
  "Product Launch": "oklch(0.72 0.19 45 / 0.15)",
  "Recognition": "oklch(0.75 0.15 55 / 0.15)",
  "Launch": "oklch(0.72 0.19 45 / 0.15)",
  "Announcement": "oklch(0 0 0 / 0.06)",
  "Veterans": "oklch(0.38 0.06 240 / 0.15)",
  "Team": "oklch(0.72 0.19 45 / 0.15)",
  "Funding": "oklch(0.22 0.07 155 / 0.15)",
};

const TAG_TEXT: Record<string, string> = {
  "Community Impact": "var(--color-forest)",
  "Product Launch": "var(--color-teal)",
  "Recognition": "oklch(0.55 0.14 55)",
  "Launch": "var(--color-teal)",
  "Announcement": "var(--color-muted)",
  "Veterans": "var(--color-teal)",
  "Team": "var(--color-teal)",
  "Funding": "var(--color-forest)",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="News"
        description="The latest updates, announcements, and stories from TryCycle and the communities we serve."
      />
      <section
        className="py-16 lg:py-24 section-light"
        style={{ background: "oklch(0.97 0.005 60)" }}
      >
        <div className="mx-auto max-w-6xl px-6">

          {/* Featured article */}
          <Link
            href={NEWS[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mb-10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px] overflow-hidden">
                <Image
                  src={NEWS[0].image}
                  alt={NEWS[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-2.5 py-0.5 rounded-md text-[0.68rem] font-semibold tracking-wide uppercase"
                    style={{
                      background: TAG_COLORS[NEWS[0].tag] ?? "oklch(0 0 0 / 0.06)",
                      color: TAG_TEXT[NEWS[0].tag] ?? "var(--color-muted)",
                    }}
                  >
                    {NEWS[0].tag}
                  </span>
                  <span className="text-[0.75rem]" style={{ color: "var(--color-muted)" }}>
                    {NEWS[0].date}
                  </span>
                </div>
                <h2
                  className="text-[1.20rem] font-bold leading-tight mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  {NEWS[0].title}
                </h2>
                <p className="text-[0.85rem] leading-[1.75]" style={{ color: "var(--color-muted)" }}>
                  {NEWS[0].excerpt}
                </p>
                <p
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.80rem] font-semibold"
                  style={{ color: "var(--color-teal)" }}
                >
                  Read article
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.slice(1).map((article) => (
              <Link
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "oklch(1 0 0)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className="px-2 py-0.5 rounded text-[0.62rem] font-semibold tracking-wide uppercase"
                      style={{
                        background: TAG_COLORS[article.tag] ?? "oklch(0 0 0 / 0.06)",
                        color: TAG_TEXT[article.tag] ?? "var(--color-muted)",
                      }}
                    >
                      {article.tag}
                    </span>
                    <span className="text-[0.70rem]" style={{ color: "var(--color-muted)" }}>
                      {article.date}
                    </span>
                  </div>
                  <h3
                    className="text-[0.88rem] font-semibold leading-snug mb-2 flex-1"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[0.78rem] leading-[1.70] mb-4" style={{ color: "var(--color-muted)" }}>
                    {article.excerpt}
                  </p>
                  <p
                    className="inline-flex items-center gap-1 text-[0.75rem] font-semibold mt-auto"
                    style={{ color: "var(--color-teal)" }}
                  >
                    Read more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

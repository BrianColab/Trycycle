export type VideoCategory =
  | "All"
  | "Community"
  | "Veterans"
  | "Indigenous"
  | "Youth"
  | "Demos"
  | "News";

export const VIDEO_CATEGORIES: Exclude<VideoCategory, "All">[] = [
  "Community",
  "Veterans",
  "Indigenous",
  "Youth",
  "Demos",
  "News",
];

export interface Video {
  id: string;
  title: string;
  description: string;
  category: Exclude<VideoCategory, "All">;
  duration: string;
  featured: boolean;
  /* YouTube video ID — used for thumbnail and embed */
  youtubeId: string;
}

export const VIDEOS: Video[] = [
  // Featured (top 3)
  {
    id: "v1",
    title: "TryCycle: Innovative Solutions for Stronger Communities",
    description:
      "An overview of TryCycle's mission, our core solutions, and the communities we serve — from Indigenous wellness to veterans' health and youth programming.",
    category: "Community",
    duration: "4:12",
    featured: true,
    youtubeId: "dQw4w9WgXcQ", // placeholder
  },
  {
    id: "v2",
    title: "Buddy's Quest: Early Engagement for Youth Wellness",
    description:
      "A closer look at how Buddy's Quest uses evidence-informed, gamified approaches to build resilience and healthy connections with young people.",
    category: "Youth",
    duration: "3:48",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Ontario Legion Health: Supporting Veterans Through Technology",
    description:
      "How TryCycle partnered with the Royal Canadian Legion to develop a platform that helps veterans and their families find the support they deserve.",
    category: "Veterans",
    duration: "5:20",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  // Standard
  {
    id: "v4",
    title: "Talking Stick: Built With Indigenous Communities",
    description:
      "The story behind Talking Stick — a culturally grounded platform developed in partnership with Indigenous community leaders, knowledge keepers, and youth.",
    category: "Indigenous",
    duration: "6:05",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: "TetherAll Platform Demo",
    description:
      "A walkthrough of TetherAll's real-time coordination and insight tools, designed for service providers and community health organizations.",
    category: "Demos",
    duration: "7:33",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: "Community Impact: One Year with TryCycle",
    description:
      "Partners across Canada share what a year of working with TryCycle has meant for their communities and organizations.",
    category: "Community",
    duration: "8:14",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v7",
    title: "Prevention-Focused Technology in Action",
    description:
      "How TryCycle platforms shift service delivery from reactive to preventive — earlier engagement, better outcomes, healthier communities.",
    category: "Community",
    duration: "4:55",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v8",
    title: "Indigenous Youth and Digital Wellness",
    description:
      "Indigenous youth program coordinators discuss how TryCycle's culturally grounded tools are making a difference in their communities.",
    category: "Indigenous",
    duration: "5:42",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v9",
    title: "Buddy's Quest: Schools and Youth Wellness Programs",
    description:
      "Educators and program leads share their experience using Buddy's Quest in school-based wellness initiatives and after-school programs.",
    category: "Youth",
    duration: "3:29",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v10",
    title: "Veterans Mental Health: A Systems Approach",
    description:
      "A panel discussion on using technology to improve access to mental health information and peer support for veterans across Canada.",
    category: "Veterans",
    duration: "11:07",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v11",
    title: "TryCycle in the News: 2025 Highlights",
    description:
      "A roundup of TryCycle's media coverage, partnerships, and milestones from 2025 — a year of significant growth and community impact.",
    category: "News",
    duration: "2:58",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v12",
    title: "Booking a Demo: How It Works",
    description:
      "A short walkthrough of how to book an appointment with the TryCycle team — whether you're exploring a partnership, requesting a product demo, or connecting with our media team.",
    category: "Demos",
    duration: "1:45",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
];

export function getYoutubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

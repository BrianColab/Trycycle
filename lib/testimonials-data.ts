export type TestimonialCategory =
  | "All"
  | "Community"
  | "Healthcare"
  | "Veterans"
  | "Indigenous"
  | "Youth"
  | "Partners";

export const TESTIMONIAL_CATEGORIES: Exclude<TestimonialCategory, "All">[] = [
  "Community",
  "Healthcare",
  "Veterans",
  "Indigenous",
  "Youth",
  "Partners",
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organization: string;
  category: Exclude<TestimonialCategory, "All">;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  // Community
  {
    id: "t1",
    category: "Community",
    initials: "ML",
    name: "Maria L.",
    title: "Community Program Director",
    organization: "Northern Community Wellness Centre",
    quote:
      "TryCycle's approach to community technology is unlike anything we've seen before. Their team took the time to truly understand our community's needs before building anything. The result is a platform that actually gets used — which is the real measure of success.",
  },
  {
    id: "t2",
    category: "Community",
    initials: "DW",
    name: "David W.",
    title: "Executive Director",
    organization: "Community Health Alliance",
    quote:
      "We've worked with many technology vendors over the years. TryCycle stands out because they listen first and build second. The platform has meaningfully improved how we coordinate services across our region.",
  },
  {
    id: "t3",
    category: "Community",
    initials: "SR",
    name: "Sandra R.",
    title: "Outreach Coordinator",
    organization: "Urban Wellness Network",
    quote:
      "The real-time insight tools have changed how our team responds to community needs. We're identifying gaps earlier and connecting people to support faster. This is preventive care in action.",
  },

  // Healthcare
  {
    id: "t4",
    category: "Healthcare",
    initials: "JM",
    name: "Dr. James M.",
    title: "Medical Director",
    organization: "Regional Health Authority",
    quote:
      "TryCycle has built something genuinely useful for front-line health teams. The data visibility we now have allows us to intervene earlier and allocate resources where they're needed most. I've recommended their work to several of my colleagues.",
  },
  {
    id: "t5",
    category: "Healthcare",
    initials: "KP",
    name: "Karen P.",
    title: "Director of Community Health",
    organization: "Primary Care Network",
    quote:
      "What impressed us most was TryCycle's commitment to data privacy and security. In the healthcare space, trust is everything. Their team understood that from day one and built systems that our clinical staff and patients can trust.",
  },
  {
    id: "t6",
    category: "Healthcare",
    initials: "AP",
    name: "Angela P.",
    title: "Mental Health Systems Lead",
    organization: "Provincial Health Services",
    quote:
      "TetherAll has transformed how our mental health teams coordinate across sites. We've reduced response time and improved follow-through on referrals significantly. It's the kind of operational improvement that directly affects patient outcomes.",
  },

  // Veterans
  {
    id: "t7",
    category: "Veterans",
    initials: "RB",
    name: "Robert B.",
    title: "Branch President",
    organization: "Royal Canadian Legion, Ontario Command",
    quote:
      "Ontario Legion Health has given our branch members something we've been trying to build for years — easy, dignified access to information about the supports available to them. The TryCycle team understood the veterans community and delivered a solution that reflects our values.",
  },
  {
    id: "t8",
    category: "Veterans",
    initials: "CL",
    name: "Colonel (Ret.) Carol L.",
    title: "Veterans Programs Advisor",
    organization: "Canadian Armed Forces Veterans Network",
    quote:
      "Veterans deserve technology that respects their service and their time. TryCycle delivered exactly that. The platform is straightforward, private, and genuinely useful — no gimmicks, no unnecessary complexity.",
  },
  {
    id: "t9",
    category: "Veterans",
    initials: "TH",
    name: "Thomas H.",
    title: "Program Manager",
    organization: "Veterans Transition Network",
    quote:
      "We've seen veterans engage with Ontario Legion Health who wouldn't normally reach out for support. The platform lowers the barrier in a meaningful way. That alone makes this partnership worthwhile.",
  },

  // Indigenous
  {
    id: "t10",
    category: "Indigenous",
    initials: "EJ",
    name: "Elder Jean",
    title: "Knowledge Keeper",
    organization: "First Nations Health Council",
    quote:
      "TryCycle earned our trust by listening. They did not arrive with a solution ready-made. They sat with our community, they learned from us, and they built something that reflects who we are. Talking Stick is a tool we can call our own.",
  },
  {
    id: "t11",
    category: "Indigenous",
    initials: "RC",
    name: "Rebecca C.",
    title: "Health Director",
    organization: "Tribal Council Health Authority",
    quote:
      "We were skeptical at first — we've seen too many technology projects imposed on communities rather than built with them. TryCycle is different. They operate from a place of respect and they follow through on their commitments.",
  },
  {
    id: "t12",
    category: "Indigenous",
    initials: "NF",
    name: "Nathan F.",
    title: "Youth Program Coordinator",
    organization: "Indigenous Youth Wellness Initiative",
    quote:
      "Our young people are digital natives and they're discerning about the tools they use. The fact that they've embraced Buddy's Quest speaks to the quality and cultural relevance of what TryCycle built. It feels like it belongs in our community.",
  },

  // Youth
  {
    id: "t13",
    category: "Youth",
    initials: "MA",
    name: "Michelle A.",
    title: "Program Lead",
    organization: "Youth Wellness Foundation",
    quote:
      "Buddy's Quest meets young people where they are. It doesn't feel like a clinical tool — it feels like something designed for them, by people who actually understand young people. We've seen real engagement and real impact.",
  },
  {
    id: "t14",
    category: "Youth",
    initials: "LS",
    name: "Liam S.",
    title: "School-Based Support Worker",
    organization: "District School Board",
    quote:
      "I've tried a lot of apps and platforms aimed at youth wellness. Most of them don't last more than a few sessions before kids lose interest. Buddy's Quest is different — the kids keep coming back, and they're telling their friends about it.",
  },

  // Partners
  {
    id: "t15",
    category: "Partners",
    initials: "GH",
    name: "Grace H.",
    title: "Director of Innovation",
    organization: "Government Health Ministry",
    quote:
      "TryCycle represents exactly the kind of thoughtful, evidence-informed health technology we want to support. They combine technical excellence with deep community understanding — that combination is rare and valuable.",
  },
  {
    id: "t16",
    category: "Partners",
    initials: "PD",
    name: "Patrick D.",
    title: "Strategic Partnerships Lead",
    organization: "National Health Innovation Fund",
    quote:
      "We've funded many health technology initiatives. TryCycle consistently ranks among the strongest for their engagement model, their delivery against milestones, and most importantly, the real-world outcomes their platforms support.",
  },
];

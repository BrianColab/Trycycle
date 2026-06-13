export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory =
  | "General"
  | "Privacy and Security"
  | "Solutions"
  | "Partnerships"
  | "Appointments"
  | "Support";

export const FAQ_CATEGORIES: FaqCategory[] = [
  "General",
  "Privacy and Security",
  "Solutions",
  "Partnerships",
  "Appointments",
  "Support",
];

export const FAQ_ITEMS: FaqItem[] = [
  // General
  {
    id: "g1",
    category: "General",
    question: "What is TryCycle?",
    answer:
      "TryCycle is a health-tech and community-tech organization that develops innovative digital solutions for Indigenous communities, veterans, youth, and healthcare organizations. Our tools are designed to strengthen community wellbeing, improve early engagement, and provide real-time insight for service providers.",
  },
  {
    id: "g2",
    category: "General",
    question: "Who are TryCycle's solutions designed for?",
    answer:
      "Our solutions serve a wide range of communities and organizations, including Indigenous health and wellness programs, veterans' services, youth-focused organizations, and community health providers. Each solution is adapted to the specific needs and context of the communities it serves.",
  },
  {
    id: "g3",
    category: "General",
    question: "Where is TryCycle based?",
    answer:
      "TryCycle is based in Canada, with operations and partnerships across multiple provinces. We work closely with community partners, healthcare organizations, and government stakeholders to deliver meaningful outcomes.",
  },
  {
    id: "g4",
    category: "General",
    question: "How do I learn more about a specific solution?",
    answer:
      "Visit the Our Solutions section of our website to find dedicated pages for Buddy's Quest, Talking Stick, TetherAll, and Ontario Legion Health. Each page describes the solution's purpose, features, and the communities it serves. You can also book an appointment with our team to discuss any solution in detail.",
  },
  {
    id: "g5",
    category: "General",
    question: "Does TryCycle offer clinical or crisis services?",
    answer:
      "No. TryCycle develops technology platforms and digital tools — we do not provide clinical, therapeutic, or crisis services. Our appointment booking is for organizational meetings, demos, partnerships, and media inquiries only. If you or someone you know is in crisis, please contact your local emergency services or a crisis helpline immediately.",
  },

  // Privacy and Security
  {
    id: "ps1",
    category: "Privacy and Security",
    question: "How does TryCycle handle personal data?",
    answer:
      "TryCycle is committed to responsible data practices. We collect only the information necessary to deliver and improve our services. All data is handled in accordance with applicable Canadian privacy legislation, including PIPEDA. Please review our Privacy Notice for full details.",
  },
  {
    id: "ps2",
    category: "Privacy and Security",
    question: "Is community data shared with third parties?",
    answer:
      "Community data is not shared with third parties for commercial purposes. Where data sharing is required to deliver a service — for example, with a healthcare partner or government funder — this is done only with appropriate consent and data-sharing agreements in place.",
  },
  {
    id: "ps3",
    category: "Privacy and Security",
    question: "How do I report a security concern?",
    answer:
      "If you discover a potential security vulnerability or data concern related to any TryCycle platform, please report it through our Security Reporting page. We take all reports seriously and respond promptly. Please do not disclose security issues publicly until we have had the opportunity to address them.",
  },
  {
    id: "ps4",
    category: "Privacy and Security",
    question: "Are TryCycle platforms compliant with Canadian privacy law?",
    answer:
      "Yes. Our platforms are designed to meet applicable Canadian federal and provincial privacy requirements. We work with legal counsel and privacy experts to ensure our systems and policies remain compliant as regulations evolve.",
  },

  // Solutions
  {
    id: "s1",
    category: "Solutions",
    question: "What is Buddy's Quest?",
    answer:
      "Buddy's Quest is an evidence-informed digital tool designed to support early engagement and prevention for youth. It uses interactive, gamified approaches to build resilience, social connections, and healthy coping strategies. It is intended to complement — not replace — existing community and clinical resources.",
  },
  {
    id: "s2",
    category: "Solutions",
    question: "What is Talking Stick?",
    answer:
      "Talking Stick is a culturally grounded platform developed in collaboration with Indigenous communities. It is designed to support community wellbeing, connection, and knowledge-sharing in ways that respect and reflect Indigenous values and protocols. Development is guided by community partners throughout.",
  },
  {
    id: "s3",
    category: "Solutions",
    question: "What is TetherAll?",
    answer:
      "TetherAll is a real-time insight and coordination tool for service providers and community organizations. It is designed to improve visibility, communication, and early identification of needs — helping organizations respond more effectively and efficiently.",
  },
  {
    id: "s4",
    category: "Solutions",
    question: "What is Ontario Legion Health?",
    answer:
      "Ontario Legion Health is a digital health initiative developed in partnership with the Royal Canadian Legion's Ontario Command, designed to support the wellness of veterans and their families. It provides accessible tools and information to help veterans navigate available supports.",
  },
  {
    id: "s5",
    category: "Solutions",
    question: "Can our organization pilot a TryCycle solution?",
    answer:
      "Yes. We work with organizations to assess fit and design appropriate pilots. To start a conversation, book an appointment with our Partnerships or Product Demo team. We'll discuss your organization's needs, the relevant solution, and what a pilot would involve.",
  },

  // Partnerships
  {
    id: "p1",
    category: "Partnerships",
    question: "How do I explore a partnership with TryCycle?",
    answer:
      "We welcome inquiries from healthcare organizations, Indigenous governing bodies, government agencies, academic institutions, and community groups. Book an appointment with our Partnerships team through the booking form on this site, or contact us directly through our Contact page.",
  },
  {
    id: "p2",
    category: "Partnerships",
    question: "Does TryCycle work with government funders?",
    answer:
      "Yes. Several of our initiatives have received support from federal and provincial government partners. We are experienced in working within the requirements of public sector funding arrangements and are open to discussing grant-funded or publicly supported partnership models.",
  },
  {
    id: "p3",
    category: "Partnerships",
    question: "How are Indigenous communities involved in TryCycle solutions?",
    answer:
      "Indigenous community involvement is built into the development process for relevant solutions — not added after the fact. For products like Talking Stick, Indigenous community partners are central to governance, design, and evaluation. We are committed to self-determination and community-led approaches.",
  },
  {
    id: "p4",
    category: "Partnerships",
    question: "Does TryCycle offer co-development or white-label arrangements?",
    answer:
      "Depending on the nature of the partnership, we can discuss co-development arrangements, licensing, or tailored deployment options. Please reach out through our Partnerships contact to begin a conversation.",
  },

  // Appointments
  {
    id: "a1",
    category: "Appointments",
    question: "What types of appointments can I book?",
    answer:
      "Our booking form is for demos, partnerships, media inquiries, program inquiries, and general organizational meetings. It is not for emergency, crisis, counselling, treatment, clinical support, or urgent help. If you need clinical or crisis support, please contact appropriate local services.",
  },
  {
    id: "a2",
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "Visit our Book an Appointment page. You will select a staff member based on your inquiry type, choose a date and time, and provide your contact information and the reason for your meeting. You will receive a confirmation email once your booking is submitted.",
  },
  {
    id: "a3",
    category: "Appointments",
    question: "What are the available appointment times?",
    answer:
      "Appointments are available on weekdays (Monday to Friday) between 9:00 AM and 3:00 PM. Weekend and holiday appointments are not available through the online booking system. If you need an alternative arrangement, please contact us directly.",
  },
  {
    id: "a4",
    category: "Appointments",
    question: "Can I cancel or reschedule an appointment?",
    answer:
      "If you need to cancel or reschedule, please contact us as soon as possible using the email address in your confirmation. We ask for at least 24 hours' notice when possible so we can make the time available to others.",
  },
  {
    id: "a5",
    category: "Appointments",
    question: "Which staff member should I book with?",
    answer:
      "On the booking page, each staff member is listed with their area of focus. Choose the person whose role best matches your inquiry: Partnerships, Product Demo, Technical Questions, Community Programs, or Media and General Inquiries. If you are unsure, the Media / General Inquiry option is a good starting point.",
  },

  // Support
  {
    id: "su1",
    category: "Support",
    question: "Who do I contact for technical support?",
    answer:
      "For technical questions related to a TryCycle platform your organization is using, please contact us through the Contact page. For general technical inquiries, you can also book an appointment with our Technical Questions staff member.",
  },
  {
    id: "su2",
    category: "Support",
    question: "Is there documentation available for TryCycle platforms?",
    answer:
      "Documentation for specific platforms is provided to partner organizations as part of onboarding. If you require access to documentation for a platform your organization is using, please contact us directly.",
  },
  {
    id: "su3",
    category: "Support",
    question: "How do I submit feedback about a TryCycle product?",
    answer:
      "We value feedback from community partners and users. You can share feedback through the Contact page or through the feedback mechanisms built into specific platforms. Partner organizations can also raise feedback directly with their TryCycle account contact.",
  },
];

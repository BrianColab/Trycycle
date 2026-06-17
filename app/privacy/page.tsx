import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "TryCycle's privacy notice — how we collect, use, and protect personal information across Talking Stick, TetherAll, and Buddy's Quest.",
};

const NOTICES = [
  { id: "talking-stick", label: "Talking Stick", updated: "October 2024" },
  { id: "tetherall",     label: "TetherAll",     updated: "October 2024" },
  { id: "buddys-quest",  label: "Buddy's Quest",  updated: "February 2025" },
] as const;

/* ── Shared prose helpers ── */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[1.15rem] font-bold mb-4 mt-10 first:mt-0"
      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[0.90rem] font-semibold mb-2 mt-6"
      style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.24 0.04 240)" }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.83rem] leading-[1.80] mb-3" style={{ color: "oklch(0.38 0.02 240)" }}>
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 space-y-1.5 pl-5" style={{ listStyleType: "disc" }}>
      {children}
    </ul>
  );
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[0.83rem] leading-[1.75]" style={{ color: "oklch(0.38 0.02 240)" }}>
      {children}
    </li>
  );
}

function SectionDivider({ id, title, updated }: { id: string; title: string; updated: string }) {
  return (
    <div
      id={id}
      className="flex items-center justify-between rounded-xl px-5 py-4 mb-8 scroll-mt-24"
      style={{ background: "oklch(0.72 0.19 45 / 0.07)", border: "1px solid oklch(0.72 0.19 45 / 0.18)" }}
    >
      <h2
        className="text-[1rem] font-bold"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.18 0.04 240)" }}
      >
        {title} Privacy Notice
      </h2>
      <span className="text-[0.72rem] font-medium shrink-0 ml-4" style={{ color: "oklch(0.52 0.04 240)" }}>
        Last updated: {updated}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Notice"
        description="How TryCycle collects, uses, and protects personal information across our platforms."
      />

      <section
        className="pb-20 lg:pb-28 section-light"
        style={{ background: "var(--color-navy)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-4xl px-6">

          {/* Jump links */}
          <nav
            className="sticky top-16 z-20 -mx-6 px-6 py-3 mb-10 flex gap-3 overflow-x-auto"
            aria-label="Privacy notices"
            style={{ background: "oklch(0.97 0.005 60 / 0.95)", borderBottom: "1px solid oklch(0 0 0 / 0.07)", backdropFilter: "blur(8px)" }}
          >
            {NOTICES.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="shrink-0 text-[0.75rem] font-semibold px-3 py-1.5 rounded transition-colors duration-150 hover:opacity-80"
                style={{ background: "oklch(0.72 0.19 45 / 0.10)", color: "oklch(0.48 0.15 45)" }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* ══════════════════════════════════
              TALKING STICK
          ══════════════════════════════════ */}
          <SectionDivider id="talking-stick" title="Talking Stick" updated="October 2024" />

          <H2>1. Purpose of this privacy notice</H2>
          <P>
            This notice covers collection, use and disclosure of Personal Information by TryCycle Data Systems Inc.
            regarding the Talking Stick mobile application. The platform serves as an anonymous peer support platform
            for Indigenous Canadians designed to minimize personal data collection. Users need not create accounts.
          </P>
          <P>
            The app includes an emergency response system called First Alerts that will never ask you to share your
            phone number, email address, or identity.
          </P>
          <P>
            Users under 13 are not permitted. Parents believing their child's information was collected should contact
            TryCycle immediately for removal.
          </P>

          <H2>2. Information we collect about you, how we collect it and how we use it</H2>
          <P>
            <strong>Personal Information</strong> is defined as information identifying individuals, excluding publicly
            available business contact information.
          </P>
          <H3>Technical device information</H3>
          <P>
            The platform collects device type, identifier, operating system, language, usage duration, notification
            counts, and access timestamps. These uses include:
          </P>
          <UL>
            <LI>Service delivery</LI>
            <LI>Feature utilization understanding</LI>
            <LI>Product troubleshooting and optimization</LI>
            <LI>Push notification delivery</LI>
            <LI>Device blocking for harassment violations</LI>
            <LI>Legal compliance</LI>
          </UL>
          <H3>Chat history</H3>
          <P>
            We reserve the right to save chat history in cases of harassment, abuse, or if personal safety is
            considered at risk.
          </P>
          <H3>Non-confidential information</H3>
          <P>User submissions and feedback are deemed non-confidential unless stated otherwise.</P>
          <H3>Cookies</H3>
          <P>
            Automated technologies collect interaction data. Details appear in our{" "}
            <Link href="/cookies" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "oklch(0.55 0.17 45)" }}>
              Cookies Notice
            </Link>
            .
          </P>

          <H2>3. When and to whom we disclose your Personal Information</H2>
          <P>TryCycle will never sell your Personal Information.</P>
          <P>Disclosure occurs only in exceptional circumstances:</P>
          <UL>
            <LI>Legal requirements or court orders</LI>
            <LI>Terms and Conditions enforcement</LI>
            <LI>Emergency situations threatening life, health, or security</LI>
            <LI>Pursuing available remedies or limiting damages</LI>
          </UL>
          <P>
            Third-party service providers (Microsoft, PostHog, Raygun) host servers and prevent software errors.
            Access to information is strictly controlled by our agreements with these service providers.
          </P>

          <H2>4. How we protect your Personal Information</H2>
          <P>
            Security practices follow commercially reasonable practices against unauthorized access, loss, alteration,
            disclosure, and destruction.
          </P>
          <P>
            Data storage uses Microsoft Azure at a data center in Canada. Azure maintains ISO Standard 27018 Code of
            Practice certification for personal data protection.
          </P>
          <P>
            Any transmission of Personal Information is at your own risk due to internet transmission limitations.
            Encryption protects information in transit and at rest.
          </P>
          <P>
            Authorized employees bound by confidentiality agreements access sensitive data. Violations result in
            appropriate disciplinary measures, including dismissal.
          </P>
          <P>
            Third-party websites linked within the app operate independently. This notice does not extend to the
            collection of information by third parties.
          </P>

          <H2>5. Retention of your Personal Information</H2>
          <P>
            Information retention matches necessity for collection purposes, including legal and reporting requirements
            plus liability protection.
          </P>
          <P>
            All text messages sent through Talking Stick will be automatically deleted upon the termination of the
            chat session, except where abuse or safety concerns require retention.
          </P>

          <H2>6. Changes to this Privacy Notice</H2>
          <P>
            The platform reserves modification rights. Material changes require notification and consent. The current
            version constitutes the effective notice.
          </P>

          <H2>7. Governing law</H2>
          <P>
            This notice shall, in all respects, be governed by and interpreted, construed and enforced in accordance
            with applicable provincial and federal laws of Canada.
          </P>
          <P>
            For First Nations Communities users, TryCycle complies with First Nations Principles of ownership,
            control, access and possession (OCAP).
          </P>

          <H2>8. Correcting or updating information and withdrawing consent</H2>
          <P>
            Users may request access to and correction of Personal Information. Identity verification may be required.
          </P>
          <P>Requests may be denied if:</P>
          <UL>
            <LI>Identity cannot be confirmed</LI>
            <LI>Information retrieval burden exceeds proportionate value</LI>
            <LI>Information doesn't exist or cannot be located</LI>
            <LI>Disclosure compromises another person's confidentiality or safety</LI>
            <LI>Legal non-disclosure requirements apply</LI>
          </UL>
          <P>Declined requests receive documented reasons, subject to legal restrictions.</P>

          <H2>9. Contacting us</H2>
          <P>
            Geoff Schaadt serves as Chief Privacy Officer, managing privacy assessments and risk mitigation procedures.
          </P>
          <div
            className="rounded-xl p-5 mt-2 mb-8 text-[0.82rem] leading-relaxed"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.08)", color: "oklch(0.38 0.02 240)" }}
          >
            <p className="font-semibold mb-1" style={{ color: "oklch(0.20 0.04 240)" }}>TryCycle Data Systems Inc.</p>
            <p>7 Bayview Station Rd</p>
            <p>Ottawa, ON K1Y 2C5</p>
            <p className="mt-1">
              <a href="mailto:privacy@trycycle.ca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "oklch(0.55 0.17 45)" }}>
                privacy@trycycle.ca
              </a>
            </p>
          </div>

          {/* ══════════════════════════════════
              TETHERALL
          ══════════════════════════════════ */}
          <SectionDivider id="tetherall" title="TetherAll" updated="October 2024" />

          <H2>1. Purpose of this privacy notice</H2>
          <P>
            This notice addresses collection, use, and disclosure of Personal Information and Personal Health
            Information by TryCycle for the TetherAll App and associated websites (trycycle.ca, my.tetherall.io).
          </P>
          <P>
            Users provide consent by accessing these platforms. Healthcare providers act as health information
            custodians with primary responsibility for protecting records. TryCycle typically functions as an agent
            on their behalf.
          </P>
          <P>
            In HIPAA contexts, TryCycle may operate as a Business Associate. When applicable, healthcare provider
            HIPAA Notices govern Protected Health Information treatment, not this document.
          </P>
          <P>
            Users under 13 are excluded. U.S. parents suspecting child data collection must contact TryCycle
            immediately for removal under COPPA compliance.
          </P>

          <H2>2. Information we collect about you and how we collect it</H2>
          <P>
            <strong>Personal Information</strong> encompasses identifiable individual data excluding publicly available
            business contact information. Collected Personal Information includes:
          </P>
          <UL>
            <LI>Name, contact information (email, phone)</LI>
            <LI>Demographics (race, sex, date of birth, marital status)</LI>
            <LI>User profile additions</LI>
            <LI>Correspondence records</LI>
          </UL>
          <P>
            <strong>Personal Health Information</strong> encompasses:
          </P>
          <UL>
            <LI>Physical or mental health information</LI>
            <LI>Family health history</LI>
            <LI>Healthcare service provision details</LI>
            <LI>Health identification numbers</LI>
            <LI>Any information in records containing health details</LI>
          </UL>
          <H3>Information you input</H3>
          <P>
            Active app entries including real-time behavioral input and free-form text entries (i.e., messages and logs).
          </P>
          <H3>Mobile device information</H3>
          <P>
            Location data from GPS, Wi-Fi, and cell towers (collected with consent, withdrawable anytime). The system
            also collects accelerometer samples, Wi-Fi network identifications and other activity data. Device
            information includes type, identifier, IP address, operating system, browser type, timezone, cookies,
            carrier, language, battery performance, network connections, usage duration, notification counts, and
            access timestamps.
          </P>
          <P>
            Most mobile operating systems share health and fitness data with the app, covering physical activity,
            mindfulness, sleep patterns, nutrition, heart rate, reproductive health and other data.
          </P>
          <H3>Healthcare provider input</H3>
          <P>
            Providers record Personal and Personal Health Information including interactions with you, test results,
            evaluations, treatment records and notes. Providers may access, use, and disclose information users upload.
          </P>

          <H2>3. How we use your Personal Information and Personal Health Information</H2>
          <P>Health information use remains strictly as is necessary in the course of providing our services.</P>
          <H3>Uses on custodian behalf include</H3>
          <UL>
            <LI>Website and app delivery</LI>
            <LI>Communication facilitation between users and providers</LI>
            <LI>SMS, mobile, and email notifications for system events</LI>
            <LI>Information and documentation sharing platform between users and providers</LI>
            <LI>Preference storage enabling personalization</LI>
            <LI>User recognition upon return</LI>
            <LI>Purposes with explicit user consent</LI>
          </UL>
          <H3>Uses for TryCycle purposes include</H3>
          <UL>
            <LI>Data de-identification and anonymization</LI>
            <LI>Feature and service access understanding</LI>
            <LI>Product troubleshooting, enhancement, and optimization</LI>
            <LI>Contract obligation fulfillment and legal compliance</LI>
            <LI>Transaction completion</LI>
            <LI>Misuse and fraud pattern screening</LI>
            <LI>Audience estimation and trend analysis</LI>
            <LI>Purposes with explicit user consent</LI>
          </UL>
          <P>
            The platform uses machine learning techniques and artificial intelligence to analyze de-identified data.
            Results provide providers with a triaged view of their patient population based on risk assessments,
            current risk assessment of each patient, and immediate and historical patient data.
          </P>
          <P>Market or product research uses only de-identified or anonymized information.</P>

          <H2>4. When and to whom we disclose your Personal Information and Personal Health Information</H2>
          <P>TryCycle will never sell your Personal Information or Personal Health Information.</P>
          <P>Disclosure occurs through:</P>
          <UL>
            <LI>Legal requirements or authorizations</LI>
            <LI>Court or government orders</LI>
            <LI>Terms and Conditions enforcement</LI>
            <LI>Rights, privacy, safety, or property protection of identifiable persons or groups, including fraud prevention</LI>
            <LI>Available remedies pursuit or damage limitation</LI>
            <LI>Publicly available information</LI>
          </UL>
          <P>
            Third-party service providers (Microsoft, Raygun, and Mailgun) host servers in Canada and U.S., prevent
            software errors, and manage email and login invitations. Access to information is strictly controlled in
            accordance with our safeguards.
          </P>

          <H2>5. How we protect your Personal Information and Personal Health Information</H2>
          <P>
            Information safety follows commercially reasonable practices against loss and unauthorized access, use,
            alteration, disclosure, and destruction.
          </P>
          <P>
            Data storage uses Microsoft Azure at a data centre in Canada for Canadian residents and at a data center
            in the United States for residents of the United States. Azure maintains ISO Standard 27018 Code of
            Practice certification for personal identifiable information protection.
          </P>
          <P>
            All information receives encryption in transit and at rest. Account safeguards include username and
            password authentication. Users must maintain password confidentiality and immediately report suspected
            compromise.
          </P>
          <P>
            Authorized employees bound by confidentiality agreements access sensitive information. Violations result
            in appropriate disciplinary measures, including dismissal.
          </P>

          <H2>6. Retention of your Personal Information and Personal Health Information</H2>
          <P>
            Information retention continues only as long as is necessary to fulfill the purposes for which we
            collected it on behalf of custodians, plus legal and reporting requirements and liability protection.
          </P>
          <P>
            The platform reserves rights to publish aggregated, anonymized, and de-identified data for legitimate
            business purposes including analytical procedures and service improvement, without further notice to you
            and without your consent.
          </P>

          <H2>7. Knowledge and consent</H2>
          <P>
            Where legally required, TryCycle seeks consent for collection, use, and disclosure on custodian behalf.
            Voluntary information provision implies consent for stated purposes.
          </P>
          <P>
            Users may withdraw consent at any time, subject to legal restrictions and reasonable notice. Withdrawal
            implications will be communicated, potentially including service inability.
          </P>

          <H2>8. Changes to this privacy notice</H2>
          <P>
            The platform reserves modification rights. Material changes require notification via website, apps, or
            email with express consent as legally required. Update dates appear at notice top.
          </P>

          <H2>9. Governing law</H2>
          <P>
            This notice shall, in all respects, be governed by and interpreted, construed and enforced in accordance
            with applicable provincial and federal laws of Canada and the applicable laws within the United States.
          </P>
          <P>
            First Nations Community users receive OCAP compliance from TryCycle working with community leaders.
          </P>

          <H2>10. Correcting or updating information and withdrawing consent</H2>
          <P>
            No mechanism exists for users to edit, alter, or delete submitted information. Contact TryCycle for
            corrections.
          </P>
          <P>
            Users possess legal rights to request access to and to correct the Personal Information and Personal
            Health Information that we hold about you. Identity verification may be requested.
          </P>
          <P>Request denial circumstances include:</P>
          <UL>
            <LI>Unconfirmed identity</LI>
            <LI>Disproportionate retrieval burden or cost</LI>
            <LI>Non-existent or unfindable information</LI>
            <LI>Confidentiality compromise or safety threats to others</LI>
            <LI>Legally required non-disclosure</LI>
          </UL>

          <H2>11. Contacting us</H2>
          <P>
            Geoff Schaadt serves as Chief Privacy Officer, conducting regular privacy and threat assessments and
            adopting risk mitigation policies and procedures.
          </P>
          <div
            className="rounded-xl p-5 mt-2 mb-8 text-[0.82rem] leading-relaxed"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.08)", color: "oklch(0.38 0.02 240)" }}
          >
            <p className="font-semibold mb-2" style={{ color: "oklch(0.20 0.04 240)" }}>TryCycle Data Systems Inc.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-1" style={{ color: "oklch(0.30 0.04 240)" }}>Canada</p>
                <p>7 Bayview Station Rd</p>
                <p>Ottawa, ON K1Y 2C5</p>
              </div>
              <div>
                <p className="font-medium mb-1" style={{ color: "oklch(0.30 0.04 240)" }}>United States</p>
                <p>University of Connecticut</p>
                <p>Technology Incubation Program Building</p>
                <p>Room R1844, 400 Farmington Ave</p>
                <p>Farmington, CT 06032</p>
              </div>
            </div>
            <p className="mt-3">
              <a href="mailto:privacy@trycycle.ca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "oklch(0.55 0.17 45)" }}>
                privacy@trycycle.ca
              </a>
            </p>
          </div>

          {/* ══════════════════════════════════
              BUDDY'S QUEST
          ══════════════════════════════════ */}
          <SectionDivider id="buddys-quest" title="Buddy's Quest" updated="February 2025" />

          <div
            className="rounded-xl p-5 mb-8"
            style={{ background: "oklch(0.72 0.19 45 / 0.05)", border: "1px solid oklch(0.72 0.19 45 / 0.14)" }}
          >
            <p className="text-[0.78rem] font-bold mb-3" style={{ color: "oklch(0.28 0.04 240)" }}>Key Points</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[0.78rem]" style={{ color: "oklch(0.38 0.02 240)" }}>
              <div>
                <p className="font-semibold mb-1.5" style={{ color: "oklch(0.28 0.04 240)" }}>We promise:</p>
                <UL>
                  <LI>No name requirement</LI>
                  <LI>No email requirement</LI>
                  <LI>No phone number requirement</LI>
                  <LI>No mandatory information sharing</LI>
                </UL>
              </div>
              <div>
                <p className="font-semibold mb-1.5" style={{ color: "oklch(0.28 0.04 240)" }}>Chat mechanics:</p>
                <UL>
                  <LI>Chats disappear upon completion</LI>
                  <LI>Retention only for abuse, harm, or danger</LI>
                </UL>
              </div>
              <div>
                <p className="font-semibold mb-1.5" style={{ color: "oklch(0.28 0.04 240)" }}>Personal information:</p>
                <UL>
                  <LI>Never sold</LI>
                  <LI>Minimal, essential collection only</LI>
                  <LI>Sharing restricted to app operation companies</LI>
                </UL>
              </div>
            </div>
          </div>

          <H2>1. Purpose of this privacy notice</H2>
          <P>
            This notice addresses Personal Information collection, use, and disclosure by Buddy's Quest regarding the
            Buddy's Quest website (buddysquest.com) and application.
          </P>
          <P>
            The app is a game environment also offering anonymous, one-to-one text chats with a peer who has shared
            lived experiences. It explicitly excludes emergency services or professional health support.
          </P>
          <P>
            The platform minimizes Personal Information collection; accounts aren't required. Automatic chat deletion
            occurs. Users under 13 are not permitted, with no design intent to attract younger audiences.
          </P>

          <H2>2. Information we collect about you, how we collect it and how we use it</H2>
          <H3>Technical device information</H3>
          <P>
            Collection includes device type, device identifier, operating system, language, duration of use, number
            of notification messages sent or received, and times and dates at which the app was accessed and utilized.
            Efforts minimize user identification, though such information may qualify as Personal Information under
            applicable law.
          </P>
          <P>Device information uses include:</P>
          <UL>
            <LI>Service and feature delivery</LI>
            <LI>Feature and service utilization understanding</LI>
            <LI>Product troubleshooting, enhancement, optimization</LI>
            <LI>Essential push notification delivery</LI>
            <LI>Device blocking for harassment and abuse violations</LI>
            <LI>Legal obligation compliance</LI>
          </UL>
          <H3>Chat history</H3>
          <P>
            We reserve the right to save chat history in cases of harassment, abuse, or if personal safety is
            considered at risk. Retained information may be used to protect the safety or security of individuals
            and to enforce our Terms and Conditions.
          </P>

          <H2>3. When and to whom we disclose your Personal Information</H2>
          <P>Buddy's Quest will never sell your Personal Information.</P>
          <P>Personal Information disclosure occurs only in exceptional cases:</P>
          <UL>
            <LI>Legal requirements or authorization</LI>
            <LI>Court, administrative agency, or government tribunal orders</LI>
            <LI>Terms and Conditions enforcement</LI>
            <LI>Necessary emergency situations that threaten the life, health or security of an individual</LI>
            <LI>Available remedies pursuit or damage limitation</LI>
          </UL>
          <P>
            Third-party service providers (Microsoft, PostHog, Raygun, and bitHeads) provide app services, server
            hosting in Canada and U.S., and software error tracking. Access to information is strictly controlled
            by our agreements with these service providers.
          </P>

          <H2>4. How we protect your Personal Information</H2>
          <P>
            Protection follows commercially reasonable practices against loss and unauthorized access, use,
            alteration, disclosure, and destruction.
          </P>
          <P>
            Data storage uses Microsoft Azure at a data centre in Canada. Azure maintains ISO Standard 27018 Code of
            Practice certification for personal identifiable information protection.
          </P>
          <P>
            Any transmission of Personal Information is at your own risk. Encryption protects information in transit
            and at rest, though complete protection cannot be guaranteed.
          </P>
          <P>
            Authorized employees and contractors bound by confidentiality agreements access sensitive information.
            Violations trigger appropriate disciplinary measures, including dismissal.
          </P>

          <H2>5. Retention of your Personal Information</H2>
          <P>
            Information retention continues only as long as is necessary to fulfill the purposes for which we
            collected it, including legal, accounting, and reporting requirements plus liability protection.
          </P>
          <P>
            All text messages sent through the app will be automatically deleted, except where we need to retain
            the chat in cases of harassment, abuse, or where personal safety is considered at risk.
          </P>

          <H2>6. Changes to this Privacy Notice</H2>
          <P>
            The platform reserves modification rights. Material changes require notification through app notices
            with express consent as legally required. Update dates appear at notice top.
          </P>

          <H2>7. Governing law</H2>
          <P>
            This notice shall, in all respects, be governed by and interpreted, construed and enforced in accordance
            with applicable provincial and federal laws of Canada.
          </P>

          <H2>8. Correcting or updating information and withdrawing consent</H2>
          <P>
            Users may request access to and correct any Personal Information we hold about you. Identity
            verification may be requested.
          </P>
          <P>Request denial circumstances include:</P>
          <UL>
            <LI>Unconfirmed identity</LI>
            <LI>Disproportionate retrieval burden or cost</LI>
            <LI>Non-existent or unfindable information</LI>
            <LI>Confidentiality compromise or safety threats to others</LI>
            <LI>Legally required non-disclosure</LI>
          </UL>
          <P>Declined requests receive documented reasons, subject to legal restrictions.</P>

          <H2>9. Contacting us</H2>
          <P>
            Geoff Schaadt serves as Chief Privacy Officer, conducting regular privacy and threat assessments and
            adopting risk mitigation policies and procedures.
          </P>
          <div
            className="rounded-xl p-5 mt-2 mb-10 text-[0.82rem] leading-relaxed"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.08)", color: "oklch(0.38 0.02 240)" }}
          >
            <p className="font-semibold mb-1" style={{ color: "oklch(0.20 0.04 240)" }}>Buddy's Quest</p>
            <p>7 Bayview Station Rd</p>
            <p>Ottawa, ON K1Y 2C5</p>
            <p className="mt-1">
              <a href="mailto:privacy@trycycle.ca" className="underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: "oklch(0.55 0.17 45)" }}>
                privacy@trycycle.ca
              </a>
            </p>
          </div>

          {/* Land acknowledgement */}
          <div
            className="rounded-xl p-5 text-[0.78rem] leading-relaxed italic"
            style={{ background: "oklch(0 0 0 / 0.03)", border: "1px solid oklch(0 0 0 / 0.07)", color: "oklch(0.46 0.02 240)" }}
          >
            TryCycle Data Systems Inc. acknowledges that our offices, located in Ottawa, Ontario, are on the unceded,
            unsurrendered Territory of the Anishinaabe Algonquin Nation.
          </div>

        </div>
      </section>
    </>
  );
}

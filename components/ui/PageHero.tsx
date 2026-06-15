import { SectionEyebrow } from "./SectionEyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, titleAccent, description, children }: PageHeroProps) {
  return (
    <section
      className="pt-28 pb-14 lg:pt-32 lg:pb-16"
      style={{
        background: "linear-gradient(160deg, oklch(0.16 0.04 235) 0%, oklch(0.12 0.04 240) 60%)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow className="mb-4 block">{eyebrow}</SectionEyebrow>
        <h1
          className="font-bold leading-[1.1] mb-5"
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            color: "var(--color-ivory)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            letterSpacing: "-0.02em",
            maxWidth: "760px",
          }}
        >
          {title}
          {titleAccent && (
            <> <span style={{ color: "var(--color-teal)" }}>{titleAccent}</span></>
          )}
        </h1>
        {description && (
          <p
            className="text-[0.95rem] leading-[1.65]"
            style={{ color: "var(--color-muted)", maxWidth: "640px" }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

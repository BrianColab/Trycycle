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
    <section className="pt-32 pb-16" style={{ background: "var(--color-navy)" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionEyebrow className="mb-4 block">{eyebrow}</SectionEyebrow>
        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span style={{ color: "var(--color-teal)" }}>{titleAccent}</span>
            </>
          )}
        </h1>
        {description && (
          <p
            className="text-[0.95rem] leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

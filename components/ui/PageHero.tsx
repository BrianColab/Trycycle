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
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
      style={{
        background: "oklch(0.11 0.04 240)",
      }}
    >
      {/* Subtle teal glow top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.12 185) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow row */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "oklch(0.65 0.12 185)" }}
          >
            {eyebrow}
          </span>
          <span
            className="flex-1 max-w-[60px] h-px"
            style={{ background: "oklch(0.65 0.12 185 / 0.35)" }}
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h1
          className="font-bold leading-[1.05] mb-6"
          style={{
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
            letterSpacing: "-0.025em",
            color: "oklch(0.97 0.008 90)",
          }}
        >
          {title}
          {titleAccent && (
            <> <span style={{ color: "oklch(0.65 0.12 185)" }}>{titleAccent}</span></>
          )}
        </h1>

        {/* Bottom rule + description side by side on desktop */}
        {description && (
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
            {/* Teal rule */}
            <div
              className="shrink-0 w-12 h-[3px] mt-1 rounded-full lg:mt-2"
              style={{ background: "oklch(0.65 0.12 185)" }}
              aria-hidden="true"
            />
            <p
              className="text-[0.95rem] leading-[1.70] max-w-2xl"
              style={{ color: "oklch(0.72 0.018 90)" }}
            >
              {description}
            </p>
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

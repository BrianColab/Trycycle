interface SectionEyebrowProps {
  children: React.ReactNode;
  dim?: boolean;
  className?: string;
}

export function SectionEyebrow({ children, dim = false, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`text-[0.7rem] font-medium tracking-[0.22em] uppercase ${className}`}
      style={{
        color: dim ? "oklch(0.72 0.19 45 / 0.70)" : "var(--color-teal)",
        fontFamily: "var(--font-inter, Inter, sans-serif)",
      }}
    >
      {children}
    </p>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
}

export function Card({ children, className = "", hover = false, accent = false }: CardProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        hover ? "group cursor-pointer hover:-translate-y-1" : ""
      } ${className}`}
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Optional teal accent line on top */}
      {accent && (
        <div
          className={`absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 ${
            hover ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.65 0.12 185 / 0.65), transparent)",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

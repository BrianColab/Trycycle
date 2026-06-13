export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-6">
        <p
          className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] uppercase"
          style={{ color: "var(--color-teal)" }}
        >
          TryCycle
        </p>
        <h1
          className="text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
        >
          Coming in Phase 2
        </h1>
        <p style={{ color: "var(--color-muted)" }}>
          Phase 1 shell complete — routing, design system, header, footer.
        </p>
      </div>
    </div>
  );
}

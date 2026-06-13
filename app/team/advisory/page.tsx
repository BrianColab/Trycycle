import type { Metadata } from "next";

export const metadata: Metadata = { title: "Advisory Committee" };

export default function Page() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p
          className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] uppercase"
          style={{ color: "var(--color-teal)" }}
        >
          TryCycle
        </p>
        <h1
          className="text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
        >
          Advisory Committee
        </h1>
        <p style={{ color: "var(--color-muted)" }}>
          This page is coming soon.
        </p>
      </div>
    </div>
  );
}

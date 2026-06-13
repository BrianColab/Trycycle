"use client";

import { useState, useMemo, useId } from "react";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";
import {
  TESTIMONIALS,
  TESTIMONIAL_CATEGORIES,
  type TestimonialCategory,
  type Testimonial,
} from "@/lib/testimonials-data";

/* ── Quote mark SVG ── */
function QuoteMark() {
  return (
    <svg
      className="w-8 h-8 mb-4 shrink-0"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.33 20c0-2.93 1.6-5.6 4-7.47L11 10c-4.27 2.53-7 7.27-7 12 0 2.93 1.87 5.33 4.67 5.33C11.2 27.33 13.33 25.07 13.33 22.67c0-1.6-1.07-2.67-2.67-2.67H9.33zM22 20c0-2.93 1.6-5.6 4-7.47L23.67 10c-4.27 2.53-7 7.27-7 12 0 2.93 1.87 5.33 4.67 5.33C23.87 27.33 26 25.07 26 22.67c0-1.6-1.07-2.67-2.67-2.67H22z"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}

/* ── Avatar ── */
function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-[0.75rem] font-bold shrink-0"
      style={{ background: "oklch(0.65 0.12 185 / 0.20)", color: "var(--color-teal)" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

/* ── Testimonial card ── */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="flex flex-col p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <QuoteMark />

      <blockquote className="flex-1 mb-6">
        <p
          className="text-[0.88rem] leading-[1.75] italic"
          style={{ color: "var(--color-ivory)" }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
      </blockquote>

      <div className="flex items-center gap-3">
        <Avatar initials={t.initials} />
        <div className="min-w-0">
          <p
            className="text-[0.85rem] font-semibold leading-tight truncate"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
          >
            {t.name}
          </p>
          <p className="text-[0.78rem] leading-tight truncate" style={{ color: "var(--color-muted)" }}>
            {t.title}
          </p>
          <p className="text-[0.75rem] leading-tight truncate" style={{ color: "var(--color-muted)", opacity: 0.7 }}>
            {t.organization}
          </p>
        </div>
        <span
          className="ml-auto shrink-0 text-[0.65rem] font-medium tracking-[0.16em] uppercase px-2.5 py-1 rounded-full"
          style={{
            background: "oklch(0.65 0.12 185 / 0.12)",
            color: "var(--color-teal)",
            border: "1px solid oklch(0.65 0.12 185 / 0.20)",
          }}
        >
          {t.category}
        </span>
      </div>
    </article>
  );
}

/* ── Filter pill ── */
function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="flex items-center gap-2 px-4 py-2 text-[0.78rem] font-medium transition-all duration-200 shrink-0"
      style={{
        borderRadius: "9999px",
        background: active ? "var(--color-teal)" : "oklch(1 0 0 / 0.07)",
        color: active ? "var(--color-navy)" : "var(--color-muted)",
        border: active ? "none" : "1px solid oklch(1 0 0 / 0.12)",
      }}
    >
      {label}
      <span
        className="text-[0.7rem] font-semibold px-1.5 py-0.5 rounded-full"
        style={{
          background: active ? "oklch(0 0 0 / 0.15)" : "oklch(1 0 0 / 0.08)",
          color: active ? "var(--color-navy)" : "var(--color-muted)",
        }}
      >
        {count}
      </span>
    </button>
  );
}

/* ── Main ── */

export function TestimonialsClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory>("All");
  const searchId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TESTIMONIALS.filter((t) => {
      const matchesCat = activeCategory === "All" || t.category === activeCategory;
      const matchesQuery =
        !q ||
        t.quote.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.organization.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  const countFor = (cat: TestimonialCategory) => {
    if (cat === "All") return TESTIMONIALS.length;
    return TESTIMONIALS.filter((t) => t.category === cat).length;
  };

  return (
    <>
      <PageHero
        eyebrow="Community Voices"
        title="What People Are"
        titleAccent="Saying"
        description="Hear from the communities, healthcare organizations, veterans, and partners who work with TryCycle."
      />

      <section className="pb-24" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-7xl px-6">

          {/* Search */}
          <div className="relative mb-6 max-w-2xl">
            <label htmlFor={searchId} className="sr-only">
              Search testimonials
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ color: "var(--color-muted)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, organization, or keyword…"
              className="w-full pl-11 pr-4 py-3 text-[0.88rem] transition-all duration-200"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                border: "1px solid oklch(1 0 0 / 0.15)",
                color: "var(--color-ivory)",
                outline: "none",
                borderRadius: "12px",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.65 0.12 185 / 0.60)";
                e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.65 0.12 185 / 0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute inset-y-0 right-4 flex items-center"
                aria-label="Clear search"
                style={{ color: "var(--color-muted)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter pills */}
          <div
            className="flex gap-2 mb-10 overflow-x-auto pb-2"
            role="group"
            aria-label="Filter by category"
          >
            <FilterPill
              label="All"
              count={countFor("All")}
              active={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
            />
            {TESTIMONIAL_CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                count={countFor(cat)}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Result count */}
          <p className="mb-6 text-[0.8rem]" style={{ color: "var(--color-muted)" }}>
            Showing {filtered.length} of {TESTIMONIALS.length} testimonials
            {activeCategory !== "All" && ` in ${activeCategory}`}
            {query && ` matching "${query}"`}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[0.95rem] mb-4" style={{ color: "var(--color-muted)" }}>
                No testimonials match your search.
              </p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-[0.85rem] font-medium"
                style={{ color: "var(--color-teal)" }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          )}

          {/* Demo data notice */}
          <p
            className="mt-12 text-center text-[0.75rem]"
            style={{ color: "oklch(0.70 0.02 90 / 0.50)" }}
          >
            * Testimonials shown are placeholder demo content for demonstration purposes.
          </p>

          {/* CTA */}
          <div className="mt-16 text-center">
            <SectionEyebrow className="mb-3 block">Work with us</SectionEyebrow>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Ready to see what TryCycle can do?
            </h2>
            <p className="text-[0.88rem] mb-6" style={{ color: "var(--color-muted)" }}>
              Connect with our team to explore how our solutions can serve your community.
            </p>
            <Button href="/book-appointment" variant="primary" size="md">
              Book an Appointment
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}

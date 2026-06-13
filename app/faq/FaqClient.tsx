"use client";

import { useState, useMemo, useId } from "react";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";
import { FAQ_ITEMS, FAQ_CATEGORIES, type FaqCategory, type FaqItem } from "@/lib/faq-data";

/* ── Accordion item ── */

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const triggerId = useId();

  return (
    <div className="border-b border-white/[0.10]">
      <h3>
        <button
          id={triggerId}
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-150 group"
        >
          <span
            className="text-[0.95rem] font-semibold leading-snug transition-colors duration-150"
            style={{
              fontFamily: "var(--font-space-grotesk, sans-serif)",
              color: open ? "var(--color-teal)" : "oklch(0.96 0.01 90 / 0.90)",
            }}
          >
            {item.question}
          </span>
          <span
            className={`mt-0.5 shrink-0 transition-all duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            style={{ color: open ? "var(--color-teal)" : "oklch(0.96 0.01 90 / 0.50)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
      >
        <p
          className="pb-6 text-[0.88rem] leading-[1.75]"
          style={{ color: "var(--color-muted)" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ── Category tab ── */

function CategoryTab({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="flex items-center gap-2 px-4 py-2 rounded-pill text-[0.78rem] font-medium transition-all duration-200 shrink-0"
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

/* ── Main component ── */

export function FaqClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");
  const searchId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const countForCategory = (cat: FaqCategory | "All") => {
    if (cat === "All") return FAQ_ITEMS.length;
    return FAQ_ITEMS.filter((i) => i.category === cat).length;
  };

  /* Group filtered items by category for display */
  const grouped = useMemo(() => {
    if (activeCategory !== "All") {
      return { [activeCategory]: filtered };
    }
    const result: Record<string, FaqItem[]> = {};
    for (const item of filtered) {
      if (!result[item.category]) result[item.category] = [];
      result[item.category].push(item);
    }
    return result;
  }, [filtered, activeCategory]);

  const hasResults = filtered.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Help & Information"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Find answers about TryCycle, our solutions, partnerships, privacy, appointments, and support."
      />

      <section className="pb-24" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-4xl px-6">

          {/* Search */}
          <div className="relative mb-8">
            <label htmlFor={searchId} className="sr-only">
              Search frequently asked questions
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
              placeholder="Search questions…"
              className="w-full rounded-xl pl-11 pr-4 py-3 text-[0.88rem] transition-all duration-200"
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

          {/* Category tabs */}
          <div
            className="flex gap-2 mb-10 overflow-x-auto pb-2"
            role="group"
            aria-label="Filter by category"
          >
            <CategoryTab
              label="All"
              active={activeCategory === "All"}
              count={countForCategory("All")}
              onClick={() => setActiveCategory("All")}
            />
            {FAQ_CATEGORIES.map((cat) => (
              <CategoryTab
                key={cat}
                label={cat}
                active={activeCategory === cat}
                count={countForCategory(cat)}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Results */}
          {!hasResults ? (
            <div className="py-16 text-center">
              <p className="text-[0.95rem] mb-4" style={{ color: "var(--color-muted)" }}>
                No questions match &ldquo;{query}&rdquo;.
              </p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-[0.85rem] font-medium"
                style={{ color: "var(--color-teal)" }}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  {activeCategory === "All" && (
                    <div className="mb-4">
                      <SectionEyebrow>{category}</SectionEyebrow>
                    </div>
                  )}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="px-6">
                      {items.map((item, idx) => (
                        <div key={item.id} className={idx === 0 ? "[&_.border-b]:first:border-t-0" : ""}>
                          <AccordionItem item={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom contact prompt */}
          <div
            className="mt-16 rounded-xl p-8 text-center"
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <SectionEyebrow className="mb-3 block">Still have questions?</SectionEyebrow>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              We&apos;re here to help
            </h2>
            <p className="text-[0.88rem] mb-6 max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
              Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button href="/contact" variant="primary" size="md">
                Contact Us
              </Button>
              <Button href="/book-appointment" variant="ghost" size="md">
                Book an Appointment
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

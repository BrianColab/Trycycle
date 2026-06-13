"use client";

import { useState, useMemo, useEffect, useRef, useId } from "react";
import Image from "next/image";
import { PageHero, SectionEyebrow, Button } from "@/components/ui";
import {
  VIDEOS,
  VIDEO_CATEGORIES,
  type VideoCategory,
  type Video,
  getYoutubeThumbnail,
} from "@/lib/videos-data";

/* ── Play icon ── */
function PlayIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="oklch(0.65 0.12 185 / 0.90)" />
      <polygon points="19,15 37,24 19,33" fill="white" />
    </svg>
  );
}

/* ── Video modal ── */
function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "oklch(0 0 0 / 0.85)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${video.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ maxWidth: "900px", background: "#000" }}
      >
        {/* Top accent */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(to right, transparent, oklch(0.65 0.12 185 / 0.70), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150"
          style={{ background: "oklch(1 0 0 / 0.12)", color: "var(--color-ivory)" }}
          aria-label="Close video"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 16:9 iframe */}
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="px-6 py-4" style={{ background: "var(--color-card)" }}>
          <p
            className="text-[0.95rem] font-semibold"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
          >
            {video.title}
          </p>
          <p className="text-[0.82rem] mt-1" style={{ color: "var(--color-muted)" }}>
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Video card ── */
function VideoCard({ video, onPlay, featured = false }: { video: Video; onPlay: () => void; featured?: boolean }) {
  const thumbnail = getYoutubeThumbnail(video.youtubeId);

  return (
    <article
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
        featured ? "flex flex-col" : ""
      }`}
      style={{ border: "1px solid var(--color-border)" }}
      onClick={onPlay}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPlay(); } }}
      tabIndex={0}
      role="button"
      aria-label={`Play video: ${video.title}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-navy-mid">
        <Image
          src={thumbnail}
          alt={`Thumbnail for ${video.title}`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
          style={{ background: "oklch(0.12 0.04 240 / 0.40)" }}
          aria-hidden="true"
        />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transition-transform duration-200 group-hover:scale-110">
            <PlayIcon size={featured ? 56 : 44} />
          </div>
        </div>
        {/* Duration badge */}
        <div
          className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[0.72rem] font-medium"
          style={{ background: "oklch(0 0 0 / 0.75)", color: "var(--color-ivory)" }}
        >
          {video.duration}
        </div>
        {/* Category tag */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold tracking-[0.10em] uppercase"
          style={{
            background: "oklch(0.65 0.12 185 / 0.90)",
            color: "var(--color-navy)",
          }}
        >
          {video.category}
        </div>
      </div>

      {/* Card content */}
      <div
        className="p-4"
        style={{ background: "var(--color-card)" }}
      >
        <h3
          className={`font-semibold leading-snug mb-2 ${featured ? "text-[1rem]" : "text-[0.88rem]"}`}
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
        >
          {video.title}
        </h3>
        {featured && (
          <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {video.description}
          </p>
        )}
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

export function VideosClient() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);
  const searchId = useId();
  const [query, setQuery] = useState("");

  const featured = VIDEOS.filter((v) => v.featured);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VIDEOS.filter((v) => {
      const matchesCat = activeCategory === "All" || v.category === activeCategory;
      const matchesQuery =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCategory]);

  const countFor = (cat: VideoCategory) => {
    if (cat === "All") return VIDEOS.length;
    return VIDEOS.filter((v) => v.category === cat).length;
  };

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Our"
        titleAccent="Videos"
        description="Watch solution overviews, community stories, product demos, and TryCycle in the news."
      />

      <section className="pb-24" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-7xl px-6">

          {/* Featured videos */}
          <div className="mb-16">
            <SectionEyebrow className="mb-6 block">Featured</SectionEyebrow>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featured.map((v) => (
                <VideoCard key={v.id} video={v} onPlay={() => setPlayingVideo(v)} featured />
              ))}
            </div>
          </div>

          {/* Search + filter */}
          <div className="mb-4">
            <label htmlFor={searchId} className="sr-only">Search videos</label>
            <div className="relative max-w-md mb-4">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search videos…"
                className="w-full pl-11 pr-4 py-3 text-[0.88rem]"
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

            <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter by category">
              <FilterPill
                label="All"
                count={countFor("All")}
                active={activeCategory === "All"}
                onClick={() => setActiveCategory("All")}
              />
              {VIDEO_CATEGORIES.map((cat) => (
                <FilterPill
                  key={cat}
                  label={cat}
                  count={countFor(cat)}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
          </div>

          {/* Video grid */}
          <SectionEyebrow className="mb-6 block mt-6">
            {activeCategory === "All" ? "All Videos" : activeCategory}
          </SectionEyebrow>

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[0.95rem] mb-4" style={{ color: "var(--color-muted)" }}>
                No videos match your search.
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((v) => (
                <VideoCard key={v.id} video={v} onPlay={() => setPlayingVideo(v)} />
              ))}
            </div>
          )}

          {/* Demo notice */}
          <p
            className="mt-12 text-center text-[0.75rem]"
            style={{ color: "oklch(0.70 0.02 90 / 0.50)" }}
          >
            * Demo video content shown for preview purposes.
          </p>

          {/* CTA */}
          <div className="mt-16 text-center">
            <SectionEyebrow className="mb-3 block">Media Inquiries</SectionEyebrow>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
            >
              Looking for media assets or press information?
            </h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button href="/contact" variant="primary">Contact Us</Button>
              <Button href="/book-appointment" variant="ghost">Book a Media Appointment</Button>
            </div>
          </div>

        </div>
      </section>

      {/* Modal */}
      {playingVideo && (
        <VideoModal video={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}
    </>
  );
}

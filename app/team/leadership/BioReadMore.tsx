"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Person = {
  name: string;
  credentials: string | null;
  title: string;
  fullBio: string;
  photo: string;
};

export function BioReadMore({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 mt-3 self-start text-[0.74rem] font-semibold transition-opacity duration-200 hover:opacity-75"
        style={{ color: "oklch(0.60 0.19 40)" }}
      >
        Read more
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Portal to body — the card's hover transform would otherwise trap position:fixed */}
      {mounted && createPortal(<>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: "oklch(0 0 0 / 0.45)",
          backdropFilter: "blur(4px)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
        }}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`About ${person.name}`}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-y-auto"
        style={{
          background: "oklch(1 0 0)",
          boxShadow: "-8px 0 48px oklch(0 0 0 / 0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32, 0, 0.15, 1)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {/* Photo + name */}
        <div className="relative aspect-square shrink-0 bg-[oklch(0.88_0.005_240)]">
          <Image src={person.photo} alt={person.name} fill className="object-cover object-top" sizes="448px" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-lg transition-colors duration-150 hover:bg-white/20"
            style={{ color: "oklch(1 0 0)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-6"
            style={{
              background: "linear-gradient(to top, oklch(0.10 0.04 240 / 0.92) 0%, oklch(0.10 0.04 240 / 0.60) 55%, transparent 100%)",
            }}
          >
            <h2
              className="text-[1.4rem] font-bold leading-tight text-white mb-1"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              {person.name}
              {person.credentials && (
                <span className="font-normal text-[0.9rem] ml-2 text-white/60">{person.credentials}</span>
              )}
            </h2>
            <p
              className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase leading-snug"
              style={{ color: "oklch(0.80 0.16 45)" }}
            >
              {person.title}
            </p>
          </div>
        </div>

        {/* Full bio */}
        <div className="flex-1 px-6 py-7">
          <div
            className="w-8 h-[2px] mb-4 rounded-full"
            style={{ background: "var(--color-teal)" }}
            aria-hidden="true"
          />
          <p className="text-[0.88rem] leading-[1.8]" style={{ color: "oklch(0.36 0.02 240)" }}>
            {person.fullBio}
          </p>
        </div>
      </div>
      </>, document.body)}
    </>
  );
}

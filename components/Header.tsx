"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactDrawer } from "./ContactDrawer";

const NAV_ITEMS = [
  {
    label: "About Us",
    children: [
      { label: "What We Do", href: "/about/what-we-do" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Mission", href: "/about/our-mission" },
    ],
  },
  {
    label: "Our Solutions",
    children: [
      { label: "Buddy's Quest", href: "/solutions/buddys-quest" },
      { label: "Talking Stick", href: "/solutions/talking-stick" },
      { label: "TetherAll", href: "/solutions/tetherall" },
      { label: "Ontario Legion Health", href: "/solutions/ontario-legion-health" },
    ],
  },
  {
    label: "Our Team",
    children: [
      { label: "Leadership", href: "/team/leadership" },
      { label: "Board of Directors", href: "/team/board" },
      { label: "Advisory Committee", href: "/team/advisory" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "News", href: "/media/news" },
      { label: "Publications", href: "/media/publications" },
      { label: "Videos", href: "/media/videos" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
] as const;

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: { label: string; href: string }[]; href?: never };

/* ── Logo: icon is colored (shows on white), text is white (hidden on white).
   We render the icon portion with mix-blend-mode:multiply and add the wordmark
   as HTML text. Replace /logo-dark.webp once a dark version is available. ── */
function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="shrink-0 flex items-center gap-2" onClick={onClick}>
      {/* Colored bicycle icon — mix-blend:multiply keeps colors, hides white */}
      <span className="relative block" style={{ width: 38, height: 38 }}>
        <Image
          src="/logo.webp"
          alt=""
          fill
          className="object-left object-contain"
          style={{ mixBlendMode: "multiply", objectPosition: "left center" }}
          sizes="38px"
          priority
        />
      </span>
      {/* Wordmark as HTML since logo.webp has white text (invisible on white bg) */}
      <span
        aria-label="TryCycle"
        className="text-[1.15rem] font-bold tracking-tight leading-none"
        style={{
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          color: "oklch(0.12 0.04 240)",
        }}
      >
        TryCycle
      </span>
    </Link>
  );
}

function DropdownMenu({ item }: { item: NavItem & { children: { label: string; href: string }[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={buttonRef}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-200"
        style={{
          fontFamily: "var(--font-inter, Inter, sans-serif)",
          color: open ? "var(--color-teal)" : "oklch(0.30 0.03 240)",
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <svg
          aria-hidden="true"
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          style={{ minWidth: "200px" }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0 0 0 / 0.10)",
              boxShadow: "0 8px 32px oklch(0 0 0 / 0.12), 0 2px 8px oklch(0 0 0 / 0.06)",
            }}
          >
            <div
              className="h-[2px] w-full"
              style={{
                background: "linear-gradient(to right, transparent, oklch(0.65 0.12 185 / 0.60), transparent)",
              }}
            />
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-3 text-[0.82rem] transition-colors duration-150 hover:bg-black/[0.04]"
                style={{ color: "oklch(0.28 0.03 240)" }}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ open, onClose, onContact }: { open: boolean; onClose: () => void; onContact: () => void }) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedGroup(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col"
      style={{ background: "oklch(1 0 0)", backdropFilter: "blur(16px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div
        className="flex items-center justify-between px-6 h-16 border-b"
        style={{ borderColor: "oklch(0 0 0 / 0.08)" }}
      >
        <Logo onClick={onClose} />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2"
          style={{ color: "oklch(0.35 0.03 240)" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {(NAV_ITEMS as readonly NavItem[]).map((item) => {
          if (item.children) {
            const isOpen = expandedGroup === item.label;
            return (
              <div key={item.label}>
                <button
                  onClick={() => setExpandedGroup(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-3 text-[0.9rem] font-medium"
                  style={{ color: "oklch(0.22 0.04 240)" }}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 text-[0.85rem] transition-colors"
                        style={{ color: "oklch(0.45 0.05 185)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href!}
              onClick={onClose}
              className="block py-3 text-[0.9rem] font-medium"
              style={{ color: "oklch(0.22 0.04 240)" }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div
        className="px-6 pb-8 pt-4 border-t"
        style={{ borderColor: "oklch(0 0 0 / 0.08)" }}
      >
        <Link
          href="/book-appointment"
          onClick={onClose}
          className="flex items-center justify-center w-full px-6 py-3 text-[0.85rem] font-semibold transition-colors duration-200"
          style={{
            borderRadius: "6px",
            background: "var(--color-teal)",
            color: "var(--color-navy)",
          }}
        >
          Book an Appointment
        </Link>
        <button
          onClick={() => { onClose(); onContact(); }}
          className="flex items-center justify-center w-full px-6 py-3 text-[0.85rem] font-medium transition-colors duration-200 mt-2"
          style={{
            borderRadius: "6px",
            border: "1px solid oklch(0 0 0 / 0.12)",
            color: "oklch(0.28 0.04 240)",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-30 transition-all duration-300`}
        style={{
          background: "oklch(1 0 0)",
          borderBottom: scrolled ? "1px solid oklch(0 0 0 / 0.08)" : "1px solid oklch(0 0 0 / 0.06)",
          boxShadow: scrolled ? "0 2px 16px oklch(0 0 0 / 0.06)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-8">
          <Logo />

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6 flex-1"
            aria-label="Main navigation"
          >
            {(NAV_ITEMS as readonly NavItem[]).map((item) => {
              if (item.children) {
                return <DropdownMenu key={item.label} item={item as NavItem & { children: { label: string; href: string }[] }} />;
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-200 hover:text-teal"
                  style={{
                    fontFamily: "var(--font-inter, Inter, sans-serif)",
                    color: "oklch(0.30 0.03 240)",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="hidden lg:inline-flex items-center px-4 py-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200 hover:text-teal"
              style={{
                color: "oklch(0.30 0.03 240)",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
              }}
            >
              Contact
            </button>
            <Link
              href="/book-appointment"
              className="hidden lg:inline-flex items-center px-5 py-2 text-[0.78rem] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                borderRadius: "6px",
                background: "var(--color-teal)",
                color: "oklch(0.12 0.04 240)",
                boxShadow: "var(--shadow-teal)",
              }}
            >
              Book an Appointment
            </Link>

            <button
              className="lg:hidden p-2"
              style={{ color: "oklch(0.30 0.03 240)" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onContact={() => setContactOpen(true)} />
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

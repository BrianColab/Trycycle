"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
  { label: "Contact", href: "/contact" },
] as const;

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: { label: string; href: string }[]; href?: never };

function DropdownMenu({ item }: { item: NavItem & { children: { label: string; href: string }[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-ivory/70 hover:text-teal transition-colors duration-200"
        style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
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
          className="absolute top-full left-0 pt-3 z-50"
          style={{ minWidth: "200px" }}
        >
          <div
            className="rounded-xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0_0_0_/0.55)] backdrop-blur-2xl overflow-hidden"
            style={{ borderColor: "oklch(1 0 0 / 0.12)" }}
          >
            <div
              className="h-[2px] w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.65 0.12 185 / 0.60), transparent)",
              }}
            />
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-3 text-[0.82rem] text-ivory/75 hover:text-ivory hover:bg-white/5 transition-colors duration-150"
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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      style={{ background: "oklch(0.12 0.04 240 / 0.98)", backdropFilter: "blur(16px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
        <Link href="/" onClick={onClose}>
          <Image src="/logo.webp" alt="TryCycle" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-ivory/70 hover:text-ivory"
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
                  className="flex w-full items-center justify-between py-3 text-[0.9rem] font-medium text-ivory/80 hover:text-ivory"
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
                        className="block py-2 text-[0.85rem] text-ivory/60 hover:text-teal transition-colors"
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
              className="block py-3 text-[0.9rem] font-medium text-ivory/80 hover:text-ivory"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 pb-8 pt-4 border-t border-white/10">
        <Link
          href="/book-appointment"
          onClick={onClose}
          className="flex items-center justify-center w-full px-6 py-3 rounded-pill text-[0.85rem] font-semibold text-navy bg-teal hover:bg-teal-light transition-colors duration-200"
          style={{ borderRadius: "9999px", background: "var(--color-teal)", color: "var(--color-navy)" }}
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
          scrolled ? "border-b border-white/10" : ""
        }`}
        style={{
          background: scrolled
            ? "oklch(0.12 0.04 240 / 0.90)"
            : "oklch(0.12 0.04 240 / 0.70)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.webp"
              alt="TryCycle"
              width={140}
              height={46}
              className="h-9 w-auto"
              priority
            />
          </Link>

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
                  className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-ivory/70 hover:text-teal transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="hidden lg:inline-flex items-center px-5 py-2 text-[0.78rem] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
              style={{
                borderRadius: "9999px",
                background: "var(--color-teal)",
                color: "var(--color-navy)",
                boxShadow: "var(--shadow-teal)",
              }}
            >
              Book an Appointment
            </Link>

            <button
              className="lg:hidden p-2 text-ivory/70 hover:text-ivory"
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

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

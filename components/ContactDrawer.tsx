"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const inputBase: React.CSSProperties = {
  background: "oklch(0.97 0.005 60)",
  border: "1px solid oklch(0 0 0 / 0.11)",
  color: "oklch(0.14 0.04 240)",
  outline: "none",
  borderRadius: "12px",
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "0.88rem",
  fontFamily: "inherit",
  transition: "border-color 0.15s, box-shadow 0.15s, background 0.15s",
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "oklch(0.65 0.12 185 / 0.60)";
  e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.65 0.12 185 / 0.12)";
  e.currentTarget.style.background = "oklch(1 0 0)";
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.11)";
  e.currentTarget.style.boxShadow = "none";
  e.currentTarget.style.background = "oklch(0.97 0.005 60)";
}

export function ContactDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFieldRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
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
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact us"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-y-auto"
        style={{
          background: "oklch(1 0 0)",
          boxShadow: "-8px 0 48px oklch(0 0 0 / 0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32, 0, 0.15, 1)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {/* Teal accent top bar */}
        <div
          className="h-[3px] w-full shrink-0"
          style={{ background: "linear-gradient(to right, var(--color-teal), oklch(0.65 0.12 185 / 0.40))" }}
          aria-hidden="true"
        />

        {/* Header: logo + close */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b shrink-0"
          style={{ borderColor: "oklch(0 0 0 / 0.08)" }}
        >
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <span className="relative block" style={{ width: 30, height: 30 }}>
              <Image
                src="/logo.webp"
                alt=""
                fill
                className="object-contain"
                style={{ mixBlendMode: "multiply", objectPosition: "left center" }}
                sizes="30px"
              />
            </span>
            <span
              className="text-[1rem] font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.12 0.04 240)" }}
            >
              TryCycle
            </span>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-lg transition-colors duration-150 hover:bg-black/[0.05]"
            style={{ color: "oklch(0.45 0.03 240)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form area */}
        <div className="flex-1 px-6 py-8">
          <h2
            className="text-[1.45rem] font-bold mb-1"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
          >
            Get in Touch
          </h2>
          <p className="text-[0.85rem] mb-8 leading-relaxed" style={{ color: "oklch(0.48 0.02 90)" }}>
            Have a question or want to work with us? We&apos;d love to hear from you.
          </p>

          {status === "done" ? (
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: "oklch(0.65 0.12 185 / 0.08)", border: "1px solid oklch(0.65 0.12 185 / 0.22)" }}
            >
              <svg
                className="w-9 h-9 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                style={{ color: "var(--color-teal)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p
                className="font-semibold mb-1"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
              >
                Message sent!
              </p>
              <p className="text-[0.82rem] mb-4" style={{ color: "oklch(0.48 0.02 90)" }}>
                We&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[0.80rem] font-medium"
                style={{ color: "var(--color-teal)" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  className="block text-[0.78rem] font-semibold mb-1.5"
                  style={{ color: "oklch(0.28 0.04 240)" }}
                >
                  Name <span aria-hidden="true" style={{ color: "oklch(0.55 0.15 25)" }}>*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                  style={inputBase}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              <div>
                <label
                  className="block text-[0.78rem] font-semibold mb-1.5"
                  style={{ color: "oklch(0.28 0.04 240)" }}
                >
                  Email <span aria-hidden="true" style={{ color: "oklch(0.55 0.15 25)" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  style={inputBase}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              <div>
                <label
                  className="block text-[0.78rem] font-semibold mb-1.5"
                  style={{ color: "oklch(0.28 0.04 240)" }}
                >
                  Message <span aria-hidden="true" style={{ color: "oklch(0.55 0.15 25)" }}>*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="How can we help you?"
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              {status === "error" && (
                <p className="text-[0.80rem]" style={{ color: "oklch(0.55 0.15 25)" }}>
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 text-[0.88rem] font-semibold rounded-full transition-all duration-200 disabled:opacity-60 hover:brightness-105 active:scale-[0.99]"
                style={{ background: "var(--color-teal)", color: "oklch(0.12 0.04 240)" }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Bottom: contact info + social */}
        <div
          className="px-6 py-6 border-t shrink-0"
          style={{ background: "oklch(0.97 0.005 60)", borderColor: "oklch(0 0 0 / 0.08)" }}
        >
          <div className="space-y-2.5 mb-5">
            <a
              href="mailto:info@trycycle.ca"
              className="flex items-center gap-2.5 text-[0.82rem] font-medium transition-colors duration-150 hover:opacity-80"
              style={{ color: "oklch(0.30 0.04 240)" }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@trycycle.ca
            </a>
            <a
              href="tel:+16132740001"
              className="flex items-center gap-2.5 text-[0.82rem] font-medium transition-colors duration-150 hover:opacity-80"
              style={{ color: "oklch(0.30 0.04 240)" }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
              </svg>
              613.274.0001
            </a>
          </div>

          <div className="flex gap-2">
            <a
              href="https://twitter.com/TryCycleData"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TryCycle on X (Twitter)"
              className="flex h-8 w-8 items-center justify-center rounded-md transition-opacity duration-150 hover:opacity-80"
              style={{ background: "oklch(0.10 0.02 240)", color: "oklch(1 0 0)" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/trycycle-data-inc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TryCycle on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-md transition-opacity duration-150 hover:opacity-80"
              style={{ background: "oklch(0.42 0.14 245)", color: "oklch(1 0 0)" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

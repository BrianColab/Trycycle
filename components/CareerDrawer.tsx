"use client";

import { useEffect, useRef, useState } from "react";

const inputBase: React.CSSProperties = {
  background: "oklch(0.97 0.005 60)",
  border: "1px solid oklch(0 0 0 / 0.11)",
  color: "oklch(0.14 0.04 240)",
  outline: "none",
  borderRadius: "10px",
  width: "100%",
  padding: "0.7rem 0.9rem",
  fontSize: "0.86rem",
  fontFamily: "inherit",
  transition: "border-color 0.15s, box-shadow 0.15s, background 0.15s",
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "oklch(0.72 0.19 45 / 0.60)";
  e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.72 0.19 45 / 0.12)";
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.11)";
  e.currentTarget.style.boxShadow = "none";
}

const AREAS = [
  "General / Future Opportunities",
  "Engineering & Product",
  "Clinical & Research",
  "Community & Partnerships",
  "Design",
  "Operations & Administration",
  "Other",
] as const;

const emptyForm: {
  name: string;
  email: string;
  phone: string;
  area: string;
  links: string;
  message: string;
} = { name: "", email: "", phone: "", area: AREAS[0], links: "", message: "" };

export function CareerDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState(emptyForm);
  const firstFieldRef = useRef<HTMLInputElement>(null);

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
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  const labelStyle: React.CSSProperties = { color: "oklch(0.28 0.04 240)" };
  const req = <span aria-hidden="true" style={{ color: "oklch(0.55 0.15 25)" }}>*</span>;

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
        role="dialog"
        aria-modal="true"
        aria-label="Send a general application"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-y-auto"
        style={{
          background: "oklch(1 0 0)",
          boxShadow: "-8px 0 48px oklch(0 0 0 / 0.18)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32, 0, 0.15, 1)",
          visibility: open ? "visible" : "hidden",
        }}
      >
        {/* Gradient accent + hero */}
        <div
          className="relative px-6 pt-7 pb-6 shrink-0 overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 45), oklch(0.62 0.19 32))" }}
        >
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -top-16 -right-10 w-48 h-48 rounded-full"
            style={{ background: "oklch(1 0 0 / 0.12)" }}
            aria-hidden="true"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-lg transition-colors duration-150 hover:bg-white/20"
            style={{ color: "oklch(1 0 0)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <p className="relative text-[0.66rem] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "oklch(1 0 0 / 0.80)" }}>
            Join the Team
          </p>
          <h2
            className="relative text-[1.5rem] font-bold leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(1 0 0)" }}
          >
            Send a general application
          </h2>
          <p className="relative text-[0.83rem] mt-2 leading-relaxed" style={{ color: "oklch(1 0 0 / 0.88)" }}>
            No open role needs to match — tell us about yourself and we&apos;ll keep you in mind.
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 px-6 py-7">
          {status === "done" ? (
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: "oklch(0.72 0.19 45 / 0.08)", border: "1px solid oklch(0.72 0.19 45 / 0.22)" }}
            >
              <svg
                className="w-10 h-10 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                style={{ color: "oklch(0.62 0.19 40)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p
                className="font-semibold mb-1"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
              >
                Application received!
              </p>
              <p className="text-[0.82rem] mb-4" style={{ color: "oklch(0.48 0.02 90)" }}>
                Thanks for your interest — we&apos;ll reach out if something fits.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[0.80rem] font-semibold"
                style={{ color: "oklch(0.60 0.19 40)" }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                  Full name {req}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                    Email {req}
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
                  <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="Optional"
                    style={inputBase}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                  Area of interest
                </label>
                <select
                  value={form.area}
                  onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
                  style={inputBase}
                  onFocus={focusInput}
                  onBlur={blurInput}
                >
                  {AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                  Portfolio / LinkedIn
                </label>
                <input
                  type="text"
                  value={form.links}
                  onChange={(e) => setForm((f) => ({ ...f, links: e.target.value }))}
                  placeholder="Optional — link to your work or profile"
                  style={inputBase}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              <div>
                <label className="block text-[0.76rem] font-semibold mb-1.5" style={labelStyle}>
                  Tell us about yourself {req}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What draws you to TryCycle, and what would you bring to the team?"
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              {status === "error" && (
                <p className="text-[0.80rem]" style={{ color: "oklch(0.55 0.15 25)" }}>
                  Something went wrong — please try again or email careers@trycycle.ca directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 text-[0.88rem] font-semibold rounded-md transition-all duration-200 disabled:opacity-60 hover:brightness-105 active:scale-[0.99]"
                style={{ background: "oklch(0.72 0.19 45)", color: "oklch(1 0 0)" }}
              >
                {status === "sending" ? "Sending…" : "Submit Application"}
              </button>

              <p className="text-[0.70rem] text-center leading-relaxed" style={{ color: "oklch(0.55 0.02 90)" }}>
                By submitting, you agree we may keep your details on file for future opportunities.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

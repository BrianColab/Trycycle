"use client";

import { useState, useId, useCallback, useEffect } from "react";
import { SectionEyebrow } from "@/components/ui";
import {
  STAFF_MEMBERS,
  APPOINTMENT_REASONS,
  TIME_SLOTS,
  isWeekday,
  toDateString,
  formatTimeSlot,
  type StaffMember,
  type TimeSlot,
} from "@/lib/booking-data";

/* ── Safety disclaimer ── */
function SafetyNotice() {
  return (
    <div
      className="rounded-xl p-5 mb-10 flex gap-4"
      style={{
        background: "oklch(0.65 0.10 45 / 0.10)",
        border: "1px solid oklch(0.65 0.10 45 / 0.30)",
      }}
      role="note"
      aria-label="Important notice"
    >
      <div className="mt-0.5 shrink-0">
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 2L2 17h16L10 2z"
            stroke="oklch(0.78 0.12 65)"
            strokeWidth="1.5"
            fill="oklch(0.78 0.12 65 / 0.15)"
          />
          <path d="M10 8v4M10 14v.5" stroke="oklch(0.78 0.12 65)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="text-[0.85rem] font-semibold mb-1" style={{ color: "oklch(0.85 0.10 65)" }}>
          Important Notice
        </p>
        <p className="text-[0.82rem] leading-relaxed" style={{ color: "oklch(0.80 0.04 65)" }}>
          This booking form is for <strong>demos, partnerships, media, program inquiries, and general
          meetings</strong> only. It is <strong>not</strong> for emergency, crisis, counselling,
          treatment, clinical support, or urgent help of any kind.
        </p>
        <p className="text-[0.82rem] mt-2" style={{ color: "oklch(0.80 0.04 65)" }}>
          If you or someone you know is in crisis, please contact your local emergency services or a
          crisis helpline immediately.
        </p>
      </div>
    </div>
  );
}

/* ── Staff card ── */
function StaffCard({
  member,
  selected,
  onSelect,
}: {
  member: StaffMember;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="w-full text-left rounded-xl p-4 transition-all duration-200"
      style={{
        background: selected ? "oklch(0.65 0.12 185 / 0.12)" : "var(--color-card)",
        border: selected ? "1px solid oklch(0.65 0.12 185 / 0.50)" : "1px solid var(--color-border)",
        boxShadow: selected ? "0 0 0 2px oklch(0.65 0.12 185 / 0.20)" : "none",
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[0.72rem] font-bold shrink-0"
          style={{
            background: selected ? "oklch(0.65 0.12 185 / 0.20)" : "oklch(0 0 0 / 0.07)",
            color: selected ? "var(--color-teal)" : "oklch(0.50 0.03 230)",
          }}
          aria-hidden="true"
        >
          {member.name.split(" ")[0][0]}{member.name.split(" ")[1]?.[0] ?? ""}
        </div>
        <div className="min-w-0">
          <p
            className="text-[0.85rem] font-semibold truncate"
            style={{ color: "var(--color-ivory)", fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            {member.name}
          </p>
          <p className="text-[0.75rem]" style={{ color: selected ? "var(--color-teal)" : "var(--color-muted)" }}>
            {member.role}
          </p>
        </div>
        {selected && (
          <div
            className="ml-auto shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "var(--color-teal)" }}
            aria-hidden="true"
          >
            <svg className="w-3 h-3" fill="none" stroke="var(--color-navy)" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-[0.78rem]" style={{ color: "var(--color-muted)" }}>
        {member.description}
      </p>
    </button>
  );
}

/* ── Mini calendar ── */
function Calendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: string | null;
  onSelect: (dateStr: string) => void;
}) {
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthName = new Date(viewYear, viewMonth, 1).toLocaleString("en-CA", {
    month: "long",
    year: "numeric",
  });

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const canGoBack = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const days: (number | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoBack}
          className="p-1.5 rounded-lg transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ color: "var(--color-muted)" }}
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p
          className="text-[0.88rem] font-semibold"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
        >
          {monthName}
        </p>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1.5 rounded-lg transition-colors duration-150"
          style={{ color: "var(--color-muted)" }}
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-center text-[0.68rem] font-medium py-1" style={{ color: "var(--color-muted)" }}>
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((day, idx) => {
          if (day === null) return <div key={`empty-${idx}`} />;
          const date = new Date(viewYear, viewMonth, day);
          const dateStr = toDateString(date);
          const isPast = date < today;
          const isWknd = !isWeekday(date);
          const isDisabled = isPast || isWknd;
          const isSelected = selectedDate === dateStr;
          const isToday = toDateString(date) === toDateString(today);

          return (
            <button
              key={day}
              type="button"
              disabled={isDisabled}
              onClick={() => !isDisabled && onSelect(dateStr)}
              aria-label={`${date.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })}${isDisabled ? " (unavailable)" : ""}`}
              aria-pressed={isSelected}
              className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[0.82rem] font-medium transition-all duration-150 disabled:cursor-not-allowed hover:enabled:bg-black/[0.06]"
              style={{
                background: isSelected
                  ? "var(--color-teal)"
                  : isToday && !isSelected
                  ? "oklch(0.65 0.12 185 / 0.15)"
                  : "transparent",
                color: isSelected
                  ? "oklch(1 0 0)"
                  : isDisabled
                  ? "oklch(0 0 0 / 0.25)"
                  : isToday
                  ? "var(--color-teal)"
                  : "oklch(0.18 0.04 240)",
                outline: isToday && !isSelected ? "1px solid oklch(0.65 0.12 185 / 0.40)" : "none",
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Time slot grid ── */
function TimeSlotPicker({
  selectedSlot,
  bookedSlots,
  loading,
  onSelect,
}: {
  selectedSlot: TimeSlot | null;
  bookedSlots: string[];
  loading: boolean;
  onSelect: (slot: TimeSlot) => void;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {TIME_SLOTS.map((slot) => (
          <div
            key={slot}
            className="py-2.5 px-3 rounded-lg text-[0.8rem] animate-pulse"
            style={{ background: "oklch(0 0 0 / 0.06)", height: "40px" }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="mb-3 text-[0.8rem] font-medium" style={{ color: "var(--color-muted)" }}>
        Available time slots (9:00 AM – 3:00 PM ET, weekdays only)
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {TIME_SLOTS.map((slot) => {
          const selected = selectedSlot === slot;
          const booked = bookedSlots.includes(slot);
          const disabled = booked;

          return (
            <button
              key={slot}
              type="button"
              disabled={disabled}
              onClick={() => !disabled && onSelect(slot)}
              aria-pressed={selected}
              aria-label={`${formatTimeSlot(slot)}${booked ? " (unavailable)" : ""}`}
              title={booked ? "This slot is already booked" : undefined}
              className="py-2.5 px-3 rounded-lg text-[0.8rem] font-medium transition-all duration-150 disabled:cursor-not-allowed relative"
              style={{
                background: selected
                  ? "var(--color-teal)"
                  : booked
                  ? "oklch(0 0 0 / 0.03)"
                  : "oklch(1 0 0)",
                color: selected
                  ? "oklch(0.12 0.04 240)"
                  : booked
                  ? "oklch(0 0 0 / 0.28)"
                  : "oklch(0.18 0.04 240)",
                border: booked
                  ? "1px solid oklch(0 0 0 / 0.06)"
                  : selected
                  ? "none"
                  : "1px solid oklch(0 0 0 / 0.11)",
                textDecoration: booked ? "line-through" : "none",
              }}
            >
              {formatTimeSlot(slot)}
            </button>
          );
        })}
      </div>
      {bookedSlots.length > 0 && (
        <p className="mt-2 text-[0.72rem]" style={{ color: "oklch(0 0 0 / 0.40)" }}>
          Strikethrough slots are already booked for this date.
        </p>
      )}
    </div>
  );
}

/* ── Form field wrapper ── */
function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1.5 text-[0.82rem] font-medium" style={{ color: "var(--color-ivory)" }}>
        {label}
        {required && (
          <span className="ml-1" style={{ color: "var(--color-teal)" }} aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[0.75rem]" style={{ color: "oklch(0.72 0.15 25)" }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  background: "oklch(1 0 0)",
  border: "1px solid oklch(0 0 0 / 0.13)",
  color: "oklch(0.14 0.04 240)",
  borderRadius: "12px",
  width: "100%",
  padding: "10px 14px",
  fontSize: "0.88rem",
  outline: "none",
};

const inputFocusStyle = {
  borderColor: "oklch(0.65 0.12 185 / 0.60)",
  boxShadow: "0 0 0 3px oklch(0.65 0.12 185 / 0.12)",
};

/* ── Success screen ── */
function SuccessScreen({
  staffName,
  date,
  slot,
  emailSent,
  onReset,
}: {
  staffName: string;
  date: string;
  slot: string;
  emailSent: boolean;
  onReset: () => void;
}) {
  const formatted = new Date(date + "T12:00:00").toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-16 text-center max-w-lg mx-auto">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: "oklch(0.65 0.12 185 / 0.15)" }}
        aria-hidden="true"
      >
        <svg className="w-8 h-8" fill="none" stroke="var(--color-teal)" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <SectionEyebrow className="mb-3 block">Booking Confirmed</SectionEyebrow>
      <h2
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
      >
        Your appointment is booked
      </h2>
      <div
        className="rounded-xl p-5 mb-6 text-left"
        style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
      >
        <dl className="space-y-2 text-[0.85rem]">
          <div className="flex gap-3">
            <dt style={{ color: "var(--color-muted)", minWidth: "80px" }}>With</dt>
            <dd style={{ color: "var(--color-ivory)" }}>{staffName}</dd>
          </div>
          <div className="flex gap-3">
            <dt style={{ color: "var(--color-muted)", minWidth: "80px" }}>Date</dt>
            <dd style={{ color: "var(--color-ivory)" }}>{formatted}</dd>
          </div>
          <div className="flex gap-3">
            <dt style={{ color: "var(--color-muted)", minWidth: "80px" }}>Time</dt>
            <dd style={{ color: "var(--color-ivory)" }}>{formatTimeSlot(slot)}</dd>
          </div>
        </dl>
      </div>
      {emailSent ? (
        <p className="text-[0.85rem] mb-6" style={{ color: "var(--color-muted)" }}>
          A confirmation email has been sent to you.
          If you need to cancel or reschedule, please reply to that email at least 24 hours in advance.
        </p>
      ) : (
        <p className="text-[0.85rem] mb-6" style={{ color: "var(--color-muted)" }}>
          Your appointment request was saved.
          A confirmation email may not have been sent — please keep a note of the details above.
          If you need to cancel or reschedule, contact us directly.
        </p>
      )}
      <button
        type="button"
        onClick={onReset}
        className="text-[0.85rem] font-medium"
        style={{ color: "var(--color-teal)" }}
      >
        Book another appointment
      </button>
    </div>
  );
}

/* ── Auto-message builder ── */
function buildAutoMessage(
  staffName: string | null,
  userName: string,
  organization: string,
  reason: string,
  date: string | null,
  slot: TimeSlot | null
): string {
  const staffFirst = staffName?.split(" ")[0] ?? null;
  const hasName   = userName.trim().length > 0;
  const hasOrg    = organization.trim().length > 0;
  const hasReason = reason.length > 0;

  const sentences: string[] = [];

  if (staffFirst) {
    sentences.push(
      hasName
        ? `Hi ${staffFirst}, my name is ${userName.trim()}${hasOrg ? ` from ${organization.trim()}` : ""}.`
        : `Hi ${staffFirst},`
    );
  } else if (hasName) {
    sentences.push(`My name is ${userName.trim()}${hasOrg ? ` from ${organization.trim()}` : ""}.`);
  }

  if (hasReason) {
    sentences.push(`I would like to meet regarding: ${reason}.`);
  }

  if (date) {
    const formatted = new Date(date + "T12:00:00").toLocaleDateString("en-CA", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
    sentences.push(
      slot
        ? `My preferred date is ${formatted} at ${formatTimeSlot(slot)}.`
        : `My preferred date is ${formatted}.`
    );
  }

  return sentences.join(" ");
}

/* ── Form state ── */
interface FormState {
  name: string;
  email: string;
  organization: string;
  phone: string;
  reason: string;
  message: string;
  agreeToDisclaimer: boolean;
  honeypot: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  organization: "",
  phone: "",
  reason: "",
  message: "",
  agreeToDisclaimer: false,
  honeypot: "",
};

type FormErrors = Partial<Record<keyof FormState | "staff" | "date" | "slot", string>>;

/* ── Main component ── */

export function BookingClient() {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  // Availability state
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [messageEdited, setMessageEdited] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const nameId  = useId();
  const emailId = useId();
  const orgId   = useId();
  const phoneId = useId();
  const reasonId = useId();
  const msgId   = useId();

  // Fetch booked slots whenever staff + date both have values
  useEffect(() => {
    if (!selectedStaff || !selectedDate) {
      setBookedSlots([]);
      return;
    }

    let cancelled = false;
    setSlotsLoading(true);

    fetch(`/api/availability?staffId=${encodeURIComponent(selectedStaff.id)}&date=${encodeURIComponent(selectedDate)}`)
      .then((r) => r.json())
      .then((data: { bookedSlots?: string[] }) => {
        if (!cancelled) {
          setBookedSlots(data.bookedSlots ?? []);
          // If the previously selected slot is now booked, clear it
          if (selectedSlot && data.bookedSlots?.includes(selectedSlot)) {
            setSelectedSlot(null);
          }
        }
      })
      .catch(() => {
        if (!cancelled) setBookedSlots([]);
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStaff?.id, selectedDate]);

  // Auto-populate message from current selections whenever user hasn't manually edited it
  useEffect(() => {
    if (messageEdited) return;
    const autoMsg = buildAutoMessage(
      selectedStaff?.name ?? null,
      form.name,
      form.organization,
      form.reason,
      selectedDate,
      selectedSlot
    );
    setForm((f) => ({ ...f, message: autoMsg }));
  }, [selectedStaff?.name, form.name, form.organization, form.reason, selectedDate, selectedSlot, messageEdited]);

  const set = useCallback(<K extends keyof FormState>(key: K, val: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }, []);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!selectedStaff)          errs.staff           = "Please select a staff member.";
    if (!selectedDate)           errs.date            = "Please select a date.";
    if (!selectedSlot)           errs.slot            = "Please select a time slot.";
    if (!form.name.trim())       errs.name            = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                 errs.email           = "A valid email address is required.";
    if (!form.organization.trim()) errs.organization  = "Organization is required.";
    if (!form.reason)            errs.reason          = "Please select a reason for your appointment.";
    if (!form.agreeToDisclaimer) errs.agreeToDisclaimer = "You must acknowledge this before booking.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return; // bot guard

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          staffId:      selectedStaff!.id,
          date:         selectedDate,
          timeSlot:     selectedSlot,
          name:         form.name.trim(),
          email:        form.email.trim(),
          organization: form.organization.trim(),
          phone:        form.phone.trim() || null,
          reason:       form.reason,
          message:      form.message.trim() || null,
          honeypot:     form.honeypot,
        }),
      });

      const json = await res.json() as { ok: boolean; error?: string; emailSent?: boolean; emailSkipped?: boolean };

      if (!res.ok || !json.ok) {
        if (res.status === 409) {
          // Slot was taken between availability check and submit
          setErrors({ slot: json.error ?? "That slot was just taken. Please choose another time." });
          // Refresh booked slots so the UI reflects reality
          if (selectedStaff && selectedDate) {
            fetch(`/api/availability?staffId=${encodeURIComponent(selectedStaff.id)}&date=${encodeURIComponent(selectedDate)}`)
              .then((r) => r.json())
              .then((data: { bookedSlots?: string[] }) => {
                setBookedSlots(data.bookedSlots ?? []);
                setSelectedSlot(null);
              })
              .catch(() => undefined);
          }
        } else {
          setErrors({ slot: json.error ?? "Something went wrong. Please try again." });
        }
        setSubmitting(false);
        return;
      }

      setEmailSent(json.emailSent === true);
      setSubmitted(true);
    } catch {
      setErrors({ slot: "Could not reach the server. Please check your connection and try again." });
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-24 section-light" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-2xl px-6">
          <SuccessScreen
            staffName={selectedStaff!.name}
            date={selectedDate!}
            slot={selectedSlot!}
            emailSent={emailSent}
            onReset={() => {
              setSubmitted(false);
              setEmailSent(false);
              setSelectedStaff(null);
              setSelectedDate(null);
              setSelectedSlot(null);
              setBookedSlots([]);
              setForm(INITIAL_FORM);
              setErrors({});
              setMessageEdited(false);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 section-light" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <SectionEyebrow className="mb-4 block">Connect With Us</SectionEyebrow>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
          >
            Book an{" "}
            <span style={{ color: "var(--color-teal)" }}>Appointment</span>
          </h1>
          <p className="text-[0.95rem] leading-relaxed max-w-2xl" style={{ color: "var(--color-muted)" }}>
            Connect with the right person on our team for demos, partnerships, media inquiries,
            program questions, and general meetings.
          </p>
        </div>
      </section>

      <section className="pb-24 section-light" style={{ background: "var(--color-navy)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <SafetyNotice />

          <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={(e) => set("honeypot", e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

              {/* ── Left: Staff + Calendar + Slots ── */}
              <div className="space-y-8">

                {/* Staff */}
                <fieldset>
                  <legend
                    className="text-[0.95rem] font-semibold mb-2 block"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    1. Select a staff member
                  </legend>
                  <p className="mb-4 text-[0.73rem]" style={{ color: "oklch(0.58 0.02 90)" }}>
                    Demo contacts shown for preview. Real staff will be confirmed before launch.
                  </p>
                  {errors.staff && (
                    <p className="mb-3 text-[0.78rem]" style={{ color: "oklch(0.72 0.15 25)" }} role="alert">
                      {errors.staff}
                    </p>
                  )}
                  <div className="space-y-3">
                    {STAFF_MEMBERS.map((m) => (
                      <StaffCard
                        key={m.id}
                        member={m}
                        selected={selectedStaff?.id === m.id}
                        onSelect={() => {
                          setSelectedStaff(m);
                          setSelectedSlot(null);
                          setErrors((e) => ({ ...e, staff: undefined }));
                        }}
                      />
                    ))}
                  </div>
                </fieldset>

                {/* Calendar */}
                <div>
                  <p
                    className="text-[0.95rem] font-semibold mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    2. Select a date
                  </p>
                  {errors.date && (
                    <p className="mb-2 text-[0.78rem]" style={{ color: "oklch(0.72 0.15 25)" }} role="alert">
                      {errors.date}
                    </p>
                  )}
                  <Calendar
                    selectedDate={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setSelectedSlot(null);
                      setErrors((e) => ({ ...e, date: undefined, slot: undefined }));
                    }}
                  />
                  <p className="mt-2 text-[0.75rem]" style={{ color: "var(--color-muted)" }}>
                    Weekdays only. Past dates and weekends are unavailable.
                  </p>
                </div>

                {/* Time slots */}
                <div>
                  <p
                    className="text-[0.95rem] font-semibold mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                  >
                    3. Select a time
                  </p>
                  {errors.slot && (
                    <p className="mb-2 text-[0.78rem]" style={{ color: "oklch(0.72 0.15 25)" }} role="alert">
                      {errors.slot}
                    </p>
                  )}
                  {!selectedDate || !selectedStaff ? (
                    <p className="text-[0.82rem]" style={{ color: "var(--color-muted)" }}>
                      Select a staff member and date to see available times.
                    </p>
                  ) : (
                    <TimeSlotPicker
                      selectedSlot={selectedSlot}
                      bookedSlots={bookedSlots}
                      loading={slotsLoading}
                      onSelect={(s) => {
                        setSelectedSlot(s);
                        setErrors((e) => ({ ...e, slot: undefined }));
                      }}
                    />
                  )}
                </div>

              </div>

              {/* ── Right: Contact form ── */}
              <div className="space-y-5">
                <p
                  className="text-[0.95rem] font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "var(--color-ivory)" }}
                >
                  4. Your information
                </p>

                <Field label="Full Name" id={nameId} required error={errors.name}>
                  <input
                    id={nameId}
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Field>

                <Field label="Email Address" id={emailId} required error={errors.email}>
                  <input
                    id={emailId}
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Field>

                <Field label="Organization" id={orgId} required error={errors.organization}>
                  <input
                    id={orgId}
                    type="text"
                    value={form.organization}
                    onChange={(e) => set("organization", e.target.value)}
                    autoComplete="organization"
                    required
                    aria-invalid={!!errors.organization}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Field>

                <Field label="Phone (optional)" id={phoneId}>
                  <input
                    id={phoneId}
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    autoComplete="tel"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Field>

                <Field label="Reason for Appointment" id={reasonId} required error={errors.reason}>
                  <select
                    id={reasonId}
                    value={form.reason}
                    onChange={(e) => set("reason", e.target.value)}
                    required
                    aria-invalid={!!errors.reason}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='oklch(0.70 0.02 90)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: "40px",
                    }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="" disabled style={{ background: "oklch(0.97 0.005 60)", color: "oklch(0.55 0.02 90)" }}>
                      Select a reason…
                    </option>
                    {APPOINTMENT_REASONS.map((r) => (
                      <option
                        key={r}
                        value={r}
                        style={{ background: "oklch(1 0 0)", color: "oklch(0.14 0.04 240)" }}
                      >
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Message — auto-fills from selections, user can override */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor={msgId}
                      className="text-[0.82rem] font-medium"
                      style={{ color: "var(--color-ivory)" }}
                    >
                      Message
                      {!messageEdited && form.message && (
                        <span
                          className="ml-2 text-[0.68rem] font-medium px-1.5 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.65 0.12 185 / 0.12)",
                            color: "var(--color-teal)",
                            border: "1px solid oklch(0.65 0.12 185 / 0.22)",
                          }}
                        >
                          auto-filled
                        </span>
                      )}
                    </label>
                    {messageEdited && (
                      <button
                        type="button"
                        onClick={() => setMessageEdited(false)}
                        className="text-[0.72rem] font-medium transition-opacity duration-150 hover:opacity-70"
                        style={{ color: "var(--color-teal)" }}
                      >
                        Reset to auto
                      </button>
                    )}
                  </div>
                  <textarea
                    id={msgId}
                    value={form.message}
                    onChange={(e) => {
                      if (!messageEdited) setMessageEdited(true);
                      set("message", e.target.value);
                    }}
                    rows={5}
                    placeholder="Fill in your name, reason, and a date above and your message will write itself…"
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputFocusStyle, resize: "vertical" })}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.13)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <p className="mt-1.5 text-[0.72rem]" style={{ color: "oklch(0.58 0.02 90)" }}>
                    Auto-filled from your selections. Edit freely to add more context.
                  </p>
                </div>

                {/* Disclaimer checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agreeToDisclaimer}
                      onChange={(e) => set("agreeToDisclaimer", e.target.checked)}
                      aria-invalid={!!errors.agreeToDisclaimer}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded"
                      style={{ accentColor: "var(--color-teal)" }}
                    />
                    <span className="text-[0.82rem] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      I understand that this booking is for demos, partnerships, media, program
                      inquiries, and general meetings only — and is{" "}
                      <strong style={{ color: "var(--color-ivory)" }}>not</strong> for emergency,
                      crisis, counselling, treatment, or clinical support.
                    </span>
                  </label>
                  {errors.agreeToDisclaimer && (
                    <p className="mt-1 text-[0.75rem] ml-7" style={{ color: "oklch(0.72 0.15 25)" }} role="alert">
                      {errors.agreeToDisclaimer}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 text-[0.88rem] font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    borderRadius: "9999px",
                    background: "var(--color-teal)",
                    color: "var(--color-navy)",
                    boxShadow: "var(--shadow-teal)",
                  }}
                >
                  {submitting ? "Booking…" : "Confirm Appointment"}
                </button>

                <p className="text-center text-[0.75rem]" style={{ color: "var(--color-muted)" }}>
                  * Required fields. You will receive a confirmation email after booking.
                </p>
              </div>

            </div>
          </form>
        </div>
      </section>
    </>
  );
}

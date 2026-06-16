"use client";

import { useState, useId, useCallback, useEffect } from "react";
import { PageHero } from "@/components/ui";
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

/* ── Step card wrapper ── */
function StepCard({
  step,
  title,
  children,
  error,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "oklch(1 0 0)",
        border: "1px solid oklch(0 0 0 / 0.08)",
        boxShadow: "0 2px 12px oklch(0 0 0 / 0.05)",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[0.70rem] font-bold shrink-0"
          style={{ background: "oklch(0.65 0.12 185)", color: "oklch(0.12 0.04 240)" }}
          aria-hidden="true"
        >
          {step}
        </div>
        <h2
          className="text-[0.92rem] font-semibold"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
        >
          {title}
        </h2>
      </div>
      {error && (
        <p
          className="mb-3 text-[0.76rem] flex items-center gap-1.5"
          style={{ color: "oklch(0.52 0.18 25)" }}
          role="alert"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
      {children}
    </div>
  );
}

/* ── Safety notice ── */
function SafetyNotice() {
  return (
    <div
      className="rounded-xl p-5 mb-8 flex gap-4"
      style={{
        background: "oklch(0.94 0.012 215 / 0.55)",
        border: "1px solid oklch(0.65 0.12 185 / 0.20)",
        borderLeft: "3px solid oklch(0.60 0.10 185 / 0.55)",
      }}
      role="note"
      aria-label="Important notice"
    >
      <div className="mt-0.5 shrink-0" aria-hidden="true">
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="oklch(0.50 0.09 185)">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <p className="text-[0.81rem] font-semibold mb-1" style={{ color: "oklch(0.22 0.06 215)" }}>
          Important Notice
        </p>
        <p className="text-[0.79rem] leading-relaxed" style={{ color: "oklch(0.36 0.04 215)" }}>
          This booking form is for <strong>demos, partnerships, media, program inquiries, and general
          meetings</strong> only. It is <strong>not</strong> for emergency, crisis, counselling,
          treatment, clinical support, or urgent help of any kind.
        </p>
        <p className="text-[0.79rem] mt-1.5" style={{ color: "oklch(0.36 0.04 215)" }}>
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
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="w-full text-left rounded-xl p-4 transition-all duration-200 relative overflow-hidden"
      style={{
        background: selected ? "oklch(0.65 0.12 185 / 0.06)" : "oklch(0.98 0.003 220)",
        border: selected
          ? "1px solid oklch(0.65 0.12 185 / 0.40)"
          : "1px solid oklch(0 0 0 / 0.08)",
        boxShadow: selected ? "0 0 0 3px oklch(0.65 0.12 185 / 0.10)" : "none",
      }}
    >
      {selected && (
        <div
          className="absolute inset-y-0 left-0 w-[3px] rounded-l-xl"
          style={{ background: "oklch(0.65 0.12 185)" }}
          aria-hidden="true"
        />
      )}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[0.70rem] font-bold shrink-0 transition-all duration-200"
          style={{
            background: selected ? "oklch(0.65 0.12 185)" : "oklch(0.88 0.008 220)",
            color: selected ? "oklch(0.12 0.04 240)" : "oklch(0.44 0.04 230)",
          }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p
            className="text-[0.84rem] font-semibold leading-tight"
            style={{ color: "oklch(0.14 0.04 240)", fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            {member.name}
          </p>
          <p
            className="text-[0.72rem] mt-0.5"
            style={{ color: selected ? "oklch(0.48 0.10 185)" : "oklch(0.52 0.02 230)" }}
          >
            {member.role}
          </p>
        </div>
        {selected && (
          <div
            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.65 0.12 185)" }}
            aria-hidden="true"
          >
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              stroke="oklch(0.12 0.04 240)"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-[0.75rem] mt-2.5 leading-relaxed ml-12" style={{ color: "oklch(0.46 0.02 230)" }}>
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

  const canGoBack =
    viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const days: (number | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoBack}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150 disabled:opacity-25 disabled:cursor-not-allowed hover:enabled:bg-black/[0.05]"
          style={{ color: "oklch(0.44 0.03 230)" }}
          aria-label="Previous month"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p
          className="text-[0.87rem] font-semibold"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
        >
          {monthName}
        </p>
        <button
          type="button"
          onClick={nextMonth}
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150 hover:bg-black/[0.05]"
          style={{ color: "oklch(0.44 0.03 230)" }}
          aria-label="Next month"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-center text-[0.63rem] font-semibold py-1 uppercase tracking-wide"
            style={{ color: "oklch(0.60 0.02 230)" }}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
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
              aria-label={`${date.toLocaleDateString("en-CA", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}${isDisabled ? " (unavailable)" : ""}`}
              aria-pressed={isSelected}
              className="mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[0.79rem] font-medium transition-all duration-150 disabled:cursor-not-allowed hover:enabled:bg-[oklch(0.65_0.12_185_/_0.10)]"
              style={{
                background: isSelected ? "oklch(0.65 0.12 185)" : "transparent",
                color: isSelected
                  ? "oklch(1 0 0)"
                  : isDisabled
                  ? "oklch(0.78 0.01 230)"
                  : isToday
                  ? "oklch(0.42 0.10 185)"
                  : "oklch(0.20 0.04 240)",
                outline:
                  isToday && !isSelected ? "1.5px solid oklch(0.65 0.12 185 / 0.50)" : "none",
                fontWeight: isToday && !isSelected ? 700 : 500,
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

/* ── Time slot picker ── */
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
      <div className="grid grid-cols-3 gap-2">
        {TIME_SLOTS.map((slot) => (
          <div
            key={slot}
            className="h-9 rounded-lg animate-pulse"
            style={{ background: "oklch(0 0 0 / 0.05)" }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="mb-3 text-[0.74rem]" style={{ color: "oklch(0.54 0.02 230)" }}>
        9:00 AM – 3:00 PM ET · Weekdays only
      </p>
      <div className="grid grid-cols-3 gap-2">
        {TIME_SLOTS.map((slot) => {
          const selected = selectedSlot === slot;
          const booked = bookedSlots.includes(slot);

          return (
            <button
              key={slot}
              type="button"
              disabled={booked}
              onClick={() => !booked && onSelect(slot)}
              aria-pressed={selected}
              aria-label={`${formatTimeSlot(slot)}${booked ? " (unavailable)" : ""}`}
              title={booked ? "Already booked" : undefined}
              className="py-2 px-2 rounded-lg text-[0.76rem] font-medium transition-all duration-150 disabled:cursor-not-allowed"
              style={{
                background: selected
                  ? "oklch(0.65 0.12 185)"
                  : booked
                  ? "oklch(0.94 0.003 220)"
                  : "oklch(1 0 0)",
                color: selected
                  ? "oklch(0.12 0.04 240)"
                  : booked
                  ? "oklch(0.72 0.01 230)"
                  : "oklch(0.22 0.04 240)",
                border: selected
                  ? "none"
                  : booked
                  ? "1px solid oklch(0 0 0 / 0.05)"
                  : "1px solid oklch(0 0 0 / 0.11)",
                textDecoration: booked ? "line-through" : "none",
                fontWeight: selected ? 600 : 500,
                boxShadow: selected ? "0 2px 8px oklch(0.65 0.12 185 / 0.25)" : "none",
              }}
            >
              {formatTimeSlot(slot)}
            </button>
          );
        })}
      </div>
      {bookedSlots.length > 0 && (
        <p className="mt-2 text-[0.70rem]" style={{ color: "oklch(0.62 0.01 230)" }}>
          Strikethrough slots are already booked.
        </p>
      )}
    </div>
  );
}

/* ── Input base style ── */
const baseInput: React.CSSProperties = {
  background: "oklch(0.98 0.003 220)",
  border: "1px solid oklch(0 0 0 / 0.11)",
  color: "oklch(0.14 0.04 240)",
  borderRadius: "10px",
  width: "100%",
  padding: "10px 14px",
  fontSize: "0.875rem",
  outline: "none",
};

const onFocusInput = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  e.currentTarget.style.borderColor = "oklch(0.65 0.12 185 / 0.55)";
  e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.65 0.12 185 / 0.12)";
};

const onBlurInput = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  e.currentTarget.style.borderColor = "oklch(0 0 0 / 0.11)";
  e.currentTarget.style.boxShadow = "none";
};

/* ── Field wrapper ── */
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
      <label
        htmlFor={id}
        className="block mb-1.5 text-[0.79rem] font-medium"
        style={{ color: "oklch(0.28 0.04 240)" }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: "oklch(0.65 0.12 185)" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          className="mt-1 text-[0.72rem] flex items-center gap-1"
          style={{ color: "oklch(0.52 0.18 25)" }}
          role="alert"
        >
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Booking summary ── */
function BookingSummary({
  staffName,
  date,
  slot,
}: {
  staffName: string;
  date: string;
  slot: TimeSlot;
}) {
  const formatted = new Date(date + "T12:00:00").toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "oklch(0.65 0.12 185 / 0.07)",
        border: "1px solid oklch(0.65 0.12 185 / 0.22)",
      }}
    >
      <p
        className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] mb-2.5"
        style={{ color: "oklch(0.44 0.09 185)" }}
      >
        Appointment Summary
      </p>
      <div className="space-y-1.5 text-[0.79rem]">
        {[
          { label: "With", value: staffName },
          { label: "Date", value: formatted },
          { label: "Time", value: formatTimeSlot(slot) },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <span style={{ color: "oklch(0.54 0.02 230)", minWidth: "44px" }}>{label}</span>
            <span style={{ color: "oklch(0.18 0.04 240)", fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <div className="py-20 text-center max-w-md mx-auto">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{
          background: "oklch(0.65 0.12 185 / 0.10)",
          border: "1px solid oklch(0.65 0.12 185 / 0.22)",
        }}
        aria-hidden="true"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="oklch(0.52 0.12 185)"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p
        className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-2"
        style={{ color: "oklch(0.56 0.10 185)" }}
      >
        Booking Confirmed
      </p>
      <h2
        className="text-2xl font-bold mb-6"
        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", color: "oklch(0.14 0.04 240)" }}
      >
        Your appointment is scheduled
      </h2>
      <div
        className="rounded-xl p-5 mb-6 text-left"
        style={{
          background: "oklch(1 0 0)",
          border: "1px solid oklch(0 0 0 / 0.08)",
          boxShadow: "0 2px 12px oklch(0 0 0 / 0.05)",
        }}
      >
        <dl className="space-y-3 text-[0.84rem]">
          {[
            { label: "With", value: staffName },
            { label: "Date", value: formatted },
            { label: "Time", value: formatTimeSlot(slot) },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-4">
              <dt style={{ color: "oklch(0.55 0.02 230)", minWidth: "56px" }}>{label}</dt>
              <dd style={{ color: "oklch(0.18 0.04 240)", fontWeight: 500 }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="text-[0.82rem] mb-8 leading-relaxed" style={{ color: "oklch(0.46 0.02 230)" }}>
        {emailSent
          ? "A confirmation email has been sent to you. To cancel or reschedule, please reply at least 24 hours in advance."
          : "Your appointment request was saved. A confirmation email may not have been sent — keep note of the details above and contact us directly to cancel or reschedule."}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-[0.82rem] font-semibold transition-opacity hover:opacity-60"
        style={{ color: "oklch(0.52 0.10 185)" }}
      >
        ← Book another appointment
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

  if (hasReason) sentences.push(`I would like to meet regarding: ${reason}.`);

  if (date) {
    const formatted = new Date(date + "T12:00:00").toLocaleDateString("en-CA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
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

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [messageEdited, setMessageEdited] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const nameId   = useId();
  const emailId  = useId();
  const orgId    = useId();
  const phoneId  = useId();
  const reasonId = useId();
  const msgId    = useId();

  useEffect(() => {
    if (!selectedStaff || !selectedDate) {
      setBookedSlots([]);
      return;
    }
    let cancelled = false;
    setSlotsLoading(true);
    fetch(
      `/api/availability?staffId=${encodeURIComponent(selectedStaff.id)}&date=${encodeURIComponent(selectedDate)}`
    )
      .then((r) => r.json())
      .then((data: { bookedSlots?: string[] }) => {
        if (!cancelled) {
          setBookedSlots(data.bookedSlots ?? []);
          if (selectedSlot && data.bookedSlots?.includes(selectedSlot)) setSelectedSlot(null);
        }
      })
      .catch(() => { if (!cancelled) setBookedSlots([]); })
      .finally(() => { if (!cancelled) setSlotsLoading(false); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStaff?.id, selectedDate]);

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
  }, [
    selectedStaff?.name,
    form.name,
    form.organization,
    form.reason,
    selectedDate,
    selectedSlot,
    messageEdited,
  ]);

  const set = useCallback(<K extends keyof FormState>(key: K, val: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }, []);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!selectedStaff)             errs.staff             = "Please select a staff member.";
    if (!selectedDate)              errs.date              = "Please select a date.";
    if (!selectedSlot)              errs.slot              = "Please select a time slot.";
    if (!form.name.trim())          errs.name              = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                    errs.email             = "A valid email address is required.";
    if (!form.organization.trim())  errs.organization      = "Organization is required.";
    if (!form.reason)               errs.reason            = "Please select a reason.";
    if (!form.agreeToDisclaimer)    errs.agreeToDisclaimer = "You must acknowledge this before booking.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return;

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

      const json = await res.json() as {
        ok: boolean;
        error?: string;
        emailSent?: boolean;
        emailSkipped?: boolean;
      };

      if (!res.ok || !json.ok) {
        if (res.status === 409) {
          setErrors({ slot: json.error ?? "That slot was just taken. Please choose another time." });
          if (selectedStaff && selectedDate) {
            fetch(
              `/api/availability?staffId=${encodeURIComponent(selectedStaff.id)}&date=${encodeURIComponent(selectedDate)}`
            )
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

  const showSummary = !!(selectedStaff && selectedDate && selectedSlot);

  if (submitted) {
    return (
      <div style={{ background: "oklch(0.96 0.006 60)", minHeight: "100vh" }}>
        <PageHero eyebrow="Connect With Us" title="Book an" titleAccent="Appointment" />
        <div className="mx-auto max-w-2xl px-6 py-16">
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
      <PageHero
        eyebrow="Connect With Us"
        title="Book an"
        titleAccent="Appointment"
        description="Connect with the right person on our team for demos, partnerships, media inquiries, program questions, and general meetings."
      />

      <section style={{ background: "oklch(0.96 0.006 60)" }} className="pt-10 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <SafetyNotice />

          <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={(e) => set("honeypot", e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px] lg:items-start">

              {/* ── Left: Steps 1–3 ── */}
              <div className="space-y-5">

                {/* Step 1 */}
                <StepCard step={1} title="Who would you like to meet?" error={errors.staff}>
                  <fieldset aria-label="Select a staff member">
                    <legend className="sr-only">Select a staff member</legend>
                    <p className="text-[0.72rem] mb-4" style={{ color: "oklch(0.58 0.02 230)" }}>
                      Demo contacts shown for preview. Real staff confirmed before launch.
                    </p>
                    <div className="space-y-2.5">
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
                </StepCard>

                {/* Step 2 */}
                <StepCard step={2} title="Choose a date" error={errors.date}>
                  <Calendar
                    selectedDate={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setSelectedSlot(null);
                      setErrors((e) => ({ ...e, date: undefined, slot: undefined }));
                    }}
                  />
                  <p className="mt-3 text-[0.72rem]" style={{ color: "oklch(0.58 0.02 230)" }}>
                    Weekdays only · Past dates and weekends are unavailable
                  </p>
                </StepCard>

                {/* Step 3 */}
                <StepCard step={3} title="Select a time" error={errors.slot}>
                  {!selectedDate || !selectedStaff ? (
                    <p className="py-2 text-[0.82rem]" style={{ color: "oklch(0.60 0.02 230)" }}>
                      Select a staff member and date above to see available times.
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
                </StepCard>

              </div>

              {/* ── Right: Step 4 (sticky on desktop) ── */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0 0 0 / 0.08)",
                    boxShadow: "0 2px 16px oklch(0 0 0 / 0.06)",
                  }}
                >
                  {/* Step 4 header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[0.70rem] font-bold shrink-0"
                      style={{ background: "oklch(0.65 0.12 185)", color: "oklch(0.12 0.04 240)" }}
                      aria-hidden="true"
                    >
                      4
                    </div>
                    <h2
                      className="text-[0.92rem] font-semibold"
                      style={{
                        fontFamily: "var(--font-space-grotesk, sans-serif)",
                        color: "oklch(0.14 0.04 240)",
                      }}
                    >
                      Your details
                    </h2>
                  </div>

                  <div className="space-y-4">

                    <Field label="Full Name" id={nameId} required error={errors.name}>
                      <input
                        id={nameId}
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        autoComplete="name"
                        required
                        aria-invalid={!!errors.name}
                        style={baseInput}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
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
                        style={baseInput}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
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
                        style={baseInput}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
                      />
                    </Field>

                    <Field label="Phone (optional)" id={phoneId}>
                      <input
                        id={phoneId}
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        autoComplete="tel"
                        style={baseInput}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
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
                          ...baseInput,
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='oklch(0.55 0.02 230)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 14px center",
                          paddingRight: "40px",
                        }}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
                      >
                        <option value="" disabled style={{ color: "oklch(0.55 0.02 230)" }}>
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

                    {/* Auto-message */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor={msgId}
                          className="text-[0.79rem] font-medium"
                          style={{ color: "oklch(0.28 0.04 240)" }}
                        >
                          Message
                          {!messageEdited && form.message && (
                            <span
                              className="ml-2 text-[0.63rem] font-medium px-1.5 py-0.5 rounded-full"
                              style={{
                                background: "oklch(0.65 0.12 185 / 0.10)",
                                color: "oklch(0.48 0.10 185)",
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
                            className="text-[0.70rem] font-semibold transition-opacity hover:opacity-60"
                            style={{ color: "oklch(0.52 0.10 185)" }}
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
                        rows={4}
                        placeholder="Fill in your name, reason, and a date above and your message will write itself…"
                        style={{ ...baseInput, resize: "vertical", minHeight: "96px" }}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
                      />
                    </div>

                  </div>

                  {/* Booking summary */}
                  {showSummary && (
                    <div className="mt-5">
                      <BookingSummary
                        staffName={selectedStaff!.name}
                        date={selectedDate!}
                        slot={selectedSlot!}
                      />
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="mt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.agreeToDisclaimer}
                        onChange={(e) => set("agreeToDisclaimer", e.target.checked)}
                        aria-invalid={!!errors.agreeToDisclaimer}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded"
                        style={{ accentColor: "oklch(0.65 0.12 185)" }}
                      />
                      <span
                        className="text-[0.74rem] leading-relaxed"
                        style={{ color: "oklch(0.46 0.02 230)" }}
                      >
                        I understand this booking is for demos, partnerships, media, program inquiries,
                        and general meetings only — and is{" "}
                        <strong style={{ color: "oklch(0.22 0.04 240)" }}>not</strong> for emergency,
                        crisis, counselling, treatment, or clinical support.
                      </span>
                    </label>
                    {errors.agreeToDisclaimer && (
                      <p
                        className="mt-1.5 text-[0.72rem] ml-7 flex items-center gap-1"
                        style={{ color: "oklch(0.52 0.18 25)" }}
                        role="alert"
                      >
                        <svg
                          className="w-3 h-3 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.agreeToDisclaimer}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 w-full py-3.5 text-[0.87rem] font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderRadius: "9999px",
                      background: "oklch(0.65 0.12 185)",
                      color: "oklch(0.12 0.04 240)",
                      boxShadow: "0 8px 24px -8px oklch(0.65 0.12 185 / 0.40)",
                    }}
                  >
                    {submitting ? "Booking…" : "Confirm Appointment →"}
                  </button>

                  <p className="mt-3 text-center text-[0.68rem]" style={{ color: "oklch(0.60 0.02 230)" }}>
                    * Required · Confirmation email sent after booking
                  </p>
                </div>
              </div>

            </div>
          </form>
        </div>
      </section>
    </>
  );
}

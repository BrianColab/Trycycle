/* Soft, very faint animated aurora for dark page heroes.
   Self-contained (CSS in globals.css); sits behind content at z-0. */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span
        className="aurora-blob aurora-1"
        style={{
          top: "-25%",
          left: "-8%",
          width: "48%",
          height: "150%",
          background: "radial-gradient(circle at center, oklch(0.72 0.19 45 / 0.26), transparent 68%)",
        }}
      />
      <span
        className="aurora-blob aurora-2"
        style={{
          top: "-35%",
          right: "-6%",
          width: "46%",
          height: "155%",
          background: "radial-gradient(circle at center, oklch(0.68 0.16 62 / 0.20), transparent 68%)",
        }}
      />
      <span
        className="aurora-blob aurora-3"
        style={{
          bottom: "-45%",
          left: "26%",
          width: "44%",
          height: "150%",
          background: "radial-gradient(circle at center, oklch(0.55 0.16 285 / 0.18), transparent 68%)",
        }}
      />
    </div>
  );
}

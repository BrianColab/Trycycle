import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121929",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle right-side teal glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "680px",
            height: "630px",
            background:
              "radial-gradient(ellipse at 75% 40%, rgba(56, 197, 186, 0.13) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* TC mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "52px",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              background: "#38C5BA",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#121929",
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            TC
          </div>
          <div
            style={{
              color: "#F0EFEA",
              fontSize: "38px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            TryCycle
          </div>
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            color: "#F0EFEA",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            marginBottom: "8px",
          }}
        >
          Innovative Solutions.
        </div>

        {/* Headline line 2 — teal accent */}
        <div
          style={{
            color: "#38C5BA",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            marginBottom: "40px",
          }}
        >
          Stronger Communities.
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            color: "rgba(240, 239, 234, 0.48)",
            fontSize: "22px",
            textAlign: "center",
            letterSpacing: "0.01em",
          }}
        >
          Digital mental health tools for communities across Canada
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background:
              "linear-gradient(to right, transparent, #38C5BA 30%, #38C5BA 70%, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

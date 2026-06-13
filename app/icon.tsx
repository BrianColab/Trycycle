import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121929",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "96px",
        }}
      >
        <div
          style={{
            width: "340px",
            height: "340px",
            background: "#38C5BA",
            borderRadius: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#121929",
            fontSize: "156px",
            fontWeight: 800,
            letterSpacing: "-6px",
            paddingRight: "6px",
          }}
        >
          TC
        </div>
      </div>
    ),
    { ...size }
  );
}

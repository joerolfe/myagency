import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 100,
            fontWeight: 700,
            display: "flex",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>Joseph </span>
          <span style={{ color: "#c9a84c" }}>Rolfe</span>
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 28,
            fontFamily: "sans-serif",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Web Design for Local Businesses
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 8,
          }}
        >
          {["Derbyshire", "·", "Staffordshire"].map((t, i) => (
            <span
              key={i}
              style={{
                color: i === 1 ? "#c9a84c" : "rgba(255,255,255,0.3)",
                fontSize: 20,
                fontFamily: "sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

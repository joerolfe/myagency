import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#1a1a1a",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 100,
            fontWeight: 700,
            display: "flex",
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#ffffff" }}>R</span>
          <span style={{ color: "#c9a84c" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

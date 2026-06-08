"use client";

import { useEffect, useState } from "react";

export default function RotatePrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const landscape = window.matchMedia("(orientation: landscape)").matches;
      const mobile = window.matchMedia("(max-width: 1024px)").matches;
      setShow(landscape && mobile);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{ background: "#0a0a0a" }}
    >
      <svg
        width="48" height="48" viewBox="0 0 48 48" fill="none"
        style={{ animation: "rotate90 1.2s ease-in-out infinite alternate" }}
      >
        <rect x="6" y="12" width="28" height="20" rx="3" stroke="#c9a84c" strokeWidth="2.5" />
        <path d="M38 20v8" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 34l4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" />
      </svg>

      <div className="text-center">
        <p
          className="font-black text-white leading-none mb-2"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "22px", letterSpacing: "-0.03em" }}
        >
          Rotate your phone
        </p>
        <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          This site is best viewed in portrait mode
        </p>
      </div>

      <style>{`
        @keyframes rotate90 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-90deg); }
        }
      `}</style>
    </div>
  );
}

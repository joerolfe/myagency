"use client";
import { useEffect, useState } from "react";

const RED = "#dc2626";

export default function GarageNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="relative px-8 md:px-14 h-[68px] flex items-center justify-between">

        {/* Left links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Services"].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Centre logo — absolutely positioned */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: RED }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
              </svg>
            </div>
            <span className="font-black tracking-[0.08em] uppercase text-white" style={{ fontSize: "16px" }}>Apex Auto</span>
          </div>
          <span className="text-[8px] font-medium tracking-[0.3em] uppercase mt-[3px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            Servicing &amp; MOT Centre
          </span>
        </div>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-8">
          {["Gallery", "Contact"].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[11px] font-black px-4 py-2 rounded-sm tracking-wide uppercase transition-all hover:opacity-90"
            style={{ background: RED, color: "white" }}
          >
            Book Now
          </a>
        </div>

      </div>
    </nav>
  );
}

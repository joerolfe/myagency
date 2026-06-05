"use client";

import { useState, useEffect } from "react";

export default function BarberNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "#0f0f0f" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300"
            style={{
              background: "rgba(201,168,76,0.1)",
              borderColor: "rgba(201,168,76,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v10M6 17v4M10 3l4 4-4 4M18 21l-4-4 4-4"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-black text-white leading-none tracking-tight">BLADE & CROWN</p>
            <p className="text-[10px] font-semibold tracking-[0.2em] leading-none mt-[3px]" style={{ color: "#c9a84c" }}>
              BARBERSHOP · DERBY
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Gallery", "About", "Reviews", "Find Us"].map(l => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: "rgba(245,240,232,0.75)" }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#book"
          className="text-sm font-black px-5 py-2.5 rounded-full transition-all duration-300"
          style={{ background: "#c9a84c", color: "#0a0a0a" }}
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

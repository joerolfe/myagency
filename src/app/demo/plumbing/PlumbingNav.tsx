"use client";

import { useState, useEffect } from "react";

export default function PlumbingNav() {
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
        background: scrolled ? "white" : "transparent",
        borderBottom: scrolled ? "1px solid #f0f0f0" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Emergency bar — only visible once scrolled past hero */}
      <div
        className="bg-[#b91c1c] text-white text-center py-2 px-4 transition-all duration-300 overflow-hidden"
        style={{ maxHeight: scrolled ? 40 : 0, opacity: scrolled ? 1 : 0 }}
      >
        <p className="text-xs font-semibold tracking-wide">
          24/7 Emergency Line &mdash;{" "}
          <a href="tel:01283477200" className="font-black underline underline-offset-2">01283 477 200</a>
          {" "}&mdash; No Call-Out Charge
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            style={{ background: scrolled ? "#0c2340" : "rgba(255,255,255,0.15)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div>
            <p
              className="text-sm font-black leading-none tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#0c2340" : "white" }}
            >
              CARTWRIGHT
            </p>
            <p
              className="text-[10px] font-semibold tracking-widest mt-0.5 leading-none transition-colors duration-300"
              style={{ color: scrolled ? "#9ca3af" : "rgba(255,255,255,0.55)" }}
            >
              PLUMBING & HEATING
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "About Us", "Our Work", "Reviews", "Coverage"].map(l => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.85)" }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-300"
          style={
            scrolled
              ? { background: "#0c2340", color: "white" }
              : { background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }
          }
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}

"use client";
import { useEffect, useState } from "react";

const GREEN = "#0c2218";
const STONE = "#c9a870";

export default function RoofingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(12,34,24,0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,112,0.12)",
      }}
    >
      <div className="px-6 md:px-8 h-[76px] relative flex items-center">

        {/* Top-left — nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Our Work", "About", "Contact"].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-[12px] font-semibold tracking-wide transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(250,248,244,0.4)" }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Centre — logo (absolutely positioned) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 leading-none">

          {/* House image — only visible when scrolled */}
          <div
            className="overflow-hidden rounded transition-all duration-500 flex-shrink-0"
            style={{
              width: scrolled ? "38px" : "0px",
              height: scrolled ? "38px" : "0px",
              opacity: scrolled ? 1 : 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=80&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <span
              className="font-black tracking-[0.14em] uppercase"
              style={{ fontSize: "15px", color: "#faf8f4" }}
            >
              Hallmark
            </span>
            <span
              className="font-medium tracking-[0.28em] uppercase mt-[4px]"
              style={{ fontSize: "8px", color: STONE }}
            >
              Roofing &amp; Restoration
            </span>
          </div>
        </div>

        {/* Right — phone + CTA */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <a
            href="tel:01332964700"
            className="text-[12px] font-semibold transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(250,248,244,0.4)" }}
          >
            01332 964 700
          </a>
          <a
            href="#contact"
            className="text-[12px] font-black px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
            style={{ background: STONE, color: GREEN }}
          >
            Free Survey
          </a>
        </div>

      </div>
    </nav>
  );
}

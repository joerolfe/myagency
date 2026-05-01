"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "£299",
    who: "Perfect if you have no website and just need to get online professionally.",
    outcome: "Stop losing customers to competitors who have a website and you don't.",
    features: [
      "1–3 custom pages",
      "Mobile responsive design",
      "Contact form",
      "Google Maps embed",
      "Basic on-page SEO",
      "Domain setup assistance",
    ],
    featured: false,
    cta: "Get Started",
    floatDelay: "0s",
    glowColor: "rgba(0,0,0,0.13)",
    glowColorHover: "rgba(0,0,0,0.20)",
  },
  {
    name: "Standard",
    price: "£599",
    who: "For businesses that want to stand out locally and start winning more enquiries.",
    outcome: "Show up on Google and turn more visitors into paying customers.",
    features: [
      "Up to 6 custom pages",
      "Image & work gallery",
      "SEO setup — titles, meta, structure",
      "Google Business profile setup",
      "Social media links",
      "Blog-ready structure",
    ],
    featured: true,
    cta: "Get Started",
    floatDelay: "0.6s",
    glowColor: "rgba(201,168,76,0.35)",
    glowColorHover: "rgba(201,168,76,0.55)",
  },
  {
    name: "Premium",
    price: "£999",
    who: "For businesses that want a complete digital presence that does the selling for them.",
    outcome: "A full digital presence that generates enquiries around the clock.",
    features: [
      "6+ fully custom pages",
      "Blog / news section",
      "Booking or enquiry system",
      "Full SEO setup & strategy",
      "Google Analytics setup",
      "Performance & speed optimisation",
    ],
    featured: false,
    cta: "Get Started",
    floatDelay: "1.2s",
    glowColor: "rgba(0,0,0,0.13)",
    glowColorHover: "rgba(0,0,0,0.20)",
  },
];

function CheckIcon({ color = "#c9a84c" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill={color} fillOpacity="0.12" />
      <path d="M4 7L6 9L10 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingCard({ pkg }: { pkg: typeof packages[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, active: false });
  const [shine, setShine] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y - rect.height / 2) / rect.height) * -10;
    const rotY = ((x - rect.width / 2) / rect.width) * 10;
    setTilt({ rotX, rotY, active: true });
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }

  function handleMouseLeave() {
    setTilt({ rotX: 0, rotY: 0, active: false });
    setShine({ x: 50, y: 50 });
  }

  return (
    <div style={{ perspective: "1200px", paddingBottom: "28px" }}>
      {/* Glow blob beneath card */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full blur-2xl pointer-events-none transition-all duration-500"
        style={{
          background: tilt.active ? pkg.glowColorHover : pkg.glowColor,
          transform: "translateX(-50%) scaleX(0.85)",
        }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          animation: `cardFloat 3.6s ease-in-out infinite`,
          animationDelay: pkg.floatDelay,
          transform: tilt.active
            ? `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) translateZ(20px)`
            : undefined,
          transition: tilt.active
            ? "transform 0.08s ease, box-shadow 0.08s ease"
            : "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: tilt.active
            ? pkg.featured
              ? "0 28px 70px rgba(201,168,76,0.45), 0 8px 24px rgba(0,0,0,0.10)"
              : "0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)"
            : pkg.featured
              ? "0 20px 50px rgba(201,168,76,0.30), 0 6px 20px rgba(0,0,0,0.08)"
              : "0 16px 44px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.05)",
          transformStyle: "preserve-3d",
        }}
        className={`relative flex flex-col rounded-sm overflow-hidden cursor-default will-change-transform ${
          pkg.featured ? "border-2 border-gold" : "border border-[#e8e8e8]"
        }`}
      >
        {/* Gloss shine */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-sm"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.22) 0%, transparent 60%)`,
            opacity: tilt.active ? 1 : 0,
            transition: tilt.active ? "none" : "opacity 0.4s",
          }}
        />

        {/* Ambient top-edge highlight — always visible */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
          style={{
            background: pkg.featured
              ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          }}
        />

        {pkg.featured && (
          <div className="bg-gold px-6 py-2.5 text-center">
            <span className="text-white text-xs font-bold tracking-widest uppercase">Most Popular</span>
          </div>
        )}

        <div className={`flex flex-col flex-1 p-7 ${pkg.featured ? "bg-white" : "bg-stone"}`}>
          <div className="mb-6">
            <h3 className="font-display text-xl font-bold text-ink mb-1">{pkg.name}</h3>
            <div className="font-sans text-4xl font-bold text-ink mb-1 tracking-tight">
              {pkg.price}
              <span className="text-base font-normal text-[#999] ml-1">one-off</span>
            </div>
            <p className="text-[#888] text-xs leading-relaxed mt-2 italic">{pkg.who}</p>
          </div>

          <div className="flex items-start gap-2 bg-gold/8 border border-gold/20 rounded-sm px-3 py-2.5 mb-6">
            <span className="text-gold text-xs mt-0.5 flex-shrink-0 font-bold">→</span>
            <p className="text-[#7a5c1e] text-xs leading-relaxed font-medium">{pkg.outcome}</p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-[#444] text-sm">{f}</span>
              </li>
            ))}
            <li className="flex items-start gap-2.5 opacity-50">
              <CheckIcon />
              <span className="text-[#444] text-sm">Everything in the "included" list above</span>
            </li>
          </ul>

          <Link
            href="/contact"
            className={`block text-center py-3.5 text-sm font-semibold tracking-wide transition-all duration-150 rounded-sm ${
              pkg.featured
                ? "bg-gold text-white hover:bg-[#b8912e] shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
                : "border border-[#d0d0d0] text-ink hover:border-ink hover:bg-ink hover:text-white"
            }`}
          >
            {pkg.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <>
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
      <div className="grid md:grid-cols-3 gap-8 items-center py-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="relative">
            <PricingCard pkg={pkg} />
          </div>
        ))}
      </div>
    </>
  );
}

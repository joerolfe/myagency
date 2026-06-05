"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const blurUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

// ── Browser shell ─────────────────────────────────────────────────
function BrowserShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[#e0e0e0]"
      style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)" }}
    >
      <div className="overflow-hidden h-[520px]">{children}</div>
    </div>
  );
}

// ── Shared star ───────────────────────────────────────────────────
const Star = () => (
  <svg width="8" height="8" viewBox="0 0 10 10" fill="#fbbf24">
    <path d="M5 1l1.2 2.5L9 3.8 7 5.8l.5 2.7L5 7.2 2.5 8.5 3 5.8 1 3.8l2.8-.3z" />
  </svg>
);

// ── PLUMBING HERO ─────────────────────────────────────────────────
function PlumbingHero() {
  return (
    <div className="select-none bg-white h-full flex flex-col">
      {/* Emergency bar */}
      <div className="bg-[#dc2626] px-4 py-1.5 text-center flex-shrink-0">
        <p className="text-[7px] font-semibold text-white tracking-wide">
          24/7 Emergency · <strong>01283 477 200</strong> · No Call-Out Fee
        </p>
      </div>

      {/* Nav */}
      <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#1b3a6b] flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[8.5px] font-black text-[#1b3a6b] leading-none tracking-tight">CARTWRIGHT</p>
            <p className="text-[5.5px] text-gray-400 font-semibold tracking-[0.18em] mt-[2px] leading-none">PLUMBING & HEATING</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {["Services", "About", "Reviews"].map(l => (
            <span key={l} className="text-[7px] text-gray-500 font-medium">{l}</span>
          ))}
          <div className="bg-[#1b3a6b] text-white text-[7px] font-bold px-2.5 py-1.5 rounded-lg">Book Online</div>
        </div>
      </div>

      {/* Hero – fills remaining height */}
      <div
        className="relative flex-1 flex flex-col justify-between px-5 pt-6 pb-5 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1b3a6b 55%, #1e5ca3 100%)" }}
      >
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/[0.04]" />
        <div className="absolute right-6 top-20 w-20 h-20 rounded-full bg-blue-300/10" />
        <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />

        <div className="relative">
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {["Gas Safe ✓", "Which? Trusted ✓", "Fully Insured"].map(b => (
              <span key={b} className="text-[6.5px] font-semibold text-white/75 bg-white/10 border border-white/15 px-2 py-0.5 rounded-full">{b}</span>
            ))}
          </div>
          <h1 className="font-black text-white leading-none tracking-tight mb-3">
            <span className="text-[28px] block">Expert</span>
            <span className="text-[28px] block" style={{ color: "#93c5fd" }}>Plumbing.</span>
          </h1>
          <p className="text-white/55 text-[8px] leading-relaxed mb-5" style={{ maxWidth: 210 }}>
            From emergency call-outs to full bathroom fits. Trusted across Burton, Derby & Staffordshire since 2003.
          </p>
          <div className="flex gap-2 mb-5">
            <div className="bg-white text-[#1b3a6b] text-[8px] font-black px-4 py-2 rounded-lg shadow-sm">Get Free Quote</div>
            <div className="text-white text-[8px] font-semibold px-3 py-2 rounded-lg border border-white/25">01283 477 200</div>
          </div>
          {/* Feature bullets */}
          <div className="flex flex-col gap-1.5">
            {["No call-out charge, ever", "Same-day emergency response", "Fixed-price quotes, no surprises"].map(f => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[7px] text-white/55">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative flex gap-6 pt-4 border-t border-white/10">
          {[["500+", "Jobs done"], ["4.9 ★", "Google"], ["20yrs", "Experience"]].map(([v, l]) => (
            <div key={l}>
              <p className="text-[13px] font-black text-white leading-none">{v}</p>
              <p className="text-[6px] text-white/35 font-medium mt-1 uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── HAIRDRESSER HERO ──────────────────────────────────────────────
function HairdresserHero() {
  return (
    <div className="select-none h-full flex flex-col" style={{ background: "#fafaf8" }}>
      {/* Announcement */}
      <div className="bg-[#1a1a1a] px-4 py-1.5 text-center flex-shrink-0">
        <p className="text-[7px] text-white/50 font-medium tracking-wider">
          Now booking July &mdash; <span style={{ color: "#c9a84c" }} className="font-semibold">secure your slot →</span>
        </p>
      </div>

      {/* Nav */}
      <div className="border-b border-[#ece8e0] px-4 py-2.5 flex items-center justify-between flex-shrink-0" style={{ background: "#fafaf8" }}>
        <div>
          <p className="text-[11px] font-black text-[#1a1a1a] leading-none tracking-tighter">MAISON</p>
          <p className="text-[5.5px] text-[#9a8b6e] font-semibold tracking-[0.3em] leading-none mt-[2px]">HAIR STUDIO</p>
        </div>
        <div className="flex items-center gap-3">
          {["Services", "Gallery", "Team"].map(l => (
            <span key={l} className="text-[7px] text-[#666] font-medium">{l}</span>
          ))}
          <div className="bg-[#1a1a1a] text-white text-[7px] font-bold px-2.5 py-1.5 rounded-full">Book Now</div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative flex-1 flex flex-col justify-between px-5 pt-6 pb-5 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #111 0%, #1e1a16 50%, #111 100%)" }}
      >
        <div className="absolute top-0 right-0 w-44 h-44 rounded-bl-full" style={{ background: "radial-gradient(circle at top right, rgba(201,168,76,0.14), transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32" style={{ background: "radial-gradient(circle at bottom left, rgba(201,168,76,0.08), transparent 65%)" }} />
        <div className="absolute right-6 top-6 opacity-[0.07]">
          <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round">
            <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
        </div>

        <div className="relative">
          <p className="text-[7px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#c9a84c" }}>
            Award-Winning Hair Studio · Lichfield
          </p>
          <h1 className="font-black text-white leading-none tracking-tight mb-3">
            <span className="text-[26px] block">Where Style</span>
            <span className="text-[26px] block">Meets <span style={{ color: "#c9a84c" }}>Artistry.</span></span>
          </h1>
          <p className="text-white/50 text-[8px] leading-relaxed mb-5" style={{ maxWidth: 200 }}>
            Premium cuts, colour & treatments in the heart of Lichfield. Walk away feeling like yourself, only better.
          </p>
          <div className="flex gap-2 mb-5">
            <div className="text-[#1a1a1a] text-[8px] font-black px-4 py-2 rounded-full" style={{ background: "#c9a84c" }}>Book Appointment</div>
            <div className="text-white text-[8px] font-medium px-3 py-2 rounded-full border border-white/20">View Services</div>
          </div>
          {/* Popular services quick list */}
          <div className="flex flex-col gap-1.5">
            {[["Cut & Blow Dry", "£55"], ["Balayage", "£130"], ["Keratin Treatment", "£150"]].map(([s, p]) => (
              <div key={s} className="flex items-center justify-between border-b border-white/[0.07] pb-1.5">
                <span className="text-[7px] text-white/45">{s}</span>
                <span className="text-[7px] font-bold" style={{ color: "#c9a84c" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating + stats */}
        <div className="relative flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">{[0,1,2,3,4].map(i => <Star key={i} />)}</div>
            <span className="text-[7px] text-white/40">4.9 · 418 Google reviews</span>
          </div>
          <div className="flex gap-4">
            {[["12yr", "Est."], ["2,400+", "Clients"]].map(([v, l]) => (
              <div key={l} className="text-right">
                <p className="text-[11px] font-black text-white leading-none">{v}</p>
                <p className="text-[6px] text-white/35 font-medium mt-0.5 uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Scale constants for the plumbing iframe ───────────────────────
// Card width = 720px, demo page = 1280px → scale = 720/1280 = 0.5625
// Visible content height = 520px → iframe height = 520/0.5625 ≈ 924px
const CARD_W = 720;
const IFRAME_SCALE = CARD_W / 1280;
const IFRAME_H = Math.round(520 / IFRAME_SCALE);

// ── Sites data ────────────────────────────────────────────────────
const sites = [
  {
    url: "cartwrightplumbing.co.uk",
    business: "Cartwright Plumbing & Heating",
    industry: "Emergency Plumber · Burton-on-Trent",
    iframe: "/demo/plumbing",
    component: null,
  },
  {
    url: "hallmarkroofing.co.uk",
    business: "Hallmark Roofing & Restoration",
    industry: "Roofing Contractor · South Derbyshire",
    iframe: "/demo/roofing",
    component: null,
  },
  {
    url: "bladeandcrown.co.uk",
    business: "Blade & Crown Barbershop",
    industry: "Barber · Derby City Centre",
    iframe: "/demo/barber",
    component: null,
  },
];

// ── Card position styles ──────────────────────────────────────────
// GAP = desired pixel gap between centre card edge and side card inner visual edge.
// Side cards are pushed past the viewport centre so ~half is off-screen.
// rotateY(±22deg) adds the angled look from the reference; perspective is set on the stage.
const HALF = CARD_W / 2; // 360px
const GAP = 10; // px gap between centre card and each side card

function cardStyle(pos: number): React.CSSProperties {
  const tr = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.9s ease";
  if (pos === 0) return {
    transform: "translateX(-50%) scale(1)",
    opacity: 1,
    zIndex: 10,
    transition: tr,
  };
  // Right — inner edge at: centre_right + GAP
  if (pos === 1) return {
    transform: `translateX(calc(${HALF + GAP}px)) rotateY(-22deg) scale(0.92)`,
    opacity: 0.65,
    zIndex: 5,
    transition: tr,
  };
  // Left — mirror
  return {
    transform: `translateX(calc(-${HALF + CARD_W + GAP}px)) rotateY(22deg) scale(0.92)`,
    opacity: 0.65,
    zIndex: 5,
    transition: tr,
  };
}

// ── Main section ──────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [scale, setScale] = useState(1);

  // Auto-advance every 10 seconds
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % sites.length), 10000);
    return () => clearInterval(t);
  }, []);

  // Scale the carousel to fit the viewport on mobile
  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / 780));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="portfolio" className="py-14 md:py-16 bg-white border-t border-[#ebebeb] overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center mb-10 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Demo Sites</motion.p>
        <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">
          Looking for 3 founding clients
        </motion.h2>
        <motion.p variants={blurUp} className="text-[#666] mt-4 text-base max-w-xl mx-auto">
          These are example sites built to show you the quality of work. While I&apos;m still building my portfolio, I&apos;m taking on
          3 new clients at a reduced rate — in exchange for an honest review once your site is live.
        </motion.p>
      </motion.div>

      {/* Stage — outer div sets layout height, inner div scales the carousel */}
      <div style={{ height: Math.round(590 * scale), position: "relative", overflow: "hidden" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top center", height: 590 }}>
          <div className="relative h-[590px]" style={{ perspective: "1400px", perspectiveOrigin: "50% 45%" }}>
            {sites.map((site, i) => {
              const pos = ((i - active) % 3 + 3) % 3;
              return (
                <div
                  key={site.url}
                  className="absolute top-0 left-1/2 cursor-pointer"
                  style={{ width: CARD_W, ...cardStyle(pos) }}
                  onClick={() => pos !== 0 && setActive(i)}
                >
                  <BrowserShell>
                    {site.iframe ? (
                      <iframe
                        src={site.iframe}
                        title={site.business}
                        scrolling="no"
                        style={{
                          width: 1280,
                          height: IFRAME_H,
                          transform: `scale(${IFRAME_SCALE})`,
                          transformOrigin: "top left",
                          border: "none",
                          pointerEvents: "none",
                          display: "block",
                        }}
                      />
                    ) : (
                      site.component
                    )}
                  </BrowserShell>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active site label */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mt-5 px-6"
      >
        <p className="text-sm font-bold text-ink">{sites[active].business}</p>
        <p className="text-xs text-[#888] mt-0.5">{sites[active].industry}</p>
      </motion.div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {sites.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: active === i ? 24 : 6,
              backgroundColor: active === i ? "var(--color-gold)" : "#d4d4d4",
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-6 text-center px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="text-[#888] text-sm">
          Want to see what I&apos;d build for{" "}
          <span className="text-ink font-semibold">your</span> business?{" "}
          <a href="/contact" className="text-gold font-semibold hover:underline">Get a free demo.</a>
        </p>
      </motion.div>
    </section>
  );
}

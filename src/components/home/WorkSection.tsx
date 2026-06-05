"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const blurUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

function BrowserShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ height: 500, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

const CARD_W = 720;
const IFRAME_SCALE = CARD_W / 1280;
const IFRAME_H = Math.round(500 / IFRAME_SCALE);
const HALF = CARD_W / 2;
const GAP = 10;

const sites = [
  {
    url: "cartwrightplumbing.co.uk",
    business: "Cartwright Plumbing & Heating",
    industry: "Emergency Plumber · Burton-on-Trent",
    iframe: "/demo/plumbing",
  },
  {
    url: "hallmarkroofing.co.uk",
    business: "Hallmark Roofing & Restoration",
    industry: "Roofing Contractor · South Derbyshire",
    iframe: "/demo/roofing",
  },
  {
    url: "bladeandcrown.co.uk",
    business: "Blade & Crown Barbershop",
    industry: "Barber · Derby City Centre",
    iframe: "/demo/barber",
  },
];

function cardStyle(pos: number): React.CSSProperties {
  const tr = "transform 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.9s ease";
  if (pos === 0) return { transform: "translateX(-50%) scale(1)", opacity: 1, zIndex: 10, transition: tr };
  if (pos === 1) return { transform: `translateX(calc(${HALF + GAP}px)) rotateY(-22deg) scale(0.92)`, opacity: 0.6, zIndex: 5, transition: tr };
  return { transform: `translateX(calc(-${HALF + CARD_W + GAP}px)) rotateY(22deg) scale(0.92)`, opacity: 0.6, zIndex: 5, transition: tr };
}


export default function WorkSection() {
  const [active, setActive] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % sites.length), 10000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / 1000));
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="work"
      className="py-14 md:py-20 overflow-hidden"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-10 px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>
          Demo Sites
        </motion.p>
        <motion.h2
          variants={blurUp}
          className="font-black text-white leading-none"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-0.04em" }}
        >
          Looking for 3 founding clients
        </motion.h2>
        <motion.p variants={blurUp} className="mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
          These are example sites built to show you the quality of work. I&apos;m taking on
          3 new clients at a reduced rate — in exchange for an honest review once your site is live.
        </motion.p>
      </motion.div>

      {/* Carousel stage */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: Math.round(542 * scale), position: "relative", overflow: "hidden" }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top center", height: 542 }}>
          <div className="relative h-[542px]" style={{ perspective: "1400px", perspectiveOrigin: "50% 45%" }}>
            {sites.map((site, i) => {
              const pos = ((i - active) % 3 + 3) % 3;
              return (
                <div key={site.url} className="absolute top-0 left-1/2 cursor-pointer" style={{ width: CARD_W, ...cardStyle(pos) }} onClick={() => pos !== 0 && setActive(i)}>
                  <BrowserShell>
                    <iframe src={site.iframe} title={site.business} scrolling="no"
                      style={{ width: 1280, height: IFRAME_H, transform: `scale(${IFRAME_SCALE})`, transformOrigin: "top left", border: "none", pointerEvents: "none", display: "block" }} />
                  </BrowserShell>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Active label */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mt-6 px-6"
      >
        <p className="font-black text-white text-sm" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
          {sites[active].business}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{sites[active].industry}</p>
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
              background: active === i ? "#c9a84c" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-8 text-center px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
      >
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          Want to see what I&apos;d build for{" "}
          <span className="text-white font-semibold">your</span> business?{" "}
          <a href="/contact" className="font-black hover:opacity-80 transition-opacity" style={{ color: "#c9a84c" }}>
            Get a free demo.
          </a>
        </p>
      </motion.div>
    </section>
  );
}

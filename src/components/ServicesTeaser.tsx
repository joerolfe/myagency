"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const packages = [
  {
    name: "Starter",
    price: "£299",
    description: "Get your business online fast with a clean, professional site.",
    featured: false,
  },
  {
    name: "Standard",
    price: "£599",
    description: "A complete online presence built to win more local customers.",
    featured: true,
  },
  {
    name: "Premium",
    price: "£999",
    description: "A full-featured site with everything you need to scale.",
    featured: false,
  },
];

function TiltCard({ pkg }: { pkg: (typeof packages)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0, on: false });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRot({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * -8,
      y: ((e.clientX - r.left - r.width / 2) / r.width) * 8,
      on: true,
    });
  }

  return (
    <motion.div variants={blurUp} style={{ perspective: "1000px" }} className={pkg.featured ? "pt-4" : ""}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setRot({ x: 0, y: 0, on: false })}
        style={{
          transform: rot.on
            ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(14px)`
            : undefined,
          transition: rot.on
            ? "transform 0.08s ease, box-shadow 0.08s ease"
            : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: rot.on
            ? pkg.featured
              ? "0 22px 52px rgba(201,168,76,0.32), 0 6px 20px rgba(0,0,0,0.08)"
              : "0 18px 44px rgba(0,0,0,0.14)"
            : pkg.featured
              ? "0 8px 32px rgba(201,168,76,0.15)"
              : "0 2px 12px rgba(0,0,0,0.04)",
        }}
        className={`relative rounded-sm p-6 flex flex-col gap-3 h-full cursor-default ${
          pkg.featured ? "border-2 border-gold bg-white" : "border border-[#e8e8e8] bg-stone"
        }`}
      >
        {/* Gloss shine on tilt */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 55%)",
            opacity: rot.on ? 1 : 0,
            transition: rot.on ? "none" : "opacity 0.4s",
          }}
        />

        {pkg.featured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(201,168,76,0.4)]">
            Most Popular
          </span>
        )}

        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink">{pkg.name}</h3>
          <span className="font-sans text-2xl font-bold text-ink tracking-tight flex-shrink-0">{pkg.price}</span>
        </div>
        <p className="text-[#666] text-sm leading-relaxed">{pkg.description}</p>
        <Link
          href="/services"
          className={`mt-auto text-center text-xs font-semibold py-2.5 rounded-sm transition-all duration-150 ${
            pkg.featured
              ? "bg-gold text-white hover:bg-[#b8912e]"
              : "border border-[#d0d0d0] text-ink hover:border-ink hover:bg-ink hover:text-white"
          }`}
        >
          See what&apos;s included
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesTeaser() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={blurUp} className="inline-flex items-center gap-2 bg-ink/5 border border-ink/15 rounded-full px-3.5 py-1 mb-4">
            <svg width="13" height="13" viewBox="0 0 28 28" fill="none"><rect x="2" y="4" width="24" height="16" rx="2.5" stroke="#111" strokeWidth="2"/><path d="M9 24h10M14 20v4" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-xs font-bold tracking-widest uppercase text-ink/60">Website Packages</span>
          </motion.div>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Simple, transparent pricing
          </motion.h2>
          <motion.div variants={blurUp} className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#7a5c1e]">Starting from £299 — one-off payment</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {packages.map((pkg) => (
            <TiltCard key={pkg.name} pkg={pkg} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-ink hover:text-gold hover:border-gold transition-colors duration-150 pb-0.5"
          >
            View full pricing &amp; comparison
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

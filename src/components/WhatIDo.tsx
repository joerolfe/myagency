"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

function Dash() {
  return <span className="text-gold font-bold flex-shrink-0 leading-snug">—</span>;
}

const MonitorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="4" width="24" height="16" rx="2.5" stroke="#c9a84c" strokeWidth="1.8" />
    <path d="M9 24h10M14 20v4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 13l3 3 5-6" stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M16 3L6 16h8l-2 9L24 12h-8l3-9z" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const websiteBullets = [
  "Mobile responsive & fast loading",
  "Custom design, no templates",
  "SEO & Google Business setup",
  "Hosting fully managed",
];

const automationBullets = [
  "Missed call text-back",
  "Google review requests",
  "Instant lead follow-up",
  "No tech knowledge needed",
];

export default function WhatIDo() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Services
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
            Websites. Automations. Both handled for you.
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] text-base leading-relaxed max-w-2xl mx-auto">
            Whether you need a professional website, smart automations to save you time, or both — I handle everything end to end.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-stretch"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Websites card */}
          <motion.div
            variants={blurUp}
            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(201,168,76,0.15)" }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="bg-[#111111] border border-[#c9a84c33] rounded-xl p-8 flex flex-col gap-5 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <MonitorIcon />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-display text-2xl font-bold text-white mb-3">Custom Websites</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                A fast, professional website built around your business. Looks sharp on every device and turns visitors into enquiries.
              </p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {websiteBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-white/65 text-sm">
                    <Dash />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-lg font-bold text-gold tracking-tight mb-5">From £299 — one-off</p>
            </div>
            <Link
              href="/services"
              className="block text-center py-3.5 px-6 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-[#b8912e] transition-colors shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
            >
              See Website Packages →
            </Link>
          </motion.div>

          {/* Automations card */}
          <motion.div
            variants={blurUp}
            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(201,168,76,0.10)" }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="bg-[#111111] border border-[#c9a84c33] rounded-xl p-8 flex flex-col gap-5 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <BoltIcon />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-display text-2xl font-bold text-white mb-3">AI Automations</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                Smart systems that follow up leads, request reviews, and handle missed calls — running automatically while you work.
              </p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {automationBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-white/65 text-sm">
                    <Dash />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-lg font-bold text-gold tracking-tight mb-5">From £25/month</p>
            </div>
            <Link
              href="/automations"
              className="block text-center py-3.5 px-6 border border-gold/50 text-gold text-sm font-semibold rounded-lg hover:bg-gold/10 transition-colors"
            >
              See Automations →
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

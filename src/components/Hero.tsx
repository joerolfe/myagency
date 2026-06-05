"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import CountUp from "./CountUp";
import { spotsLeft } from "@/lib/config";

// ─── Animation variants ───────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

// ─── Garage demo mockups ──────────────────────────────────────────────────────

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">

      {/* Floating badge */}
      <motion.div
        className="absolute -top-5 -left-6 z-10 rounded-xl px-4 py-3"
        style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.10)", border: "1px solid #f0f0f0" }}
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#fef9ec" }}>
            <span className="text-gold text-sm leading-none">✦</span>
          </div>
          <div>
            <p className="text-xs font-bold text-ink leading-none mb-0.5">This could be your website</p>
            <p className="text-[10px] text-[#888] leading-none">100% custom — no templates</p>
          </div>
        </div>
      </motion.div>

      {/* Browser shell */}
      <div className="animate-float rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-[#e0e0e0]">


        {/* Website — garage hero */}
        <div className="select-none overflow-hidden relative" style={{ background: "#0a0a0a" }}>

          {/* Background image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80"
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.62)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.5) 100%)" }} />
          </div>

          {/* Nav */}
          <div className="relative flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-5">
              {["About", "Services"].map(l => (
                <span key={l} className="text-[7px] font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</span>
              ))}
            </div>
            {/* Centre logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "#dc2626" }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
                  </svg>
                </div>
                <span className="font-black text-[9px] tracking-[0.08em] uppercase text-white">Apex Auto</span>
              </div>
              <span className="text-[4.5px] tracking-[0.3em] uppercase mt-[2px]" style={{ color: "rgba(255,255,255,0.3)" }}>Servicing &amp; MOT</span>
            </div>
            <div className="flex items-center gap-3">
              {["Gallery", "Contact"].map(l => (
                <span key={l} className="text-[7px] font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</span>
              ))}
              <span className="text-[6.5px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wide" style={{ background: "#dc2626", color: "white" }}>Book Now</span>
            </div>
          </div>

          {/* Centred hero content */}
          <div className="relative flex flex-col items-center justify-center text-center px-6 py-12">
            <div className="w-8 h-8 rounded flex items-center justify-center mb-3" style={{ background: "#dc2626" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
              </svg>
            </div>
            <h2 className="font-black tracking-[0.06em] uppercase text-white leading-none mb-1" style={{ fontSize: "24px" }}>
              Apex Auto
            </h2>
            <p className="text-[6.5px] font-semibold tracking-[0.35em] uppercase mb-7" style={{ color: "rgba(255,255,255,0.35)" }}>
              Servicing &nbsp;·&nbsp; MOT &nbsp;·&nbsp; Diagnostics
            </p>
            <div
              className="text-[7.5px] font-black tracking-[0.18em] uppercase px-6 py-2 rounded-sm border-2"
              style={{ borderColor: "rgba(255,255,255,0.55)", color: "white" }}
            >
              View Services
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative flex flex-col items-center pb-4 gap-1">
            <span className="text-[5.5px] font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</span>
            <div className="w-px h-5" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }} />
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <motion.div
        className="absolute -bottom-10 -right-16 z-10"
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ animation: "floatDelayed 5s ease-in-out 0.8s infinite" }}
      >
        <div
          className="w-[160px] overflow-hidden flex flex-col"
          style={{ borderRadius: "28px", border: "3px solid rgba(255,255,255,0.1)", boxShadow: "0 32px 72px rgba(0,0,0,0.6)", background: "#0a0a0a" }}
        >
          {/* Status bar / notch */}
          <div className="flex justify-center pt-2 pb-1.5" style={{ background: "#0a0a0a" }}>
            <div className="w-10 h-[5px] rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Nav — centred logo only */}
          <div className="flex flex-col items-center py-3 px-3" style={{ background: "#0a0a0a" }}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "#dc2626" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
                </svg>
              </div>
              <span className="font-black text-[11px] tracking-[0.1em] uppercase text-white">APEX AUTO</span>
            </div>
            <span className="text-[6px] font-semibold tracking-[0.28em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              SERVICING &amp; MOT CENTRE
            </span>
          </div>

          {/* Full hero image */}
          <div className="relative flex-1" style={{ minHeight: "260px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=85"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.60)" }} />
            {/* Vignette */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.45) 100%)" }} />

            {/* Centred content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              {/* Standalone icon */}
              <div className="w-9 h-9 rounded-sm flex items-center justify-center mb-4" style={{ background: "#dc2626" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
                </svg>
              </div>

              {/* Big heading */}
              <p className="font-black text-white text-center leading-none mb-3" style={{ fontSize: "26px", letterSpacing: "0.05em" }}>
                APEX AUTO
              </p>

              {/* Subtitle — two lines */}
              <p className="text-center font-semibold leading-snug mb-6" style={{ fontSize: "7px", letterSpacing: "0.28em", color: "rgba(255,255,255,0.45)" }}>
                SERVICING · MOT ·<br />DIAGNOSTICS
              </p>

              {/* Button */}
              <div
                className="font-black text-white text-center uppercase"
                style={{ fontSize: "8px", letterSpacing: "0.22em", border: "1.5px solid rgba(255,255,255,0.7)", padding: "8px 20px" }}
              >
                VIEW SERVICES
              </div>
            </div>

            {/* Scroll indicator — bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1.5">
              <span className="font-bold" style={{ fontSize: "5.5px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.28)" }}>SCROLL</span>
              <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
            </div>
          </div>

          {/* Home bar */}
          <div className="flex justify-center py-2" style={{ background: "#0a0a0a" }}>
            <div className="w-12 h-[4px] rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const headlineWords = ["Grow", "your", "local", "business"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: mockup drifts upward as user scrolls away
  const mockupY     = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const textY       = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 bg-white overflow-hidden"
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[5%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.18, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-8%] w-[560px] h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.22, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute top-[50%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left — staggered text ── */}
          <motion.div
            style={{ y: textY }}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Badges */}
            <motion.div variants={blurUp} className="flex flex-wrap gap-2 mb-7">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-700 text-xs font-semibold">
                  {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left this month
                </span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 bg-gold/10 rounded-full px-3.5 py-1.5">
                <span className="text-[#7a5c1e] text-xs font-semibold">
                  Taking on 3 new clients — Derbyshire &amp; Staffordshire
                </span>
              </div>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="font-display text-5xl md:text-[3.5rem] lg:text-6xl xl:text-7xl font-bold leading-[1.12] tracking-tight text-ink mb-6">
              <span className="inline">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={blurUp}
                    className="inline-block mr-[0.22em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br className="hidden lg:block" />
              <motion.span
                variants={blurUp}
                className="inline-block text-gold italic relative"
              >
                the smart way.
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-gold/40 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              variants={blurUp}
              className="text-lg text-[#555] leading-relaxed mb-6 max-w-lg"
            >
              I build professional websites and set up smart automations for local businesses — so you get more customers and spend less time chasing them.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={blurUp} className="flex flex-col sm:flex-row items-start gap-3 mb-5">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(201,168,76,0.50)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-full sm:w-auto text-center px-7 py-3.5 bg-gold text-white text-sm font-semibold rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.35)] cursor-pointer"
              >
                Get a Free Demo
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-full sm:w-auto text-center px-7 py-3.5 border border-[#ccc] text-ink text-sm font-semibold hover:border-ink hover:bg-ink hover:text-white transition-all duration-150 rounded-sm cursor-pointer"
              >
                See Pricing
              </motion.a>
            </motion.div>

            <motion.p variants={blurUp} className="text-sm text-[#888] mb-6">
              Websites from{" "}
              <span className="text-ink font-semibold">£299</span> — free demo, no commitment.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              variants={blurUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#777]"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-gold text-base leading-none">★★★★★</span>
                <span>5-star service</span>
              </span>
              <span className="hidden sm:block w-px h-4 bg-[#ddd]" />
              <span>No upfront payment</span>
              <span className="hidden sm:block w-px h-4 bg-[#ddd]" />
              <span>Free demo — no commitment</span>
            </motion.div>
          </motion.div>

          {/* ── Right — browser mockup with scroll parallax ── */}
          <motion.div
            className="hidden lg:flex justify-center items-center py-10"
            initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: mockupY, scale: mockupScale }}
          >
            <BrowserMockup />
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          className="relative mt-8 lg:mt-10"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          {/* Glow beneath */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-2xl pointer-events-none"
            style={{ background: "rgba(201,168,76,0.18)" }}
          />
          <motion.div
            className="relative grid grid-cols-3 divide-x divide-[#e8e8e8] rounded-xl overflow-hidden border border-[#eeebe3] bg-stone"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ boxShadow: "0 20px 56px rgba(0,0,0,0.09), 0 4px 16px rgba(201,168,76,0.18), 0 1px 0 rgba(255,255,255,0.9) inset" }}
          >
            <a href="/#process" className="py-4 px-3 md:py-6 md:px-4 text-center hover:bg-white transition-colors duration-200 group">
              <div className="font-sans text-xl md:text-3xl font-bold text-ink mb-1 tracking-tight group-hover:text-gold transition-colors duration-150">
                <CountUp to={48} suffix="hr" />
              </div>
              <div className="text-xs text-[#888] tracking-wide font-medium">Demo delivered</div>
              <div className="text-[10px] text-[#bbb] mt-0.5">See how it works →</div>
            </a>
            <div className="py-4 px-3 md:py-6 md:px-4 text-center">
              <div className="font-sans text-xl md:text-3xl font-bold text-ink mb-1 tracking-tight">£0</div>
              <div className="text-xs text-[#888] tracking-wide font-medium">Upfront cost</div>
              <div className="text-[10px] text-[#bbb] mt-0.5">Pay only when happy</div>
            </div>
            <a href="/#portfolio" className="py-4 px-3 md:py-6 md:px-4 text-center hover:bg-white transition-colors duration-200 group">
              <div className="font-sans text-xl md:text-3xl font-bold text-ink mb-1 tracking-tight group-hover:text-gold transition-colors duration-150">
                <CountUp to={5} suffix="-Star" />
              </div>
              <div className="text-xs text-[#888] tracking-wide font-medium">Rated service</div>
              <div className="text-[10px] text-[#bbb] mt-0.5">See example work →</div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

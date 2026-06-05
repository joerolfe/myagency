"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

const cardStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const websitePackages = [
  {
    num: "01",
    name: "Starter",
    price: "£299",
    period: "one-off",
    tag: null,
    description: "Get online professionally. Perfect for trades with no website yet.",
    features: ["1–3 custom pages", "Mobile responsive design", "Contact form", "Google Maps embed", "Basic on-page SEO", "Domain setup assistance"],
    featured: false,
  },
  {
    num: "02",
    name: "Standard",
    price: "£599",
    period: "one-off",
    tag: "Most Popular",
    description: "Stand out locally and start winning more enquiries from Google.",
    features: ["Up to 6 custom pages", "Image & work gallery", "SEO setup — titles, meta, structure", "Google Business profile setup", "Social media links", "Blog-ready structure"],
    featured: true,
  },
  {
    num: "03",
    name: "Premium",
    price: "£999",
    period: "one-off",
    tag: null,
    description: "A complete digital presence that generates enquiries around the clock.",
    features: ["6+ fully custom pages", "Blog / news section", "Booking or enquiry system", "Full SEO setup & strategy", "Google Analytics setup", "Performance & speed optimisation"],
    featured: false,
  },
];

const automationPackages = [
  {
    num: "01",
    name: "Missed Call Text-Back",
    price: "£30/mo",
    period: "+ £125 setup",
    tag: null,
    description: "Customer calls and you can't answer? They instantly get a text so they don't ring a competitor.",
    features: ["Instant SMS reply", "Custom message", "Works 24/7", "Call log dashboard"],
    featured: false,
  },
  {
    num: "02",
    name: "Full Bundle",
    price: "£75/mo",
    period: "+ £350 setup",
    tag: "Best Value",
    description: "Get 3 automations set up together at a reduced rate — the most popular option.",
    features: ["3 automations included", "Priority support", "Monthly reporting", "Reduced setup fee"],
    featured: true,
  },
  {
    num: "03",
    name: "Google Review Requests",
    price: "£25/mo",
    period: "+ £125 setup",
    tag: null,
    description: "After every job, your customer automatically gets a text asking for a Google review.",
    features: ["Auto review requests", "Google & Facebook", "Custom timing", "Response tracking"],
    featured: false,
  },
];

type Pkg = typeof websitePackages[number];

function PkgCard({ pkg, href }: { pkg: Pkg; href: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [expanded, setExpanded] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
    setTilt({ x, y, on: true });
    setShine({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0, on: false });

  return (
    <div style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative flex flex-col h-full"
        style={{
          background: pkg.featured ? "#0f0f0f" : "#0c0c0c",
          border: pkg.featured ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.08)",
          boxShadow: tilt.on
            ? pkg.featured
              ? "0 24px 60px rgba(201,168,76,0.3), 0 4px 16px rgba(0,0,0,0.4)"
              : "0 20px 50px rgba(0,0,0,0.5)"
            : pkg.featured
              ? "0 0 40px rgba(201,168,76,0.12)"
              : "none",
          transform: tilt.on ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(12px)` : "none",
          transition: tilt.on
            ? "transform 0.08s ease, box-shadow 0.08s ease"
            : "transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Shine */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(201,168,76,0.10) 0%, transparent 55%)`,
            opacity: tilt.on ? 1 : 0,
            transition: tilt.on ? "none" : "opacity 0.4s",
          }}
        />

        {/* Top gold bar on featured */}
        {pkg.featured && (
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
        )}

        <div className="flex flex-col flex-1 p-6">
          {/* Number + tag row */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-bold tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.4)" }}>{pkg.num}</span>
            {pkg.tag && (
              <span className="text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1" style={{ background: "#c9a84c", color: "#0a0a0a" }}>
                {pkg.tag}
              </span>
            )}
          </div>

          {/* Name + price */}
          <div className="mb-4">
            <h3
              className="font-black text-white leading-none mb-3"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.03em" }}
            >
              {pkg.name}
            </h3>
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-2xl" style={{ color: "#c9a84c", fontFamily: "var(--font-geist-sans), sans-serif", letterSpacing: "-0.03em" }}>
                {pkg.price}
              </span>
              <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{pkg.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[12px] leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.45)" }}>
            {pkg.description}
          </p>

          {/* Expandable features */}
          <div
            className="overflow-hidden"
            style={{
              maxHeight: expanded ? `${pkg.features.length * 36 + 16}px` : "0px",
              transition: "max-height 0.35s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <ul className="flex flex-col gap-2 mb-4 pt-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 mt-auto pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200"
              style={{ color: expanded ? "#c9a84c" : "rgba(255,255,255,0.35)" }}
            >
              {expanded ? "Hide details ↑" : "What's included ↓"}
            </button>
            <Link
              href="/contact"
              className="group relative w-full py-3 text-[12px] font-black tracking-wide text-center overflow-hidden"
              style={pkg.featured
                ? { background: "#c9a84c", color: "#0a0a0a" }
                : { border: "1px solid rgba(255,255,255,0.15)", color: "white" }
              }
            >
              <span className="relative z-10">Get Started →</span>
              {!pkg.featured && (
                <span className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" style={{ background: "#c9a84c" }} />
              )}
              {!pkg.featured && (
                <span className="absolute inset-0 z-10 flex items-center justify-center text-[#0a0a0a] font-black text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                  Get Started →
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      className="mb-10"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>{label}</motion.p>
      <motion.h2
        variants={blurUp}
        className="font-black text-white leading-none"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.04em" }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 md:py-36" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Website packages ── */}
        <div className="mb-24">
          <SectionHeader label="Packages" title="Website Design" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={cardStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {websitePackages.map((pkg) => (
              <motion.div key={pkg.name} variants={cardIn}>
                <PkgCard pkg={pkg} href="/services" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-8 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            <Link href="/services" className="group inline-flex items-center gap-2 text-[12px] font-black tracking-[0.15em] uppercase transition-colors duration-200" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span className="group-hover:text-[#c9a84c] transition-colors duration-200">View all website packages</span>
              <span className="inline-block w-6 h-px transition-all duration-300 group-hover:w-10 group-hover:bg-[#c9a84c]" style={{ background: "rgba(255,255,255,0.35)" }} />
            </Link>
          </motion.div>
        </div>

        {/* ── Automations ── */}
        <div>
          <SectionHeader label="Automations" title="AI Systems" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-[1fr_1.12fr_1fr] gap-4 items-center"
            variants={cardStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {automationPackages.map((pkg) => (
              <motion.div key={pkg.name} variants={cardIn}>
                <PkgCard pkg={pkg} href="/automations" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-8 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            <Link href="/automations" className="group inline-flex items-center gap-2 text-[12px] font-black tracking-[0.15em] uppercase transition-colors duration-200" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span className="group-hover:text-[#c9a84c] transition-colors duration-200">View all automations</span>
              <span className="inline-block w-6 h-px transition-all duration-300 group-hover:w-10 group-hover:bg-[#c9a84c]" style={{ background: "rgba(255,255,255,0.35)" }} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

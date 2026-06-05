"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
  },
  {
    name: "Standard",
    price: "£599",
    who: "For businesses that want to stand out locally and win more enquiries.",
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
  },
  {
    name: "Premium",
    price: "£999",
    who: "For businesses that want a complete digital presence that sells for them.",
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
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="#c9a84c" fillOpacity="0.12" />
      <path d="M4 7L6 9L10 5" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardFace({ pkg }: { pkg: (typeof packages)[number] }) {
  return (
    <div
      className={`relative flex flex-col rounded-sm overflow-hidden h-full ${
        pkg.featured
          ? "border-2 border-gold shadow-[0_20px_56px_rgba(201,168,76,0.28)]"
          : "border border-[#e0e0e0] shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{
          background: pkg.featured
            ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
      />
      {pkg.featured && (
        <div className="bg-gold px-6 py-2.5 text-center flex-shrink-0">
          <span className="text-white text-xs font-bold tracking-widest uppercase">Most Popular</span>
        </div>
      )}
      <div className={`flex flex-col flex-1 p-7 ${pkg.featured ? "bg-white" : "bg-stone"}`}>
        <div className="mb-5">
          <h3 className="font-display text-xl font-bold text-ink mb-1">{pkg.name}</h3>
          <div className="font-display text-4xl font-bold text-ink mb-1">
            {pkg.price}
            <span className="text-base font-sans font-normal text-[#999] ml-1">one-off</span>
          </div>
          <p className="text-[#888] text-xs leading-relaxed mt-2 italic">{pkg.who}</p>
        </div>
        <div className="flex items-start gap-2 bg-gold/8 border border-gold/20 rounded-sm px-3 py-2.5 mb-5">
          <span className="text-gold text-xs mt-0.5 flex-shrink-0 font-bold">→</span>
          <p className="text-[#7a5c1e] text-xs leading-relaxed font-medium">{pkg.outcome}</p>
        </div>
        <ul className="space-y-2.5 mb-7 flex-1">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-[#444] text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`block text-center py-3.5 text-sm font-semibold tracking-wide transition-all duration-150 rounded-sm ${
            pkg.featured
              ? "bg-gold text-white hover:bg-[#b8912e] shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
              : "border border-[#d0d0d0] text-ink hover:border-ink hover:bg-ink hover:text-white"
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

// Grid card with mouse tilt for the final "all 3" view
function GridCard({ pkg }: { pkg: (typeof packages)[number] }) {
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
    <div style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setRot({ x: 0, y: 0, on: false })}
        style={{
          transform: rot.on
            ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(10px)`
            : undefined,
          transition: rot.on
            ? "transform 0.08s ease"
            : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <CardFace pkg={pkg} />
      </div>
    </div>
  );
}

export default function ScrollPricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── flip timings (300vh container → 200vh scrollable) ──────────
  // Phase: starter visible  0.00–0.20
  // Flip 1                  0.20–0.30
  // Phase: standard visible 0.30–0.54
  // Flip 2                  0.54–0.64
  // Phase: premium visible  0.64–0.78
  // All 3 slide in          0.78–0.92

  // Each card's rotateY across the full scroll range
  const starterRY  = useTransform(scrollYProgress, [0, 0.20, 0.30], [0, 0, 90]);
  const standardRY = useTransform(scrollYProgress, [0, 0.20, 0.30, 0.54, 0.64], [-90, -90, 0, 0, 90]);
  const premiumRY  = useTransform(scrollYProgress, [0, 0.54, 0.64, 1], [-90, -90, 0, 0]);

  // Spotlight layer fades out when all-3 phase begins
  const spotOpacity = useTransform(scrollYProgress, [0.76, 0.84], [1, 0]);

  // Heading
  const headY = useTransform(scrollYProgress, [0, 0.08], [20, 0]);
  const headOp = useTransform(scrollYProgress, [0, 0.08, 0.76, 0.84], [0, 1, 1, 0]);

  // Scroll hint under the card
  const hintOp = useTransform(scrollYProgress, [0, 0.06, 0.18, 0.22], [0, 1, 1, 0]);

  // Step dots
  const dot1 = useTransform(scrollYProgress, [0, 0.06, 0.28, 0.32], [0, 1, 1, 0]);
  const dot2 = useTransform(scrollYProgress, [0.28, 0.34, 0.52, 0.56], [0, 1, 1, 0]);
  const dot3 = useTransform(scrollYProgress, [0.52, 0.58, 0.76, 0.82], [0, 1, 1, 0]);
  const dotOpacities = [dot1, dot2, dot3];

  // All-3 grid
  const gridOp = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);
  const gridY  = useTransform(scrollYProgress, [0.82, 0.92], [60, 0]);

  // Side cards slide in
  const starterX  = useTransform(scrollYProgress, [0.80, 0.92], [-120, 0]);
  const standardX = useTransform(scrollYProgress, [0.80, 0.92], [120, 0]);
  const sideOp    = useTransform(scrollYProgress, [0.80, 0.92], [0, 1]);

  // Footer note
  const footerOp = useTransform(scrollYProgress, [0.94, 1.0], [0, 1]);

  return (
    <div ref={containerRef} style={{ minHeight: "300vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col">

        {/* Heading */}
        <motion.div
          className="text-center pt-20 pb-2 px-6 flex-shrink-0"
          style={{ opacity: headOp, y: headY }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Packages</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Choose your package
          </h2>
          <p className="text-[#888] text-sm mt-2">
            All packages are one-off payments. Retainer is optional.
          </p>
        </motion.div>

        {/* Card area */}
        <div className="flex-1 relative px-6">

          {/* ── Spotlight: one flipping card ────────────────────── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: spotOpacity, perspective: "1400px" }}
          >
            <div className="relative w-full max-w-[340px]" style={{ minHeight: "460px" }}>

              {/* Starter */}
              <motion.div
                className="absolute inset-0"
                style={{ rotateY: starterRY, backfaceVisibility: "hidden" }}
              >
                <CardFace pkg={packages[0]} />
              </motion.div>

              {/* Standard */}
              <motion.div
                className="absolute inset-0"
                style={{ rotateY: standardRY, backfaceVisibility: "hidden" }}
              >
                <CardFace pkg={packages[1]} />
              </motion.div>

              {/* Premium */}
              <motion.div
                className="absolute inset-0"
                style={{ rotateY: premiumRY, backfaceVisibility: "hidden" }}
              >
                <CardFace pkg={packages[2]} />
              </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
              className="mt-5 flex items-center gap-2 text-[#bbb]"
              style={{ opacity: hintOp }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs">Scroll to flip</span>
            </motion.div>

            {/* Step dots */}
            <div className="mt-3 flex gap-1.5">
              {dotOpacities.map((op, i) => (
                <motion.div key={i} style={{ opacity: op }}>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${dot === i ? "bg-gold" : "bg-[#e0e0e0]"}`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── All 3 grid ───────────────────────────────────────── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity: gridOp, y: gridY }}
          >
            <div className="w-full max-w-6xl">
              <div className="grid md:grid-cols-3 gap-5 md:gap-7 items-center">

                {/* Starter slides from left */}
                <motion.div style={{ x: starterX, opacity: sideOp }}>
                  <GridCard pkg={packages[0]} />
                </motion.div>

                {/* Standard slides from right */}
                <motion.div style={{ x: standardX, opacity: sideOp }}>
                  <GridCard pkg={packages[1]} />
                </motion.div>

                {/* Premium was already "here" — fades in cleanly */}
                <GridCard pkg={packages[2]} />
              </div>

              <motion.p
                className="text-center text-[#aaa] text-sm mt-7"
                style={{ opacity: footerOp }}
              >
                Not sure which is right for you?{" "}
                <Link href="/contact" className="text-ink font-semibold hover:text-gold transition-colors">
                  Just ask.
                </Link>
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

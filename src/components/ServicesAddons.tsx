"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const addons = [
  {
    name: "Monthly Retainer",
    price: "From £35/mo",
    tag: "Most popular",
    description: "Hosting, security updates, and regular content changes — all handled for you. Never worry about the technical side again.",
    features: ["Managed hosting & security", "Unlimited content updates", "Performance monitoring", "Priority support"],
    accent: true,
  },
  {
    name: "Google Business Setup",
    price: "£49 one-off",
    tag: null,
    description: "Get listed and verified on Google Maps so local customers can find you when they search.",
    features: ["Profile created & verified", "Photos & details added", "Review strategy included", "Linked to your new site"],
    accent: false,
  },
  {
    name: "SEO Boost",
    price: "From £79/mo",
    tag: null,
    description: "Monthly SEO work to help you climb Google rankings for your most valuable local search terms.",
    features: ["Keyword research", "Monthly content updates", "Backlink building", "Monthly ranking report"],
    accent: false,
  },
];

function CheckGreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="#16a34a" fillOpacity="0.10" />
      <path d="M4 7L6 9L10 5" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AddonCard({ addon }: { addon: (typeof addons)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0, on: false });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRot({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * -7,
      y: ((e.clientX - r.left - r.width / 2) / r.width) * 7,
      on: true,
    });
  }

  return (
    <motion.div variants={blurUp} style={{ perspective: "900px" }} className="relative">
      {addon.tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(201,168,76,0.4)]">
          {addon.tag}
        </div>
      )}
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setRot({ x: 0, y: 0, on: false })}
        style={{
          transform: rot.on ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(12px)` : undefined,
          transition: rot.on ? "transform 0.08s ease, box-shadow 0.08s ease" : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: rot.on
            ? addon.accent
              ? "0 20px 50px rgba(201,168,76,0.28), 0 6px 20px rgba(0,0,0,0.08)"
              : "0 16px 44px rgba(0,0,0,0.13)"
            : addon.accent
              ? "0 6px 28px rgba(201,168,76,0.14)"
              : "0 2px 12px rgba(0,0,0,0.05)",
        }}
        className={`relative bg-white rounded-xl p-6 cursor-default overflow-hidden h-full ${
          addon.accent ? "border-2 border-gold" : "border border-[#e8e8e8]"
        }`}
      >
        {/* Gloss */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 55%)",
            opacity: rot.on ? 1 : 0,
            transition: rot.on ? "none" : "opacity 0.4s",
          }}
        />

        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display text-lg font-bold text-ink">{addon.name}</h3>
          <span className="font-sans text-base font-bold text-gold whitespace-nowrap tracking-tight">{addon.price}</span>
        </div>
        <p className="text-[#666] text-sm leading-relaxed mb-5">{addon.description}</p>
        <ul className="space-y-2.5">
          {addon.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckGreen />
              <span className="text-[#444] text-sm">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesAddons() {
  return (
    <section className="py-20 md:py-24 px-6 bg-stone border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Add-ons</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Optional extras</h2>
          <p className="text-[#666] mt-3 text-base max-w-lg mx-auto">
            Bolt these on to any package to get more out of your new website.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-5 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {addons.map((addon) => (
            <AddonCard key={addon.name} addon={addon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

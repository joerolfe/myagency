"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const problems = [
  {
    stat: "3 sec",
    label: "First impressions",
    problem: "Visitors decide whether to trust your business in 3 seconds. An outdated or missing website loses them before you've said a word.",
    color: "#ef4444",
  },
  {
    stat: "76%",
    label: "of customers",
    problem: "Check a business online before they call. If your site looks poor — or doesn't exist — they call your competitor instead.",
    color: "#f97316",
  },
  {
    stat: "60%",
    label: "of searches",
    problem: "Are on mobile. If your website isn't built for phones, you're invisible to the majority of your potential customers.",
    color: "#ef4444",
  },
];

const outcomes = [
  {
    title: "Show up when it matters",
    body: "Every site includes SEO setup so you appear when local customers search for your trade on Google.",
  },
  {
    title: "Win trust instantly",
    body: "A clean, custom design makes your business look professional from the first click — turning visitors into enquiries.",
  },
  {
    title: "Works on every device",
    body: "Built mobile-first so it looks sharp on phones, tablets, and desktops — where your customers actually are.",
  },
  {
    title: "Enquiries while you sleep",
    body: "A contact form and clear calls-to-action mean customers can reach you at any hour, even when you're on the job.",
  },
];

function ProblemCard({ p, index }: { p: (typeof problems)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0, on: false });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRot({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * -6,
      y: ((e.clientX - r.left - r.width / 2) / r.width) * 6,
      on: true,
    });
  }

  return (
    <motion.div variants={blurUp} style={{ perspective: "800px" }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setRot({ x: 0, y: 0, on: false })}
        style={{
          transform: rot.on ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(10px)` : undefined,
          transition: rot.on ? "transform 0.08s ease" : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: rot.on ? "0 18px 48px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
        }}
        className="bg-white border border-[#e8e8e8] rounded-sm p-6 cursor-default"
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
              <path d="M1 1L7 7M7 1L1 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="font-sans text-2xl font-bold text-ink tracking-tight">{p.stat}</span>
            <span className="text-[#888] text-sm ml-1.5">{p.label}</span>
          </div>
        </div>
        <p className="text-[#555] text-sm leading-relaxed">{p.problem}</p>
      </div>
    </motion.div>
  );
}

function OutcomeCard({ o }: { o: (typeof outcomes)[number] }) {
  return (
    <motion.div
      variants={blurUp}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(201,168,76,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="flex gap-4 items-start p-6 bg-white border border-[#e8e8e8] rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default"
    >
      <motion.div
        className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <div>
        <p className="font-semibold text-ink text-sm mb-1">{o.title}</p>
        <p className="text-[#666] text-sm leading-relaxed">{o.body}</p>
      </div>
    </motion.div>
  );
}

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            The Reality
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight max-w-2xl mx-auto">
            Every day without a proper website is costing you customers
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Most local businesses don&apos;t realise how much they&apos;re losing online — until they fix it.
          </motion.p>
        </motion.div>

        {/* Problem stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-5 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {problems.map((p, i) => (
            <ProblemCard key={i} p={p} index={i} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex-1 h-px bg-[#e8e8e8]" />
          <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/25 rounded-full">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Here&apos;s what I fix</span>
          </div>
          <div className="flex-1 h-px bg-[#e8e8e8]" />
        </motion.div>

        {/* Outcomes */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {outcomes.map((o, i) => (
            <OutcomeCard key={i} o={o} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
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

const values = [
  { title: "Not a big agency", body: "You deal directly with me — no account managers, no handoffs, no delays." },
  { title: "Local to you", body: "Based in South Derbyshire. Happy to meet in person or jump on a call." },
  { title: "Always custom", body: "Every site is built from scratch around your business. No templates, ever." },
];

function AvatarCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0, on: false });
  const [shine, setShine] = useState({ x: 50, y: 50 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setRot({
      x: ((y - r.height / 2) / r.height) * -8,
      y: ((x - r.width / 2) / r.width) * 8,
      on: true,
    });
    setShine({ x: (x / r.width) * 100, y: (y / r.height) * 100 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl scale-95 pointer-events-none" />

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => { setRot({ x: 0, y: 0, on: false }); setShine({ x: 50, y: 50 }); }}
        style={{
          transform: rot.on
            ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(16px)`
            : undefined,
          transition: rot.on
            ? "transform 0.08s ease"
            : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
        }}
        className="relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden"
      >
        {/* Gloss shine */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.10) 0%, transparent 55%)`,
            opacity: rot.on ? 1 : 0,
            transition: rot.on ? "none" : "opacity 0.4s",
          }}
        />

        {/* Avatar */}
        <div className="relative mb-6">
          <motion.div
            className="w-40 h-40 rounded-2xl border-2 border-gold/40 overflow-hidden"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/joe.png" alt="Joe Rolfe" width={160} height={160} className="w-full h-full object-cover object-[center_22%]" />
          </motion.div>
          <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-2 border-ink flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">✓</span>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-1">Joe Rolfe</h3>
        <p className="text-gold text-sm font-semibold mb-4">Web Developer · South Derbyshire</p>

        <p className="text-white/50 text-sm leading-relaxed mb-6">
          &ldquo;I built this to give local businesses the same quality websites big brands have — without the agency price tag.&rdquo;
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 w-full border-t border-white/10 pt-6">
          {[
            { value: "~2wk", label: "Turnaround" },
            { value: "£0", label: "Upfront" },
            { value: "100%", label: "Custom" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
            >
              <div className="font-sans text-xl font-bold text-gold tracking-tight">{s.value}</div>
              <div className="text-white/40 text-[10px] font-medium uppercase tracking-wide mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <a
          href="tel:07857859135"
          className="mt-6 flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          07857 859135
        </a>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 px-6 bg-ink overflow-hidden -mt-16">

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }}
      />

      <div id="about" className="relative max-w-5xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <AvatarCard />

          {/* Right — text + values */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-5">
              About
            </motion.p>
            <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Built by someone local who actually cares
            </motion.h2>
            <motion.p variants={blurUp} className="text-white/55 leading-relaxed text-base mb-10">
              I&apos;m Joe — a web developer and IT student based in South Derbyshire.
              I started Rolfe Brand Scaling to help local businesses get online properly,
              without being overcharged by agencies or left confused by DIY tools.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-4 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={blurUp}
                  className="flex gap-4 items-start group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(201,168,76,0.25)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span className="text-gold text-xs font-bold">{i + 1}</span>
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{v.title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={blurUp}>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(201,168,76,0.40)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
                >
                  Start your free demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


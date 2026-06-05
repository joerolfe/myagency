"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const steps = [
  {
    n: "01",
    title: "Discovery",
    description: "I research your business and identify exactly what's holding you back — before we've even spoken.",
    tag: "Free",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    category: "Research & Planning",
    longDesc: "Before I write a single line of code, I spend time getting to know your business, your competitors, and your customers. This means I'm building something that actually works for your market — not a generic template with your logo on it.",
    details: [
      { title: "Competitor analysis", body: "I look at what other businesses in your area are doing online — what's working, what's missing, and where the gap is for you." },
      { title: "Customer research", body: "I identify what your customers are searching for and what language they use, so your site speaks directly to them." },
      { title: "Current site audit", body: "If you have an existing website, I'll identify exactly why it's not converting and what needs to change." },
      { title: "No meetings needed", body: "This all happens before our first conversation. When we do speak, I'll already know your business." },
    ],
  },
  {
    n: "02",
    title: "Free Demo",
    description: "I build a working demo of your new website at no cost — you see it before anything is agreed or paid.",
    tag: "No obligation",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    category: "Design & Build",
    longDesc: "You get to see a fully working website before you spend a single penny. Not a mockup or a wireframe — an actual, live site you can click around. If you don't love it, you walk away with no invoice and no awkward conversation.",
    details: [
      { title: "Fully working site", body: "The demo is a real website — not a PDF or a Figma file. You can see it on your phone and your laptop." },
      { title: "Custom to your business", body: "Your branding, your services, your photos. Nothing generic." },
      { title: "Built in under 48 hours", body: "Most demos are ready within two days of our first conversation." },
      { title: "Zero commitment", body: "If it's not right for you, say so. No invoice, no follow-up sales calls." },
    ],
  },
  {
    n: "03",
    title: "Review Together",
    description: "We meet in person or on a call. I walk you through the demo and make any changes you want.",
    tag: "In person or video",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80",
    category: "Collaboration",
    longDesc: "Once the demo is ready, we sit down together — in person if you're local, or on a video call. I walk you through every page, explain the decisions I made, and we work through any changes you want. No rush, no limits on revisions.",
    details: [
      { title: "In person or video call", body: "I'll meet you at your business, a coffee shop, or jump on a Teams or Zoom call — whatever suits you." },
      { title: "No change limits", body: "Want to move a button? Change the colours? Rewrite the copy? Done. We keep going until you're happy." },
      { title: "Plain English", body: "I'll explain every decision in plain English — no jargon, no tech speak." },
      { title: "You stay in control", body: "It's your website. I build to your brief, not mine." },
    ],
  },
  {
    n: "04",
    title: "Build & Launch",
    description: "You approve it and I build the full site, set up hosting, domain and go live — fully handled.",
    tag: "Fully managed",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    category: "Development & Launch",
    longDesc: "Once you're happy with the demo, I build out the full site, set up your hosting and domain, connect your email, and take it live. Everything is handled — you don't need to deal with any of the technical side.",
    details: [
      { title: "Hosting & domain setup", body: "I handle everything — domain registration, hosting, SSL certificate, email setup. You just sign off." },
      { title: "Mobile-first build", body: "Every site is built to look and work perfectly on phones, tablets and desktops." },
      { title: "Fast load times", body: "Sites are optimised for speed — because slow websites lose customers before they've even read a word." },
      { title: "Live in 1–2 weeks", body: "From approval to live site, most projects complete in under two weeks." },
    ],
  },
  {
    n: "05",
    title: "Ongoing Support",
    description: "Updates, security and changes on a monthly retainer. You focus on the business, I handle the tech.",
    tag: "From £35/month",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    category: "Maintenance & Growth",
    longDesc: "Your website isn't a one-off job — it needs to stay fast, secure, and up to date. On a monthly retainer I handle all of that, plus any changes you need. Think of it as having a developer on call, without the salary.",
    details: [
      { title: "Unlimited text & image changes", body: "Need to update your prices, add a new service, or swap a photo? Just message me and it's done." },
      { title: "Security & updates", body: "I keep your site secure, backed up, and running on the latest software — so you never have to worry about it." },
      { title: "Performance monitoring", body: "I keep an eye on your site's speed and search ranking, flagging anything that needs attention." },
      { title: "Cancel any time", body: "No contracts, no lock-ins. If you ever want to take over managing the site yourself, I'll hand everything over." },
    ],
  },
];

// ─── Individual tilt card ─────────────────────────────────────────────────────

type Step = typeof steps[number];

function ProcessCard({ step, index, onClick }: { step: Step; index: number; isActive: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [imgShift, setImgShift] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const nx = (x - r.width / 2) / r.width;
    const ny = (y - r.height / 2) / r.height;
    setTilt({ x: ny * -6, y: nx * 6, on: true });
    setImgShift({ x: nx * 12, y: ny * 12 });
  }

  return (
    <motion.div
      ref={ref}
      variants={cardIn}
      className="group relative flex-shrink-0 w-[240px] md:w-auto rounded-2xl overflow-hidden cursor-pointer"
      style={{
        height: "340px",
        transform: tilt.on ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : undefined,
        transition: tilt.on ? "transform 0.08s ease" : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseMove={onMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0, on: false }); setImgShift({ x: 0, y: 0 }); }}
      onClick={onClick}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.img}
        alt={step.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `scale(1.08) translate(${imgShift.x}px, ${imgShift.y}px)`,
          transition: tilt.on ? "transform 0.1s ease" : "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          opacity: tilt.on ? 1 : 0,
          transition: tilt.on ? "none" : "opacity 0.4s",
        }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)" }}
      />

      {/* Top row */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-widest text-white/50">
          {step.n} / 05
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: tilt.on ? "#c9a84c" : "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="inline-block text-[9px] font-bold tracking-widest uppercase mb-2 px-2 py-0.5 rounded-full"
          style={{ background: "rgba(201,168,76,0.2)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
        >
          {step.tag}
        </span>
        <h3 className="text-white font-bold text-[17px] leading-tight mb-1.5">{step.title}</h3>
        <p className="text-white/55 text-[12px] leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Process() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 md:py-28 bg-white border-t border-[#ebebeb] overflow-hidden">

      {/* Header */}
      <motion.div
        className="px-6 mb-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div>
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
            The Process
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">
            How it works
          </motion.h2>
        </div>
        <motion.p variants={blurUp} className="text-[#666] text-sm md:text-base max-w-sm">
          From first contact to a live website — handled end to end, no tech knowledge required.
        </motion.p>
      </motion.div>

      {/* Cards — stay in place always */}
      <div className="px-6 max-w-7xl mx-auto">
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: "none" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {steps.map((step, i) => (
            <ProcessCard
              key={step.n}
              step={step}
              index={i}
              isActive={active === i}
              onClick={() => setActive(active === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>

      {/* Zero risk callout */}
      <motion.div
        className="mx-6 md:mx-auto max-w-7xl mt-6 p-6 md:p-7 rounded-2xl flex gap-4 items-start"
        style={{ background: "#f9f9f7", border: "1px solid #e8e8e8" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path d="M1 6L5 10L13 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-ink font-bold text-sm mb-1">Zero risk guarantee</p>
          <p className="text-[#666] text-sm leading-relaxed">
            If you see the demo and it&apos;s not for you — no hard feelings, no invoice, no awkward conversation.
            You walk away with nothing to lose. That&apos;s the whole point of doing the demo first.
          </p>
        </div>
      </motion.div>

      {/* Detail panel — fixed, curves in from right */}
      <AnimatePresence>
        {active !== null && (
          <>
            {/* Blur backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "rgba(0,0,0,0.15)" }}
              onClick={() => setActive(null)}
            />

          <div
            className="fixed top-0 right-0 bottom-0 z-50 overflow-hidden"
            style={{ width: "min(440px, 100vw)", perspective: "1000px", perspectiveOrigin: "left center" }}
          >
            <motion.div
              className="w-full h-full overflow-y-auto"
              style={{
                background: "#111",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                transformOrigin: "left center",
              }}
              initial={{ x: "100%", rotateY: 18, opacity: 0 }}
              animate={{ x: "0%", rotateY: 0, opacity: 1 }}
              exit={{ x: "100%", rotateY: 18, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 32, opacity: { duration: 0.18 } }}
            >
              <motion.div
                className="p-8 md:p-10 flex flex-col min-h-full"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.14 } } }}
              >
                {/* Top */}
                <motion.div
                  className="flex items-center justify-between mb-10"
                  variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.38, ease } } }}
                >
                  <span className="text-[12px] font-bold tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {steps[active].n} / 05
                  </span>
                  <button
                    onClick={() => setActive(null)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </motion.div>

                <motion.p
                  className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4"
                  style={{ color: "#c9a84c" }}
                  variants={{ hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0, transition: { duration: 0.42, ease } } }}
                >
                  {steps[active].category}
                </motion.p>

                <motion.h3
                  className="text-white font-bold mb-5"
                  style={{ fontSize: "30px", lineHeight: 1.1 }}
                  variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.48, ease } } }}
                >
                  {steps[active].title}
                </motion.h3>

                <motion.p
                  className="text-[14px] leading-relaxed mb-10"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                  variants={{ hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0, transition: { duration: 0.48, ease } } }}
                >
                  {steps[active].longDesc}
                </motion.p>

                <motion.p
                  className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                  variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } } }}
                >
                  What this includes
                </motion.p>

                <div className="space-y-5 flex-1">
                  {steps[active].details.map(d => (
                    <motion.div
                      key={d.title}
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "1.1rem" }}
                      variants={{ hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0, transition: { duration: 0.42, ease } } }}
                    >
                      <p className="text-white font-bold text-[13px] mb-1">{d.title}</p>
                      <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{d.body}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="/contact"
                  className="mt-10 flex items-center justify-center gap-2 text-[13px] font-black py-4 rounded transition-all hover:opacity-90"
                  style={{ background: "#c9a84c", color: "#111" }}
                  variants={{ hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0, transition: { duration: 0.48, ease } } }}
                >
                  Get a Free Demo
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

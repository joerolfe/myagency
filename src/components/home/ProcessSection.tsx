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
    img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=600&q=80",
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

type Step = typeof steps[number];

function ProcessCard({ step, isActive, onClick }: { step: Step; index: number; isActive: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [imgShift, setImgShift] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left - r.width / 2) / r.width;
    const ny = (e.clientY - r.top - r.height / 2) / r.height;
    setTilt({ x: ny * -6, y: nx * 6, on: true });
    setImgShift({ x: nx * 12, y: ny * 12 });
  }

  return (
    <motion.div
      ref={ref}
      variants={cardIn}
      className="group relative flex-shrink-0 w-[240px] md:w-auto overflow-hidden cursor-pointer"
      style={{
        height: "340px",
        background: "#0a0a0a",
        transform: tilt.on ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : undefined,
        transition: tilt.on ? "transform 0.08s ease" : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
        border: isActive ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: isActive ? "0 0 30px rgba(201,168,76,0.15)" : "none",
      }}
      onMouseMove={onMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0, on: false }); setImgShift({ x: 0, y: 0 }); }}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={step.img}
        alt={step.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `scale(1.18) translate(${imgShift.x}px, ${imgShift.y}px)`,
          transition: tilt.on ? "transform 0.1s ease" : "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      {/* Shine */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)",
          opacity: tilt.on ? 1 : 0,
          transition: tilt.on ? "none" : "opacity 0.4s",
        }}
      />

      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.18) 100%)" }} />

      {/* Top row */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-widest text-white/50">{step.n} / 05</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: tilt.on ? "#c9a84c" : "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="inline-block text-[9px] font-bold tracking-widest uppercase mb-2 px-2 py-0.5"
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

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="py-24 md:py-28 overflow-hidden"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <motion.div
        className="px-6 mb-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div>
          <motion.p variants={blurUp} className="text-[11px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>
            The Process
          </motion.p>
          <motion.h2
            variants={blurUp}
            className="font-black text-white leading-none"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.04em" }}
          >
            How it works
          </motion.h2>
        </div>
        <motion.p variants={blurUp} className="text-sm md:text-base max-w-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          From first contact to a live website — handled end to end, no tech knowledge required.
        </motion.p>
      </motion.div>

      {/* Cards */}
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
        className="mx-6 md:mx-auto max-w-7xl mt-6 p-6 md:p-7 flex gap-4 items-start"
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path d="M1 6L5 10L13 2" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-sm mb-1">Zero risk guarantee</p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            If you see the demo and it&apos;s not for you — no hard feelings, no invoice, no awkward conversation.
            You walk away with nothing to lose. That&apos;s the whole point of doing the demo first.
          </p>
        </div>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {active !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
              onClick={() => setActive(null)}
            >
              {/* Modal */}
              <motion.div
                className="relative w-full overflow-hidden"
                style={{
                  maxWidth: "900px",
                  maxHeight: "calc(100vh - 120px)",
                  background: "#0f0f0f",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gold top bar */}
                <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />

                <div className="flex flex-col md:flex-row" style={{ maxHeight: "calc(100vh - 122px)" }}>

                  {/* Left — image */}
                  <div className="relative md:w-[42%] flex-shrink-0" style={{ minHeight: "220px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={steps[active].img}
                      alt={steps[active].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #0f0f0f 100%)" }} />

                    {/* Step badge */}
                    <div className="absolute top-6 left-6">
                      <span className="text-[11px] font-black tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {steps[active].n} / 05
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className="text-[9px] font-black tracking-[0.25em] uppercase px-3 py-1.5"
                        style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
                      >
                        {steps[active].category}
                      </span>
                    </div>
                  </div>

                  {/* Right — content */}
                  <motion.div
                    className="flex flex-col flex-1 p-7 md:p-10 overflow-y-auto"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                  >
                    {/* Close + title row */}
                    <motion.div
                      className="flex items-start justify-between mb-6"
                      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } } }}
                    >
                      <h3
                        className="font-black text-white leading-none pr-4"
                        style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(26px, 3vw, 38px)", letterSpacing: "-0.04em" }}
                      >
                        {steps[active].title}
                      </h3>
                      <button
                        onClick={() => setActive(null)}
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-200 hover:border-white/40"
                        style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </motion.div>

                    <motion.p
                      className="text-[13px] leading-relaxed mb-8"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } }}
                    >
                      {steps[active].longDesc}
                    </motion.p>

                    <motion.p
                      className="text-[9px] font-black tracking-[0.35em] uppercase mb-5"
                      style={{ color: "rgba(201,168,76,0.5)" }}
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } } }}
                    >
                      What this includes
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {steps[active].details.map((d) => (
                        <motion.div
                          key={d.title}
                          className="p-4"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } } }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-1 rounded-full" style={{ background: "#c9a84c" }} />
                            <p className="text-white font-bold text-[12px]">{d.title}</p>
                          </div>
                          <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{d.body}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="/contact"
                      className="mt-auto flex items-center justify-between px-6 py-4 text-[13px] font-black tracking-wide group"
                      style={{ background: "#c9a84c", color: "#0a0a0a" }}
                      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
                    >
                      Get a Free Demo
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease } },
};

// ── Icons ─────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M20 15.5l-3-2.3a1.5 1.5 0 00-1.8.1l-1.4 1.4a11 11 0 01-5.5-5.5L9.7 7.8a1.5 1.5 0 00.1-1.8L7.5 3a1.5 1.5 0 00-1.8-.5L3.3 3.8A1.5 1.5 0 002.5 5C2.5 13.6 8.4 19.5 17 19.5a1.5 1.5 0 001.2-.8l1.3-2.4A1.5 1.5 0 0020 15.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.5 5.5L19 8.4l-4 3.9 1 5.5L11 15.1l-5 2.7 1-5.5-4-3.9 5.5-.9L11 2z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 4.5C3 3.4 3.9 2.5 5 2.5h12c1.1 0 2 .9 2 2V14c0 1.1-.9 2-2 2h-6l-5 3.5V16H5c-1.1 0-2-.9-2-2V4.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 8.5h8M7 12h5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2.5" y="4" width="17" height="16" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M7 2.5V5.5M15 2.5V5.5M2.5 9h17" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 13h2v2H7z" fill="#c9a84c" fillOpacity="0.6"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2.5C6.3 2.5 2.5 5.9 2.5 10c0 1.6.6 3.2 1.7 4.4L3 19l4.8-1.5A9 9 0 0011 17.5c4.7 0 8.5-3.4 8.5-7.5S15.7 2.5 11 2.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7.5 10h7M7.5 13h4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7L20 9h-7l2-7z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const automations = [
  {
    icon: <PhoneIcon />,
    title: "Missed Call Text-Back",
    description: "Customer calls and you can't answer? They instantly get a text saying you'll call back — so they don't ring your competitor.",
    setup: 125,
    monthly: 30,
  },
  {
    icon: <StarIcon />,
    title: "Google Review Requests",
    description: "After every job, your customer automatically gets a text asking for a Google review. More reviews, higher ranking, more calls.",
    setup: 125,
    monthly: 25,
  },
  {
    icon: <MessageIcon />,
    title: "Lead Follow-Up",
    description: "Someone fills your contact form and gets an instant reply — even at midnight. Keeps the lead warm before you've even seen the enquiry.",
    setup: 150,
    monthly: 35,
  },
  {
    icon: <CalendarIcon />,
    title: "Appointment Reminders",
    description: "Automatic reminder sent to your customers the day before their appointment. Cuts no-shows without you lifting a finger.",
    setup: 125,
    monthly: 25,
  },
  {
    icon: <ChatIcon />,
    title: "Website Chatbot",
    description: "A smart chatbot on your website that answers common questions and captures leads 24/7 — even when you're on the job.",
    setup: 200,
    monthly: 40,
  },
  {
    icon: <BoltIcon />,
    title: "Full Automation Bundle",
    description: "Get 3 automations set up together at a reduced rate. The most popular option for trades businesses wanting the full system.",
    setup: 350,
    monthly: 75,
  },
];

const steps = [
  {
    n: "1",
    title: "You tell me what you need",
    body: "We have a quick call or WhatsApp chat. I find out how your business works and which automations will make the biggest difference.",
  },
  {
    n: "2",
    title: "I build it for you",
    body: "I set everything up using professional automation tools. No logins, no software for you to learn. I handle it all.",
  },
  {
    n: "3",
    title: "We test it together",
    body: "I walk you through exactly how it works and we test it live so you can see it in action before it goes live.",
  },
  {
    n: "4",
    title: "It runs itself",
    body: "Your automations go live. I monitor them and handle any issues. You just watch the leads and reviews come in.",
  },
];

const faqs = [
  { q: "What exactly is an automation?", a: "It's a system I set up that does a repetitive task for you automatically — like sending a text when someone calls, or asking for a review after a job. You don't touch it, it just runs." },
  { q: "Do I need any technical knowledge?", a: "None at all. I build it, test it, and manage it. You just see the results." },
  { q: "How long does setup take?", a: "Most automations are live within 48 hours of us agreeing to go ahead." },
  { q: "What if something stops working?", a: "That's what the monthly retainer covers. I monitor everything and fix any issues — you don't need to do anything." },
  { q: "Can I get automations without a website?", a: "Yes — automations work alongside your existing website or Google listing. You don't need a new website to get started." },
  { q: "Can I cancel?", a: "Yes, rolling monthly. Cancel anytime with 30 days notice." },
];

// ── Components ────────────────────────────────────────────────────────────────

function AutomationCard({ a, index }: { a: (typeof automations)[number]; index: number }) {
  const isBundle = index === 5;
  return (
    <motion.div
      variants={blurUp}
      whileHover={{ y: -5, boxShadow: isBundle ? "0 20px 48px rgba(201,168,76,0.22)" : "0 16px 40px rgba(201,168,76,0.10)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`flex flex-col gap-4 rounded-xl p-6 cursor-default min-h-[280px] ${
        isBundle ? "bg-ink border-2 border-gold/40" : "bg-ink border border-gold/20"
      }`}
    >
      <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
        isBundle ? "bg-gold/15 text-gold border-gold/25" : "opacity-0 border-transparent"
      }`}>
        Best value
      </span>
      <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
        {a.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-bold text-white mb-2">{a.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{a.description}</p>
      </div>
      <div className="border-t border-white/8 pt-4 flex items-center justify-between gap-2">
        <span className="text-gold text-sm font-semibold">Setup £{a.setup}</span>
        <span className="text-white/35 text-xs">·</span>
        <span className="text-gold text-sm font-semibold">£{a.monthly}/mo</span>
      </div>
    </motion.div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border border-[#e8e8e8] rounded-xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] divide-y divide-[#f0f0f0]">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 hover:bg-stone transition-colors duration-150 group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`font-semibold text-sm leading-snug transition-colors duration-150 ${open === i ? "text-gold" : "text-ink group-hover:text-gold"}`}>
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm leading-none ${open === i ? "border-gold text-gold" : "border-[#d0d0d0] text-[#888]"}`}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 bg-stone border-l-2 border-gold">
                  <p className="text-[#555] leading-relaxed text-sm pt-1">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AutomationsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <div className="relative bg-ink overflow-hidden pt-36 pb-32 px-6">
          <motion.div
            className="absolute top-[-8%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.18, 1], x: [0, 25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <div className="absolute inset-0 pointer-events-none opacity-[0.022]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <motion.div
            className="relative max-w-4xl mx-auto text-center"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={blurUp} className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs font-semibold">New service — now available</span>
            </motion.div>
            <motion.h1 variants={blurUp} className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Your business,{" "}
              <span className="text-gold italic">running on autopilot</span>
            </motion.h1>
            <motion.p variants={blurUp} className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              I set up smart automations that handle your follow-ups, review requests, and missed calls — automatically. No tech knowledge needed. You just get the results.
            </motion.p>
            <motion.div variants={blurUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white text-sm font-semibold rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:bg-[#b8912e] transition-colors">
                  Get a Free Demo
                </Link>
              </motion.div>
              <a href="#automation-pricing" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 text-sm font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors">
                See Pricing
              </a>
            </motion.div>

            {/* Stat boxes */}
            <motion.div variants={blurUp} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: "48hr", label: "Setup" },
                { value: "Pays", label: "for itself" },
                { value: "Zero", label: "effort from you" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center">
                  <div className="font-sans text-xl font-bold text-gold mb-0.5 tracking-tight">{s.value}</div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── WHAT'S INCLUDED ───────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-ink border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Automations</motion.p>
              <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                What I can automate for your business
              </motion.h2>
              <motion.p variants={blurUp} className="text-white/50 text-base max-w-xl mx-auto">
                Every automation is set up and managed for you — one-off setup fee, then a small monthly retainer.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {automations.map((a, i) => (
                <AutomationCard key={a.title} a={a} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-white border-t border-[#e8e8e8]">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-14"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Process</motion.p>
              <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">Up and running in 48 hours</motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
                  className="flex gap-7 md:gap-10"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm"
                      whileHover={{ scale: 1.12, backgroundColor: "rgba(201,168,76,0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      {step.n}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div
                        className="w-px flex-1 bg-gradient-to-b from-gold/25 to-transparent my-2"
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease }}
                      />
                    )}
                  </div>
                  <div className={`${i < steps.length - 1 ? "pb-10" : ""} pt-2`}>
                    <h3 className="text-base font-bold text-ink mb-2">{step.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed max-w-lg">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────────── */}
        <section id="automation-pricing" className="py-20 md:py-28 px-6 bg-stone border-t border-[#e8e8e8]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-14"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Pricing</motion.p>
              <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">Simple, honest pricing</motion.h2>
              <motion.p variants={blurUp} className="text-[#666] mt-3 text-base max-w-xl mx-auto">
                One-off setup fee to get everything built and tested. Then a small monthly retainer so I keep it running smoothly.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 items-stretch"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              {/* Individual table */}
              <div className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col">
                <div className="px-6 py-5 border-b border-[#f0f0f0]">
                  <h3 className="font-display text-lg font-bold text-ink">Individual Automations</h3>
                  <p className="text-[#888] text-xs mt-1">Pick exactly what you need</p>
                </div>
                <table className="w-full h-full">
                  <thead>
                    <tr className="bg-stone">
                      <th className="text-left px-6 py-3 text-xs font-bold text-[#999] tracking-widest uppercase">Automation</th>
                      <th className="text-center px-3 py-3 text-xs font-bold text-[#999] tracking-widest uppercase">Setup</th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-[#999] tracking-widest uppercase">Monthly</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f5f5f5]">
                    {automations.slice(0, 5).map((a) => (
                      <tr key={a.title} className="hover:bg-stone/50 transition-colors h-[20%]">
                        <td className="px-6 text-sm font-medium text-ink">{a.title}</td>
                        <td className="px-3 text-center text-sm text-[#555]">£{a.setup}</td>
                        <td className="px-4 text-center text-sm font-semibold text-gold">£{a.monthly}/mo</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bundle card */}
              <div className="bg-ink border-2 border-gold/40 rounded-xl p-7 shadow-[0_8px_40px_rgba(201,168,76,0.15)] flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-gold/15 text-gold px-2.5 py-1 rounded-full border border-gold/25">Bundle Deal</span>
                    <h3 className="font-display text-xl font-bold text-white mt-3">Full Automation Bundle</h3>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-sans text-3xl font-bold text-gold tracking-tight">£350</span>
                  <span className="text-white/40 text-sm">setup</span>
                  <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-0.5 rounded-full">Save £125</span>
                </div>
                <div className="flex items-baseline gap-3 mb-7">
                  <span className="font-sans text-xl font-bold text-white/70 tracking-tight">£75</span>
                  <span className="text-white/40 text-sm">/ month</span>
                  <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-0.5 rounded-full">Save up to £45/mo</span>
                </div>

                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">Includes</p>
                <ul className="flex flex-col gap-3 mb-7 flex-1">
                  {["Missed Call Text-Back", "Google Review Requests", "Lead Follow-Up"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(201,168,76,0.40)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href="/contact"
                    className="block text-center py-3.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-[#b8912e] transition-colors shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
                  >
                    Get the Bundle →
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              className="text-center text-[#aaa] text-xs mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              All automations run on a rolling monthly basis. Cancel anytime with 30 days notice. No long contracts.
            </motion.p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-[#e8e8e8]">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">FAQs</motion.p>
              <motion.h2 variants={blurUp} className="font-display text-2xl md:text-3xl font-bold text-ink">Common questions</motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
            >
              <FAQ />
            </motion.div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 bg-ink overflow-hidden text-center border-t border-white/5">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.5) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Ready?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to save hours every week?
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
              Get a free consultation — I&apos;ll tell you exactly which automations would make the biggest difference to your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(201,168,76,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:bg-[#b8912e] transition-colors"
              >
                Book a Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

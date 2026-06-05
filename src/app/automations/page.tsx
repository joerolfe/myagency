"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";

const ease = [0.16, 1, 0.3, 1] as const;
const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const automations = [
  { title: "Missed Call Text-Back", setup: 125, monthly: 30 },
  { title: "Google Review Requests", setup: 125, monthly: 25 },
  { title: "Lead Follow-Up", setup: 150, monthly: 35 },
  { title: "Appointment Reminders", setup: 125, monthly: 25 },
  { title: "Website Chatbot", setup: 200, monthly: 40 },
];

const steps = [
  { n: "1", title: "You tell me what you need", body: "We have a quick call or WhatsApp chat. I find out how your business works and which automations will make the biggest difference." },
  { n: "2", title: "I build it for you", body: "I set everything up using professional automation tools. No logins, no software for you to learn. I handle it all." },
  { n: "3", title: "We test it together", body: "I walk you through exactly how it works and we test it live so you can see it in action before it goes live." },
  { n: "4", title: "It runs itself", body: "Your automations go live. I monitor them and handle any issues. You just watch the leads and reviews come in." },
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

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
          <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 transition-colors duration-150 hover:bg-white/[0.02]" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-bold text-sm leading-snug" style={{ color: open === i ? "#c9a84c" : "rgba(255,255,255,0.8)" }}>{faq.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }} className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm" style={{ border: `1px solid ${open === i ? "#c9a84c" : "rgba(255,255,255,0.2)"}`, color: open === i ? "#c9a84c" : "rgba(255,255,255,0.4)" }}>+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16,1,0.3,1] }} className="overflow-hidden">
                <div className="px-6 pb-5" style={{ borderLeft: "2px solid #c9a84c" }}>
                  <p className="leading-relaxed text-sm pt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{faq.a}</p>
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
    <main style={{ background: "#0a0a0a" }}>
      <HomeNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute top-[-8%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)" }} />

        <motion.div className="relative max-w-4xl mx-auto text-center" variants={stagger} initial="hidden" animate="show">
          <motion.div variants={blurUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#c9a84c" }} />
            <span className="text-xs font-bold" style={{ color: "#c9a84c" }}>New service — now available</span>
          </motion.div>
          <motion.h1 variants={blurUp} className="font-black text-white leading-none mb-6" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(36px,6vw,80px)", letterSpacing: "-0.04em" }}>
            Your business,{" "}<span style={{ color: "#c9a84c" }}>running on autopilot</span>
          </motion.h1>
          <motion.p variants={blurUp} className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            I set up smart automations that handle your follow-ups, review requests, and missed calls — automatically. No tech knowledge needed. You just get the results.
          </motion.p>
          <motion.div variants={blurUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black" style={{ background: "#c9a84c", color: "#0a0a0a" }}>Get a Free Demo</Link>
            <a href="#automation-pricing" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold transition-colors" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>See Pricing</a>
          </motion.div>
          <motion.div variants={blurUp} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[{ value: "48hr", label: "Setup" }, { value: "Pays", label: "for itself" }, { value: "Zero", label: "effort from you" }].map((s) => (
              <div key={s.label} className="py-4 px-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="font-black text-xl mb-0.5" style={{ color: "#c9a84c", fontFamily: "var(--font-geist-sans)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>Process</motion.p>
            <motion.h2 variants={blurUp} className="font-black text-white" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.04em" }}>Up and running in 48 hours</motion.h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            {steps.map((step, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }} className="flex gap-7 md:gap-10">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 flex items-center justify-center font-black text-sm" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", fontFamily: "var(--font-geist-sans)" }}>{step.n}</div>
                  {i < steps.length - 1 && <div className="w-px flex-1 my-2" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.25), transparent)" }} />}
                </div>
                <div className={`${i < steps.length - 1 ? "pb-10" : ""} pt-2`}>
                  <h3 className="font-black text-white text-base mb-2" style={{ fontFamily: "var(--font-geist-sans)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.45)" }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="automation-pricing" className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>Pricing</motion.p>
            <motion.h2 variants={blurUp} className="font-black text-white mb-3" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.04em" }}>Simple, honest pricing</motion.h2>
            <motion.p variants={blurUp} className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>One-off setup fee to get everything built and tested. Then a small monthly retainer so I keep it running smoothly.</motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6 items-stretch" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease }}>
            {/* Table */}
            <div className="flex flex-col" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="font-black text-white text-lg" style={{ fontFamily: "var(--font-geist-sans)" }}>Individual Automations</h3>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Pick exactly what you need</p>
              </div>
              <table className="w-full flex-1">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                    <th className="text-left px-6 py-3 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Automation</th>
                    <th className="text-center px-3 py-3 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Setup</th>
                    <th className="text-center px-4 py-3 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {automations.map((a, i) => (
                    <tr key={a.title} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{a.title}</td>
                      <td className="px-3 text-center text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>£{a.setup}</td>
                      <td className="px-4 text-center text-sm font-black" style={{ color: "#c9a84c" }}>£{a.monthly}/mo</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bundle */}
            <div className="p-7 flex flex-col" style={{ background: "#0f0f0f", border: "1px solid rgba(201,168,76,0.4)", boxShadow: "0 8px 40px rgba(201,168,76,0.1)" }}>
              <div className="h-px w-full mb-5" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
              <span className="text-[9px] font-black tracking-[0.25em] uppercase px-2.5 py-1 self-start mb-4" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c" }}>Bundle Deal</span>
              <h3 className="font-black text-white text-xl mb-4" style={{ fontFamily: "var(--font-geist-sans)" }}>Full Automation Bundle</h3>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-black text-3xl" style={{ color: "#c9a84c", fontFamily: "var(--font-geist-sans)" }}>£350</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>setup</span>
                <span className="text-xs font-bold px-2 py-0.5" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>Save £125</span>
              </div>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-black text-xl" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-geist-sans)" }}>£75</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>/ month</span>
                <span className="text-xs font-bold px-2 py-0.5" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>Save up to £45/mo</span>
              </div>
              <p className="text-[10px] font-black tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.22)" }}>Includes</p>
              <ul className="flex flex-col gap-3 mb-7 flex-1">
                {["Missed Call Text-Back", "Google Review Requests", "Lead Follow-Up"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0"><path d="M2.5 6L5 8.5L9.5 4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center py-3.5 text-sm font-black transition-opacity hover:opacity-90" style={{ background: "#c9a84c", color: "#0a0a0a" }}>Get the Bundle →</Link>
            </div>
          </motion.div>
          <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>All automations run on a rolling monthly basis. Cancel anytime with 30 days notice. No long contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>FAQs</p>
            <h2 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(24px,4vw,44px)", letterSpacing: "-0.04em" }}>Common questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}

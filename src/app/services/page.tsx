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

const included = [
  { label: "Free demo first", sub: "See your site before you spend a penny." },
  { label: "Mobile responsive", sub: "Looks sharp on phones, tablets and desktop." },
  { label: "Fast loading", sub: "Optimised so visitors don't bounce." },
  { label: "Contact form", sub: "Customers can reach you 24/7." },
  { label: "SSL certificate", sub: "The padlock — trusted by Google and customers." },
  { label: "Hosting setup", sub: "Everything configured and ready to go live." },
  { label: "You own the site", sub: "Paid in full? It's 100% yours. No lock-in." },
  { label: "Basic on-page SEO", sub: "Set up to be found on Google from day one." },
];

const packages = [
  {
    num: "01", name: "Starter", price: "£299", period: "one-off", featured: false,
    description: "Get online professionally. Perfect for trades with no website yet.",
    features: ["1–3 custom pages", "Mobile responsive design", "Contact form", "Google Maps embed", "Basic on-page SEO", "Domain setup assistance"],
  },
  {
    num: "02", name: "Standard", price: "£599", period: "one-off", featured: true,
    description: "Stand out locally and start winning more enquiries from Google.",
    features: ["Up to 6 custom pages", "Image & work gallery", "SEO setup — titles, meta, structure", "Google Business profile setup", "Social media links", "Blog-ready structure"],
  },
  {
    num: "03", name: "Premium", price: "£999", period: "one-off", featured: false,
    description: "A complete digital presence that generates enquiries around the clock.",
    features: ["6+ fully custom pages", "Blog / news section", "Booking or enquiry system", "Full SEO setup & strategy", "Google Analytics setup", "Performance & speed optimisation"],
  },
];

const addons = [
  {
    name: "Monthly Retainer", price: "From £35/mo", featured: true,
    description: "Hosting, security updates, and regular content changes — all handled for you.",
    features: ["Managed hosting & security", "Unlimited content updates", "Performance monitoring", "Priority support"],
  },
  {
    name: "Google Business Setup", price: "£49 one-off", featured: false,
    description: "Get listed and verified on Google Maps so local customers can find you.",
    features: ["Profile created & verified", "Photos & details added", "Review strategy included", "Linked to your new site"],
  },
  {
    name: "SEO Boost", price: "From £79/mo", featured: false,
    description: "Monthly SEO work to help you climb Google rankings for your most valuable local search terms.",
    features: ["Keyword research", "Monthly content updates", "Backlink building", "Monthly ranking report"],
  },
];

const faqs = [
  { q: "Do I pay anything upfront?", a: "No. I build a free demo of your site first — completely free. You only pay once you've seen it and decided you want to go ahead." },
  { q: "Can I upgrade my package later?", a: "Yes — you can start on Starter and upgrade to Standard or Premium at any point. I'll only charge the difference." },
  { q: "What does the monthly retainer cover?", a: "Hosting, security updates, and any content changes you need. You never have to touch the technical side." },
  { q: "How long does it take to go live?", a: "Most sites are live within 1–2 weeks of you approving the demo." },
  { q: "Do I own the website?", a: "Yes — once paid in full, the site is entirely yours. No lock-in, no ongoing obligation." },
  { q: "What if I only need one small change?", a: "Happy to help. Small one-off changes outside a retainer are quoted individually — usually £25–50 depending on the work." },
];

// ── Components ────────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: typeof packages[0] }) {
  return (
    <div
      className="flex flex-col h-full p-6"
      style={{
        background: "#0f0f0f",
        border: pkg.featured ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: pkg.featured ? "0 0 40px rgba(201,168,76,0.1)" : "none",
      }}
    >
      {pkg.featured && <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-bold tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.4)" }}>{pkg.num}</span>
        {pkg.featured && <span className="text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1" style={{ background: "#c9a84c", color: "#0a0a0a" }}>Most Popular</span>}
      </div>
      <h3 className="font-black text-white mb-2" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(20px,2.2vw,26px)", letterSpacing: "-0.03em" }}>{pkg.name}</h3>
      <div className="flex items-baseline gap-1.5 mb-4">
        <span className="font-black text-2xl" style={{ color: "#c9a84c", fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.03em" }}>{pkg.price}</span>
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{pkg.period}</span>
      </div>
      <p className="text-[12px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>{pkg.description}</p>

      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[12px]" style={{ color: "rgba(255,255,255,0.65)" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M2.5 6L5 8.5L9.5 4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/contact" className="group relative w-full py-3 text-[12px] font-black text-center overflow-hidden block" style={pkg.featured ? { background: "#c9a84c", color: "#0a0a0a" } : { border: "1px solid rgba(255,255,255,0.15)", color: "white" }}>
          <span className="relative z-10">Get Started →</span>
          {!pkg.featured && <span className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" style={{ background: "#c9a84c" }} />}
          {!pkg.featured && <span className="absolute inset-0 z-20 flex items-center justify-center text-[#0a0a0a] font-black text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">Get Started →</span>}
        </Link>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
          <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 transition-colors duration-150 hover:bg-white/[0.02]" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-bold text-sm leading-snug transition-colors duration-150" style={{ color: open === i ? "#c9a84c" : "rgba(255,255,255,0.8)" }}>{faq.q}</span>
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

export default function ServicesPage() {
  return (
    <main style={{ background: "#0a0a0a" }}>
      <HomeNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 px-6" style={{ background: "#0a0a0a" }}>
        <div className="absolute top-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)" }} />
        <motion.div className="relative max-w-4xl mx-auto text-center" variants={stagger} initial="hidden" animate="show">
          <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-5" style={{ color: "#c9a84c" }}>Services &amp; Pricing</motion.p>
          <motion.h1 variants={blurUp} className="font-black text-white leading-none mb-6" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(36px,6vw,80px)", letterSpacing: "-0.04em" }}>
            A proper website, handled<br />end to end — <span style={{ color: "#c9a84c" }}>for a price that makes sense</span>
          </motion.h1>
          <motion.p variants={blurUp} className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            No templates. No hidden fees. No tech headaches. You see a free demo first — then decide.
          </motion.p>
          <motion.div variants={blurUp} className="flex flex-wrap items-center justify-center gap-3">
            {["Free demo first", "£0 upfront", "~2 week turnaround", "You own the site"].map((t) => (
              <span key={t} className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                <span style={{ color: "#c9a84c" }}>✓</span> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Included */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }}>
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>Every package includes</p>
            <h2 className="font-black text-white mb-2" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(24px,4vw,44px)", letterSpacing: "-0.04em" }}>All of this, as standard</h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>No matter which package you choose, every site comes with these included.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            {included.map((item) => (
              <motion.div key={item.label} variants={blurUp} className="p-5" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ background: "#c9a84c" }} />
                <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>Packages</p>
            <h2 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.04em" }}>Choose your package</h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>All packages are one-off payments. Monthly retainer is optional — not required.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
          </div>
          <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.3)" }}>
            Not sure which package is right for you?{" "}
            <Link href="/contact" className="font-bold hover:opacity-80 transition-opacity" style={{ color: "#c9a84c" }}>Just ask — I&apos;ll recommend the best fit.</Link>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>Add-ons</p>
            <h2 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-0.04em" }}>Optional extras</h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>Bolt these on to any package to get more out of your new website.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="p-6 flex flex-col" style={{ background: "#111", border: a.featured ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.07)", boxShadow: a.featured ? "0 0 30px rgba(201,168,76,0.08)" : "none" }}>
                {a.featured && <div className="h-px w-full mb-5" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-black text-white" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "16px" }}>{a.name}</h3>
                  <span className="font-black whitespace-nowrap text-sm" style={{ color: "#c9a84c" }}>{a.price}</span>
                </div>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.4)" }}>{a.description}</p>
                <ul className="space-y-2">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0"><path d="M2.5 6L5 8.5L9.5 4" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color: "#c9a84c" }}>FAQs</p>
            <h2 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(24px,4vw,44px)", letterSpacing: "-0.04em" }}>Pricing questions</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Everything you need to know before getting started.</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-14 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-5 items-start p-7" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <svg width="16" height="13" viewBox="0 0 18 14" fill="none"><path d="M1 7L6 12L17 1" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <p className="font-black text-white text-sm mb-1" style={{ fontFamily: "var(--font-geist-sans)" }}>Zero risk guarantee</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>I build a working demo of your site before you spend a penny. If you see it and decide it&apos;s not for you — no invoice, no awkward conversation. You walk away with nothing to lose.</p>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}

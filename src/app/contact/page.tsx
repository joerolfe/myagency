"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const blurUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const trustPoints = [
  "Free mockup — see it before you pay a penny",
  "I reply within 24 hours, usually same day",
  "Based in Derbyshire — happy to meet in person",
  "Plain English, no jargon, no hard sell",
];

function ToggleGroup({ label, name, options, value, onChange, required }: {
  label: string; name: string; options: string[]; value: string | null;
  onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-black tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
        {label}{required && <span className="ml-1" style={{ color: "#c9a84c" }}>*</span>}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            className="px-4 py-2.5 text-[11px] font-black tracking-wide uppercase transition-all duration-200"
            style={{
              background: value === opt ? "#c9a84c" : "transparent",
              color: value === opt ? "#0a0a0a" : "rgba(255,255,255,0.4)",
              border: value === opt ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <input type="hidden" name={name} value={value ?? ""} />
    </div>
  );
}

function InputField({ label, name, type = "text", placeholder, required = false }: {
  label: string; name: string; type?: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-black tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
        {label}{required && <span className="ml-1" style={{ color: "#c9a84c" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full text-sm px-4 py-3 outline-none transition-all duration-150"
        style={{
          background: "#111",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hasWebsite, setHasWebsite] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${data.get("name")} — Joseph Rolfe`,
          name: data.get("name"),
          "Business Name": data.get("businessName"),
          email: data.get("email"),
          phone: data.get("phone") || "Not provided",
          "Interested In": data.get("service") || "Not specified",
          "Has Website": data.get("hasWebsite") || "Not specified",
          "Website URL": data.get("websiteUrl") || "N/A",
          "Budget": data.get("budget") || "Not specified",
          "Timeline": data.get("timeline") || "Not specified",
          "Source": data.get("source") || "Not specified",
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main style={{ background: "#0a0a0a" }}>
      <HomeNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)" }} />

        <motion.div className="relative max-w-3xl mx-auto text-center" variants={stagger} initial="hidden" animate="show">
          <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-5" style={{ color: "#c9a84c" }}>Get in Touch</motion.p>
          <motion.h1 variants={blurUp} className="font-black text-white leading-none mb-6" style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(36px,6vw,80px)", letterSpacing: "-0.04em" }}>
            Ready to get your business{" "}<span style={{ color: "#c9a84c" }}>online properly?</span>
          </motion.h1>
          <motion.p variants={blurUp} className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            Drop me a message and I&apos;ll come back to you the same day. No pressure, no commitment — just a conversation about what you need.
          </motion.p>
          <motion.div variants={blurUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:07857859135" className="flex items-center gap-3 px-6 py-3.5 text-sm font-bold transition-colors" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              07857 859135
            </a>
            <a href="https://wa.me/447857859135?text=Hi%20Joseph%2C%20I%27d%20like%20to%20find%20out%20more%20about%20getting%20a%20website." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 text-sm font-bold transition-colors" style={{ background: "#c9a84c", color: "#0a0a0a" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Joe strip */}
      <section className="px-6 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                <Image src="/joe.png" alt="Joseph Rolfe" width={56} height={56} className="w-full h-full object-cover object-[center_22%]" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full" style={{ background: "#22c55e", border: "2px solid #111" }} />
            </div>
            <div>
              <p className="font-black text-white text-sm" style={{ fontFamily: "var(--font-geist-sans)" }}>Joseph Rolfe</p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Replies same day · South Derbyshire</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {trustPoints.slice(0, 2).map((pt) => (
              <span key={pt} className="flex items-center gap-1.5 text-[11px] px-3 py-1.5" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
                <span style={{ color: "#c9a84c" }}>✓</span> {pt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-24">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }} className="p-16 flex flex-col items-center text-center" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }} className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none"><path d="M1 10L9 18L23 2" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </motion.div>
                <h2 className="font-black text-white text-2xl mb-3" style={{ fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.03em" }}>Message sent!</h2>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Thanks for reaching out. I&apos;ll be back to you within 24 hours — usually much sooner.</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <h2 className="font-black text-white text-xl mb-1" style={{ fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.03em" }}>Send a message</h2>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Takes less than 2 minutes. 24hr reply guaranteed.</p>
                </div>

                <form onSubmit={handleSubmit} className="px-8 py-7 space-y-6">
<div className="grid sm:grid-cols-2 gap-4">
                    <InputField label="Your Name" name="name" placeholder="Joe Smith" required />
                    <InputField label="Business Name" name="businessName" placeholder="Smith's Plumbing" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField label="Email" name="email" type="email" placeholder="joe@example.com" required />
                    <InputField label="Phone (optional)" name="phone" type="tel" placeholder="07700 000 000" />
                  </div>

                  <ToggleGroup label="What are you interested in?" name="service" required options={["Website", "Automations", "Both"]} value={service} onChange={setService} />
                  <ToggleGroup label="Do you have a website?" name="hasWebsite" required options={["Yes", "No"]} value={hasWebsite} onChange={setHasWebsite} />

                  <AnimatePresence>
                    {hasWebsite === "Yes" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }} className="overflow-hidden">
                        <InputField label="Your website URL" name="websiteUrl" type="url" placeholder="https://yoursite.co.uk" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <ToggleGroup label="Budget" name="budget" required options={["Under £300", "£300–£600", "£600–£1000", "£1000+"]} value={budget} onChange={setBudget} />
                  <ToggleGroup label="When do you want to get started?" name="timeline" required options={["ASAP", "Next month", "Just exploring"]} value={timeline} onChange={setTimeline} />
                  <ToggleGroup label="How did you hear about me?" name="source" options={["Google", "Instagram", "Word of mouth", "Other"]} value={source} onChange={setSource} />

                  <div>
                    <label className="block text-[11px] font-black tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Tell me about your business <span style={{ color: "#c9a84c" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What does your business do? What would you like the site to help with?"
                      className="w-full text-sm px-4 py-3 outline-none resize-none transition-all duration-150"
                      style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#ef4444" }}>Something went wrong. Try again or WhatsApp me directly.</p>
                  )}

                  <button type="submit" disabled={status === "loading"} className="w-full py-4 text-sm font-black tracking-wide transition-opacity disabled:opacity-60 disabled:cursor-not-allowed" style={{ background: "#c9a84c", color: "#0a0a0a" }}>
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </span>
                    ) : "Send Message →"}
                  </button>

                  <p className="text-center text-xs pb-1" style={{ color: "rgba(255,255,255,0.2)" }}>No spam. No commitment. Just a friendly chat about your business.</p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <HomeFooter />
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="group">
      <label className="block text-xs font-semibold text-[#666] mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-[#e2e2e2] text-ink text-sm px-4 py-3 placeholder-[#c0c0c0] rounded-md focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-150"
      />
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
          subject: `New enquiry from ${data.get("name")} — Rolfe Brand Scaling`,
          name: data.get("name"),
          "Business Name": data.get("businessName"),
          email: data.get("email"),
          phone: data.get("phone") || "Not provided",
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
    <>
      <Nav />
      <main className="min-h-screen bg-[#f7f6f2]">

        {/* ── Dark hero ──────────────────────────────────────────── */}
        <div className="relative bg-ink overflow-hidden pt-32 pb-48 px-6">
          {/* Animated background blobs */}
          <motion.div
            className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-5">
                Get in Touch
              </motion.p>
              <motion.h1
                variants={blurUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
              >
                Ready to get your business{" "}
                <span className="text-gold italic">online properly?</span>
              </motion.h1>
              <motion.p variants={blurUp} className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Drop me a message and I&apos;ll come back to you the same day. No pressure, no commitment — just a conversation about what you need.
              </motion.p>

              {/* Direct contact buttons */}
              <motion.div variants={blurUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  href="tel:07857859135"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/8 border border-white/15 text-white text-sm font-semibold rounded-full hover:bg-white/14 transition-colors backdrop-blur-sm"
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  07857 859135
                </motion.a>
                <motion.a
                  href="https://wa.me/447857859135?text=Hi%20Joe%2C%20I%27d%20like%20to%20find%20out%20more%20about%20getting%20a%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold rounded-full hover:bg-[#25D366]/22 transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Form section — overlaps hero ──────────────────────── */}
        <div className="relative -mt-24 pb-24 px-6">
          <motion.div
            className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-6 items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >

            {/* ── Left panel ── */}
            <div className="flex flex-col gap-4">

              {/* Joe card */}
              <div className="bg-white border border-[#e8e8e8] rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full border-2 border-gold/30 overflow-hidden">
                      <Image src="/joe.png" alt="Joe Rolfe" width={80} height={80} className="w-full h-full object-cover object-[center_22%]" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm leading-none mb-1">Joe Rolfe</p>
                    <p className="text-[#888] text-xs">Web Designer · South Derbyshire</p>
                  </div>
                </div>
                <p className="text-[#555] text-sm leading-relaxed border-t border-[#f0f0f0] pt-4">
                  I work directly with every client — no middlemen. Message me and I&apos;ll get back to you personally, same day.
                </p>
              </div>

              {/* Trust points */}
              <div className="bg-white border border-[#e8e8e8] rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-bold tracking-widest uppercase text-[#bbb] mb-4">What to expect</p>
                <ul className="flex flex-col gap-3">
                  {trustPoints.map((pt, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.5, ease }}
                    >
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[#555] text-sm leading-relaxed">{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="bg-ink rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
                <p className="text-xs font-bold tracking-widest uppercase text-gold/70 mb-4">How it works</p>
                <div className="flex flex-col gap-4">
                  {[
                    { n: "1", title: "Send a message", body: "Takes 2 minutes." },
                    { n: "2", title: "I build you a free demo", body: "See it before you commit." },
                    { n: "3", title: "Site goes live", body: "Ready in ~2 weeks." },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.n}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-none mb-0.5">{s.title}</p>
                        <p className="text-white/40 text-xs">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Form card ── */}
            <div className="bg-white border border-[#e8e8e8] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                    className="p-12 md:p-16 flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                        <path d="M1 10L9 18L23 2" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                    <h2 className="font-display text-2xl font-bold text-ink mb-3">Message sent!</h2>
                    <p className="text-[#666] text-sm leading-relaxed max-w-xs">
                      Thanks for reaching out. I&apos;ll be back to you within 24 hours — usually much sooner.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Form header */}
                    <div className="px-8 pt-8 pb-6 border-b border-[#f0f0f0]">
                      <h2 className="font-display text-xl font-bold text-ink mb-1">Send a message</h2>
                      <p className="text-[#999] text-sm">Takes less than 2 minutes. I&apos;ll reply fast.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
                      {!WEB3FORMS_KEY && (
                        <div className="border border-amber-200 bg-amber-50 rounded-lg px-4 py-3 text-amber-800 text-sm">
                          <strong>Setup needed:</strong> Add your Web3Forms key to <code className="text-xs bg-amber-100 px-1 rounded">.env.local</code>
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-4">
                        <InputField label="Your Name" name="name" placeholder="Joe Smith" required />
                        <InputField label="Business Name" name="businessName" placeholder="Smith's Plumbing" required />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <InputField label="Email" name="email" type="email" placeholder="joe@example.com" required />
                        <InputField label="Phone (optional)" name="phone" type="tel" placeholder="07700 000 000" />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#666] mb-1.5 tracking-wide">
                          Tell me about your business <span className="text-gold">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="What does your business do? Do you have a website? What would you like the site to help with?"
                          className="w-full bg-white border border-[#e2e2e2] text-ink text-sm px-4 py-3 placeholder-[#c0c0c0] rounded-md focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all duration-150 resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-red-600 text-sm">
                          Something went wrong. Try again or WhatsApp me directly.
                        </p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: status === "loading" ? 1 : 1.02, boxShadow: "0 6px 24px rgba(201,168,76,0.40)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="w-full py-4 bg-gold text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-[#b8912e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(201,168,76,0.30)]"
                      >
                        {status === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3" />
                              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </span>
                        ) : (
                          "Send Message →"
                        )}
                      </motion.button>

                      <p className="text-center text-[#ccc] text-xs pb-1">
                        No spam. No commitment. Just a friendly chat about your business.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>

      </main>
      <Footer />
    </>
  );
}

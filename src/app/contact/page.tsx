"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const trustPoints = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.25" />
        <path d="M5 8l2 2 4-4" stroke="#c9a84c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Free mockup — no commitment needed",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.25" />
        <path d="M5 8l2 2 4-4" stroke="#c9a84c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "I reply within 24 hours — usually same day",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.25" />
        <path d="M5 8l2 2 4-4" stroke="#c9a84c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Based locally in Derbyshire — always available",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.25" />
        <path d="M5 8l2 2 4-4" stroke="#c9a84c" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "No jargon — plain English, straight talking",
  },
];

const steps = [
  {
    n: "1",
    title: "Send a message",
    body: "Tell me about your business in 2 minutes. No pressure.",
  },
  {
    n: "2",
    title: "Free demo call",
    body: "I show you a custom mockup built for your business.",
  },
  {
    n: "3",
    title: "Site goes live",
    body: "Your new website is ready within ~2 weeks.",
  },
];

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
          subject: `New website enquiry from ${data.get("name")} — Rolfe Brand Scaling`,
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
      <main className="min-h-screen bg-white">
        {/* Hero strip */}
        <div className="bg-ink pt-28 pb-14 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-xl">
              Let&apos;s build something great together
            </h1>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg">
              Whether you have a clear idea or you&apos;re just starting out — drop me a message and we&apos;ll figure out the best next step.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 py-14 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

          {/* Left — Joe card + info */}
          <div className="flex flex-col gap-8">

            {/* Joe card */}
            <div className="bg-stone border border-[#e8e8e8] rounded-sm p-6 flex items-start gap-4">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-gold">J</span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-stone" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm mb-0.5">Joe Rolfe</p>
                <p className="text-[#888] text-xs mb-3">Web Designer · South Derbyshire</p>
                <p className="text-[#555] text-sm leading-relaxed">
                  I work with local businesses across Derbyshire and Staffordshire. Every site I build is custom — no templates, no agencies, just me and you.
                </p>
              </div>
            </div>

            {/* Direct contact */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#aaa] mb-4">Prefer to talk directly?</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:07857859135"
                  className="flex items-center gap-3 px-4 py-3.5 border border-[#e0e0e0] rounded-sm hover:border-ink transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ink/10 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="#111" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-ink text-sm font-semibold leading-none mb-1">07857 859135</p>
                    <p className="text-[#999] text-xs">Call or text anytime</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/447857859135?text=Hi%20Joe%2C%20I%27d%20like%20to%20find%20out%20more%20about%20getting%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 border border-[#e0e0e0] rounded-sm hover:border-[#25D366] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-ink text-sm font-semibold leading-none mb-1">WhatsApp Joe</p>
                    <p className="text-[#999] text-xs">Quickest way to reach me</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust points */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-widest uppercase text-[#aaa]">What to expect</p>
              {trustPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0">{pt.icon}</span>
                  <p className="text-[#555] text-sm leading-relaxed">{pt.text}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 py-4 ${i < steps.length - 1 ? "border-b border-[#efefef]" : ""}`}
                >
                  <div className="w-7 h-7 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-ink text-sm font-semibold mb-0.5">{step.title}</p>
                    <p className="text-[#999] text-xs leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right — Form */}
          <div>
            {status === "success" ? (
              <div className="border border-green-200 bg-green-50 rounded-sm p-12 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M1 9L8 16L21 1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-display text-2xl text-ink font-bold mb-2">Message received!</p>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs mx-auto">
                  Thanks for getting in touch. I&apos;ll be back to you within 24 hours — usually much sooner.
                </p>
              </div>
            ) : (
              <div className="bg-stone border border-[#e8e8e8] rounded-sm p-7 md:p-8">
                <p className="font-display text-xl font-bold text-ink mb-1">Send a message</p>
                <p className="text-[#888] text-sm mb-7">Takes less than 2 minutes. I&apos;ll get back to you fast.</p>

                {!WEB3FORMS_KEY && (
                  <div className="border border-amber-200 bg-amber-50 rounded-sm px-5 py-4 text-amber-800 text-sm mb-6">
                    <strong>Setup needed:</strong> Add your Web3Forms key to{" "}
                    <code className="font-mono text-xs bg-amber-100 px-1 rounded">.env.local</code>{" "}
                    to enable email delivery.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Joe Smith"
                        className="w-full bg-white border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                        Business Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        placeholder="Smith's Plumbing"
                        className="w-full bg-white border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="joe@example.com"
                        className="w-full bg-white border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="07700 000000"
                        className="w-full bg-white border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                      Tell me about your business <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="What does your business do? Do you have a website already? What are you hoping a new site will help with?"
                      className="w-full bg-white border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors resize-none rounded-sm"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Try again or message me on WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gold text-white text-sm font-semibold tracking-wide hover:bg-[#b8912e] transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending…" : "Send Message →"}
                  </button>

                  <p className="text-center text-[#bbb] text-xs">
                    No spam. No commitment. Just a friendly chat about your business.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

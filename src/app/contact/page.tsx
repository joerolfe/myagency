"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// 1. Go to https://web3forms.com
// 2. Enter your email address to receive enquiries
// 3. Copy the access key they send you
// 4. Create a .env.local file in the project root and add:
//    NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

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
      <main className="min-h-screen bg-white pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Let&apos;s talk about your website
          </h1>
          <p className="text-[#555] mb-8 text-base md:text-lg leading-relaxed">
            Fill in the form and I&apos;ll be in touch within 24 hours to
            arrange a free demo. No commitment required.
          </p>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="tel:07857859135"
              className="flex items-center gap-2.5 px-4 py-2.5 border border-[#e0e0e0] rounded-sm hover:border-ink transition-colors text-sm font-medium text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="#111" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              07857 859135
            </a>
            <a
              href="https://wa.me/447857859135"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 border border-[#e0e0e0] rounded-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors text-sm font-medium text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* 1-2-3 steps */}
          <div className="grid grid-cols-3 gap-4 mb-12 p-5 bg-stone border border-[#e8e8e8] rounded-sm">
            {[
              { step: "1", label: "Send a message", sub: "Takes 2 minutes" },
              { step: "2", label: "Free demo call", sub: "I show you a mockup" },
              { step: "3", label: "Site goes live", sub: "Within ~2 weeks" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-7 h-7 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                  {item.step}
                </div>
                <p className="text-ink text-xs font-semibold leading-snug mb-0.5">{item.label}</p>
                <p className="text-[#999] text-[10px]">{item.sub}</p>
              </div>
            ))}
          </div>

          {status === "success" ? (
            <div className="border border-green-200 bg-green-50 rounded-sm p-10 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M1 8L7 14L19 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-display text-2xl text-ink font-bold mb-2">
                Message sent
              </p>
              <p className="text-[#555] text-sm">
                I&apos;ll be in touch within 24 hours. Talk soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {!WEB3FORMS_KEY && (
                <div className="border border-amber-200 bg-amber-50 rounded-sm px-5 py-4 text-amber-800 text-sm">
                  <strong>Setup needed:</strong> Add your Web3Forms key to{" "}
                  <code className="font-mono text-xs bg-amber-100 px-1 rounded">.env.local</code>{" "}
                  to enable email delivery. See the comment at the top of this file.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Joe Smith"
                    className="w-full bg-stone border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
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
                    className="w-full bg-stone border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="joe@example.com"
                    className="w-full bg-stone border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="07700 000000"
                    className="w-full bg-stone border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#888] mb-2">
                  Tell Me About Your Business <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What does your business do? Do you currently have a website? What are you looking for?"
                  className="w-full bg-stone border border-[#e0e0e0] text-ink px-4 py-3 text-sm placeholder-[#bbb] focus:outline-none focus:border-gold transition-colors resize-none rounded-sm"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or message me directly on WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gold text-white text-sm font-semibold tracking-wide hover:bg-[#b8912e] transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              <p className="text-center text-[#aaa] text-xs">
                No spam, no commitment. I&apos;ll respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

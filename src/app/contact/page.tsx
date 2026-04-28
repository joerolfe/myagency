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
          <p className="text-[#555] mb-12 text-base md:text-lg leading-relaxed">
            Fill in the form and I&apos;ll be in touch within 24 hours to
            arrange a free demo. No commitment required.
          </p>

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

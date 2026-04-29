import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — Rolfe Brand Scaling",
  description: "Simple, transparent website pricing for local businesses. Starter from £299, Standard from £599, Premium from £999. Free demo — no upfront cost.",
};

const faqs = [
  {
    q: "Do I pay anything upfront?",
    a: "No. I build a free demo first. You only pay once you've seen the site and decided you want to go ahead.",
  },
  {
    q: "What's included in every package?",
    a: "All packages include mobile-responsive design, a contact form, hosting setup, and a free demo before you commit.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes — you can start on Starter and upgrade to Standard or Premium at any point. I'll only charge the difference.",
  },
  {
    q: "What does the monthly retainer cover?",
    a: "Hosting, security updates, and content changes (text, images, new pages). You never have to touch the technical side.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most sites are live within 1–2 weeks of you approving the demo.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-24">

        {/* Header */}
        <div className="py-16 md:py-20 px-6 text-center border-b border-[#ebebeb]">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Pricing</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-[#555] text-base md:text-lg leading-relaxed">
              Every package includes a free demo before you commit to anything.
              No upfront cost, no hidden fees.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <Services />

        {/* Comparison table */}
        <Comparison />

        {/* Pricing FAQ */}
        <section className="py-20 px-6 bg-stone border-t border-[#ebebeb]">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-10 text-center">
              Pricing questions
            </h2>
            <div className="divide-y divide-[#ebebeb]">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5">
                  <p className="font-semibold text-ink text-sm mb-2">{faq.q}</p>
                  <p className="text-[#666] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-ink text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Get Started</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to see your free demo?
            </h2>
            <p className="text-white/55 text-base mb-8">
              Fill in the form and I&apos;ll have a working demo of your site ready within 48 hours — completely free.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
            >
              Get a Free Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesIncluded from "@/components/ServicesIncluded";
import PricingCards from "@/components/PricingCards";
import ServicesAddons from "@/components/ServicesAddons";
import Comparison from "@/components/Comparison";
import ServicesFAQ from "@/components/ServicesFAQ";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — Rolfe Brand Scaling",
  description: "Simple, transparent website pricing for local businesses. Starter from £299, Standard from £599, Premium from £999. Free demo — no upfront cost.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        <ServicesHero />

        <ServicesIncluded />

        {/* Pricing cards */}
        <section id="packages" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Packages</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Choose your package</h2>
              <p className="text-[#666] mt-3 text-base max-w-lg mx-auto">
                All packages are one-off payments. Monthly retainer is optional — not required.
              </p>
            </div>
            <PricingCards />
            <p className="text-center text-[#999] text-sm mt-8">
              Not sure which package is right for you?{" "}
              <Link href="/contact" className="text-ink font-semibold hover:text-gold transition-colors">
                Just ask — I&apos;ll recommend the best fit.
              </Link>
            </p>
          </div>
        </section>

        <ServicesAddons />

        <Comparison />

        <ServicesFAQ />

        {/* Guarantee */}
        <section className="py-14 px-6 bg-stone border-t border-[#e8e8e8]">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-5 items-start bg-white border border-[#e8e8e8] rounded-xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7L6 12L17 1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-ink text-base mb-1">Zero risk guarantee</p>
                <p className="text-[#555] text-sm leading-relaxed">
                  I build a working demo of your site before you spend a penny. If you see it and decide it&apos;s not for you — no invoice, no awkward conversation. You walk away with nothing to lose. That&apos;s the whole point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 px-6 bg-ink overflow-hidden text-center">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.5) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Ready?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              See your free demo within 48 hours
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
              Tell me about your business and I&apos;ll build a working preview of your new site — completely free, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
              >
                Get a Free Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="tel:07857859135"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-semibold hover:border-white/50 hover:bg-white/8 transition-all rounded-lg"
              >
                Call 07857 859135
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

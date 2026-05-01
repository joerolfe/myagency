import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Comparison from "@/components/Comparison";
import PricingCards from "@/components/PricingCards";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — Rolfe Brand Scaling",
  description: "Simple, transparent website pricing for local businesses. Starter from £299, Standard from £599, Premium from £999. Free demo — no upfront cost.",
};

// ── Data ─────────────────────────────────────────────────────────

const included = [
  {
    label: "Free demo first",
    sub: "See your site before you spend a penny.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="3.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10.5L9 12.5L13 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Mobile responsive",
    sub: "Looks sharp on phones, tablets and desktop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="7" y="1.5" width="10" height="17" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="0.8" fill="currentColor"/>
        <rect x="1.5" y="5" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Fast loading",
    sub: "Optimised so visitors don't bounce.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 8H18L13.5 11.5L15.5 17.5L10 14L4.5 17.5L6.5 11.5L2 8H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Contact form",
    sub: "Customers can reach you 24/7.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4.5C2 3.67 2.67 3 3.5 3H16.5C17.33 3 18 3.67 18 4.5V13.5C18 14.33 17.33 15 16.5 15H12L8 18V15H3.5C2.67 15 2 14.33 2 13.5V4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 7.5H14M6 10.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "SSL certificate",
    sub: "The padlock — trusted by Google and customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9V6.5a3 3 0 016 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="13.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Hosting setup",
    sub: "Everything configured and ready to go live.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="5.5" r="1" fill="currentColor"/>
        <circle cx="15" cy="14.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "You own the site",
    sub: "Paid in full? It's 100% yours. No lock-in.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L13 5H17V9L20 10L17 11V15H13L10 18L7 15H3V11L0 10L3 9V5H7L10 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7.5 10L9.5 12L13 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];


const addons = [
  {
    name: "Monthly Retainer",
    price: "From £35/mo",
    description: "Hosting, security updates, and regular content changes — all handled for you. Never worry about the technical side again.",
    features: ["Managed hosting & security", "Unlimited content updates", "Performance monitoring", "Priority support"],
  },
  {
    name: "Google Business Setup",
    price: "£49 one-off",
    description: "Get your business listed and verified on Google Maps so local customers can find you when they search.",
    features: ["Profile created & verified", "Photos & details added", "Review strategy included", "Linked to your new site"],
  },
  {
    name: "SEO Boost",
    price: "From £79/mo",
    description: "Monthly SEO work to help you climb Google rankings for your most valuable local search terms.",
    features: ["Keyword research", "Monthly content updates", "Backlink building", "Monthly ranking report"],
  },
];

const faqs = [
  {
    q: "Do I pay anything upfront?",
    a: "No. I build a free demo of your site first — completely free. You only pay once you've seen it and decided you want to go ahead.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes — you can start on Starter and upgrade to Standard or Premium at any point. I'll only charge the difference.",
  },
  {
    q: "What does the monthly retainer cover?",
    a: "Hosting, security updates, and any content changes you need (new text, images, pages). You never have to touch the technical side.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most sites are live within 1–2 weeks of you approving the demo.",
  },
  {
    q: "Do I own the website?",
    a: "Yes — once paid in full, the site is entirely yours. No lock-in, no ongoing obligation.",
  },
  {
    q: "What if I only need one small change?",
    a: "Happy to help. Small one-off changes outside a retainer are quoted individually — usually £25–50 depending on the work.",
  },
];

function CheckIcon({ color = "#c9a84c" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill={color} fillOpacity="0.12" />
      <path d="M4 7L6 9L10 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-24">

        {/* Hero */}
        <div className="relative py-20 md:py-28 px-6 text-center overflow-hidden border-b border-[#ebebeb]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,#fdf9ee,transparent)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Services & Pricing</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-5 leading-tight">
              A proper website, handled end to end —<br className="hidden md:block" />
              <span className="text-gold italic">for a price that makes sense</span>
            </h1>
            <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              No templates. No hidden fees. No tech headaches. You see a free demo first — then decide.
            </p>
            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#777]">
              {["Free demo first", "£0 upfront", "~2 week turnaround", "You own the site"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What's included in every package */}
        <div className="py-16 px-6 bg-stone border-b border-[#ebebeb]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Every package includes</p>
              <p className="text-[#666] text-sm">No matter which package you choose, all of this comes as standard.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {included.map((item) => (
                <div
                  key={item.label}
                  className="group bg-white border border-[#e8e8e8] rounded-sm p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-gold/50 hover:shadow-[0_4px_20px_rgba(201,168,76,0.12)] hover:-translate-y-1 transition-all duration-200 cursor-default w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-ink text-sm mb-1">{item.label}</p>
                  <p className="text-[#888] text-xs leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="py-20 md:py-28 px-6 bg-white">
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
        </div>

        {/* Add-ons */}
        <div className="py-20 px-6 bg-stone border-t border-[#ebebeb]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Add-ons</p>
              <h2 className="font-display text-3xl font-bold text-ink">Optional extras</h2>
              <p className="text-[#666] mt-3 text-base max-w-lg mx-auto">
                Bolt these on to any package to get more out of your new website.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {addons.map((addon) => (
                <div key={addon.name} className="bg-white border border-[#e8e8e8] rounded-sm p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg font-bold text-ink">{addon.name}</h3>
                    <span className="text-gold font-bold text-sm whitespace-nowrap">{addon.price}</span>
                  </div>
                  <p className="text-[#666] text-sm leading-relaxed mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckIcon color="#16a34a" />
                        <span className="text-[#444] text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <Comparison />

        {/* FAQ */}
        <section className="py-20 px-6 bg-white border-t border-[#ebebeb]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">FAQs</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Pricing questions</h2>
            </div>
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

        {/* Guarantee */}
        <section className="py-14 px-6 bg-stone border-t border-[#ebebeb]">
          <div className="max-w-2xl mx-auto flex gap-5 items-start bg-white border border-[#e8e8e8] rounded-sm p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-stone border-t border-[#ebebeb] text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Ready?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              See your free demo within 48 hours
            </h2>
            <p className="text-[#555] text-base mb-8 max-w-md mx-auto">
              Tell me about your business and I&apos;ll build a working preview of your new site — completely free, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
              >
                Get a Free Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="tel:07857859135"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#d0d0d0] text-ink text-sm font-semibold hover:border-ink hover:bg-ink hover:text-white transition-all rounded-sm"
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

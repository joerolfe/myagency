import FadeIn from "./FadeIn";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "£299",
    description: "Get your business online fast with a clean, professional site.",
    featured: false,
  },
  {
    name: "Standard",
    price: "£599",
    description: "A complete online presence built to win more local customers.",
    featured: true,
  },
  {
    name: "Premium",
    price: "£999",
    description: "A full-featured site with everything you need to scale.",
    featured: false,
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Simple, transparent pricing
          </h2>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-sm font-semibold text-[#7a5c1e]">Starting from £299 — one-off payment</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 80}>
              <div className={`relative rounded-sm p-6 flex flex-col gap-3 h-full ${
                pkg.featured
                  ? "border-2 border-gold bg-white shadow-[0_8px_32px_rgba(201,168,76,0.15)]"
                  : "border border-[#e8e8e8] bg-stone"
              }`}>
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-ink">{pkg.name}</h3>
                  <span className="font-display text-2xl font-bold text-ink flex-shrink-0">{pkg.price}</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">{pkg.description}</p>
                <Link
                  href="/services"
                  className={`mt-auto text-center text-xs font-semibold py-2.5 rounded-sm transition-all duration-150 ${
                    pkg.featured
                      ? "bg-gold text-white hover:bg-[#b8912e]"
                      : "border border-[#d0d0d0] text-ink hover:border-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  See what&apos;s included
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={150} className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border-b border-ink hover:text-gold hover:border-gold transition-colors duration-150 pb-0.5"
          >
            View full pricing &amp; comparison
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

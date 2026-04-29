import FadeIn from "./FadeIn";

const packages = [
  {
    name: "Starter",
    price: "£299",
    description: "Get your business online fast with a clean, professional site.",
    outcome: "Stop losing customers to competitors who have a website and you don't.",
    features: [
      "1–3 pages",
      "Mobile responsive design",
      "Contact form",
      "Google Maps embed",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Standard",
    price: "£599",
    description: "A complete online presence built to win more local customers.",
    outcome: "Show up on Google and turn more visitors into paying customers.",
    features: [
      "Up to 6 pages",
      "Image gallery",
      "Basic SEO setup",
      "Google Business profile setup",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "£999",
    description: "A full-featured site with everything you need to scale.",
    outcome: "A complete digital presence that generates enquiries around the clock.",
    features: [
      "6+ pages",
      "Blog / news section",
      "Booking system integration",
      "Full SEO setup",
    ],
    featured: false,
    cta: "Get Started",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-5">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Packages
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Simple, transparent pricing
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 bg-gold/10 border border-gold/25 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-sm font-semibold text-[#7a5c1e]">Starting from £299 — one-off payment</span>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="text-center mb-14">
          <p className="text-[#666] text-base max-w-xl mx-auto">
            Every package includes hosting setup, mobile design, and a free demo
            before you commit to anything.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 100}>
              <div
                className={`relative flex flex-col rounded-sm overflow-hidden h-full hover:-translate-y-1.5 transition-transform duration-300 ${
                  pkg.featured
                    ? "border-2 border-gold shadow-[0_8px_32px_rgba(201,168,76,0.18)] hover:shadow-[0_16px_48px_rgba(201,168,76,0.25)]"
                    : "border border-[#e8e8e8] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                }`}
              >
                {pkg.featured && (
                  <div className="bg-gold px-6 py-2.5 text-center">
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`flex flex-col flex-1 p-8 ${
                    pkg.featured ? "bg-white" : "bg-stone"
                  }`}
                >
                  <div className="mb-7">
                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-display text-4xl font-bold text-ink mb-3">
                      {pkg.price}
                      <span className="text-base font-sans font-normal text-[#999] ml-1">
                        one-off
                      </span>
                    </div>
                    <p className="text-[#666] text-sm leading-relaxed mb-3">
                      {pkg.description}
                    </p>
                    <div className="flex items-start gap-2 bg-gold/8 border border-gold/20 rounded-sm px-3 py-2">
                      <span className="text-gold text-xs mt-0.5 flex-shrink-0">→</span>
                      <p className="text-[#7a5c1e] text-xs leading-relaxed font-medium">{pkg.outcome}</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            className="text-gold"
                          >
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="text-[#444] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`block text-center py-3.5 text-sm font-semibold tracking-wide transition-all duration-150 rounded-sm ${
                      pkg.featured
                        ? "bg-gold text-white hover:bg-[#b8912e] shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
                        : "border border-[#d0d0d0] text-ink hover:border-ink hover:bg-ink hover:text-white"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200} className="text-center mt-10">
          <p className="text-[#888] text-sm">
            Monthly retainer plans from{" "}
            <span className="text-ink font-semibold">£35/month</span> — hosting,
            security, and regular updates included.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

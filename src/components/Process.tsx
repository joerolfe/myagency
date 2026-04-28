import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I find your business on Google Maps and review your current online presence to understand what's missing and what matters most.",
    tag: "Free",
  },
  {
    number: "02",
    title: "Free Demo",
    description:
      "I build a free demo of your new website — no commitment needed. You get to see exactly what your site could look like before anything is agreed.",
    tag: "No obligation",
  },
  {
    number: "03",
    title: "Review Meeting",
    description:
      "We meet in person or over a video call and I walk you through the demo. You can ask questions, request changes, and see everything before you decide.",
    tag: "In person or video",
  },
  {
    number: "04",
    title: "Build & Launch",
    description:
      "You approve the design, and I build the full site and handle all hosting setup. Everything is done for you — domain, hosting, the lot.",
    tag: "Fully managed",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Your site goes live, and I manage updates and security on a monthly retainer. You never have to worry about the technical side again.",
    tag: "From £35/month",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 bg-white border-t border-[#ebebeb]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            How it works
          </h2>
          <p className="text-[#666] mt-4 text-base max-w-lg mx-auto">
            From discovery to a live website — handled end to end, with no tech
            knowledge required from you.
          </p>
        </FadeIn>

        <div>
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 80}>
              <div className="flex gap-7 md:gap-10">
                {/* Number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="font-display text-gold text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent my-2" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`${index < steps.length - 1 ? "pb-10" : ""} pt-2`}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-gold/10 text-gold px-2 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-[#555] leading-relaxed text-sm md:text-base max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200} className="mt-12 p-6 bg-stone border border-[#e8e8e8] rounded-sm">
          <p className="text-ink font-semibold text-sm mb-1">
            Zero risk guarantee
          </p>
          <p className="text-[#666] text-sm leading-relaxed">
            If you see the demo and decide it&apos;s not for you, that&apos;s
            completely fine — you walk away with no cost and no obligation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

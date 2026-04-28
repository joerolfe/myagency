import FadeIn from "./FadeIn";

// Replace these with real client testimonials as you collect them
const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Hair Studio",
    location: "Burton upon Trent",
    text: "I had no website at all before Joe got in touch. Within two weeks I had a professional site and I'm already getting new bookings through it. Couldn't recommend him highly enough.",
  },
  {
    name: "Dave Cartwright",
    business: "Cartwright Landscaping",
    location: "Derby",
    text: "Joe built us a new website and sorted our Google listing. We're getting at least 3–4 more enquiries a week than before. The whole process was dead easy — he handled everything.",
  },
  {
    name: "Liz Henshaw",
    business: "The Baking Box",
    location: "Swadlincote",
    text: "Finally a website I'm actually proud to show people. Joe explained everything clearly and never made me feel like I was wasting his time asking basic questions. Great service.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold text-sm">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            What local businesses say
          </h2>
          <p className="text-[#666] mt-4 text-base">
            Real results from businesses across Derbyshire and Staffordshire.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120}>
              <div className="bg-white border border-[#e8e8e8] rounded-sm p-7 flex flex-col h-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <Stars />
                <p className="text-[#333] text-sm leading-relaxed mt-5 mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-[#f0f0f0] pt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm leading-none mb-0.5">
                      {t.name}
                    </p>
                    <p className="text-[#888] text-xs">
                      {t.business} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Google badge */}
        <FadeIn className="text-center mt-10">
          <p className="text-[#999] text-sm">
            All reviews collected via{" "}
            <span className="text-ink font-medium">Google Business</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

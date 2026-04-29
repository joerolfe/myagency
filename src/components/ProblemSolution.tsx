import FadeIn from "./FadeIn";

const problems = [
  {
    stat: "3 sec",
    label: "First impressions",
    problem: "Visitors decide whether to trust your business in 3 seconds. An outdated or missing website loses them before you've said a word.",
  },
  {
    stat: "76%",
    label: "of customers",
    problem: "Check a business online before they call. If your site looks poor — or doesn't exist — they call your competitor instead.",
  },
  {
    stat: "60%",
    label: "of searches",
    problem: "Are on mobile. If your website isn't built for phones, you're invisible to the majority of your potential customers.",
  },
];

const outcomes = [
  {
    title: "Show up when it matters",
    body: "Every site includes SEO setup so you appear when local customers search for your trade on Google.",
  },
  {
    title: "Win trust instantly",
    body: "A clean, custom design makes your business look professional from the first click — turning visitors into enquiries.",
  },
  {
    title: "Works on every device",
    body: "Built mobile-first so it looks sharp on phones, tablets, and desktops — where your customers actually are.",
  },
  {
    title: "Enquiries while you sleep",
    body: "A contact form and clear calls-to-action mean customers can reach you at any hour, even when you're on the job.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">

        <FadeIn className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">The Reality</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight max-w-2xl mx-auto">
            Every day without a proper website is costing you customers
          </h2>
          <p className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Most local businesses don&apos;t realise how much they&apos;re losing online — until they fix it.
          </p>
        </FadeIn>

        {/* Problem stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-white border border-[#e8e8e8] rounded-sm p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1L7 7M7 1L1 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-display text-2xl font-bold text-ink">{p.stat}</span>
                    <span className="text-[#888] text-sm ml-1.5">{p.label}</span>
                  </div>
                </div>
                <p className="text-[#555] text-sm leading-relaxed">{p.problem}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <FadeIn className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-[#e8e8e8]" />
          <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/25 rounded-full">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Here&apos;s what I fix</span>
          </div>
          <div className="flex-1 h-px bg-[#e8e8e8]" />
        </FadeIn>

        {/* Outcomes */}
        <div className="grid sm:grid-cols-2 gap-5">
          {outcomes.map((o, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex gap-4 items-start p-6 bg-white border border-[#e8e8e8] rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">{o.title}</p>
                  <p className="text-[#666] text-sm leading-relaxed">{o.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

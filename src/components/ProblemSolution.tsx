import FadeIn from "./FadeIn";

const problems = [
  "No website at all, or one that hasn't been updated in years",
  "Outdated design that makes your business look unprofessional",
  "Not showing up on Google when local customers search",
  "Site isn't mobile friendly — losing customers on phones",
];

const solutions = [
  "A fast, modern website built to make a strong first impression",
  "Clean, custom design tailored to your business and brand",
  "Basic SEO on every site — so you can be found on Google",
  "Fully responsive — looks great on every screen, every time",
];

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight max-w-2xl mx-auto">
            Most local business websites are losing you customers
          </h2>
          <p className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Here&apos;s the honest truth — and what I do about it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0">
          {/* Problem column */}
          <FadeIn className="md:pr-16">
            <div className="bg-white rounded-sm border border-[#e8e8e8] p-8">
              <div className="flex items-center gap-2 mb-7">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 1L7 7M7 1L1 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#999]">
                  The Problem
                </h3>
              </div>
              <ul className="space-y-5">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-[#ddd] font-bold text-sm select-none flex-shrink-0">
                      —
                    </span>
                    <span className="text-[#555] leading-relaxed text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Solution column */}
          <FadeIn delay={150} className="md:pl-16">
            <div className="bg-white rounded-sm border border-[#e8e8e8] p-8 h-full">
              <div className="flex items-center gap-2 mb-7">
                <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-gold">
                  What I Do
                </h3>
              </div>
              <ul className="space-y-5">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-gold font-bold text-sm select-none flex-shrink-0">
                      —
                    </span>
                    <span className="text-[#444] leading-relaxed text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

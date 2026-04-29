import FadeIn from "./FadeIn";

const rows = [
  {
    feature: "Starting price",
    us: "From £299",
    diy: "£14–40/mo forever",
    agency: "£1,500–3,000+",
    usHighlight: true,
  },
  {
    feature: "Setup time",
    us: "~2 weeks",
    diy: "Days to never",
    agency: "6–12 weeks",
    usHighlight: true,
  },
  {
    feature: "Custom design",
    us: true,
    diy: false,
    agency: "partial",
  },
  {
    feature: "Local support",
    us: "South Derbyshire",
    diy: false,
    agency: false,
  },
  {
    feature: "Free demo first",
    us: true,
    diy: false,
    agency: false,
  },
  {
    feature: "SEO included",
    us: true,
    diy: "basic only",
    agency: "extra cost",
  },
  {
    feature: "You own the site",
    us: true,
    diy: false,
    agency: "usually",
  },
  {
    feature: "Monthly retainer",
    us: "Optional from £35",
    diy: "Required forever",
    agency: "Often mandatory",
  },
];

function Cell({ value }: { value: string | boolean | undefined }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1 1L7 7M7 1L1 7"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  return <span className="text-[#444] text-sm">{value}</span>;
}

function UsCell({ value }: { value: string | boolean | undefined }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="#16a34a"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  return <span className="text-ink text-sm font-semibold">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Why Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            How we compare
          </h2>
          <p className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Why not just use Wix or hire a big agency? Here&apos;s the honest
            comparison.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="overflow-x-auto rounded-sm border border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#999] bg-stone border-b border-[#e8e8e8] w-[32%]">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-sm font-bold text-white bg-gold border-b border-gold/80 text-center w-[23%]">
                    Rolfe Brand Scaling
                  </th>
                  <th className="px-4 py-4 text-xs font-bold tracking-wide text-[#666] bg-stone border-b border-[#e8e8e8] text-center w-[22%]">
                    Wix / Squarespace
                  </th>
                  <th className="px-4 py-4 text-xs font-bold tracking-wide text-[#666] bg-stone border-b border-[#e8e8e8] text-center w-[23%]">
                    Other Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone/50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-ink border-b border-[#f0f0f0]">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-center bg-gold/8 border-b border-gold/15">
                      <div className="flex justify-center">
                        <UsCell value={row.us} />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center border-b border-[#f0f0f0]">
                      <div className="flex justify-center">
                        <Cell value={row.diy} />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center border-b border-[#f0f0f0]">
                      <div className="flex justify-center">
                        <Cell value={row.agency} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-7 py-3.5 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm text-center shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
          >
            Get a Free Demo
          </a>
          <a
            href="/services"
            className="px-7 py-3.5 border border-[#d0d0d0] text-ink text-sm font-semibold hover:border-ink hover:bg-ink hover:text-white transition-all rounded-sm text-center"
          >
            View Pricing
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

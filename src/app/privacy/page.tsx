import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Joseph Rolfe",
  description: "How Joseph Rolfe collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "Who we are",
    body: "Joseph Rolfe is a web designer based in South Derbyshire, UK. If you have any questions about this policy, you can contact us at the address on the Contact page.",
  },
  {
    title: "What data we collect",
    body: "When you submit the contact form on this website, we collect the following information: your name, business name, email address, phone number (optional), and the content of your message. We do not collect any other personal data through this website.",
  },
  {
    title: "How we use your data",
    body: "The information you submit through our contact form is used solely to respond to your enquiry and provide you with the web design services you have requested. We will never sell, share, or pass your data to any third party for marketing purposes.",
  },
  {
    title: "How long we keep your data",
    body: "We retain enquiry data for a maximum of 12 months from the date of your last contact. After this period, your data is deleted. If you become a client, we may retain relevant project information for up to 3 years for accounting and legal purposes.",
  },
  {
    title: "Third-party services",
    body: "This website uses the following third-party services: Web3Forms (to process and deliver contact form submissions to our email), and Google Fonts (to load the typefaces used in the site design). Google Fonts may log the request made to their servers. No other analytics or tracking tools are used on this website.",
  },
  {
    title: "Cookies",
    body: "This website does not use cookies for tracking or marketing. Google Fonts may set a cookie as part of its service. No persistent first-party cookies are set by this website.",
  },
  {
    title: "Your rights",
    body: "Under UK GDPR, you have the right to access the personal data we hold about you, request that it be corrected or deleted, object to its processing, and withdraw any consent at any time. To exercise any of these rights, please contact us via the Contact page.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. This policy was last updated in April 2026.",
  },
];

export default function Privacy() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <HomeNav />

      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>
          Legal
        </p>
        <h1
          className="font-black text-white leading-none mb-4"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.04em" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: "rgba(255,255,255,0.3)" }}>
          Last updated: April 2026
        </p>

        <div className="space-y-0">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="py-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex gap-6 items-start">
                <span
                  className="text-[11px] font-black tracking-[0.2em] pt-1 flex-shrink-0 w-6"
                  style={{ color: "rgba(201,168,76,0.4)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2
                    className="font-black text-white mb-3"
                    style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(16px, 2vw, 20px)", letterSpacing: "-0.02em" }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Questions about this policy?
          </p>
          <Link
            href="/contact"
            className="text-[12px] font-black tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
            style={{ color: "#c9a84c" }}
          >
            Get in touch →
          </Link>
        </div>
      </div>

      <HomeFooter />
    </main>
  );
}

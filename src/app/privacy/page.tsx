import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Rolfe Brand Scaling",
  description: "How Rolfe Brand Scaling collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "Who we are",
    body: "Rolfe Brand Scaling is a web design service operated by Joe Rolfe, based in South Derbyshire, UK. If you have any questions about this policy, you can contact us at the address on the Contact page.",
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
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-24 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[#888] text-sm mb-12">
            Last updated: April 2026
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-ink mb-3">
                  {section.title}
                </h2>
                <p className="text-[#555] leading-relaxed text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#ebebeb]">
            <p className="text-[#888] text-sm">
              Questions about this policy?{" "}
              <Link href="/contact" className="text-gold font-semibold hover:underline">
                Get in touch.
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

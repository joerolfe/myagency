import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import RotatePrompt from "@/components/RotatePrompt";
import LenisProvider from "@/components/LenisProvider";
import { siteUrl, siteName } from "@/lib/config";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


const homeTitle = "Rolfe Brand Scaling | Web Design & AI Automation | Burton upon Trent";
const homeDescription =
  "Websites and AI automation for trades and small businesses. Based near Burton upon Trent, working with clients across the UK. See a free demo of your new site before you pay anything.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteName}`,
  },
  description: homeDescription,
  keywords: [
    "Rolfe Brand Scaling",
    "Rolfe Brand Scaling web design",
    "web design Derbyshire",
    "web design Staffordshire",
    "local business websites",
    "small business web design",
    "website designer Derby",
    "website designer Burton",
    "affordable web design",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: homeTitle,
    description: homeDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  description:
    "Web design and AI automation for trades and small businesses, based near Burton upon Trent and working with clients across the UK.",
  areaServed: [
    { "@type": "Place", name: "Burton upon Trent" },
    { "@type": "Place", name: "South Derbyshire" },
    { "@type": "Place", name: "Staffordshire" },
    { "@type": "Country", name: "United Kingdom" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BNL4ZNG5T6"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BNL4ZNG5T6');
          `}
        </Script>
      </head>
      <body className="bg-white text-ink font-sans antialiased" suppressHydrationWarning>
        <LenisProvider>
          {children}
          <WhatsAppButton />
          <RotatePrompt />
        </LenisProvider>
      </body>
    </html>
  );
}

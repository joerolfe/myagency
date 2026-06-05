import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
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


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} — Web Design for Local Businesses`,
  description:
    "Professional websites for small businesses in Derbyshire and Staffordshire. Custom design, free demo, no upfront cost. Based in South Derbyshire.",
  keywords: [
    "Joseph Rolfe",
    "Joseph Rolfe web design",
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
    title: `${siteName} — Web Design for Local Businesses`,
    description:
      "Professional websites for small businesses in Derbyshire and Staffordshire. Custom design, free demo, no upfront cost.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Web Design for Local Businesses`,
    description:
      "Professional websites for small businesses in Derbyshire and Staffordshire. Custom design, free demo, no upfront cost.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${GeistSans.variable}`}>
      <head>
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
        </LenisProvider>
      </body>
    </html>
  );
}

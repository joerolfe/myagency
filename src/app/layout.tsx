import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

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

const siteUrl = "https://rolfebrandscaling.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rolfe Brand Scaling — Web Design for Local Businesses",
  description:
    "Professional websites for small businesses in Derbyshire and Staffordshire. Custom design, free demo, no upfront cost. Based in South Derbyshire.",
  keywords: [
    "web design Derbyshire",
    "web design Staffordshire",
    "local business websites",
    "small business web design",
    "website designer Derby",
    "website designer Burton",
    "affordable web design",
  ],
  authors: [{ name: "Joe Rolfe" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Rolfe Brand Scaling",
    title: "Rolfe Brand Scaling — Web Design for Local Businesses",
    description:
      "Professional websites for small businesses in Derbyshire and Staffordshire. Custom design, free demo, no upfront cost.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolfe Brand Scaling — Web Design for Local Businesses",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-ink font-sans antialiased">
        {children}
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}

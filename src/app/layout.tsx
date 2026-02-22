import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheapdigitalsubs.com"),
  title: {
    default: "Cheap Digital Subscriptions — Save Up to 60% on Premium E-Learning",
    template: "%s | CDS — Cheap Digital Subscriptions",
  },
  description:
    "Get discounted access to Coursera, Udemy, edX, LinkedIn Learning, Skillshare & more. Save up to 60% on premium e-learning subscriptions. 100% legitimate accounts, instant access, 24/7 support.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "cheap e-learning subscriptions",
    "discounted coursera",
    "udemy discount",
    "affordable online courses",
    "e-learning deals",
    "cheap online learning",
    "edx discount",
    "linkedin learning discount",
    "skillshare discount",
    "online course subscriptions",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Cheap Digital Subscriptions — Save Up to 60% on E-Learning",
    description:
      "Access Coursera, Udemy, edX, LinkedIn Learning & more at up to 60% off. Legitimate accounts, instant access, certificates included.",
    type: "website",
    locale: "en_US",
    siteName: "Cheap Digital Subscriptions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Digital Subscriptions — Save Up to 60% on E-Learning",
    description:
      "Premium e-learning platforms at a fraction of the price. Coursera, Udemy, edX & more — save up to 60%. Instant access.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

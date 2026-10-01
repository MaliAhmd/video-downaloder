import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Free Online Video & Audio Downloader | Vidspry",
    template: "%s | Vidspry",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Muhammad Ali Ahmad", url: siteConfig.authorUrl }],
  creator: "Muhammad Ali Ahmad",
  publisher: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/vidspry-logo.svg", type: "image/svg+xml" },
      { url: "/vidspry-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/vidspry-icon.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    title: "Free Online Video & Audio Downloader | Vidspry",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Vidspry online video and audio downloader",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Video & Audio Downloader | Vidspry",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#12141A] text-[#F2F0EA] font-sans antialiased selection:bg-[#C99A3D] selection:text-[#12141A]">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}


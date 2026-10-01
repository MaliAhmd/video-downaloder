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
    default: "SnapLoad - Video & Audio Downloader",
    template: "%s | SnapLoad",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/snapload-favicon-v2.svg", type: "image/svg+xml" },
      { url: "/snapload-favicon-v2.png", type: "image/png", sizes: "512x512" },
      { url: "/snapload-favicon-v2.ico", type: "image/x-icon", sizes: "64x64" },
    ],
    apple: [{ url: "/snapload-favicon-v2.png", sizes: "512x512", type: "image/png" }],
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


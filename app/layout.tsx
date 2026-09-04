import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "SnapLoad | Video & Media Downloader",
  description: "Download media from YouTube, Instagram, TikTok, and Facebook directly.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#12141A] text-[#F2F0EA] font-sans antialiased selection:bg-[#C99A3D] selection:text-[#12141A]">
        {children}
      </body>
    </html>
  );
}


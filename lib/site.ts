import type { Metadata } from "next";

const deploymentHost =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  process.env.RAILWAY_PUBLIC_DOMAIN;

function getSiteUrl() {
  if (!deploymentHost) return "https://vidspry.example";

  const value = deploymentHost.startsWith("http")
    ? deploymentHost
    : `https://${deploymentHost}`;

  try {
    return new URL(value).origin;
  } catch {
    return "https://vidspry.example";
  }
}

export const siteConfig = {
  name: "Vidspry",
  url: getSiteUrl(),
  description:
    "Use Vidspry to download available MP4 video, MP3 audio, and media from supported public YouTube, Instagram, TikTok, Facebook, and X links.",
  ogImage: "/vidspry-og.png",
  githubUrl: "https://github.com/MaliAhmd",
  authorUrl: "https://www.devaalley.me/",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function createMetadata({
  title,
  description,
  path,
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [{
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} online video and audio downloader`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

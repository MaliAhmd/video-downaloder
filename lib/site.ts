import type { Metadata } from "next";

const deploymentHost =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  process.env.RAILWAY_PUBLIC_DOMAIN;

function getSiteUrl() {
  if (!deploymentHost) return "https://snapload.example";

  const value = deploymentHost.startsWith("http")
    ? deploymentHost
    : `https://${deploymentHost}`;

  try {
    return new URL(value).origin;
  } catch {
    return "https://snapload.example";
  }
}

export const siteConfig = {
  name: "SnapLoad",
  url: getSiteUrl(),
  description:
    "Download available video, audio, and media options from supported YouTube, Instagram, TikTok, and Facebook links.",
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

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

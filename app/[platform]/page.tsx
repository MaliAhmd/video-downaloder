import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformLandingPage } from "@/components/PlatformLandingPage";
import { getPlatformBySlug, platforms } from "@/lib/platforms";
import { createMetadata } from "@/lib/site";

interface PlatformPageProps {
  params: Promise<{ platform: string }>;
}

export function generateStaticParams() {
  return platforms.map((platform) => ({ platform: platform.slug }));
}

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
  const { platform: slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) return {};

  return createMetadata({
    title: platform.key === "x" ? "Twitter (X) Video Downloader Online" : `${platform.title} Online`,
    description: platform.description,
    path: `/${platform.slug}`,
  });
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { platform: slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) notFound();

  return <PlatformLandingPage platform={platform} />;
}

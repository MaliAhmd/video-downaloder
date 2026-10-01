import type { MetadataRoute } from "next";
import { platforms } from "@/lib/platforms";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/copyright",
  "/disclaimer",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const platformRoutes = platforms.map((platform) => `/${platform.slug}`);

  return [...staticRoutes, ...platformRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("-video-downloader") ? 0.8 : 0.5,
  }));
}

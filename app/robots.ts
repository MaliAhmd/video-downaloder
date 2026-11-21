import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/*.woff2$",
          "/*.ico$",
          "/manifest.webmanifest",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/vidspry-logo.svg",
          "/vidspry-icon.png",
          "/vidspry-og.png",
        ],
        disallow: ["/_next/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}

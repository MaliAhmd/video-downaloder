import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vidspry - Online Video & Audio Downloader",
    short_name: "Vidspry",
    description: "Download available video, audio, and media from supported public links.",
    start_url: "/",
    display: "standalone",
    background_color: "#12141A",
    theme_color: "#12141A",
    icons: [
      { src: "/vidspry-icon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  };
}

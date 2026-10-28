/**
 * Normalizes media URLs for yt-dlp compatibility.
 */
export async function normalizeMediaUrl(rawUrl: string): Promise<string> {
  let url = rawUrl.trim();

  // If it's a short URL (e.g. vm.tiktok.com or vt.tiktok.com), follow redirect to get final destination
  if (url.includes("vm.tiktok.com") || url.includes("vt.tiktok.com")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });
      clearTimeout(timeoutId);
      if (res.url) {
        url = res.url;
      }
    } catch {
      // Continue with original url if redirect resolution fails
    }
  }

  // Normalize YouTube short links and strip tracking query parameters
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=))([\w-]{11})/i);
  if (ytMatch && ytMatch[1]) {
    url = `https://www.youtube.com/watch?v=${ytMatch[1]}`;
  }

  // TikTok photo / slideshow mode posts use /photo/<id> in the browser URL.
  // yt-dlp's TikTok extractor only recognizes the /video/<id> path.
  // Converting /photo/ to /video/ allows yt-dlp to extract the post audio, metadata and cover image.
  if (url.includes("tiktok.com") && url.includes("/photo/")) {
    url = url.replace(/\/photo\//i, "/video/");
  }

  // Normalize Instagram URLs and strip tracking parameters (e.g., utm_source, igsh, exln)
  const igMatch = url.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(reel|reels|p|tv)\/([A-Za-z0-9_-]+)/i);
  if (igMatch && igMatch[1] && igMatch[2]) {
    const postType = igMatch[1].toLowerCase() === "reels" ? "reel" : igMatch[1].toLowerCase();
    url = `https://www.instagram.com/${postType}/${igMatch[2]}/`;
  }

  return url;
}

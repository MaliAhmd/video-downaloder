import fs from "fs";
import path from "path";
import os from "os";

export function getCommonYtDlpArgs(url?: string): string[] {
  const args = [
    "--no-update",
    "--no-warnings",
    "--no-check-certificates",
    "--force-ipv4",
  ];

  

  const isYouTube = url ? /youtube\.com|youtu\.be/i.test(url) : false;

  if (isYouTube) {
    // Enable Node.js runtime and remote components so yt-dlp can solve YouTube JavaScript challenge scripts
    args.push(
      "--js-runtimes", "node",
      "--remote-components", "ejs:github"
    );
  }

  // Candidate locations for cookies file
  const candidateCookiePaths = [
    process.env.COOKIES_PATH,
    process.env.YOUTUBE_COOKIES_PATH,
    process.env.INSTAGRAM_COOKIES_PATH,
    "/app/cookies/cookies.txt",
    "/app/cookies/youtube.txt",
    path.join(process.cwd(), "cookies", "cookies.txt"),
    path.join(process.cwd(), "cookies.txt"),
    "/app/cookies.txt",
    path.join(os.tmpdir(), "cookies.txt"),
    "/var/www/vidspry/cookies.txt",
  ].filter(Boolean) as string[];

  let activeCookiePath: string | null = null;
  for (const cookiePath of candidateCookiePaths) {
    if (fs.existsSync(cookiePath)) {
      try {
        // yt-dlp attempts to update session cookies on exit.
        // Copying to os.tmpdir() guarantees write permissions for the runner.
        const writableCookiePath = path.join(os.tmpdir(), "vidspry-session-cookies.txt");
        fs.copyFileSync(cookiePath, writableCookiePath);
        activeCookiePath = writableCookiePath;
      } catch {
        activeCookiePath = cookiePath;
      }
      break;
    }
  }

  if (activeCookiePath) {
    // When authenticated cookies are provided, do not force client overrides,
    // allowing YouTube to return all standard HD/4K/Audio formats.
    args.push("--cookies", activeCookiePath);
  } else if (isYouTube) {
    // Fallback client argument only when no cookies exist
    args.push("--extractor-args", "youtube:player_client=android,web");
  }

  return args;
}

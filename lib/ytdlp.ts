import fs from "fs";
import path from "path";

export function getCommonYtDlpArgs(url?: string): string[] {
  const args = [
    "--no-update",
    "--no-warnings",
    "--no-check-certificates",
    "--force-ipv4",
  ];

  const isYouTube = url ? /youtube\.com|youtu\.be/i.test(url) : false;

  // Check if a cookies file exists (useful for 100% bypass on any VPS / private posts)
  const candidateCookiePaths: (string | undefined)[] = [];
  if (url && /instagram\.com/i.test(url) && process.env.INSTAGRAM_COOKIES_PATH) {
    candidateCookiePaths.push(process.env.INSTAGRAM_COOKIES_PATH);
  }
  if (isYouTube && process.env.YOUTUBE_COOKIES_PATH) {
    candidateCookiePaths.push(process.env.YOUTUBE_COOKIES_PATH);
  }
  candidateCookiePaths.push(
    process.env.COOKIES_PATH,
    process.env.YOUTUBE_COOKIES_PATH,
    process.env.INSTAGRAM_COOKIES_PATH,
    path.join(process.cwd(), "cookies.txt"),
    "/app/cookies.txt",
    "/tmp/cookies.txt",
    "/var/www/vidspry/cookies.txt"
  );

  for (const cookiePath of candidateCookiePaths.filter(Boolean) as string[]) {
    if (fs.existsSync(cookiePath)) {
      args.push("--cookies", cookiePath);
      break;
    }
  }

  return args;
}

import fs from "fs";
import path from "path";

export function getCommonYtDlpArgs(): string[] {
  const args = [
    "--no-update",
    "--no-warnings",
    "--no-check-certificates",
    "--force-ipv4",
    "--extractor-args",
    "youtube:player_client=ios,tv_embedded,mweb;player_skip=webpage,configs",
    "--user-agent",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
  ];

  // Check if a cookies file exists (useful for 100% bypass on any VPS)
  const candidateCookiePaths = [
    process.env.YOUTUBE_COOKIES_PATH,
    path.join(process.cwd(), "cookies.txt"),
    "/app/cookies.txt",
    "/tmp/cookies.txt",
    "/var/www/vidspry/cookies.txt",
  ].filter(Boolean) as string[];

  for (const cookiePath of candidateCookiePaths) {
    if (fs.existsSync(cookiePath)) {
      args.push("--cookies", cookiePath);
      break;
    }
  }

  return args;
}

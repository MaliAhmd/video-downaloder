import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";
import { normalizeMediaUrl } from "@/lib/normalizeUrl";

const execFilePromise = promisify(execFile);

interface YtDlpFormat {
  format_id: string;
  ext: string;
  height?: number;
  filesize?: number;
  filesize_approx?: number;
  format_note?: string;
  resolution?: string;
  vcodec?: string;
  acodec?: string;
}

interface AvailableFormat {
  format_id: string;
  ext: string;
  height?: number;
  filesize?: number;
  quality?: string;
  has_video: boolean;
  has_audio: boolean;
  is_photo?: boolean;
  photo_url?: string;
}

interface YtDlpInfo {
  title?: string;
  thumbnail?: string;
  thumbnails?: { url?: string }[];
  duration?: number;
  duration_string?: string;
  uploader?: string;
  channel?: string;
  extractor_key?: string;
  formats?: YtDlpFormat[];
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "";
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawUrl = searchParams.get("url");

  if (!rawUrl) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const url = await normalizeMediaUrl(rawUrl);

    // Run yt-dlp with extractor arguments to bypass YouTube datacenter bot detection
    const ytDlpArgs = [
      "--no-update",
      "--no-warnings",
      "--no-check-certificates",
      "--extractor-args",
      "youtube:player_client=android,web;player_skip=webpage,configs",
      "--dump-json",
      url,
    ];

    const { stdout, stderr } = await execFilePromise("yt-dlp", ytDlpArgs).catch((error: unknown) => {
      const err = error as Error & { code?: string | number };
      if (err.message?.includes("not found") || err.code === 127 || err.code === "ENOENT") {
        throw new Error("yt-dlp not found on server. Please ensure yt-dlp is installed in the server environment.");
      }
      console.error("yt-dlp execution error:", err.message);
      throw err;
    });

    if (stderr && !stdout) {
      console.error("yt-dlp error:", stderr);
      return NextResponse.json({ error: "Failed to fetch media info from server engine" }, { status: 500 });
    }

    const info = JSON.parse(stdout) as YtDlpInfo;

    // Extract available media formats
    const rawFormats = (info.formats || [])
      .filter((f) => (f.vcodec !== "none" || f.acodec !== "none"))
      .map((f): AvailableFormat => ({
        format_id: f.format_id,
        ext: f.ext,
        height: f.height,
        filesize: f.filesize || f.filesize_approx,
        quality: f.format_note || f.resolution,
        has_video: f.vcodec !== "none",
        has_audio: f.acodec !== "none",
      }));

    const availableFormats: AvailableFormat[] = [...rawFormats];

    // If it's a photo/slideshow post (no video tracks found, or has photo thumbnails)
    const hasVideo = rawFormats.some((f) => f.has_video);
    const bestThumb = info.thumbnails?.[info.thumbnails.length - 1]?.url || info.thumbnail;

    if (bestThumb && (!hasVideo || info.extractor_key?.toLowerCase() === "tiktok")) {
      availableFormats.unshift({
        format_id: "photo_original",
        ext: "jpg",
        quality: "Photo (HD)",
        has_video: false,
        has_audio: false,
        is_photo: true,
        photo_url: bestThumb,
      });
    }

    // Process formats for client presentation
    const formattedList = availableFormats
      .filter((f) => {
        if (f.is_photo) return true;
        // For YouTube we keep standard resolutions or audio
        if (info.extractor_key?.toLowerCase() === "youtube") {
          return (f.height === 1080 || f.height === 720 || f.height === 480 || f.height === 360 || (!f.has_video && f.has_audio));
        }
        return true;
      })
      .map((f) => {
        if (f.is_photo) {
          return {
            ...f,
            quality: "Photo (HD)",
            format_id: "photo_original",
            ext: "jpg",
          };
        }

        if (!f.has_video) {
          const audioExt = (f.ext === "mp3" || f.ext === "m4a") ? f.ext : "mp3";
          return {
            ...f,
            quality: `Audio (${audioExt.toUpperCase()})`,
            format_id: "bestaudio",
            ext: audioExt,
          };
        }

        const qualityLabel = f.height ? `${f.height}p` : (f.quality || "HD");
        const smartId = f.height
          ? `bestvideo[height<=${f.height}]+bestaudio/best[height<=${f.height}]`
          : `bestvideo+bestaudio/best`;

        return {
          ...f,
          quality: `${qualityLabel} (MP4)`,
          format_id: smartId,
          ext: "mp4"
        };
      })
      // Avoid duplicate format options with the same format_id
      .filter((f, index, self) =>
        index === self.findIndex((item) => item.format_id === f.format_id)
      )
      .sort((a, b) => {
        if (a.is_photo) return -1;
        if (b.is_photo) return 1;
        return (b.height || 0) - (a.height || 0);
      });

    const metadata = {
      title: info.title || "Untitled",
      thumbnail: info.thumbnail,
      duration: info.duration,
      duration_string: info.duration_string,
      uploader: info.uploader || info.channel,
      platform: info.extractor_key?.toLowerCase() || "unknown",
      formats: formattedList,
    };

    return NextResponse.json(metadata);
  } catch (error: unknown) {
    console.error("Error fetching video info:", error);
    const message = getErrorMessage(error);
    return NextResponse.json(
      { error: message.includes("yt-dlp not found") ? message : "Invalid URL or unsupported platform" },
      { status: 500 }
    );
  }
}

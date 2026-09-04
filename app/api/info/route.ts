import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    // Run yt-dlp to get video metadata
    const { stdout, stderr } = await execPromise(`yt-dlp --dump-json "${url}"`).catch(err => {
      if (err.message.includes("not found") || err.code === 127) {
        throw new Error("yt-dlp not found on server. Please ensure yt-dlp is installed in the server environment.");
      }
      throw err;
    });

    if (stderr && !stdout) {
      console.error("yt-dlp error:", stderr);
      return NextResponse.json({ error: "Failed to fetch video info from server engine" }, { status: 500 });
    }

    const info = JSON.parse(stdout);

    // Extract and transform formats to prioritize MP4 compatibility
    const formats = info.formats
      .filter((f: any) => (f.vcodec !== "none" || f.acodec !== "none"))
      .map((f: any) => ({
        format_id: f.format_id,
        ext: f.ext,
        height: f.height,
        filesize: f.filesize || f.filesize_approx,
        quality: f.format_note || f.resolution,
        has_video: f.vcodec !== "none",
        has_audio: f.acodec !== "none",
      }));

    // For YouTube, we want to provide clear resolution choices and ensure they are MP4
    // We'll prioritize combined formats or common resolutions
    const metadata = {
      title: info.title,
      thumbnail: info.thumbnail,
      duration: info.duration,
      duration_string: info.duration_string,
      uploader: info.uploader || info.channel,
      platform: info.extractor_key?.toLowerCase() || "unknown",
      formats: formats
        .filter((f: any) => {
          // For YouTube we keep common resolutions
          if (info.extractor_key?.toLowerCase() === "youtube") {
            return (f.height === 1080 || f.height === 720 || f.height === 480 || f.height === 360 || (!f.has_video && f.has_audio));
          }
          // For other platforms, we are more generous
          return true;
        })
        .map((f: any) => {
          if (!f.has_video) return { ...f, quality: "Audio Only (M4A)", format_id: "bestaudio[ext=m4a]/bestaudio", ext: "m4a" };
          
          const qualityLabel = f.height ? `${f.height}p` : (f.quality || "HD");
          
          // We ensure uniqueness by including the height or original format_id in a way that yt-dlp ignores or we can use
          // Actually, we can just use the target height in the format string for everyone.
          const smartId = f.height 
            ? `bestvideo[height<=${f.height}]+bestaudio/best[height<=${f.height}]` 
            : `bestvideo+bestaudio/best`; // Fallback for things without height

          return { 
            ...f, 
            quality: `${qualityLabel} (MP4)`, 
            format_id: smartId,
            ext: "mp4"
          };
        })
        // Remove duplicates of the same height to avoid the React key warning
        .filter((f: any, index: number, self: any[]) => 
          index === self.findIndex((t: any) => t.format_id === f.format_id)
        )
        .sort((a: any, b: any) => (b.height || 0) - (a.height || 0)),
    };

    return NextResponse.json(metadata);
  } catch (error: any) {
    console.error("Error fetching video info:", error);
    return NextResponse.json({ error: "Invalid URL or unsupported platform" }, { status: 500 });
  }
}

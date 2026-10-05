import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";
import { normalizeMediaUrl } from "@/lib/normalizeUrl";

const downloadsDir = path.join(os.tmpdir(), "vidspry-downloads");
if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });

// PHASE 1: Prepare the media file (photo, audio, or video)
export async function POST(req: NextRequest) {
  try {
    const { url, format, title, photo_url } = await req.json();

    if (!url || !format) {
      return NextResponse.json({ error: "URL and format are required" }, { status: 400 });
    }

    const normalizedUrl = await normalizeMediaUrl(url);
    const safeTitle = (title?.replace(/[^\w\s-]/gi, "") || "media").trim() || "download";
    const fileId = `dl_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    console.log("Preparing download:", { normalizedUrl, format, fileId });

    // Handle Photo Downloads (e.g. TikTok slideshow or cover photo)
    if (format === "photo_original" || format.startsWith("photo_") || ["jpg", "jpeg", "png", "webp"].includes(format)) {
      let imageUrl = photo_url;

      if (!imageUrl) {
        // Fallback: fetch JSON metadata to locate photo URL
        const { execFile } = await import("child_process");
        const { promisify } = await import("util");
        const execFilePromise = promisify(execFile);
        const { stdout } = await execFilePromise("yt-dlp", ["--no-update", "--dump-json", normalizedUrl]);
        const info = JSON.parse(stdout);
        imageUrl = info.thumbnails?.[info.thumbnails.length - 1]?.url || info.thumbnail;
      }

      if (!imageUrl) {
        return NextResponse.json({ error: "Could not find photo source" }, { status: 400 });
      }

      const imgRes = await fetch(imageUrl);
      if (!imgRes.ok) {
        return NextResponse.json({ error: "Failed to download photo from source" }, { status: 500 });
      }

      const arrayBuffer = await imgRes.arrayBuffer();
      const tempFilePath = path.join(downloadsDir, `${fileId}.jpg`);
      await fs.promises.writeFile(tempFilePath, Buffer.from(arrayBuffer));

      return NextResponse.json({
        success: true,
        fileId,
        fileName: `${safeTitle}.jpg`,
      });
    }

    // Handle Audio-Only Downloads
    const isAudioOnly = format.includes("audio") && !format.includes("video");
    if (isAudioOnly) {
      const tempFilePath = path.join(downloadsDir, `${fileId}.mp3`);
      const downloader = spawn("yt-dlp", [
        "--no-update",
        "--no-warnings",
        "--no-check-certificates",
        "--extractor-args", "youtube:player_client=android,web;player_skip=webpage,configs",
        "-x",
        "--audio-format", "mp3",
        "-o", tempFilePath,
        normalizedUrl,
      ]);

      return new Promise<NextResponse>((resolve) => {
        let errorOccurred = false;
        let stderrOutput = "";

        downloader.stderr.on("data", (data) => {
          stderrOutput += data.toString();
        });

        downloader.on("close", (code) => {
          if (code !== 0 || errorOccurred) {
            console.error(`yt-dlp audio extraction failed (code ${code}):`, stderrOutput);
            resolve(NextResponse.json({ error: "Preparation failed", details: stderrOutput }, { status: 500 }));
            return;
          }

          resolve(NextResponse.json({
            success: true,
            fileId,
            fileName: `${safeTitle}.mp3`,
          }));
        });

        downloader.on("error", (err) => {
          console.error("Downloader error:", err);
          errorOccurred = true;
          resolve(NextResponse.json({ error: "Download engine error" }, { status: 500 }));
        });
      });
    }

    // Handle Video Downloads
    const tempFilePath = path.join(downloadsDir, `${fileId}.mp4`);
    const downloader = spawn("yt-dlp", [
      "--no-update",
      "--no-warnings",
      "--no-check-certificates",
      "--extractor-args", "youtube:player_client=android,web;player_skip=webpage,configs",
      "-f", format,
      "--format-sort", "vcodec:h264,res,acodec:m4a",
      "--merge-output-format", "mp4",
      "--recode-video", "mp4",
      "--postprocessor-args", "VideoConvertor:-vcodec libx264 -acodec aac",
      "-o", tempFilePath,
      normalizedUrl,
    ]);

    return new Promise<NextResponse>((resolve) => {
      let errorOccurred = false;
      let stderrOutput = "";

      downloader.stderr.on("data", (data) => {
        stderrOutput += data.toString();
      });

      downloader.on("close", (code) => {
        if (code !== 0 || errorOccurred) {
          console.error(`yt-dlp video failed (code ${code}):`, stderrOutput);
          resolve(NextResponse.json({ error: "Preparation failed", details: stderrOutput }, { status: 500 }));
          return;
        }

        resolve(NextResponse.json({
          success: true,
          fileId,
          fileName: `${safeTitle}.mp4`,
        }));
      });

      downloader.on("error", (err) => {
        console.error("Downloader error:", err);
        errorOccurred = true;
        resolve(NextResponse.json({ error: "Download engine error" }, { status: 500 }));
      });
    });
  } catch (error: unknown) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PHASE 2: Deliver the prepared file
export async function GET(req: NextRequest) {
  try {
    const fileId = req.nextUrl.searchParams.get("id");
    const name = req.nextUrl.searchParams.get("name") || "download";

    if (!fileId) return NextResponse.json({ error: "ID required" }, { status: 400 });

    // Locate the prepared file by prefix
    const matchingFiles = fs.readdirSync(downloadsDir).filter((f) => f.startsWith(fileId));
    if (matchingFiles.length === 0) {
      return NextResponse.json({ error: "File expired or not found" }, { status: 404 });
    }

    const filePath = path.join(downloadsDir, matchingFiles[0]);
    const stats = fs.statSync(filePath);
    const file = fs.createReadStream(filePath);

    const ext = path.extname(filePath).toLowerCase();
    const contentTypeMap: Record<string, string> = {
      ".mp4": "video/mp4",
      ".mp3": "audio/mpeg",
      ".m4a": "audio/mp4",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp",
    };
    const contentType = contentTypeMap[ext] || "application/octet-stream";

    const stream = new ReadableStream({
      start(controller) {
        file.on("data", (chunk) => controller.enqueue(chunk));
        file.on("end", () => {
          controller.close();
          // Cleanup after delivery
          setTimeout(() => fs.unlink(filePath, () => {}), 10000);
        });
        file.on("error", (err) => controller.error(err));
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Disposition": `attachment; filename="${name}"`,
        "Content-Type": contentType,
        "Content-Length": stats.size.toString(),
      },
    });
  } catch (error) {
    console.error("File delivery error:", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}

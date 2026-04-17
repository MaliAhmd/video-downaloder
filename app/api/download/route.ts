import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";
import { promisify } from "util";

const unlink = promisify(fs.unlink);

const downloadsDir = path.join(os.tmpdir(), "snapload-downloads");
if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });

// PHASE 1: Prepare the video (Run yt-dlp/ffmpeg)
export async function POST(req: NextRequest) {
  try {
    const { url, format, title } = await req.json();

    if (!url || !format) {
      return NextResponse.json({ error: "URL and format are required" }, { status: 400 });
    }

    const fileId = `dl_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const safeTitle = title?.replace(/[^\w\s-]/gi, "") || "video";
    const tempFilePath = path.join(downloadsDir, `${fileId}.mp4`);

    console.log("Preparing download:", { url, format, tempFilePath });

    const downloader = spawn("yt-dlp", [
      "-f", format,
      "--format-sort", "vcodec:h264,res,acodec:m4a",
      "--merge-output-format", "mp4",
      "--recode-video", "mp4",
      "--postprocessor-args", "VideoConvertor:-vcodec libx264 -acodec aac",
      "-o", tempFilePath,
      url
    ]);

    return new Promise((resolve) => {
      let errorOccurred = false;
      let stderrOutput = "";

      downloader.stderr.on("data", (data) => {
        stderrOutput += data.toString();
      });

      downloader.on("close", (code) => {
        if (code !== 0 || errorOccurred) {
          console.error(`yt-dlp failed (code ${code}):`, stderrOutput);
          resolve(NextResponse.json({ error: "Preparation failed", details: stderrOutput }, { status: 500 }));
          return;
        }
        
        resolve(NextResponse.json({ 
          success: true, 
          fileId, 
          fileName: `${safeTitle}.mp4` 
        }));
      });

      downloader.on("error", (err) => {
        console.error("Downloader error:", err);
        errorOccurred = true;
      });
    });
  } catch (error: any) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PHASE 2: Deliver the prepared file
export async function GET(req: NextRequest) {
  try {
    const fileId = req.nextUrl.searchParams.get("id");
    const name = req.nextUrl.searchParams.get("name") || "video.mp4";

    if (!fileId) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const filePath = path.join(downloadsDir, `${fileId}.mp4`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File expired or not found" }, { status: 404 });
    }

    const stats = fs.statSync(filePath);
    const file = fs.createReadStream(filePath);
    
    const stream = new ReadableStream({
      start(controller) {
        file.on("data", (chunk) => controller.enqueue(chunk));
        file.on("end", () => {
          controller.close();
          // Cleanup after successful delivery
          setTimeout(() => fs.unlink(filePath, () => {}), 10000);
        });
        file.on("error", (err) => controller.error(err));
      }
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Disposition": `attachment; filename="${name}"`,
        "Content-Type": "video/mp4",
        "Content-Length": stats.size.toString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
  }
}



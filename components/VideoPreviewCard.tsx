"use client";

import React, { useState } from "react";
import { User } from "lucide-react";
import { PlatformBadge } from "./PlatformBadge";
import { FormatSelector } from "./FormatSelector";
import { DownloadButton } from "./DownloadButton";

interface VideoData {
  title: string;
  thumbnail: string;
  duration?: number;
  duration_string?: string;
  uploader?: string;
  platform: string;
  formats: any[];
}

interface VideoPreviewCardProps {
  data: VideoData;
  url: string;
}

export function VideoPreviewCard({ data, url }: VideoPreviewCardProps) {
  const [selectedFormat, setSelectedFormat] = useState(data.formats[0]?.format_id || "");
  const [selectedExt, setSelectedExt] = useState(data.formats[0]?.ext || "mp4");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    if (!url || !selectedFormat) {
      alert("Please select a quality first");
      return;
    }

    setIsDownloading(true);
    setIsComplete(false);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          format: selectedFormat,
          title: data.title,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Preparation failed");
      }

      const downloadUrl = `/api/download?id=${result.fileId}&name=${encodeURIComponent(result.fileName)}`;
      const a = document.createElement("a");
      a.href = downloadUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 4000);
    } catch (error: any) {
      console.error("Download error:", error);
      alert(`Download failed: ${error.message}`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 mt-6">
      <div className="bg-[#1B1E27] border border-[#2A2E3A] rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-5">
        {/* Left: Media Details */}
        <div className="md:col-span-2 p-4 bg-[#161821] border-b md:border-b-0 md:border-r border-[#2A2E3A] flex flex-col justify-between">
          <div>
            <div className="relative aspect-video rounded overflow-hidden border border-[#2A2E3A] mb-3 bg-[#0E1015]">
              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <PlatformBadge platform={data.platform} />
              </div>
              {data.duration_string && (
                <div className="absolute bottom-2 right-2 bg-[#12141A] border border-[#2A2E3A] px-1.5 py-0.5 rounded text-[11px] font-mono text-[#8B90A0]">
                  {data.duration_string}
                </div>
              )}
            </div>

            <h3 className="text-sm font-semibold leading-snug text-[#F2F0EA] line-clamp-2 mb-2">
              {data.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-[#8B90A0] text-xs pt-2">
            <User size={13} />
            <span className="truncate">{data.uploader || "Unknown author"}</span>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="md:col-span-3 p-4 flex flex-col justify-between">
          <FormatSelector
            formats={data.formats}
            selectedId={selectedFormat}
            onSelect={(id, ext) => {
              setSelectedFormat(id);
              setSelectedExt(ext);
            }}
          />

          <div className="pt-2">
            <DownloadButton
              onClick={handleDownload}
              isLoading={isDownloading}
              isComplete={isComplete}
            />
            <p className="mt-2 text-center text-[11px] text-[#8B90A0]">
              Direct download link processed server-side
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

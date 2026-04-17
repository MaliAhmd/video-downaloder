"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, User, Share2 } from "lucide-react";
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
      // Step 1: Tell the server to prepare the video
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

      // Step 2: Trigger the actual file download using the returned ID
      const downloadUrl = `/api/download?id=${result.fileId}&name=${encodeURIComponent(result.fileName)}`;
      const a = document.createElement("a");
      a.href = downloadUrl;
      // We don't set a.download here because the server sets Content-Disposition
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 5000);
    } catch (error: any) {
      console.error("Download error:", error);
      alert(`Download failed: ${error.message}`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8">
        {/* Left: Thumbnail and Basic Info */}
        <div className="md:col-span-2 p-6 md:p-8 bg-white/[0.02]">
          <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-6 border border-border group">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3">
              <PlatformBadge platform={data.platform} animate={false} />
            </div>
            {data.duration_string && (
              <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold">
                {data.duration_string}
              </div>
            )}
          </div>
 
          <h3 className="text-lg md:text-xl font-display font-extrabold leading-tight mb-4 text-glow-subtle">
            {data.title}
          </h3>
 
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <User size={16} className="text-accent-secondary" />
              <span className="truncate">{data.uploader || "Unknown Uploader"}</span>
            </div>
          </div>
        </div>
 
        {/* Right: Selectors and Action */}
        <div className="md:col-span-3 p-6 md:p-8 border-t md:border-t-0 md:border-l border-border flex flex-col justify-between">
          <FormatSelector
            formats={data.formats}
            selectedId={selectedFormat}
            onSelect={(id, ext) => {
              setSelectedFormat(id);
              setSelectedExt(ext);
            }}
          />

          <DownloadButton
            onClick={handleDownload}
            isLoading={isDownloading}
            isComplete={isComplete}
          />
          
          <p className="mt-4 text-center text-[10px] text-text-muted uppercase tracking-[0.2em]">
            Servers located in high-speed nodes for 10x faster processing
          </p>
        </div>
      </div>
    </div>
  );
}

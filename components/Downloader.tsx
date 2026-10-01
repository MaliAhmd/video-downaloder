"use client";

import { useState } from "react";
import { UrlInput } from "./UrlInput";
import { VideoPreviewCard } from "./VideoPreviewCard";
import type { VideoData } from "@/lib/media";

interface DownloaderProps {
  ariaLabel?: string;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong";
}

export function Downloader({ ariaLabel = "Media downloader" }: DownloaderProps) {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [fetchUrl, setFetchUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async (url: string) => {
    setLoading(true);
    setError(null);
    setVideoData(null);
    setFetchUrl(url);

    try {
      const response = await fetch(`/api/info?url=${encodeURIComponent(url)}`);
      const data: unknown = await response.json();

      if (!response.ok) {
        const message =
          typeof data === "object" && data !== null && "error" in data
            ? String(data.error)
            : "Failed to fetch video information";
        throw new Error(message);
      }

      setVideoData(data as VideoData);
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-label={ariaLabel} className="pb-10">
      <UrlInput onFetch={handleFetch} isLoading={loading} />

      {error && (
        <div className="mx-auto mt-6 max-w-xl px-6" role="alert" aria-live="polite">
          <div className="rounded-md border border-[#4A201A] bg-[#1E1517] p-3.5 text-center text-sm text-[#D9534F]">
            {error}
          </div>
        </div>
      )}

      {videoData && <VideoPreviewCard data={videoData} url={fetchUrl} />}
    </section>
  );
}

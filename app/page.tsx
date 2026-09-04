"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { UrlInput } from "@/components/UrlInput";
import { VideoPreviewCard } from "@/components/VideoPreviewCard";
import { SupportedPlatforms } from "@/components/SupportedPlatforms";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const [fetchUrl, setFetchUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async (url: string) => {
    setLoading(true);
    setError(null);
    setVideoData(null);
    setFetchUrl(url);

    try {
      const response = await fetch(`/api/info?url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch video information");
      }

      setVideoData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#12141A] text-[#F2F0EA]">
      <Navbar />

      <div className="flex-1 flex flex-col pt-16">
        <Hero />
        
        <div className="pb-16">
          <UrlInput onFetch={handleFetch} isLoading={loading} />
          
          {error && (
            <div className="max-w-xl mx-auto mt-6 px-6">
              <div className="p-3.5 rounded-md bg-[#1E1517] border border-[#4A201A] text-[#D9534F] text-sm text-center font-normal">
                {error}
              </div>
            </div>
          )}

          {videoData && (
            <VideoPreviewCard data={videoData} url={fetchUrl} />
          )}
        </div>

        <SupportedPlatforms />
      </div>

      <Footer />
    </main>
  );
}

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
    <main className="min-h-screen relative flex flex-col overflow-x-hidden">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-accent-primary/5 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-accent-secondary/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      <Navbar />

      <section className="flex-1 flex flex-col">
        <Hero />
        
        <div className="mb-20">
          <UrlInput onFetch={handleFetch} isLoading={loading} />
          
          {error && (
            <div className="max-w-xl mx-auto mt-8 px-6">
              <div className="p-4 rounded-2xl bg-danger/10 border border-danger/20 text-danger text-center font-medium animate-in fade-in zoom-in duration-300">
                {error}
              </div>
            </div>
          )}

          {videoData && (
            <VideoPreviewCard data={videoData} url={fetchUrl} />
          )}
        </div>

        <SupportedPlatforms />
      </section>

      <Footer />
    </main>
  );
}


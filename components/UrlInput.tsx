"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2, Link2 } from "lucide-react";
import { PlatformBadge } from "./PlatformBadge";

interface UrlInputProps {
  onFetch: (url: string) => void;
  isLoading: boolean;
}

export function UrlInput({ onFetch, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [platform, setPlatform] = useState<string>("unknown");

  useEffect(() => {
    const detectPlatform = (val: string) => {
      if (val.includes("youtube.com") || val.includes("youtu.be")) return "youtube";
      if (val.includes("instagram.com")) return "instagram";
      if (val.includes("tiktok.com")) return "tiktok";
      if (val.includes("facebook.com") || val.includes("fb.watch") || val.includes("fb.com")) return "facebook";
      return "unknown";
    };

    if (url.trim()) {
      setPlatform(detectPlatform(url));
    } else {
      setPlatform("unknown");
    }
  }, [url]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (url.trim() && !isLoading) {
      onFetch(url.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 relative z-10">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative flex items-center p-2 rounded-[2rem] glass-input">
          {/* Platform Label */}
          <div className="hidden sm:flex pl-4 pr-2 items-center">
            {platform !== "unknown" ? (
              <PlatformBadge platform={platform} animate={true} />
            ) : (
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-muted">
                <Link2 size={16} />
              </div>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-text-primary placeholder:text-text-muted text-lg font-medium"
            placeholder="Paste your video or post URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={isLoading}
          />

          {/* Fetch Button */}
          <button
            onClick={() => handleSubmit()}
            disabled={isLoading || !url.trim()}
            className="md:px-8 px-4 py-3 rounded-2xl bg-accent-primary text-black font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(110,231,183,0.3)]"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span className="hidden md:inline">Fetching</span>
              </>
            ) : (
              <>
                <Search size={20} />
                <span className="hidden md:inline">Generate</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Detected Info Mobile */}
      <div className="sm:hidden mt-4 flex justify-center">
        {platform !== "unknown" && <PlatformBadge platform={platform} />}
      </div>
    </div>
  );
}

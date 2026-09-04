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
    <div className="w-full max-w-2xl mx-auto px-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#1B1E27] border border-[#2A2E3A] focus-within:border-[#373C4B] rounded-md p-1.5 transition-colors gap-1.5">
        {/* Platform Indicator */}
        <div className="hidden sm:flex pl-2.5 items-center">
          {platform !== "unknown" ? (
            <PlatformBadge platform={platform} />
          ) : (
            <div className="w-6 h-6 flex items-center justify-center text-[#8B90A0]">
              <Link2 size={15} />
            </div>
          )}
        </div>

        {/* URL Input with STRICT monospace font */}
        <input
          type="text"
          className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-[#F2F0EA] placeholder:text-[#8B90A0] text-sm font-mono tracking-tight"
          placeholder="https://..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
          autoComplete="off"
          spellCheck="false"
        />

        {/* Generate / Fetch Button with single accent color */}
        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          className="h-10 px-5 rounded bg-[#C99A3D] hover:bg-[#D9A74A] active:bg-[#B88930] text-[#12141A] font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Fetching</span>
            </>
          ) : (
            <>
              <Search size={15} />
              <span>Generate</span>
            </>
          )}
        </button>
      </form>
      
      {/* Mobile Platform Indicator */}
      <div className="sm:hidden mt-2 flex justify-start">
        {platform !== "unknown" && <PlatformBadge platform={platform} />}
      </div>
    </div>
  );
}

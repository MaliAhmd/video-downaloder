"use client";

import React from "react";
import { Video, Music, Monitor } from "lucide-react";

interface Format {
  format_id: string;
  ext: string;
  height?: number;
  filesize?: number;
  quality?: string;
}

interface FormatSelectorProps {
  formats: Format[];
  selectedId: string;
  onSelect: (id: string, ext: string) => void;
}

export function FormatSelector({ formats, selectedId, onSelect }: FormatSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-[#8B90A0]">Select format</span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {formats.map((f) => {
          const isSelected = selectedId === f.format_id;
          const isAudio = !f.height;
          
          return (
            <button
              key={f.format_id}
              type="button"
              onClick={() => onSelect(f.format_id, f.ext)}
              className={`flex flex-col items-start p-2.5 rounded border text-left transition-colors cursor-pointer ${
                isSelected
                  ? "bg-[#12141A] border-[#C99A3D] text-[#F2F0EA]"
                  : "bg-[#161821] border-[#2A2E3A] text-[#8B90A0] hover:border-[#373C4B] hover:text-[#F2F0EA]"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <span className={`text-xs font-semibold ${isSelected ? "text-[#F2F0EA]" : "text-[#8B90A0]"}`}>
                  {isAudio ? "Audio" : `${f.height}p`}
                </span>
                <span className="text-[#8B90A0]">
                  {isAudio ? <Music size={13} /> : (f.height || 0) >= 1080 ? <Monitor size={13} /> : <Video size={13} />}
                </span>
              </div>
              <span className="text-[11px] text-[#8B90A0] font-mono">
                {f.ext.toLowerCase()} {f.filesize ? `• ${(f.filesize / (1024 * 1024)).toFixed(1)}MB` : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

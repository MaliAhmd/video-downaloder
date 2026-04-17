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
    <div className="flex flex-col gap-4">
      <label className="text-sm font-bold uppercase tracking-widest text-text-muted">Select Quality</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {formats.map((f) => {
          const isSelected = selectedId === f.format_id;
          const isAudio = !f.height;
          
          return (
            <button
              key={f.format_id}
              onClick={() => onSelect(f.format_id, f.ext)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all border-2 ${
                isSelected
                  ? "bg-accent-primary border-accent-primary text-black"
                  : "glass-card border-transparent text-text-muted hover:border-text-muted/30 hover:text-text-primary"
              }`}
            >
              <div className="mb-2">
                {isAudio ? <Music size={20} /> : (f.height || 0) >= 1080 ? <Monitor size={20} /> : <Video size={20} />}
              </div>
              <span className="text-sm font-bold">
                {isAudio ? "MP3 Audio" : `${f.height}p`}
              </span>
              <span className={`text-[10px] opacity-70 ${isSelected ? "text-black" : "text-text-muted"}`}>
                {f.ext.toUpperCase()} {f.filesize ? `• ${(f.filesize / (1024 * 1024)).toFixed(1)}MB` : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

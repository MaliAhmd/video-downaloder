"use client";

import React, { useState } from "react";
import { Download, CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface DownloadButtonProps {
  onClick: () => Promise<void>;
  isLoading: boolean;
  isComplete: boolean;
}

export function DownloadButton({ onClick, isLoading, isComplete }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`group relative w-full mt-8 py-5 rounded-2xl font-display font-extrabold text-xl tracking-wide transition-all duration-300 overflow-hidden ${
        isComplete
          ? "bg-green-500 text-white"
          : "bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-black"
      } disabled:cursor-not-allowed`}
    >
      {/* Background glow animation on hover */}
      <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 scale-150 -z-10"></div>
      
      <div className="flex items-center justify-center gap-3 relative z-10">
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" size={24} />
            <span>Processing...</span>
          </>
        ) : isComplete ? (
          <>
            <CheckCircle2 size={24} />
            <span>Downloaded!</span>
          </>
        ) : (
          <>
            <Download size={24} className="group-hover:translate-y-1 transition-transform" />
            <span>Start Download</span>
            <Sparkles size={18} className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </div>

      {/* Progress simulation bar if loading */}
      {isLoading && (
        <div className="absolute bottom-0 left-0 h-1 bg-white opacity-40 animate-[loading_2s_ease-in-out_infinite]"></div>
      )}
    </button>
  );
}

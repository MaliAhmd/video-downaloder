"use client";

import React from "react";
import { Download, Check, Loader2 } from "lucide-react";

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
      className={`w-full mt-4 h-11 rounded font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed ${
        isComplete
          ? "bg-[#2A2E3A] text-[#F2F0EA]"
          : "bg-[#C99A3D] hover:bg-[#D9A74A] active:bg-[#B88930] text-[#12141A]"
      }`}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={16} />
          <span>Processing download...</span>
        </>
      ) : isComplete ? (
        <>
          <Check size={16} />
          <span>Download started</span>
        </>
      ) : (
        <>
          <Download size={16} />
          <span>Download file</span>
        </>
      )}
    </button>
  );
}

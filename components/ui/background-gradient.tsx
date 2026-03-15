"use client";

import React from "react";

import { cn } from "@/lib/utils";

type BackgroundGradientProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  return (
    <div className={cn("group relative p-px", containerClassName)}>
      <div
        className={cn(
          "pointer-events-none absolute -inset-2 rounded-[calc(inherit+8px)] opacity-70 blur-xl",
          "bg-linear-to-r from-[#b2c4ff]/65 via-white/35 to-[#b2c4ff]/65",
          animate && "animate-pulse"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-r from-[#b2c4ff] to-white",
          animate && "opacity-100"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-45",
          "bg-linear-to-r from-white/10 via-white/0 to-white/10",
          animate && "[background-size:200%_100%] [animation:shimmer_4.5s_linear_infinite]"
        )}
      />
      <div className={cn("relative rounded-[inherit]", className)}>{children}</div>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}

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
          "pointer-events-none absolute -inset-1 rounded-[calc(inherit+4px)] blur-md",
          "bg-linear-to-r from-[#b2c4ff]/27 via-white/15 to-[#b2c4ff]/27",
          animate ? "opacity-45" : "opacity-33"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          "bg-linear-to-r from-[#b2c4ff] to-white",
          animate ? "opacity-54" : "opacity-45"
        )}
      />
      <div className={cn("relative rounded-[inherit]", className)}>{children}</div>
    </div>
  );
}

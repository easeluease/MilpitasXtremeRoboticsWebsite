"use client";
import { encode } from "qss";
import React from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  previewClassName?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  previewClassName,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const isExternal = /^https?:\/\//i.test(url);
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noopener noreferrer" : undefined;

  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <a
        href={url}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        className={cn("text-black dark:text-white", className)}
      >
        {children}
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 12, scale: 0.8 }}
            className="pointer-events-none absolute left-1/2 top-0 z-120 hidden -translate-x-1/2 -translate-y-[calc(100%+0.65rem)] rounded-xl shadow-xl md:block"
            style={{ x: translateX }}
            aria-hidden="true"
          >
            <span
              className="block rounded-xl border-2 border-transparent bg-white p-1 shadow dark:bg-neutral-950"
              style={{ fontSize: 0 }}
            >
              <span
                className="block overflow-hidden rounded-lg"
                style={{ width, height }}
              >
              <img
                src={isStatic ? imageSrc : src}
                width={width}
                height={height}
                className={cn("h-full w-full rounded-lg object-cover", previewClassName)}
                alt="preview image"
              />
              </span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

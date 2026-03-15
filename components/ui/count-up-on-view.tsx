"use client";

import { useEffect, useRef, useState } from "react";

type CountUpOnViewProps = {
  end: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function CountUpOnView({
  end,
  durationMs = 1400,
  prefix = "",
  suffix = "",
  className,
}: CountUpOnViewProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimated) {
          return;
        }

        setHasAnimated(true);
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(end);
          return;
        }

        const startTime = performance.now();

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          const easedProgress = easeOutCubic(progress);
          setValue(Math.round(end * easedProgress));

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          }
        };

        window.requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [durationMs, end, hasAnimated]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

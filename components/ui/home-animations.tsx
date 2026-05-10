"use client";

import React from "react";
import { motion } from "framer-motion";


export function smoothScrollToElement(element: HTMLElement, duration = 1400) {
  const startY     = window.scrollY;
  const targetY    = element.getBoundingClientRect().top + window.scrollY;
  const distance   = targetY - startY;
  const startTime  = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (now: number) => {
    const elapsed     = now - startTime;
    const progress    = Math.min(elapsed / duration, 1);
    const eased       = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
}


export function ScrollButtonMotion({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.0, ease: [0.4, 0.0, 0.2, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** "Programs" header — slides down + fades in on scroll. */
export function ProgramsHeaderMotion({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CardRevealMotion({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SponsorTitleMotion({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: [20, -5, 0] }}
      transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}


export function UnderlineHoverMotion({
  barClassName,
  children,
}: {
  barClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="flex w-full flex-col items-center justify-center gap-y-1 text-3xl font-bold text-blue-400 lg:text-4xl"
    >
      <div className="flex flex-row gap-x-0">{children}</div>
      <motion.div
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
        className={barClassName}
      />
    </motion.div>
  );
}
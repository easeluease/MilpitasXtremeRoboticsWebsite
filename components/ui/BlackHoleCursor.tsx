'use client';

import { useEffect, useRef } from 'react';

interface BlackHoleCursorProps {
  /** Size of the black hole effect radius in pixels */
  size?: number;
  /** Strength of the distortion effect */
  distortionStrength?: number;
  /** Color of the accretion disk glow */
  glowColor?: string;
  /** Smoothness of cursor follow (0-1, lower = more lag) */
  smoothness?: number;
  /** Whether to hide the default system cursor */
  hideDefaultCursor?: boolean;
}

export default function BlackHoleCursor({
  size = 200,
  distortionStrength = 80,
  glowColor = 'rgba(255, 140, 50, 0.4)',
  smoothness = 0.18,
  hideDefaultCursor = false,
}: BlackHoleCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const distortionRef = useRef<HTMLDivElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const rafRef = useRef<number | null>(null);

  // Position state stored in refs to avoid re-renders
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      targetPos.current.x = -1000;
      targetPos.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop with smooth easing
    const animate = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * smoothness;
      currentPos.current.y += dy * smoothness;

      const x = currentPos.current.x;
      const y = currentPos.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      if (distortionRef.current) {
        // Position the distortion mask circle around the cursor
        distortionRef.current.style.background = `radial-gradient(
          circle ${size}px at ${x}px ${y}px,
          rgba(0,0,0,1) 0%,
          rgba(0,0,0,0.8) 30%,
          rgba(0,0,0,0) 70%
        )`;
      }

      // Subtly modulate the distortion based on velocity for "drag" feel
      if (displacementRef.current) {
        const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) / 10, 1);
        const scale = distortionStrength + velocity * 30;
        displacementRef.current.setAttribute('scale', scale.toString());
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Optionally hide system cursor
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (hideDefaultCursor) {
        document.body.style.cursor = '';
      }
    };
  }, [size, distortionStrength, smoothness, hideDefaultCursor]);

  return (
    <>
      {/* SVG filter for the gravitational lensing distortion */}
      <svg
        style={{
          position: 'fixed',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id="blackhole-lens"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              seed="3"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              scale={distortionStrength}
            />
          </filter>
        </defs>
      </svg>

      {/* Distortion layer - applies the lens filter to everything underneath */}
      <div
        ref={distortionRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          backdropFilter: 'url(#blackhole-lens)',
          WebkitBackdropFilter: 'url(#blackhole-lens)',
          WebkitMaskImage: `radial-gradient(circle ${size}px at var(--x, -1000px) var(--y, -1000px), black 0%, transparent 70%)`,
          maskImage: `radial-gradient(circle ${size}px at var(--x, -1000px) var(--y, -1000px), black 0%, transparent 70%)`,
        }}
      />

      {/* The black hole cursor itself */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${size * 0.4}px`,
          height: `${size * 0.4}px`,
          borderRadius: '50%',
          background: `radial-gradient(
            circle,
            #000 25%,
            rgba(0,0,0,0.9) 35%,
            ${glowColor} 50%,
            transparent 75%
          )`,
          boxShadow: `0 0 ${size * 0.3}px ${size * 0.1}px ${glowColor}`,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  );
}
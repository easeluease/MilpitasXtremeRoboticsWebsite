"use client";

import { useEffect, useRef, useCallback } from "react";


interface Particle {
  x: number;          
  y: number;        
  tx: number;        
  ty: number;        
  ox: number;       
  oy: number;        
  vx: number;
  vy: number;
  size: number;       
  alpha: number;
  targetAlpha: number;
  delay: number;
  r: number;         
  g: number;
  b: number;
  active: boolean;
}


const LINES        = ["Milpitas Xtreme", "Robotics"];
const REPEL_RADIUS = 110;   
const REPEL_FORCE  = 7.5;     
const ATTRACT      = 0.09;   
const FRICTION     = 0.78;   
const SAMPLE_STEP  = 3;       
const LETTER_STAGGER = 90;   
const FADE_SPEED   = 0.022; 
// gradient: #b2c4ff → white
const C0 = { r: 178, g: 196, b: 255 };
const C1 = { r: 255, g: 255, b: 255 };


function lerpColor(t: number) {
  return {
    r: Math.round(C0.r + (C1.r - C0.r) * t),
    g: Math.round(C0.g + (C1.g - C0.g) * t),
    b: Math.round(C0.b + (C1.b - C0.b) * t),
  };
}

function responsiveFontSize(w: number) {
  if (w < 480)  return 38;
  if (w < 640)  return 50;
  if (w < 768)  return 62;
  if (w < 1024) return 76;
  return 96;
}


export default function DustParticleTitle({
  className = "absolute inset-0 w-full h-full z-10",
}: {
  className?: string;
}) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const particles   = useRef<Particle[]>([]);
  const mouse       = useRef({ x: -9999, y: -9999 });
  const raf         = useRef<number>(0);
  const startTime   = useRef<number>(0);
  const ready       = useRef(false);


  const build = useCallback(async (canvas: HTMLCanvasElement) => {
    ready.current = false;
    await document.fonts.ready;

    const dpr   = Math.min(window.devicePixelRatio || 1, 2); 
    const W     = canvas.offsetWidth;
    const H     = canvas.offsetHeight;

    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const fontSize   = responsiveFontSize(W);
    const lineGap    = fontSize * 1.15;
    const fontStr    = `800 ${fontSize}px 'Inter', system-ui, -apple-system, sans-serif`;

    ctx.font = fontStr;

    const blockH   = LINES.length * lineGap;
    const blockTopY = H * 0.30 - blockH / 2 + fontSize * 0.15;


    type LetterInfo = { char: string; x: number; y: number; w: number; idx: number };
    const letters: LetterInfo[] = [];
    let letterIdx = 0;

    LINES.forEach((line, li) => {
      const lineW = ctx.measureText(line).width;
      const lineX = (W - lineW) / 2;
      const lineY = blockTopY + li * lineGap + fontSize;
      let curX = lineX;

      for (const char of line) {
        const cw = ctx.measureText(char).width;
        if (char.trim() !== "") {
          letters.push({ char, x: curX, y: lineY, w: cw, idx: letterIdx });
          letterIdx++;
        } else {
          letterIdx++; 
        }
        curX += cw;
      }
    });


    const offCanvas = document.createElement("canvas");
    const offCtx    = offCanvas.getContext("2d")!;
    const result: Particle[] = [];

    letters.forEach((lb) => {
      const pad  = Math.ceil(fontSize * 0.25);
      const ow   = Math.ceil(lb.w) + pad * 2;
      const oh   = Math.ceil(fontSize * 1.4);

      offCanvas.width  = ow;
      offCanvas.height = oh;
      offCtx.clearRect(0, 0, ow, oh);
      offCtx.font      = fontStr;
      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(lb.char, pad, fontSize);

      const { data } = offCtx.getImageData(0, 0, ow, oh);

      for (let py = 0; py < oh; py += SAMPLE_STEP) {
        for (let px = 0; px < ow; px += SAMPLE_STEP) {
          if (data[(py * ow + px) * 4 + 3] > 90) {
            const tx = lb.x + px - pad;
            const ty = lb.y - fontSize + py;

            const { r, g, b } = lerpColor(Math.max(0, Math.min(1, tx / W)));

            const angle  = Math.random() * Math.PI * 2;
            const radius = (0.35 + Math.random() * 0.8) * Math.max(W, H);
            const ox     = W / 2 + Math.cos(angle) * radius;
            const oy     = H / 2 + Math.sin(angle) * radius;

            result.push({
              x: ox, y: oy,
              tx, ty,
              ox, oy,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: 0.4 + Math.random() * 1.1,
              alpha: 0,
              targetAlpha: 0.60 + Math.random() * 0.40,
              delay: lb.idx * LETTER_STAGGER + Math.random() * 55,
              r, g, b,
              active: false,
            });
          }
        }
      }
    });

    particles.current = result;
    startTime.current = performance.now();
    ready.current     = true;
  }, []);


  const tick = useCallback((canvas: HTMLCanvasElement, now: number) => {
    raf.current = requestAnimationFrame((t) => tick(canvas, t));

    if (!ready.current) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext("2d")!;
    const W   = canvas.offsetWidth;
    const H   = canvas.offsetHeight;

    ctx.clearRect(0, 0, W * dpr, H * dpr);

    const elapsed = now - startTime.current;
    const mx = mouse.current.x;
    const my = mouse.current.y;

    for (const p of particles.current) {
      if (elapsed < p.delay) continue;

      const dx   = p.x - mx;
      const dy   = p.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS && dist > 0.5) {
        const t     = 1 - dist / REPEL_RADIUS;         // 0 at edge, 1 at center
        const force = t * t * REPEL_FORCE;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // ── Spring back to target ────────────────────────────────────────────
      p.vx += (p.tx - p.x) * ATTRACT;
      p.vy += (p.ty - p.y) * ATTRACT;

      // ── Damping + integrate ──────────────────────────────────────────────
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.x  += p.vx;
      p.y  += p.vy;

      if (p.alpha < p.targetAlpha) p.alpha = Math.min(p.targetAlpha, p.alpha + FADE_SPEED);

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle   = `rgb(${p.r},${p.g},${p.b})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    build(canvas);
    raf.current = requestAnimationFrame((t) => tick(canvas, t));

    let debounce: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => build(canvas), 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, [build, tick]);


  const onMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  }, []);

  const onLeave = useCallback(() => {
    mouse.current = { x: -9999, y: -9999 };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: "block" }}
    />
  );
}
import { useEffect, useRef } from "react";

type Ripple = { x: number; y: number; start: number };

/** A viewport-fixed field: taps travel through the lines without intercepting links. */
export function AerodynamicLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tokens = getComputedStyle(document.documentElement);
    const blue = tokens.getPropertyValue("--primary").trim();
    const silver = tokens.getPropertyValue("--silver").trim();
    const red = tokens.getPropertyValue("--ripple-line").trim();
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let ripples: Ripple[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const tap = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || motion.matches) return;
      ripples = [...ripples.slice(-4), { x: event.clientX, y: event.clientY, start: performance.now() }];
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);
      ripples = ripples.filter((ripple) => now - ripple.start < 5200);
      canvas.dataset['ripples'] = String(ripples.length);
      const time = motion.matches ? 0 : now / 1000;
      const segments = Math.max(80, Math.ceil(width / 10));

      for (let line = 0; line < 12; line++) {
        let previous: { x: number; y: number } | undefined;
        for (let step = 0; step <= segments; step++) {
          const x = (step / segments) * (width + 80) - 40;
          const baseY = ((80 + line * 150) / 1800) * height
            + Math.sin((x / width) * Math.PI * 2 - line * 0.18) * height * 0.022;
          let offset = 0;
          let strength = 0;
          for (const ripple of ripples) {
            const age = (now - ripple.start) / 1000;
            const distance = Math.hypot(x - ripple.x, baseY - ripple.y);
            const wave = distance - age * 520;
            const envelope = Math.exp(-((wave / 145) ** 2)) * Math.max(0, 1 - age / 5.2);
            offset += Math.sin(wave / 28) * envelope * 38;
            strength = Math.max(strength, envelope);
          }
          const y = baseY + offset;
          if (previous) {
            const flow = ((step / segments * 4 - time / 6 + line * 0.31) % 1 + 1) % 1;
            const highlight = flow < 0.14;
            context.beginPath();
            context.moveTo(previous.x, previous.y);
            context.lineTo(x, y);
            context.strokeStyle = line % 2 === 0 || !highlight ? blue : silver;
            context.globalAlpha = highlight ? 0.65 : 0.2;
            context.lineWidth = highlight ? 1.2 : 0.8;
            context.stroke();
            if (strength > 0.025) {
              context.strokeStyle = red;
              context.globalAlpha = Math.min(1, strength * 2);
              context.lineWidth = 1.6;
              context.stroke();
            }
          }
          previous = { x, y };
        }
      }
      context.globalAlpha = 1;
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", tap, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", tap);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 h-full w-full" aria-hidden="true" />;
}
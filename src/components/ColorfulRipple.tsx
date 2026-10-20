"use client";

import { useEffect, useState, useRef } from "react";

interface WaveRipple {
  id: number;
  x: number;
  y: number;
  gradientBg: string;
}

const SOFT_LIQUID_PALETTES = [
  "radial-gradient(circle, rgba(255, 56, 92, 0.5) 0%, rgba(244, 114, 182, 0.25) 45%, transparent 75%)",
  "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)",
  "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(16, 185, 129, 0.25) 45%, transparent 75%)",
  "radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(239, 68, 68, 0.25) 45%, transparent 75%)",
  "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.25) 45%, transparent 75%)",
];

export default function ColorfulRipple() {
  const [waves, setWaves] = useState<WaveRipple[]>([]);
  const lastSpawnRef = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const spawnWave = (x: number, y: number) => {
      const gradientBg = SOFT_LIQUID_PALETTES[Math.floor(Math.random() * SOFT_LIQUID_PALETTES.length)];
      const newWave: WaveRipple = {
        id: Date.now() + Math.random(),
        x,
        y,
        gradientBg,
      };

      // Maintain up to 20 active smooth floating waves
      setWaves((prev) => [...prev.slice(-20), newWave]);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      const now = Date.now();
      const dx = e.clientX - lastSpawnRef.current.x;
      const dy = e.clientY - lastSpawnRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Smooth wave spawn rate on mouse movement (dist > 22px or time > 70ms)
      if (dist > 22 || now - lastSpawnRef.current.time > 70) {
        lastSpawnRef.current = { x: e.clientX, y: e.clientY, time: now };
        spawnWave(e.clientX, e.clientY);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      spawnWave(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const removeWave = (id: number) => {
    setWaves((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <>
      {/* Soft Ringless Liquid Water Waves (Mouse Hover Trail) */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {waves.map((wave) => (
          <span
            key={wave.id}
            onAnimationEnd={() => removeWave(wave.id)}
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`,
              background: wave.gradientBg,
            }}
            className="animate-liquid-wave border-none outline-none"
          />
        ))}
      </div>

      {/* Vibrant Ambient Multi-Color Background Mesh Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-400/20 via-pink-400/15 to-amber-300/20 blur-3xl animate-ambient-1" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-violet-400/20 via-purple-300/15 to-indigo-400/20 blur-3xl animate-ambient-2" />
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-cyan-400/15 via-rose-300/15 to-amber-200/20 blur-3xl animate-ambient-1" />
      </div>
    </>
  );
}

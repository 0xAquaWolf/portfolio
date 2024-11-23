'use client';
import { cn } from '@/lib/utils';
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { createNoise3D, NoiseFunction3D } from 'simplex-noise';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  blur = 10,
  speed = 'fast',
  waveOpacity,
  backgroundFill,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  backgroundFill?: string;
  [key: string]: any;
}) => {
  const noise3D = useRef<NoiseFunction3D>(createNoise3D());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  const animationIdRef = useRef<number>();

  const waveColors = useMemo(() => colors ?? [
    '#38bdf8',
    '#818cf8',
    '#c084fc',
    '#e879f9',
    '#22d3ee',
  ], [colors]);

  const drawWave = useCallback((width: number) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const length = waveColors.length;
    for (let i = 0; i < length; i++) {
      ctx.fillStyle = waveColors[i];
      ctx.beginPath();
      ctx.moveTo(0, hRef.current);
      for (let x = 0; x < wRef.current; x += width) {
        const noiseValue = noise3D.current(x / 800, 0, ntRef.current + i / 3);
        ctx.lineTo(x, hRef.current - noiseValue * 200);
      }
      ctx.lineTo(wRef.current, hRef.current);
      ctx.closePath();
      ctx.fill();
    }
  }, [waveColors]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const getSpeed = () => {
      switch (speed) {
        case 'slow':
          return 0.001;
        case 'fast':
          return 0.002;
        default:
          return 0.001;
      }
    };

    wRef.current = canvas.width = window.innerWidth;
    hRef.current = canvas.height = window.innerHeight;

    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    window.onresize = function () {
      if (!canvas || !ctx) return;
      wRef.current = canvas.width = window.innerWidth;
      hRef.current = canvas.height = window.innerHeight;
    };

    const render = () => {
      if (!ctx) return;
      ctx.fillStyle = backgroundFill || 'black';
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, wRef.current, hRef.current);
      drawWave(5);
      ntRef.current += getSpeed();
      animationIdRef.current = requestAnimationFrame(render);
    };

    render();
  }, [blur, backgroundFill, waveOpacity, drawWave, speed]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'),
    );
  }, []);

  return (
    <div
      className={cn(
        'relative flex h-screen flex-col items-center justify-center overflow-y-hidden',
        containerClassName,
      )}
    >
      <canvas
        className="absolute inset-0 z-20"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn('relative z-20', className)} {...props}>
        {children}
      </div>
      {/* top shadow */}
      <div className="absolute left-0 z-[99] h-full w-44 bg-gradient-to-r from-[#08080e] to-transparent"></div>
      {/* bottom shadow */}
      <div className="absolute right-0 z-[99] h-full w-44 bg-gradient-to-l from-[#08080e] to-transparent"></div>
    </div>
  );
};

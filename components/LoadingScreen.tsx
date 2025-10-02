'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  progress: number;
  isComplete: boolean;
  onComplete: () => void;
}

export default function LoadingScreen({ progress, isComplete, onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animate percentage counter
  useGSAP(() => {
    gsap.to({ value: displayProgress }, {
      value: progress,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: function() {
        setDisplayProgress(Math.round(this.targets()[0].value));
      }
    });
  }, [progress]);

  // Animate progress bar
  useGSAP(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        scaleY: progress / 100,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [progress]);

  // Handle completion animation
  useGSAP(() => {
    if (isComplete && containerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.to(containerRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  }, [isComplete, onComplete]);

  if (isComplete && displayProgress >= 100) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ touchAction: 'none', overflow: 'hidden' }}
    >
      {/* Percentage Counter */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          ref={percentageRef}
          className="text-6xl font-bold text-white md:text-8xl lg:text-9xl"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {displayProgress}%
        </span>
      </div>

      {/* Bottom-to-top Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 origin-bottom"
          style={{ transform: 'scaleY(0)' }}
        />
      </div>

      {/* Optional: Loading text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-sm tracking-wider uppercase">
          Loading Experience...
        </p>
      </div>
    </div>
  );
}
'use client';
import React from 'react';
import { WavyBackground } from '../ui/wavy-background';

export function WavyBackgroundDemo() {
  return (
    <WavyBackground
      backgroundFill="#08080e"
      className="relative z-[999] mx-auto w-full py-20 pb-40"
    >
      <p className="inter-var inline-block bg-gradient-to-r from-white to-[#B17DE8] bg-clip-text px-4 pb-2 text-center text-2xl text-transparent md:text-4xl lg:text-6xl xl:text-7xl">
        The Smallest company in the world can look as large as the largest
        company on the web.
      </p>
      <p className="inter-var mt-4 text-center text-base font-light text-white/80 md:text-lg">
        - Steve Jobs
      </p>
    </WavyBackground>
  );
}

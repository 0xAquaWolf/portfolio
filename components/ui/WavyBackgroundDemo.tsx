"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-6xl mx-auto py-20 pb-40 relative">
      <p className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl inter-var text-center bg-gradient-to-r from-white to-[#B17DE8] inline-block text-transparent bg-clip-text px-4 pb-2">
        The Smallest company in the world can look as large as the largest
        company on the web.
      </p>
      <p className="text-base md:text-lg mt-4 text-white/80 font-light inter-var text-center">
        - Steve Jobs
      </p>
    </WavyBackground>
  );
}

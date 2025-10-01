'use client';

import { GodRays } from '@paper-design/shaders-react';
import { useViewport } from '@/lib/hooks/useViewport';

export default function ResponsiveGodRays() {
  const { width, height } = useViewport();

  return (
    <GodRays
      width={width}
      height={height}
      colors={["#a600ff6e", "#6200fff0", "#ffffff", "#33fff5"]}
      colorBack="#000000"
      colorBloom="#0000ff"
      bloom={0.4}
      intensity={0.8}
      density={0.3}
      spotty={0.3}
      midSize={0.2}
      midIntensity={0.4}
      speed={0.75}
      offsetY={-0.55}
    />
  );
}
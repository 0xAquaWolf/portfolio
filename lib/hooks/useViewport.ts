'use client';

import { useEffect, useState } from 'react';

interface ViewportDimensions {
  width: number;
  height: number;
}

export function useViewport() {
  const [dimensions, setDimensions] = useState<ViewportDimensions>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setDimensions({
          width: width <= 768 ? 390 : width <= 1024 ? 1024 : 1920,
          height: width <= 768 ? 844 : height <= 720 ? 720 : 1080,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}
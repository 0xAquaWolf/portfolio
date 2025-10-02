'use client';

import { useEffect, useRef } from 'react';
import { useLoading } from '@/lib/context/LoadingContext';

export function useAssetPreloader() {
  const { setAssetLoaded, setProgress } = useLoading();
  const hasRunRef = useRef(false);

  useEffect(() => {
    // Prevent multiple executions
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    let progressInterval: NodeJS.Timeout;
    let currentProgress = 0;

    // Simulate gradual loading progress
    const simulateProgress = () => {
      progressInterval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress < 85) {
          setProgress(currentProgress);
        } else {
          clearInterval(progressInterval);
        }
      }, 200);
    };

    const preloadAssets = async () => {
      try {
        const loadingStartTime = Date.now();
        
        // Start progress simulation
        simulateProgress();

        // Simple asset loading without multiple calls
        await Promise.all([
          // 1. Fonts
          new Promise<void>((resolve) => {
            if (document.fonts) {
              document.fonts.ready.then(() => {
                setAssetLoaded('fonts');
                resolve();
              });
            } else {
              setTimeout(() => {
                setAssetLoaded('fonts');
                resolve();
              }, 1000);
            }
          }),

          // 2. Critical images (none for now)
          new Promise<void>((resolve) => {
            setAssetLoaded('critical-images');
            resolve();
          }),

          // 3. Shader loading time
          new Promise<void>((resolve) => {
            setTimeout(() => {
              setAssetLoaded('god-rays-shader');
              resolve();
            }, 2000);
          }),

          // 4. Hero components
          new Promise<void>((resolve) => {
            setTimeout(() => {
              setAssetLoaded('hero-components');
              resolve();
            }, 500);
          }),
        ]);

        // Clear progress interval
        clearInterval(progressInterval);

        // Ensure minimum loading time for good UX
        const minLoadingTime = 2500; // 2.5 seconds minimum
        const elapsed = Date.now() - loadingStartTime;
        
        if (elapsed < minLoadingTime) {
          setTimeout(() => {
            setProgress(100);
          }, minLoadingTime - elapsed);
        } else {
          setProgress(100);
        }

      } catch (error) {
        console.error('Asset preloading failed:', error);
        // Continue anyway to avoid infinite loading
        clearInterval(progressInterval);
        setProgress(100);
      }
    };

    preloadAssets();

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [setAssetLoaded, setProgress]); // Dependencies: setAssetLoaded and setProgress
}
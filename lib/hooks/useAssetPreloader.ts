'use client';

import { useEffect } from 'react';
import { useLoading } from '@/lib/context/LoadingContext';

export function useAssetPreloader() {
  const { setAssetLoaded, setProgress } = useLoading();

  useEffect(() => {
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
        // Start progress simulation
        simulateProgress();

        // 1. Check if fonts are loaded
        const checkFonts = () => {
          return new Promise<void>((resolve) => {
            if (document.fonts) {
              document.fonts.ready.then(() => {
                setAssetLoaded('fonts');
                resolve();
              });
            } else {
              // Fallback for browsers without FontFaceSet API
              setTimeout(() => {
                setAssetLoaded('fonts');
                resolve();
              }, 1000);
            }
          });
        };

        // 2. Preload critical images
        const preloadImages = () => {
          return new Promise<void>((resolve) => {
            const criticalImages = [
              // Add any critical hero images here
              // '/images/hero-bg.jpg',
            ];

            if (criticalImages.length === 0) {
              setAssetLoaded('critical-images');
              resolve();
              return;
            }

            let loadedCount = 0;
            criticalImages.forEach((src) => {
              const img = new Image();
              img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === criticalImages.length) {
                  setAssetLoaded('critical-images');
                  resolve();
                }
              };
              img.src = src;
            });
          });
        };

        // 3. Wait for God rays shader initialization
        const waitForShader = () => {
          return new Promise<void>((resolve) => {
            // Give time for the shader to initialize
            // This is a heuristic - adjust timing based on your shader complexity
            const shaderTimeout = setTimeout(() => {
              setAssetLoaded('god-rays-shader');
              resolve();
            }, 2000); // 2 seconds for shader loading

            // Optional: Listen for actual shader load events if available
            // You might need to modify ResponsiveGodRays to emit load events
            
            return () => clearTimeout(shaderTimeout);
          });
        };

        // 4. Hero components ready
        const markHeroReady = () => {
          return new Promise<void>((resolve) => {
            // Small delay to ensure all React components are mounted
            setTimeout(() => {
              setAssetLoaded('hero-components');
              resolve();
            }, 500);
          });
        };

        // Load assets in parallel
        await Promise.all([
          checkFonts(),
          preloadImages(),
          waitForShader(),
          markHeroReady(),
        ]);

        // Clear progress interval
        clearInterval(progressInterval);

        // Ensure minimum loading time for good UX (optional)
        const minLoadingTime = 2500; // 2.5 seconds minimum
        const loadingStartTime = Date.now();
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
  }, [setAssetLoaded, setProgress]);
}
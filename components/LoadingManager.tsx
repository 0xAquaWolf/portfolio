'use client';

import { useState } from 'react';
import { useLoading } from '@/lib/context/LoadingContext';
import { useAssetPreloader } from '@/lib/hooks/useAssetPreloader';
import LoadingScreen from './LoadingScreen';

export function LoadingManager() {
  const { progress, isComplete } = useLoading();
  const [showContent, setShowContent] = useState(false);

  // Initialize asset preloading
  useAssetPreloader();

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && (
        <LoadingScreen
          progress={progress}
          isComplete={isComplete}
          onComplete={handleLoadingComplete}
        />
      )}
    </>
  );
}
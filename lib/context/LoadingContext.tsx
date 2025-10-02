'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingState {
  progress: number;
  isLoading: boolean;
  isComplete: boolean;
  loadedAssets: Set<string>;
}

interface LoadingContextType extends LoadingState {
  setAssetLoaded: (assetName: string) => void;
  setProgress: (progress: number) => void;
  setLoadingComplete: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

const REQUIRED_ASSETS = [
  'god-rays-shader',
  'fonts',
  'hero-components',
  'critical-images'
];

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    progress: 0,
    isLoading: true,
    isComplete: false,
    loadedAssets: new Set(),
  });

  const setAssetLoaded = (assetName: string) => {
    setLoadingState(prev => {
      const newLoadedAssets = new Set(prev.loadedAssets);
      newLoadedAssets.add(assetName);
      
      const progress = Math.min(100, (newLoadedAssets.size / REQUIRED_ASSETS.length) * 100);
      
      return {
        ...prev,
        loadedAssets: newLoadedAssets,
        progress,
      };
    });
  };

  const setProgress = (progress: number) => {
    setLoadingState(prev => ({
      ...prev,
      progress: Math.min(100, Math.max(0, progress)),
    }));
  };

  const setLoadingComplete = () => {
    setLoadingState(prev => ({
      ...prev,
      progress: 100,
      isComplete: true,
      isLoading: false,
    }));
  };

  // Auto-complete when all assets are loaded
  useEffect(() => {
    if (loadingState.loadedAssets.size >= REQUIRED_ASSETS.length && !loadingState.isComplete) {
      // Add a small delay to ensure smooth UX
      const timer = setTimeout(() => {
        setLoadingComplete();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [loadingState.loadedAssets.size, loadingState.isComplete]);

  const contextValue: LoadingContextType = {
    ...loadingState,
    setAssetLoaded,
    setProgress,
    setLoadingComplete,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
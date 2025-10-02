"use client"
import React, { useMemo, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveYouTubeProps {
  /** YouTube video URL or ID (accepts full url, short url or raw id) */
  video: string;
  /** Optional accessible title for the iframe (recommended) */
  title?: string;
  /** If true use youtube-nocookie domain */
  noCookie?: boolean;
  /** Start time in seconds */
  start?: number;
  /** Autoplay when iframe loads (note: many browsers will block autoplay with sound) */
  autoplay?: boolean;
  /** Show controls (default true) */
  controls?: boolean;
  /** Whether to lazy-load (thumbnail & click-to-play). default true */
  lazy?: boolean;
  /** CSS class passed to outer wrapper */
  className?: string;
  /** Allow fullscreen (default true) */
  allowFullScreen?: boolean;
  /** Max width for the embed (e.g. "max-w-3xl"). Optional. */
  maxWidthClass?: string;
}

/**
 * ResponsiveYouTube
 * - Accepts full youtube URLs or plain video ids
 * - Defaults to lazy thumbnail + click-to-play for better performance
 * - Uses aspect-ratio (Tailwind's aspect-video) to maintain 16:9
 * - Fully responsive with proper accessibility
 */
export default function ResponsiveYouTube({
  video,
  title = "YouTube video player",
  noCookie = false,
  start,
  autoplay = false,
  controls = true,
  lazy = true,
  className = "",
  allowFullScreen = true,
  maxWidthClass = "",
}: ResponsiveYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(!lazy);
  const [hasError, setHasError] = useState(false);

  // Extract video ID from various youtube url formats or accept a raw id
  const videoId = useMemo(() => {
    if (!video) return "";

    // Common YouTube URL patterns
    const patterns = [
      /(?:youtu\.be\/)([A-Za-z0-9_-]{6,})/, // youtu.be/ID
      /(?:youtube\.com\/watch\?v=)([A-Za-z0-9_-]{6,})/, // youtube.com/watch?v=ID
      /(?:youtube\.com\/embed\/)([A-Za-z0-9_-]{6,})/, // youtube.com/embed/ID
      /(?:youtube\.com\/v\/)([A-Za-z0-9_-]{6,})/, // youtube.com/v/ID
      /^([A-Za-z0-9_-]{6,})$/, // raw id
    ];

    for (const pattern of patterns) {
      const match = video.match(pattern);
      if (match && match[1]) return match[1];
    }

    // Fallback: try to find v= parameter
    try {
      const url = new URL(video);
      return url.searchParams.get("v") || "";
    } catch {
      return "";
    }
  }, [video]);

  const embedDomain = noCookie ? "www.youtube-nocookie.com" : "www.youtube.com";

  const iframeSrc = useMemo(() => {
    if (!videoId) return "";

    const params = new URLSearchParams();
    params.set("rel", "0"); // Don't show related videos from other channels
    params.set("playsinline", "1");
    params.set("controls", controls ? "1" : "0");
    if (autoplay) params.set("autoplay", "1");
    if (start && Number.isFinite(start)) params.set("start", String(Math.floor(start)));
    params.set("modestbranding", "1"); // Remove YouTube logo in some places
    params.set("enablejsapi", "1"); // Enable keyboard controls for accessibility

    return `https://${embedDomain}/embed/${videoId}?${params.toString()}`;
  }, [videoId, embedDomain, autoplay, controls, start]);

  const thumbnailSrc = useMemo(() => {
    if (!videoId) return "";
    // Prefer maxres if available; fallback to hqdefault
    return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  }, [videoId]);

  const onActivate = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (!img.src.includes("hqdefault.jpg")) {
      img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    } else {
      setHasError(true);
    }
  }, [videoId]);

  if (!videoId) {
    return (
      <div className={cn("w-full", maxWidthClass, className)}>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
          Invalid YouTube video
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", maxWidthClass, className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        {isLoaded ? (
          <iframe
            title={title}
            src={iframeSrc}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={allowFullScreen}
            className="absolute inset-0 h-full w-full border-0"
            aria-label={title}
          />
        ) : (
          <>
            {/* Thumbnail fallback - click to load iframe for better performance */}
            {!hasError ? (
              <img
                src={thumbnailSrc}
                alt={`Thumbnail for video ${videoId}`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={handleImageError}
                decoding="async"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Thumbnail unavailable</p>
              </div>
            )}

            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-transparent border-none cursor-pointer group"
              onClick={onActivate}
            >
              <span className="relative flex items-center justify-center transition-all group-hover:scale-110">
                {/* YouTube red play button background */}
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-red-600 shadow-lg transition-all group-hover:bg-red-700 group-hover:shadow-xl" />
                
                {/* White play triangle */}
                <svg 
                  className="relative w-6 h-6 text-white z-10" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

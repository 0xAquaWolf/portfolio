"use client"
import React, { useMemo, useState, useCallback } from "react";
import Image from "next/image";
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
              <Image
                src={thumbnailSrc}
                alt={`Thumbnail for video ${videoId}`}
                fill
                className="object-cover"
                onError={handleImageError}
                loading="lazy"
                unoptimized
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
                <svg 
                  className="w-16 h-16 transition-all group-hover:scale-105" 
                  viewBox="0 0 1024 721" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="youtubeGradient" x1="512.5" y1="1.3" x2="512.5" y2="719.8" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#E52D27"/>
                      <stop offset="1" stopColor="#BF171D"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#youtubeGradient)" d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3h-0.4c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5C1023.2,238.9,1013,156.3,1013,156.3z M407,493V206l276,144L407,493z"/>
                  <path fill="#FFFFFF" d="M407,493l276-143L407,206V493z"/>
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

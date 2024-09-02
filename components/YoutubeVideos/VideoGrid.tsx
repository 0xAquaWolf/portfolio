"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// const YOUR_CHANNEL_ID = "UCkwRYP1J1hjRXwo5lyBRWdQ";

interface VideoItem {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  spanClass: string;
  objectPosition: string;
}

const thumbnailData = {
  thumbnails: [
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Modern-Dev-Portfolio-with-Next.js-Typescript-Tailwind-Shadcn-Aceternity-UI-part-3.jpg",
      url: "https://www.youtube.com/watch?v=1ERoVLlbO1Q",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Modern-Dev-Portfolio-with-Next.js-Typescript-Tailwind-Shadcn-Aceternity-UI-part-2.jpg",
      url: "https://www.youtube.com/watch?v=Dgtr7lctpsg",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Modern-Dev-Portfolio-with-Next.js-Typescript-Tailwind-Shadcn-Aceternity-UI-part-1.jpg",
      url: "https://www.youtube.com/watch?v=d9N7welKQFU",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Modern-Dev-Portfolio-with-Next.js-Typescript-Tailwind-Shadcn-Aceternity-UI-part-0.jpg",
      url: "https://www.youtube.com/watch?v=Jl4qtdWivgU",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Crypto-Algo-Trading-Bot-with-Python-Pt-3.jpg",
      url: "https://www.youtube.com/watch?v=h1XV7tnl12s",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Crypto-Algo-Trading-Bot-with-Python-Pt-2.jpg",
      url: "https://www.youtube.com/watch?v=msm9qwjyDd4",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Crypto-Algo-Trading-Bot-with-Python-Pt-1.jpg",
      url: "https://www.youtube.com/watch?v=a5023SIIlBc",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Code-a-Crypto-Algo-Trading-Bot-with-Python-Pt-0.jpg",
      url: "https://www.youtube.com/watch?v=-TytHI38sU8",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Configure Zellij with Neovim on macOS.png",
      url: "https://www.youtube.com/watch?v=9cOFK7NdaAQ",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/config-neovim-with-me.jpg",
      url: "https://www.youtube.com/watch?v=iIGdPsPaPgc",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/Configure macOS dock for Maximum Productivity.png",
      url: "https://www.youtube.com/watch?v=EdzMm2vT7Rg",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/config-yabai-with-me.jpg",
      url: "https://www.youtube.com/watch?v=oTLV1uiLt30",
    },
  ],
};

const VideoCard: React.FC<VideoItem> = ({
  title,
  imageUrl,
  videoUrl,
  spanClass,
  objectPosition,
}) => (
  <Link
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full relative group/bento ${spanClass}`}
  >
    <div className="h-full w-full absolute inset-0 bg-black opacity-0 group-hover/bento:opacity-30 rounded-lg transition-all duration-200" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-20 w-20 absolute z-10 inset-0 text-red-500 opacity-0 transition duration-200 m-auto group-hover/bento:opacity-100"
    >
      <path
        d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
    <Image
      src={imageUrl}
      alt={title}
      width={500}
      height={500}
      className={`h-full w-full object-cover rounded-lg ${spanClass} ${objectPosition}`}
    />
  </Link>
);

const VideoGrid: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };

    loadVideos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[83rem] mx-auto group md:auto-rows-[20rem]">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

const fetchVideos = async (): Promise<VideoItem[]> => {
  return thumbnailData.thumbnails.map((thumbnail, index) => ({
    id: (index + 1).toString(),
    title: `Video ${index + 1}`,
    imageUrl: thumbnail.image.replace("public", ""),
    videoUrl: thumbnail.url,
    spanClass:
      index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "md:col-span-1",
    objectPosition: "object-center",
  }));
};

export default VideoGrid;

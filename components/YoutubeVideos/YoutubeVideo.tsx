// import { VideosBentoGrid } from "./VideosBentoGrid";
import VideoGrid from "./VideoGrid";

export default function YoutubeVideos() {
  return (
    <>
      <div className="text-white">
        <h2 className="text-1xl lg:text-3xl font-bold text-center text-white mb-2">
          Watched by Thousands of People
        </h2>
        <p className="text-sm w-[80%] mx-auto lg:text-xl text-center text-gray-300 mb-8">
          Live Streaming weekly: Design, AI, Web3, SaaS, Startups, Algo Trading,
          Dev Workflows
        </p>
      </div>
      <VideoGrid />
      {/* <VideosBentoGrid /> */}
    </>
  );
}

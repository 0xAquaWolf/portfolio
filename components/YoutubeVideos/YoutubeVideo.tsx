import VideoGrid from "./VideoGrid";
import SectionHeading from "../SectionHeading";

export default function YoutubeVideos() {
  return (
    <div className="px-8">
      <SectionHeading
        heading="Watched by Thousands of People"
        subheading="Live Streaming weekly: Design, AI, Web3, SaaS, Startups, Algo Trading, Dev Workflows"
      />
      <VideoGrid />
    </div>
  );
}

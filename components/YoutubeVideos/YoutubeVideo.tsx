import VideoGrid from "./VideoGrid";
import SectionHeading from "../SectionHeading";

export default function YoutubeVideos() {
  return (
    <div id="videos" className="px-8">
      <SectionHeading
        heading="Watched by Thousands of People"
        subheading="Live Streaming weekly: WordPress, AI, Next.js, React, PHP, Startups, AI Dev Workflows, Neovim"
      />
      <VideoGrid />
    </div>
  );
}

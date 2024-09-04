import Hero from "@/components/Hero/Hero";
import LogoCloud from "@/components/LogoCloud/LogoCloud";
import YoutubeGrid from "@/components/YoutubeGrid/YoutubeGrid";
import Stats from "@/components/GlobalStats/Stats";
import YoutubeVideos from "@/components/YoutubeVideos/YoutubeVideo";
import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";
import AboutMe from "@/components/about-me/AboutMe";

export default function Home() {
  return (
    <main className="bg-bg-default">
      <Hero />
      <LogoCloud />
      <YoutubeGrid />
      <Stats />
      <YoutubeVideos />
      <WavyBackgroundDemo />
      <AboutMe />
    </main>
  );
}

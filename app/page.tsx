import Hero from "@/components/Hero/Hero";
import LogoCloud from "@/components/LogoCloud/LogoCloud";
import YoutubeGrid from "@/components/YoutubeGrid/YoutubeGrid";
import Stats from "@/components/GlobalStats/Stats";

export default function Home() {
  return (
    <main className="bg-bg-default">
      <Hero />
      <LogoCloud />
      <YoutubeGrid />
      <Stats />
    </main>
  );
}

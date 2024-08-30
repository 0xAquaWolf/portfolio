import Hero from "@/components/Hero/Hero";
import LogoCloud from "@/components/LogoCloud/LogoCloud";
import YoutubeGrid from "@/components/YoutubeGrid/YoutubeGrid";

export default function Home() {
  return (
    <main className="bg-bg-default">
      <Hero />
      <LogoCloud />
      <YoutubeGrid />
    </main>
  );
}

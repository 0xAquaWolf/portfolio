import Hero from '@/components/Hero/Hero';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import YoutubeGrid from '@/components/YoutubeGrid/YoutubeGrid';
import Stats from '@/components/GlobalStats/Stats';
import YoutubeVideos from '@/components/YoutubeVideos/YoutubeVideo';
import { WavyBackgroundDemo } from '@/components/ui/WavyBackgroundDemo';
import AboutMe from '@/components/about-me/AboutMe';
import Startup from '@/components/Startups/Startup';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import TheEnd from '@/components/TheEnd';
import { Footer } from '@/components/footer';
import Newsletter from '@/components/Newsletter/Newsletter';
import FeaturedBlogs from '@/components/Blog/FeaturedBlogs';

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
      <Startup />
      <SecondQuote />
      <FeaturedBlogs />
      <Newsletter />
      <TheEnd />
      <Footer />
    </main>
  );
}

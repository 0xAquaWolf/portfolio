import Hero from '@/components/Hero/Hero';
import YoutubeGrid from '@/components/YoutubeGrid/YoutubeGrid';
import Stats from '@/components/GlobalStats/Stats';
import YoutubeVideos from '@/components/YoutubeVideos/YoutubeVideo';
import { WavyBackgroundDemo } from '@/components/ui/WavyBackgroundDemo';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import TheEnd from '@/components/TheEnd';
import { Footer } from '@/components/footer';
// import Newsletter from '@/components/Newsletter/Newsletter';
import FeaturedBlogs from '@/components/Blog/FeaturedBlogs';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';

export const dynamic = 'force-dynamic';
export const revalidate = 3600 * 12; // revalidate every 12 hour

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <Hero />
      <YoutubeGrid />
      <Stats />
      <YoutubeVideos />
      <WavyBackgroundDemo />
      <TimelineComponent />
      <AboutMe />
      <Projects />
      <SecondQuote />
      <FeaturedBlogs />
      <TheEnd />
      <Footer />
    </main>
  );
}

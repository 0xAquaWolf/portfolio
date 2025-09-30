import HeroCircles from './HeroCircles';

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-20 grid grid-cols-1 lg:grid-cols-3 xl:mx-auto xl:max-w-[1440px]">
      <div className="grid grid-cols-1 items-center justify-center gap-4 px-2 lg:gap-2 lg:pl-10 xl:pl-0">
        <div className="mx-auto h-10 w-full rounded-full bg-purple-800 lg:mx-0 lg:h-12 xl:h-14 xl:w-96">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-2 py-0 text-sm text-white/80 lg:px-4 lg:py-1 lg:text-base xl:px-6 xl:py-2 xl:text-lg">
WordPress | PHP | Laravel
          </div>
        </div>
        <div className="hero-gradient-text text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-left lg:text-5xl xl:text-6xl 2xl:text-7xl">
Full-Stack WordPress Developer
        </div>
        <div className="grid grid-cols-2 justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="grid place-items-center rounded-full py-4 text-center text-sm text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta xl:px-8 xl:py-3 xl:text-lg"
          >
            View Projects
          </a>
          <a
            href="https://cal.com/0xaquawolf/discovery"
            className="grid place-items-center rounded-full bg-white py-4 text-center text-sm text-black shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta xl:px-6 xl:py-3 xl:text-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}

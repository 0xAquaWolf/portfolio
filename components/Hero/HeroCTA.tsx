import HeroCircles from './HeroCircles';

export default function HeroCTA() {
  return (
    <div className="relative z-40 my-4 flex flex-col items-center justify-center gap-12 xl:mx-auto xl:max-w-[1800px] w-full px-4">
      <div className="flex flex-col items-center justify-center gap-12">
        <div
          className="mx-auto h-10 w-full max-w-md rounded-full bg-purple-800 lg:h-13 xl:h-16 opacity-0"
          data-gsap="tech-badge"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b mb-10 from-white/40 to-[#2F2D2D]/20 px-3 py-1 text-base text-white/80 lg:px-5 lg:py-1 lg:text-lg xl:px-8 xl:py-2 xl:text-xl">
            React | Typescript | AI
          </div>
        </div>
        <div
          className="hero-gradient-text text-center text-4xl font-bold leading-tight sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl -mt-1 opacity-0"
          data-gsap="hero-text"
        >
          Full-Stack AI Engineer
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center gap-3 items-center max-w-md w-full">
        <a
          href="#projects"
          className="grid place-items-center rounded-full py-3 text-center text-base text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta lg:px-8 lg:py-3 xl:px-10 xl:py-4 xl:text-lg opacity-0"
          data-gsap="cta-view-projects"
        >
          View Projects
        </a>
        <a
          href="https://cal.com/0xaquawolf/discovery"
          className="grid place-items-center rounded-full bg-white py-3 text-center text-base text-black shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta lg:px-8 lg:py-3 xl:px-10 xl:py-4 xl:text-lg opacity-0"
          data-gsap="cta-book-call"
        >
          Book a Call
        </a>
      </div>
      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
        <HeroCircles />
      </div>
    </div>
  );
}

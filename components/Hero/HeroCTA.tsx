import HeroCircles from './HeroCircles';

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-4 grid grid-cols-1 lg:grid-cols-3 xl:mx-auto xl:max-w-[1440px]">
      <div className="grid grid-cols-1 gap-4 px-2 lg:pl-10 xl:pl-0">
        <div className="flex flex-col items-center justify-center lg:justify-end gap-10 lg:items-start">
          <div className="mx-auto h-8 w-full rounded-full bg-purple-800 lg:mx-0 lg:h-10 xl:h-12 xl:w-96">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b mb-10 from-white/40 to-[#2F2D2D]/20 px-2 py-0 text-xs text-white/80 lg:px-4 lg:py-1 lg:text-sm xl:px-6 xl:py-2 xl:text-base">
              WordPress | PHP | Laravel
            </div>
          </div>
          <div className="hero-gradient-text text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-left my-10 lg:text-[100px] 2xl:text-6xl -mt-1">
            Full-Stack WordPress Developer
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center gap-2 lg:justify-start items-start">
          <a
            href="#projects"
            className="grid place-items-center rounded-full py-2 text-center text-xs text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta lg:px-6 lg:py-2 xl:px-8 xl:py-2 xl:text-sm"
          >
            View Projects
          </a>
          <a
            href="https://cal.com/0xaquawolf/discovery"
            className="grid place-items-center rounded-full bg-white py-2 text-center text-xs text-black shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta lg:px-6 lg:py-2 xl:px-6 xl:py-2 xl:text-sm"
          >
            Book a Call
          </a>
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}

import HeroCircles from "./HeroCircles";

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-20 grid grid-cols-1 lg:grid-cols-2">
      <div className="grid px-2 lg:pl-10 grid-cols-1 gap-4 lg:gap-2 items-center justify-center">
        <div className="h-10 w-80 mx-auto lg:mx-0 lg:h-12 rounded-full bg-purple-800">
          <div className="text-sm lg:text-base flex items-center justify-center w-full h-full text-white/80 bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-2 py-0 lg:px-4 lg:py-1 rounded-full">
            Senior Full-Stack Software Engineer
          </div>
        </div>
        <div className="text-[10vw] lg:text-[5vw] font-bold leading-[11vw] text-center lg:text-left lg:leading-[5vw] text-white bg-gradient-to-b to-[#F26FD8] from-[#FFF4F4] bg-clip-text text-transparent">
          Exploring the hidden mysteries of tech
        </div>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            href="#"
            className="bg-white rounded-full px-4 py-2 text-black hover:text-white hover:bg-transparent border-[1px] hover:border-white transition-all"
          >
            See Projects
          </a>
          <a
            href="#"
            className="rounded-full px-6 py-2 border-[1px] border-white text-white hover:bg-white hover:text-black transition-all"
          >
            Watch Videos
          </a>
        </div>
      </div>
      <HeroCircles />
    </div>
  );
}

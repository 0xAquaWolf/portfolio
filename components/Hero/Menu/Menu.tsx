import Image from "next/image";

const inActiveStyle = "text-white/50";
const activeStyle =
  "bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-4 py-1 rounded-full";

export default function Menu() {
  return (
    <div className="relative z-10 top-10 px-20 flex items-center justify-between">
      <div className="flex items-center gap-2 ">
        <Image
          src="/images/png/aquawolf-logo.png"
          alt="Logo"
          width={25}
          height={25}
        />
        <div className="text-white text-lg font-semibold">0xAquaWolf</div>
      </div>
      {/* Menu */}
      <div className="flex items-center gap-4 text-white bg-white/20 px-5 py-2 rounded-full">
        <div className="relative flex-2">
          <div className={activeStyle}>Home</div>
        </div>
        <div className={inActiveStyle}>About</div>
        <div className={inActiveStyle}>Videos</div>
        <div className={inActiveStyle}>Projects</div>
        <div className={inActiveStyle}>Blog</div>
        <div className={inActiveStyle}>Discord</div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <div className="bg-white rounded-full px-4 py-2 text-black">
          Hire Me
        </div>
        <div className="rounded-full px-6 py-2 border-[1px] border-white">
          Links
        </div>
      </div>
    </div>
  );
}

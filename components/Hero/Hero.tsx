import SVGGradientBg from "./SVGGradientBg";
import Menu from "./Menu/Menu";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <div className="relative">
      <SVGGradientBg />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Menu />
        <HeroCTA />
      </div>
    </div>
  );
}

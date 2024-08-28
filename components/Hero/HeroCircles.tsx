import HeroCircleSVGs from "../../public/images/svg/HeroCircles.svg";
import Image from "next/image";

export default function HeroCircles() {
  return (
    <div className="lg:justify-center lg:opacity-100 opacity-50 lg:items-center absolute top-[-10vw] right-0 lg:flex lg:static">
      <Image src={HeroCircleSVGs} alt="Logo" width={500} height={500} />
    </div>
  );
}

import HeroCircleSVGs from '../../public/images/svg/HeroCircles.svg';
import Image from 'next/image';

export default function HeroCircles() {
  return (
    <div className="absolute right-0 top-[-10vw] z-[-1] col-span-2 opacity-50 lg:static lg:z-0 lg:flex lg:items-center lg:justify-end lg:opacity-100">
      <Image src={HeroCircleSVGs} alt="Logo" width={600} height={600} />
    </div>
  );
}

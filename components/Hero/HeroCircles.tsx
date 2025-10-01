import HeroCircleSVGs from '../../public/images/svg/HeroCircles.svg';
import Image from 'next/image';

export default function HeroCircles() {
  return (
    <Image src={HeroCircleSVGs} alt="Logo" width={600} height={600} className="opacity-50 lg:opacity-100" />
  );
}

import HeroCTA from './HeroCTA';
import LogoCloud from '@/components/LogoCloud/LogoCloud';

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-center px-2 md:px-10">
      <HeroCTA />
      <LogoCloud />
    </div>
  );
}

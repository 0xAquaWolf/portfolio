import Image from 'next/image';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import OpenAILogo from '@/public/images/svg/openai-logo.svg';
import PHPLogo from '@/public/images/svg/php-logo.svg';
import LaravelLogo from '@/public/images/svg/laravel-logo.svg';
import WordPressLogo from '@/public/images/svg/wordpress-logo.svg';

export const logos = [
  {
    src: WordPressLogo,
    alt: 'WordPress Logo',
    name: 'WordPress',
    width: 30,
    height: 30,
  },
  {
    src: PHPLogo,
    alt: 'PHP Logo',
    name: 'PHP',
    width: 30,
    height: 30,
  },
  {
    src: LaravelLogo,
    alt: 'Laravel Logo',
    name: 'Laravel',
    width: 30,
    height: 30,
  },
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 30, height: 30 },
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
    width: 30,
    height: 30,
  },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Next.js',
    width: 30,
    height: 30,
  },
  {
    src: TailwindCSSLogo,
    alt: 'Tailwind CSS Logo',
    name: 'Tailwind CSS',
    width: 30,
    height: 30,
  },
  {
    src: OpenAILogo,
    alt: 'OpenAI Logo',
    name: 'AI/ML',
    width: 30,
    height: 30,
  },
  {
    src: WordPressLogo,
    alt: 'WordPress Logo',
    name: 'WordPress',
    width: 30,
    height: 30,
  },
  {
    src: PHPLogo,
    alt: 'PHP Logo',
    name: 'PHP',
    width: 30,
    height: 30,
  },
  {
    src: LaravelLogo,
    alt: 'Laravel Logo',
    name: 'Laravel',
    width: 30,
    height: 30,
  },
  {
    src: PythonLogo,
    alt: 'Python Logo',
    name: 'Python',
    width: 30,
    height: 30,
  },
  { src: FigmaLogo, alt: 'Figma Logo', name: 'Figma', width: 23, height: 23 },
  {
    src: OpenAILogo,
    alt: 'OpenAI Logo',
    name: 'AI/ML',
    width: 30,
    height: 30,
  },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-150 invert [&>path]:fill-white"
          />
        </div>
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <Image
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="relative z-40 mx-auto mt-10 md:mt-4 flex min-w-0 max-w-full flex-col gap-6 overflow-hidden px-4 text-white sm:px-6 lg:max-w-[1080px] lg:gap-2 lg:px-0">
      <h2 
        className="mx-auto w-full text-center text-xs lg:text-sm opacity-0"
        data-gsap="tech-subtitle"
      >
        Leveraging state-of-the-art technologies
      </h2>

      <div
        className="relative flex w-full min-w-0 overflow-hidden opacity-0"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
        data-gsap="logo-cloud"
      >

        <div className="flex animate-marquee-scroll whitespace-nowrap py-2">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-2"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p 
        className="mx-auto w-full max-w-[280px] text-center text-xs opacity-0 sm:max-w-none lg:text-sm"
        data-gsap="curve-text"
      >
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}

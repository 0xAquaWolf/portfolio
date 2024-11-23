import Image from 'next/image';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import EthereumLogo from '@/public/images/svg/ethereum-logo.svg';
import SolidityLogo from '@/public/images/svg/solidity-logo.svg';
import EthersJSLogo from '@/public/images/svg/ethersjs-logo.svg';
import WagmiLogo from '@/public/images/svg/wagmi-logo.svg';
import RainbowKitLogo from '@/public/images/svg/rainbowkit-logo.svg';
import OpenAILogo from '@/public/images/svg/openai-logo.svg';

export const logos = [
  {
    src: EthereumLogo,
    alt: 'Ethereum Logo',
    name: 'Ethereum',
    width: 30,
    height: 30,
  },
  {
    src: SolidityLogo,
    alt: 'Solidity Logo',
    name: 'Solidity',
    width: 30,
    height: 30,
  },
  {
    src: EthersJSLogo,
    alt: 'Ethers.js Logo',
    name: 'Ethers.js',
    width: 30,
    height: 30,
  },
  { src: WagmiLogo, alt: 'Wagmi Logo', name: 'Wagmi', width: 30, height: 30 },
  {
    src: RainbowKitLogo,
    alt: 'RainbowKit Logo',
    name: 'RainbowKit',
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
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 30, height: 30 },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Next.js',
    width: 30,
    height: 30,
  },
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
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
    src: PythonLogo,
    alt: 'Python Logo',
    name: 'Python',
    width: 30,
    height: 30,
  },
  { src: FigmaLogo, alt: 'Figma Logo', name: 'Figma', width: 23, height: 23 },
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
    <div className="relative z-40 mx-auto mb-[-75px] mt-[200px] flex flex-col gap-3 text-white lg:mb-0 lg:mt-44 lg:max-w-[1080px] lg:gap-6">
      <h2 className="mx-auto mb-3 w-full px-8 text-center text-sm lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Leveraging the state-of-the-art technologies
      </h2>

      <div className="relative flex w-full overflow-hidden">
        {/* top shadow */}
        <div className="absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-bg-default to-transparent"></div>
        {/* bottom shadow */}
        <div className="absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-bg-default to-transparent"></div>

        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-[250px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}

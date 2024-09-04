import Image from "next/image";
import PythonLogo from "@/public/images/svg/Python-Logo.svg";
import NextJSLogo from "@/public/images/svg/Next-js.svg";
import VercelLogo from "@/public/images/svg/Vercel-Logo.svg";
import TailwindCSSLogo from "@/public/images/svg/Tailwind-Logo.svg";
import ReactLogo from "@/public/images/svg/react-logo.svg";
import TypescriptLogo from "@/public/images/svg/TS-Logo.svg";
import FigmaLogo from "@/public/images/svg/figma-logo.svg";

const logos = [
  { src: ReactLogo, alt: "React Logo", name: "React" },
  {
    src: [VercelLogo, NextJSLogo],
    alt: ["Vercel Logo", "Next.js Logo"],
    name: "",
    width: [20, 100],
    height: [20, 30],
  },
  { src: TypescriptLogo, alt: "TypeScript Logo", name: "TypeScript" },
  { src: TailwindCSSLogo, alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
  { src: PythonLogo, alt: "Python Logo", name: "Python" },
  { src: FigmaLogo, alt: "Figma Logo", name: "Figma", width: 20, height: 20 },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-start gap-3 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <>
        <Image
          src={src[0]}
          alt={Array.isArray(alt) ? alt[0] : alt}
          width={Array.isArray(width) ? width[0] : width}
          height={Array.isArray(height) ? height[0] : height}
        />
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </>
    ) : (
      <Image
        src={src}
        alt={alt as string}
        width={width as number}
        height={height as number}
      />
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="relative z-40 mx-auto mb-[-100px] mt-20 flex flex-col gap-4 text-white lg:mb-0 lg:max-w-[1440px] lg:gap-8">
      <h2 className="mx-auto mb-4 w-full px-10 text-center text-base lg:mb-0 lg:max-w-none lg:px-0 lg:text-2xl">
        Leveraging the most state-of-the-art technologies
      </h2>
      <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-4 px-4 lg:w-[80%] lg:grid-cols-6 lg:px-0">
        {logos.map((logo, index) => (
          <div key={index} className="flex lg:justify-center">
            <Logo {...logo} />
          </div>
        ))}
      </div>
      <p className="mx-auto w-full max-w-[300px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}

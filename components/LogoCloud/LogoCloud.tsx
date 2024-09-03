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
  <div className="flex items-start lg:items-center self-center gap-3 lg:gap-2">
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
    {name && <div className="font-semibold text-sm lg:text-base">{name}</div>}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="relative z-40 mt-20 mb-[-100px] lg:mb-0 text-white flex flex-col gap-4 lg:gap-8">
      <h2 className="text-center mb-4 lg:mb-0 text-base px-10 lg:px-0 lg:text-2xl w-full lg:max-w-none mx-auto">
        Leveraging the most state-of-the-art technologies
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 justify-center items-center w-full lg:w-[80%] mx-auto px-4 lg:px-0">
        {logos.map((logo, index) => (
          <div key={index} className="flex lg:justify-center">
            <Logo {...logo} />
          </div>
        ))}
      </div>
      <p className="text-center opacity-60 text-sm w-full max-w-[300px] lg:max-w-none mx-auto">
        Staying ahead of the curve and surfing the waves of innovation
      </p>
    </div>
  );
}

import PythonLogo from "../../public/images/svg/python-icon.svg";
import NextJSLogo from "../../public/images/svg/Next-js.svg";
import TailwindCSSLogo from "../../public/images/svg/TailwindCSS.svg";
import ReactLogo from "../../public/images/svg/react-logo.svg";
import TypescriptLogo from "../../public/images/svg/typescript-logo.svg";
import FigmaLogo from "../../public/images/svg/figma-logo.svg";
import Image from "next/image";

const logoWidth = 100;
const logoHeight = 100;

export default function LogoCloud() {
  return (
    <div className="relative z-40 mt-10 lg:mt-20 text-white flex flex-col gap-4 lg:gap-8">
      <div className="text-center mb-4 lg:mb-0 text-1xl lg:text-2xl w-[250px] mx-auto lg:w-full lg:mx-0">
        Leveraging the most state-of-the-art technologies
      </div>
      <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
        <Image
          src={ReactLogo}
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
        />
        <Image
          src={NextJSLogo}
          alt="Logo"
          width={logoWidth}
          height={logoWidth}
        />
        <Image
          src={TypescriptLogo}
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
        />
        <Image
          src={TailwindCSSLogo}
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
        />
        <Image
          src={PythonLogo}
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
        />
        <Image
          src={FigmaLogo}
          alt="Logo"
          width={logoWidth}
          height={logoHeight}
        />
      </div>
      <div className="text-center opacity-60 text-sm w-[300px] mx-auto lg:w-full lg:mx-0">
        Staying ahead of the curve and surfing the waves of innovation
      </div>
    </div>
  );
}

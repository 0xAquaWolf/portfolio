import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "0xAquaWolf Portfolio & Blog",
  description:
    "AquaWolf is a Senior Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products that have generated over $28M in Web3 projects and $30K MRR in e-commerce. Specializing in rapid prototyping, full-stack development, UI/UX design, and emerging technologies like AI and blockchain, AquaWolf is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "0xAquaWolf",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    images: "images/png/portfolio-preview.png",
    siteName: "0xAquaWolf",
    title: "0xAquaWolf Portfolio & Blog",
    description:
      "AquaWolf is a Senior Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products that have generated over $28M in Web3 projects and $30K MRR in e-commerce. Specializing in rapid prototyping, full-stack development, UI/UX design, and emerging technologies like AI and blockchain, AquaWolf is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.",
  },
  twitter: {
    card: "summary",
    images: "images/png/portfolio-preview.png",
    title: "0xAquaWolf Portfolio & Blog",
    description:
      "AquaWolf is a Senior Full-Stack Software Engineer and indie hacker with a proven track record in building impactful, consumer-facing products that have generated over $28M in Web3 projects and $30K MRR in e-commerce. Specializing in rapid prototyping, full-stack development, UI/UX design, and emerging technologies like AI and blockchain, AquaWolf is passionately building innovative solutions and upskilling in Web3, AI, and Machine Learning while releasing quality apps to the public.",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased ", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}

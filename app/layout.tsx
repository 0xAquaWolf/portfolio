import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import ResponsiveGodRays from '@/components/ui/ResponsiveGodRays';
import Menu from '@/components/Hero/Menu/Menu';
import { ThemeProvider } from 'next-themes';
import NoiseTexture from '@/components/ui/NoiseTexture';
import { LoadingProvider } from '@/lib/context/LoadingContext';
import LoadingScreen from '@/components/LoadingScreen';
import { LoadingManager } from '@/components/LoadingManager';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: '0xAquaWolf Portfolio & Blog',

  description:
    'AquaWolf is a Senior Full-Stack Software Engineer and indie hacker specializing in PHP, WordPress, and Laravel development. With a proven track record in building impactful, consumer-facing web applications and e-commerce solutions, AquaWolf focuses on modern PHP development practices, custom WordPress solutions, and scalable Laravel applications while delivering quality software and maintaining best development practices.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '0xAquaWolf',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    images: '/images/png/portfolio-preview.png',
    siteName: '0xAquaWolf',
    title: '0xAquaWolf Portfolio & Blog',
    description:
      'AquaWolf is a Senior Full-Stack Software Engineer and indie hacker specializing in PHP, WordPress, and Laravel development. With a proven track record in building impactful, consumer-facing web applications and e-commerce solutions, AquaWolf focuses on modern PHP development practices, custom WordPress solutions, and scalable Laravel applications while delivering quality software and maintaining best development practices.',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/png/portfolio-preview.png',
    title: '0xAquaWolf Portfolio & Blog',
    description:
      'AquaWolf is a Senior Full-Stack Software Engineer and indie hacker specializing in PHP, WordPress, and Laravel development. With a proven track record in building impactful, consumer-facing web applications and e-commerce solutions, AquaWolf focuses on modern PHP development practices, custom WordPress solutions, and scalable Laravel applications while delivering quality software and maintaining best development practices.',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHandwriting = FontHandwriting({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-handwriting',
});

const MonaLisa = localFont({
  src: '../public/fonts/monolisa/MonoLisa-Regular.ttf',
  variable: '--font-monalisa',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          MonaLisa.variable,
        )}
      >
        <LoadingProvider>
          <LoadingManager />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <NoiseTexture /> */}
            <div 
              className="pointer-events-none absolute left-0 top-0 -z-10 h-[100dvh] w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
              }}
            >
              <ResponsiveGodRays />
            </div>
            <Menu />
            <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}

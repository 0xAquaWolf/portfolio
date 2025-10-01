'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SVGGradientBg from '../SVGGradientBg';
import GithubLogo from '../../../public/images/svg/Github-Logo.svg';
import InstagramLogo from '../../../public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '../../../public/images/svg/LinkedIn-Logo.svg';
import TiktokLogo from '../../../public/images/svg/Tiktok-Logo.svg';
import TwitterLogo from '../../../public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '../../../public/images/svg/Youtube-Logo.svg';
import clsx from 'clsx';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/#about', isActive: false },
    { name: 'Videos', href: '/#videos', isActive: false },
    { name: 'Projects', href: '/#projects', isActive: false },
    { name: 'Blog', href: '/posts', isActive: false },
  ]);

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      })),
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <header className="absolute inset-x-0 top-0 z-40">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src="/images/png/aquawolf-logo.png"
                alt="Logo"
                width={25}
                height={25}
              />
              <div className="text-lg font-semibold text-white">0xAquaWolf</div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-10 w-10 text-white" />
            </button>
          </div>
          <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://github.com/0xAquaWolf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full py-3 px-6 text-center text-sm text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta xl:px-8 xl:py-3 xl:text-base"
            >
              <Image
                src={GithubLogo}
                alt="GitHub Logo"
                width={20}
                height={20}
                className="transition-all group-hover:brightness-0"
              />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Sticky centered navigation menu */}
      <div className={`fixed inset-x-0 max-w-2xl mx-auto z-50 hidden lg:flex lg:items-center lg:justify-center transition-all duration-500 ease-out ${isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "-translate-y-16 opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          transitionProperty: 'transform, opacity, scale',
          transitionTimingFunction: isVisible
            ? 'cubic-bezier(0.16, 1, 0.3, 1)'
            : 'cubic-bezier(0.7, 0, 0.84, 0)',
        }}>
        <nav className="relative rounded-full border border-white/[0.2] bg-white/10 backdrop-blur-md shadow-lg flex justify-center space-x-8 px-10 py-4"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}>
          {navMenu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveNavItem(item.name)}
              className={clsx({
                'text-white/90 hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-200': true,
                'bg-white/20 text-white': item.isActive,
                'hover:bg-white/10': !item.isActive,
              })}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-default px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="relative z-50">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">0xAquaWolf</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/png/aquawolf-logo.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                  <div className="text-lg font-semibold text-white">
                    0xAquaWolf
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-10 w-10 text-white"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-center">
                  {navMenu.map((item) => (
                    <a
                      key={item.name + 1}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl font-normal leading-7 text-white transition-all hover:bg-gray-50/20"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* Seperator */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-[2px] w-[70vw] bg-white/100"></div>
                </div>
                {/* Social Links */}
                <div className="mt-10 grid gap-10">
                  <div className="align-center flex flex-1 justify-center gap-10">
                    <a
                      href="https://twitter.com/0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={TwitterLogo}
                        alt="X/Twitter Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      className="grid items-center"
                      href="https://www.youtube.com/@0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={YouTubeLogo}
                        alt="YouTube Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      href="https://github.com/0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GithubLogo}
                        alt="Github Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                  <div className="align-center flex justify-center gap-10">
                    <a
                      href="https://www.instagram.com/_0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid items-center"
                    >
                      <Image
                        src={InstagramLogo}
                        alt="Instagram Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com/@0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={TiktokLogo}
                        alt="TikTok Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/0xAquaWolf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid items-center"
                    >
                      <Image
                        src={LinkedinLogo}
                        alt="Linkedin Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SVGGradientBg />
        </DialogPanel>
      </Dialog>
    </div>
  );
}

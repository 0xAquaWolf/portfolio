"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NewNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setActive(null); // Close any open dropdowns
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-500 ease-out hidden md:block",
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "-translate-y-16 opacity-0 scale-95 pointer-events-none",
        className
      )}
      style={{
        transitionProperty: 'transform, opacity, scale',
        transitionTimingFunction: isVisible 
          ? 'cubic-bezier(0.16, 1, 0.3, 1)' 
          : 'cubic-bezier(0.7, 0, 0.84, 0)',
      }}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white/90 hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer">
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-3 text-sm min-w-[120px]">
            <HoveredLink href="/#about">About Me</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Videos">
          <div className="flex flex-col space-y-3 text-sm min-w-[140px]">
            <HoveredLink href="/#videos">YouTube Videos</HoveredLink>
            <HoveredLink href="https://www.youtube.com/@0xAquaWolf">YouTube Channel</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-3 text-sm min-w-[120px]">
            <HoveredLink href="/#projects">View Projects</HoveredLink>
            <HoveredLink href="https://github.com/0xAquaWolf">GitHub</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="flex flex-col space-y-3 text-sm min-w-[100px]">
            <HoveredLink href="/posts">All Posts</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
'use client';
import { useState, useEffect } from 'react';

function ScrollTracker() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (totalScroll / windowHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="animate-glow fixed left-0 top-0 z-20 h-2 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
      style={{ width: `${scroll}%` }}
    />
  );
}

export default ScrollTracker;

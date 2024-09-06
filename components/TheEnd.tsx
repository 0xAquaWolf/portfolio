'use client';

import { useRef } from 'react';

import type { ConfettiRef } from './magicui/confetti';
import Confetti from './magicui/confetti';

export default function TheEnd() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative z-[99] mt-40 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-bg-default md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text px-4 text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        THE END
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}

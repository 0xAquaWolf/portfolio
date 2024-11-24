'use client';

import React, { useEffect, useState } from 'react';

export default function SVGGradientBg() {
  const [viewBox, setViewBox] = useState('0 0 1512 589');
  const [path, setPath] = useState('');

  useEffect(() => {
    const updateViewBox = () => {
      if (window.innerWidth <= 768) {
        setViewBox('0 0 390 844');
        setPath(
          'M-141.6 532.48C-256.443 566.602 -326.02 582.99 -434.412 583.955C-450.805 584.101 -464 570.691 -464 554.298V190C-464 173.432 -450.569 160 -434 160H1018C1034.57 160 1048 173.432 1048 190V539.511C1048 555.288 1035.77 568.434 1020 569.137C943.551 572.547 894.029 565.817 820.077 542.08C812.561 539.668 806.363 534.264 802.67 527.284C768.768 463.049 737.259 427.299 659.738 373.595C595.41 338.101 552.146 324.014 465.388 308.368C463.891 308.098 462.327 307.939 460.806 307.903C380.112 306.006 334.802 311.972 255.476 332.433C93.5997 395.577 6.02916 436.569 -133.525 528.71C-135.995 530.34 -138.763 531.637 -141.6 532.48Z',
        );
      } else {
        setViewBox('0 0 1512 589');
        setPath(
          'M322.4 372.48C207.557 406.602 137.98 422.99 29.5878 423.955C13.1949 424.101 0 410.691 0 394.298V30C0 13.4315 13.4314 0 30 0H1482C1498.57 0 1512 13.4315 1512 30V379.511C1512 395.288 1499.77 408.434 1484 409.137C1407.55 412.547 1358.03 405.817 1284.08 382.08C1276.56 379.668 1270.36 374.264 1266.67 367.284C1232.77 303.049 1201.26 267.299 1123.74 213.595C1059.41 178.101 1016.15 164.014 929.388 148.368C927.891 148.098 926.327 147.939 924.806 147.903C844.112 146.006 798.802 151.972 719.476 172.433C557.6 235.577 470.029 276.569 330.475 368.71C328.005 370.34 325.237 371.637 322.4 372.48Z',
        );
      }
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);
    return () => window.removeEventListener('resize', updateViewBox);
  }, []);

  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[100vh] w-full overflow-hidden md:h-[94vh] lg:min-h-[800px]">
      <div className="relative h-full w-full">
        <svg
          className="h-full w-full"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_10_25)">
            <path d={path} fill="url(#paint0_linear_10_25)" />
            <path d={path} stroke="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_10_25"
              x="-164.5"
              y="-164.5"
              width="1841"
              height="752.956"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="82"
                result="effect1_foregroundBlur_10_25"
              />
            </filter>
            <linearGradient
              id="paint0_linear_10_25"
              x1="100%"
              y1="30%"
              x2="0%"
              y2="70%"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CA14AF" />
              <stop offset="0.449226" stopColor="#770F97" />
              <stop offset="1" stopColor="#DA1489" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

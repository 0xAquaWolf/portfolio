export default function NoiseTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <svg
        width="100%"
        height="100%"
        className="h-full w-full opacity-[0.07]"
      >
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
              type="fractalNoise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
            />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0.5 0.7 0.9 1"/>
            </feComponentTransfer>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          fill="white"
        />
      </svg>
    </div>
  );
}
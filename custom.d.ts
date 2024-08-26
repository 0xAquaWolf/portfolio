declare module '*.mp3' {
    const src: string;
    export default src;
  }
  
  declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
  }
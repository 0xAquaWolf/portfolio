import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>What&apos;s Up Everyone, I&apos;m AquaWolf from Miami, FL</p>
            <p>
              So, my story&apos;s kinda wild. Started my coding journey back in 2016 
              with PHP - my first love, building simple websites and learning the magic 
              of server-side programming.
            </p>
            <p>
              But then I got caught up in the JavaScript hype train. React, TypeScript, 
              Next.js, Node.js - the whole modern ecosystem. Dove deep into design too - 
              mastering Figma, UI/UX principles, and creating pixel-perfect interfaces.
            </p>
            <p>
              I became truly full-stack - designing in Figma, developing with the latest 
              frameworks, and deploying on Linux machines. DevOps, design systems, 
              the works. Followed that wave straight into the crypto craze of October 2021.
            </p>
            <p>
              Helped launch some really big NFT projects - DAW, TheLostKingdom & 
              SuperFuzz. My code generated over 28m+ and I achieved massive personal 
              success...
            </p>
            <p>But fuck, burnout hit me like a big 18 wheeler truck.</p>
            <p>I was lost, ship wrecked, stranded at sea with no boat.</p>
            <p>
              So I decided to shake things up. Went on a spiritual vision quest, 
              traveling the world for 2 years, searching for meaning and healing 
              from the chaos.
            </p>
            <p>
              Deep dive into consciousness, healing, and rediscovering what truly 
              mattered. I was so broken I honestly didn&apos;t even want to code 
              anymore, but eventually I found my way back to myself.
            </p>
            <p>
              And here&apos;s the beautiful part - I came full circle back to PHP. 
              WordPress, Laravel, the whole ecosystem that started it all.
            </p>
            <p>
              But now? Now I truly understand how everything connects. Design to 
              deployment, frontend to backend, the entire stack. After my journey 
              through JavaScript land and beyond, I can take an idea from Figma 
              mockup to production server - I&apos;ve finally mastered this craft.
            </p>
            <p>So, now I&apos;m back in the mix, wearing a bunch of hats:</p>
            <ul className="list-disc pl-6">
              <li>Full-Stack PHP Developer (WordPress & Laravel)</li>
              <li>UI/UX Designer & Figma Expert</li>
              <li>DevOps Engineer (Linux & Cloud Deployment)</li>
              <li>Live Stream Coding (Building in Public)</li>
              <li>AI Tinkerer & Creative Problem Solver</li>
            </ul>
            <p>
              My mission is to bridge the gap between design and development, creating 
              end-to-end solutions from concept to deployment. I believe in building 
              experiences that are not just technically robust but also beautifully 
              designed and meaningfully crafted.
            </p>
            <p>
              Always open to connecting with fellow builders, designers, and
              curious minds. Whether it&apos;s discussing design systems, PHP frameworks, 
              DevOps workflows, or exploring new technological frontiers, I&apos;m
              here for it.
            </p>
            <p>Let&apos;s build the future together.</p>
            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Wholeness & Balanced Vibrations 🙏
              </div>
            </div>
            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">AquaWolf</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image src={AquaWolfPFP} alt="AquaWolf PFP" />
              </div>
              <div className="lg:ml-4">
                <div className="text-xl font-semibold text-white lg:text-2xl">
                  0xAquawolf
                </div>
                <div className="text-[12px] lg:text-lg">
                  Full-Stack Developer & Designer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

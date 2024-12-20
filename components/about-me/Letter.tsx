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
              So, my story&apos;s kinda wild. Started coding back in 2016, got
              caught up in the crypto craze of October 2021.
            </p>
            <p>
              Helped launch some really big NFT projects - DAW, TheLostKingdom &
              SuperFuzz, My code generated over 28m+ and i ended up achieving a
              massive personal success...
            </p>
            <p>But fuck, burnout hit me like a big 18 wheeler truck.</p>
            <p>I was lost, ship wrecked, stranded at sea with no boat.</p>
            <p>
              So i decided to shake things up. Went digital nomadding for 2
              years.
            </p>
            <p>Trekking through Peru, Thailand, India, Cambodia, Laos.</p>
            <p>
              Got real deep into Health & Wellness, Spirituality, Consciousness,
              Neuroscience, Ayahuasca, Magic Mushrooms and DMT.
            </p>
            <p>
              I was looking for myself so i could put all the pieces back
              together because i was so broken, i honestly didn&apos;t even want
              to code anymore all i wanted to do was sell everything and become
              a monk and just travel barefoot, but eventually i grounded myself
              back in to reality
            </p>
            <p>So, now I&apos;m back in the mix, wearing a bunch of hats:</p>
            <ul className="list-disc pl-6">
              <li>Full-Stack Blockchain Developer</li>
              <li>Live Stream Coding (Building in Public)</li>
              <li>UI/UX Designer</li>
              <li>AI Tinkerer & Hacker</li>
              <li>Creative Problem Solver</li>
            </ul>
            <p>
              My mission is to bridge the gap between blockchain, AI, and
              human-centered design, creating experiences that are not just
              technically robust but also intuitive and meaningful.
            </p>
            <p>
              Always open to connecting with fellow builders, innovators, and
              curious minds. Whether it&apos;s discussing the future of Web3, AI
              developments, or exploring new technological frontiers, I&apos;m
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
                  Senior Full-Stack Software Engineer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

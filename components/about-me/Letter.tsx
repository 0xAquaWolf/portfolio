import React from "react";
import Image from "next/image";
import AquaWolfPFP from "@/public/images/svg/aquawolf-pfp.svg";

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="bg-letter-middle absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="bg-letter-bottom absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="bg-letter-top shadow-letter-top relative z-30 -rotate-1 rounded-lg lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>What&apos;s Up Everyone, I&apos;m AquaWolf from Miami, FL</p>
            <p>So, my story&apos;s kinda wild. Started coding back in 2016, got caught up in the crypto craze of October 2021.</p>
            <p>Helped launch some really big NFT projects - DAW, TheLostKingdom & SuperFuzz, My code generated over 28m+ and i ended up achieving a massive personal success...</p>
            <p>But fuck, burnout hit me like a big 18 wheeler truck.</p>
            <p>I was lost, ship wrecked, stranded at sea with no boat.</p>
            <p>So i decided to shake things up. Went digital nomadding for 2 years.</p>
            <p>Trekking through Peru, Thailand, India, Cambodia, Laos.</p>
            <p>Got real deep into Health & Wellness, Spirituality, Consciousness, Neuroscience, Ayahuasca, Magic Mushrooms and DMT.</p>
            <p>I was looking for myself so i could put all the pieces back together because i was so broken, i honestly didn&apos;t even want to code anymore all i wanted to do was sell everything and become a monk and just travel barefoot no possessions, but eventually i grounded myself back in to reality</p>
            <p>So, Now I&apos;m back in the game, wearing a bunch of hats:</p>
            <ul className="list-disc pl-6">
              <li>Full-Stack Blockchain Developer</li>
              <li>Live Stream Coding (Building in Public)</li>
              <li>UI/UX Designer</li>
              <li>AI tinkerer & Hacker</li>
              <li>Creative Problem Solver</li>
            </ul>
            <p>Hit me up and lets connect if you&apos;re into building cool stuff and following your curiosity or just wanna chat about Entrepreneurship, AI, Consciousness or everything really.</p>
            <p>I&apos;m always down for a good collab or mind-bending convo if time permits.</p>
            <p>Much love</p>
            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Wholeness & Balanced Vibrations 🙏
              </div>
            </div>
            <div className="font-handwriting mb-10 text-4xl lg:text-6xl">
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

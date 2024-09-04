import React from "react";
import Image from "next/image";
import AquaWolfPFP from "@/public/images/svg/aquawolf-pfp.svg";

export default function Page() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      {/* Letter Top */}
      <div className="bg-letter-top shadow-letter-top relative -top-3 z-10 -rotate-1 rounded-lg lg:rotate-2 lg:rounded-xl">
        <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
          <p>Hey everyone—</p>
          <p>I'm AquaWolf, and I've been on quite a journey.</p>
          <p>
            I've been coding since 2016, and let me tell you, it's been a wild
            ride. Coding gets a bad rap sometimes, but it shouldn't. To me,
            coding has always been a treasure.
          </p>
          <p>
            There's nothing quite like the feeling of creating something from
            nothing, or solving a complex problem that's been nagging at you for
            days. That rush of satisfaction when your code finally runs
            smoothly—that's how coding used to feel all the time for me.
          </p>
          <p>But things changed.</p>
          <p>
            In 2021, I got swept up in the crypto bull run. I helped launch
            various NFT projects, including DAW (Desperate Ape Wives) on ETH and
            TheLostKingdom on FTM. We're talking millions in sales and thousands
            in trading volume. It was exhilarating, but it came at a cost.
          </p>
          <p>
            I lost control over my well-being. An avalanche of work and stress
            buried me. I was coding for 12 hours a day, smoking weed just to
            cope with the pain. And still, it wasn't enough.
          </p>
          <p>
            The industry just let it happen. No one seemed to care about my
            health as long as the money kept flowing.
          </p>
          <p>
            Coding, which had once been my joy, became a chore. Something I fell
            behind on. Something I cleared out, not cherished. Rather than
            delighting in it, I was just dealing with it.
          </p>
          <p>
            But you know what? Even after all that, coding still remains a
            wonder to me. It's powerful. It's creative. It connects people
            across the globe and helps millions earn a living.
          </p>
          <p>
            The magic was still there, just buried under a mess of burnout and
            neglect.
          </p>
          <p>
            So I decided to make a change. I left it all behind and became a
            digital nomad. I traveled from the Amazon in Peru to the beaches of
            Thailand and the spiritual heart of India. I experienced ayahuasca 8
            times in peru and 4 times in Thailand, spiritually died multiple
            times on DMT and mushrooms, kambo, san pedro, and went on various
            shamanic journeys over the course of 2 years
          </p>
          <p>
            It was a redo, a rethink, a simplified, potent reintroduction to my
            passion and my Self, i was lost and i found my Self in all of it,
            everything i was looking for outwardly was within.
          </p>
          <p>A fresh start, the way it should be.</p>
          <p>
            This journey became my love letter to balance and growth. I purged a
            lot of trauma, did a massive amount of shadow work, and finally
            found the peace I was looking for.
          </p>
          <p>
            Now, I'm no longer afraid to share my story. I'm a Senior Full-Stack
            developer, yes, but I'm also a shaman, a time traveler, a hacker, a
            tinker, a delusional optimist, a truth seeker, a data broker, an AI
            researcher, and a polymath.
          </p>
          <p>To everyone out there feeling lost or burnt out: there's hope.</p>
          <p>In the chaos there is always balance to find</p>
          <p>
            This is my journey, and I'm still allowing the expansion to
            continue. May it inspire you to find your own balance in this wild
            world of technology and beyond.
          </p>
          <div className="relative flex flex-col items-center gap-2">
            <div className="self-start">Wholeness & Balanced Vibrations 🙏</div>
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
      {/* Letter Middle */}
      <div className="bg-letter-bottom absolute -top-[3] left-[26] z-[5] h-full w-[80%] -rotate-1 rounded-lg lg:left-3 lg:top-10 lg:h-[75%] lg:w-full lg:rotate-3"></div>
      {/* Letter Bottom */}
      <div className="bg-letter-middle absolute -top-[22] left-[50] z-0 h-full w-[78%] -rotate-1 rounded-lg lg:left-0 lg:top-0 lg:h-full lg:w-full lg:-rotate-2"></div>
    </div>
  );
}

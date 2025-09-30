'use client';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  BoltIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  FlagIcon
} from '@heroicons/react/24/solid';

const timelineData = [
  {
    title: '2016',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <AcademicCapIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">The Beginning</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Started my coding journey, watched coding videos and learned about web development. This was when I first heard about learning how to code.
        </p>
      </div>
    ),
  },
  {
    title: '2017',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <ComputerDesktopIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Commitment to Web Development</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Really hunkered down and decided this was the path I wanted to take as a web developer. Started learning PHP and WordPress.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">PHP fundamentals</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">WordPress basics</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">First internship at marketing company</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2018',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <PaintBrushIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Mastering the Fundamentals</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Worked at marketing companies, diving deep into WordPress, CSS, and design. Learned custom WordPress development and advanced custom fields.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Custom WordPress development</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Advanced Custom Fields</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Adobe XD & Figma design</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Color theory & typography</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2019',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <BoltIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">JavaScript & Design Mastery</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Really mastered WordPress and CSS while getting really good at JavaScript. Continued working with marketing companies and honing my design skills.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">JavaScript proficiency</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">WordPress mastery</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">UI/UX design principles</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Marketing company experience</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2020',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <RocketLaunchIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Entrepreneurial Leap</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          COVID hit and I had enough experience to work independently. Built a Chrome extension startup with my brother for Amazon dropshipping.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Chrome extension development</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">20K MRR achieved</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Amazon dropshipping automation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">First major startup success</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <CurrencyDollarIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Crypto & Blockchain Era</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Feeling confident in JavaScript skills, discovered crypto, NFTs, blockchain, and Ethereum. Dove deep into Solidity and launched NFT projects.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Solidity programming</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">NFT project launches</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">$28M+ code generation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Massive personal success</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Blockchain expertise</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <GlobeAltIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Success & Spiritual Journey</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Launched another ultra-successful NFT project ($300K). Experienced extreme burnout and began spiritual journey traveling the world.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">$300K NFT project</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">World travel (Peru, Thailand, Cambodia, Laos, India)</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">AI spiritual coach startup</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Spiritual growth & healing</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <CpuChipIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">AI Discovery & Freelancing</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Returned to Miami, started learning about AI, LLMs, RAG, and agents. Freelancing and building personal projects while exploring new technologies.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">AI/LLM expertise</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Agent automation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">RAG systems</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Freelance projects</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Moving out independently</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2024-2025',
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <FlagIcon className="h-4 w-4 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Full Circle & Content Creation</h4>
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Working on React Native/Expo/Next.js universal apps. Returned to WordPress full circle. Creating content, building in public.
        </p>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
          <h5 className="text-cyan-400 font-semibold mb-2">Key Achievements</h5>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">React Native & Expo</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">Universal apps</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">YouTube content (0xAquawolf)</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">AquaKit (57 stars)</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100 font-semibold">Portfolio open source (74 stars)</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
              <span className="text-sm text-gray-100">WordPress renaissance</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TimelineComponent() {
  return (
    <div id="timeline" className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}
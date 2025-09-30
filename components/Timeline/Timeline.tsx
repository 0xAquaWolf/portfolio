'use client';
import React from 'react';
import SectionHeading from '../SectionHeading';
import TimelineItem from './TimelineItem';
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

interface TimelineData {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  achievements?: string[];
}

const timelineData: TimelineData[] = [
  {
    year: '2016',
    title: 'The Beginning',
    description: 'Started my coding journey, watched coding videos and learned about web development. This was when I first heard about learning how to code.',
    icon: AcademicCapIcon,
  },
  {
    year: '2017',
    title: 'Commitment to Web Development',
    description: 'Really hunkered down and decided this was the path I wanted to take as a web developer. Started learning PHP and WordPress.',
    icon: ComputerDesktopIcon,
    achievements: ['PHP fundamentals', 'WordPress basics', 'First internship at marketing company']
  },
  {
    year: '2018',
    title: 'Mastering the Fundamentals',
    description: 'Worked at marketing companies, diving deep into WordPress, CSS, and design. Learned custom WordPress development and advanced custom fields.',
    icon: PaintBrushIcon,
    achievements: ['Custom WordPress development', 'Advanced Custom Fields', 'Adobe XD & Figma design', 'Color theory & typography']
  },
  {
    year: '2019',
    title: 'JavaScript & Design Mastery',
    description: 'Really mastered WordPress and CSS while getting really good at JavaScript. Continued working with marketing companies and honing my design skills.',
    icon: BoltIcon,
    achievements: ['JavaScript proficiency', 'WordPress mastery', 'UI/UX design principles', 'Marketing company experience']
  },
  {
    year: '2020',
    title: 'Entrepreneurial Leap',
    description: 'COVID hit and I had enough experience to work independently. Built a Chrome extension startup with my brother for Amazon dropshipping.',
    icon: RocketLaunchIcon,
    achievements: ['Chrome extension development', '20K MRR achieved', 'Amazon dropshipping automation', 'First major startup success']
  },
  {
    year: '2021',
    title: 'Crypto & Blockchain Era',
    description: 'Feeling confident in JavaScript skills, discovered crypto, NFTs, blockchain, and Ethereum. Dove deep into Solidity and launched NFT projects.',
    icon: CurrencyDollarIcon,
    achievements: ['Solidity programming', 'NFT project launches', '$28M+ code generation', 'Massive personal success', 'Blockchain expertise']
  },
  {
    year: '2022',
    title: 'Success & Spiritual Journey',
    description: 'Launched another ultra-successful NFT project ($300K). Experienced extreme burnout and began spiritual journey traveling the world.',
    icon: GlobeAltIcon,
    achievements: ['$300K NFT project', 'World travel (Peru, Thailand, Cambodia, Laos, India)', 'AI spiritual coach startup', 'Spiritual growth & healing']
  },
  {
    year: '2023',
    title: 'AI Discovery & Freelancing',
    description: 'Returned to Miami, started learning about AI, LLMs, RAG, and agents. Freelancing and building personal projects while exploring new technologies.',
    icon: CpuChipIcon,
    achievements: ['AI/LLM expertise', 'Agent automation', 'RAG systems', 'Freelance projects', 'Moving out independently']
  },
  {
    year: '2024-2025',
    title: 'Full Circle & Content Creation',
    description: 'Working on React Native/Expo/Next.js universal apps. Returned to WordPress full circle. Creating content, building in public.',
    icon: FlagIcon,
    achievements: ['React Native & Expo', 'Universal apps', 'YouTube content (0xAquawolf)', 'AquaKit (57 stars)', 'Portfolio open source (74 stars)', 'WordPress renaissance']
  }
];

export default function Timeline() {
  return (
    <div id="timeline" className="mx-auto max-w-[1000px] px-4 py-16 lg:py-24">
      <SectionHeading
        heading="My Developer Journey"
        subheading="8+ Years of Evolution: From PHP Beginner to Full-Stack Architect"
      />
      
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 lg:left-7"></div>
        
        {/* Timeline background glow */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-sm lg:left-7"></div>
        
        <div className="space-y-8 lg:space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              data={item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
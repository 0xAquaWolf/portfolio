import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'SunnySide 24/7 AC Business Website',
    description:
      'Designed and developed a complete business website from concept to launch - created all UI/UX designs in Figma then built the responsive site using Astro with custom branding and optimized user experience.',
    date: 'August 2025',
    imageUrl: '/projects/sunnyside-hvac.jpg',
    tags: ['Figma', 'UI/UX Design', 'Astro', 'JavaScript', 'Responsive Design', 'SEO'],
    slug: 'sunnyside-247-ac-website',
    links: [
      { title: 'Live Site', url: 'https://sunnyside247ac.com' },
      { title: 'GitHub', url: 'https://github.com/0xaquawolf/sunnyside-hvac' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'A family HVAC business in South Florida needed a professional online presence to compete with larger companies and attract new customers. Their existing web presence was outdated and failed to showcase their expertise or make it easy for customers to contact them for emergency services.\n\n' +
      'The challenge was creating a modern, mobile-friendly website that would rank well in local search results while clearly communicating their 24/7 availability and comprehensive service coverage across South Florida.\n\n' +
      '## Action\n\n' +
      'Started with complete UI/UX design process in Figma - creating wireframes, designing the user experience flow, and developing a comprehensive design system with the professional yellow/orange brand color scheme. Crafted every visual element from logo placement to call-to-action buttons with focus on conversion and user engagement.\n\n' +
      'Translated the Figma designs pixel-perfectly into a high-performance website using Astro for optimal loading speeds and SEO. Implemented responsive design patterns, integrated structured JSON-LD schema markup for local SEO, and built interactive elements including the logo marquee. Every design decision was intentionally crafted to convey warmth, reliability, and professional HVAC expertise.\n\n' +
      '## Results\n\n' +
      'The complete design-to-development process delivered exceptional results:\n\n' +
      '- Pixel-perfect implementation from Figma designs to live site\n' +
      '- 90+ Google PageSpeed performance score\n' +
      '- Professional brand presence across South Florida market\n' +
      '- Intuitive user experience optimized for customer conversion\n' +
      '- Mobile-first responsive design tested across all devices\n' +
      '- SEO-optimized for local HVAC searches\n' +
      '- Successfully represents family business values and expertise',
  },
  {
    title: 'AquaKit - AI Next.js Starter Kit',
    description:
      'Open-source Next.js starter kit for AI applications, live-streamed during development. Work in progress with 50+ GitHub stars, featuring modern tools, responsive design, and performance optimization. Full development process documented on YouTube.',
    date: 'September 2025',
    imageUrl: '/projects/aquakit.png',
    tags: ['Next.js', 'AI Integration', 'TypeScript', 'Convex', 'Open Source', 'Starter Kit'],
    slug: 'aquakit-ai-nextjs-starter',
    links: [
      { title: 'Live Site', url: 'https://aquakitt.com' },
      { title: 'GitHub (50+ ⭐)', url: 'https://github.com/0xAquaWolf/AquaKit' },
      { title: 'Live Stream Playlist', url: 'https://www.youtube.com/watch?v=4Q85SxxnUZc&list=PLwbt1uBf9iqDQyGKEJVj2iA3FFsNxMiXj&pp=gAQB' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Developers building AI-powered applications often struggle with setting up the foundational architecture, spending valuable time on boilerplate code instead of focusing on AI features. Most existing starter kits lack AI-specific optimizations and modern development patterns.\n\n' +
      'The challenge was creating a comprehensive starter kit that provides everything developers need to rapidly prototype and deploy AI applications while maintaining code quality and performance standards.\n\n' +
      '## Action\n\n' +
      'Built AquaKit as a modern Next.js starter kit specifically optimized for AI applications, featuring Convex backend integration, responsive design patterns, and performance optimization tools. The entire development process was live-streamed on YouTube, providing transparency and educational value to the developer community.\n\n' +
      'Implemented dynamic theme switching, system-level preferences detection, and comprehensive development utilities while documenting each step through live coding sessions. Open-sourced the project on GitHub with detailed documentation, examples, and best practices for AI application development.\n\n' +
      '## Results\n\n' +
      'AquaKit has gained significant traction in the developer community:\n\n' +
      '- 50+ GitHub stars from developers worldwide\n' +
      '- Educational YouTube series documenting full development process\n' +
      '- Active community engagement and contributions\n' +
      '- Comprehensive documentation and examples\n' +
      '- Modern development workflow with TypeScript\n' +
      '- Optimized performance and responsive design\n' +
      '- Ready-to-deploy AI application foundation\n' +
      '- Positive feedback from developers following the live streams',
  },
  {
    title: 'WordPress Headless CMS with Next.js',
    description:
      'Creating a modern headless WordPress setup with Next.js frontend, featuring custom Gutenberg blocks, GraphQL API, and advanced page building capabilities for optimal performance.',
    date: 'Coming Soon',
    imageUrl: '/projects/wordpress-nextjs.jpg',
    tags: ['WordPress', 'Next.js', 'TypeScript', 'GraphQL', 'PHP', 'React'],
    slug: 'wordpress-headless-nextjs',
    links: [
      { title: 'Preview Demo', url: '#coming-soon' },
      { title: 'GitHub', url: '#coming-soon' },
    ],
    fullDescription:
      '## Project Overview\n\n' +
      'This headless WordPress architecture will combine WordPress\' excellent content management with modern frontend performance using Next.js. The solution addresses the challenge of maintaining familiar content workflows while delivering blazing-fast user experiences.\n\n' +
      'The project will focus on advanced custom blocks, flexible page building capabilities, and seamless integration between WordPress admin and Next.js frontend without sacrificing site speed or SEO performance.\n\n' +
      '## Technical Approach\n\n' +
      'Building a comprehensive headless setup using GraphQL for efficient data fetching, custom Gutenberg blocks with TypeScript, and static generation with ISR for optimal performance. The solution will include a seamless preview system for content editors.\n\n' +
      'Integration features will include advanced custom field management, automated image optimization, and a comprehensive design system while maintaining full WordPress admin functionality.\n\n' +
      '## Expected Outcomes\n\n' +
      'The headless architecture will deliver exceptional performance and user satisfaction:\n\n' +
      '- 90+ Google PageSpeed scores across all pages\n' +
      '- 70% improvement in loading times over traditional WordPress\n' +
      '- 50% reduction in server costs through static generation\n' +
      '- Seamless content editing experience for clients\n' +
      '- Zero downtime deployments with preview capabilities\n' +
      '- Modern development workflow with TypeScript\n' +
      '- Advanced SEO optimization and Core Web Vitals',
  },
  {
    title: 'WordPress Custom Plugin Suite',
    description:
      'Developing a comprehensive plugin suite for WordPress optimization including performance monitoring, SEO enhancement, and advanced caching solutions for high-traffic websites.',
    date: 'Coming Soon',
    imageUrl: '/projects/wordpress-plugins.jpg',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Performance', 'SEO', 'Optimization'],
    slug: 'wordpress-custom-plugin-suite',
    links: [
      { title: 'Plugin Demo', url: '#coming-soon' },
      { title: 'GitHub', url: '#coming-soon' },
    ],
    fullDescription:
      '## Project Overview\n\n' +
      'This WordPress plugin suite will provide comprehensive website optimization tools designed for high-performance WordPress sites. The suite addresses common performance bottlenecks and SEO challenges while maintaining ease of use for non-technical users.\n\n' +
      'The plugins will focus on automated optimization, intelligent caching, and advanced SEO features that work seamlessly together to deliver measurable improvements in site performance and search rankings.\n\n' +
      '## Technical Approach\n\n' +
      'Built using WordPress best practices with modern PHP 8+ features, the plugin suite will implement advanced caching mechanisms, database query optimization, and intelligent image compression. Each plugin follows WordPress coding standards and includes comprehensive hooks for developer customization.\n\n' +
      'The suite will feature a unified admin interface with detailed performance analytics, automated optimization recommendations, and one-click implementation of performance improvements.\n\n' +
      '## Expected Outcomes\n\n' +
      'The plugin suite will deliver significant performance and SEO improvements:\n\n' +
      '- 50%+ improvement in page load times\n' +
      '- Automated image optimization and compression\n' +
      '- Advanced caching with intelligent cache warming\n' +
      '- Comprehensive SEO analysis and optimization\n' +
      '- Database cleanup and optimization tools\n' +
      '- Real-time performance monitoring dashboard\n' +
      '- Automated Core Web Vitals optimization',
  },
  {
    title: 'Modern WordPress Theme 2025',
    description:
      'Developing a modern WordPress theme with 2025\'s most demanded features: AI-powered design suggestions, Full Site Editing blocks, lightning-fast performance, mobile-first responsive design, and zero-code customization.',
    date: 'Coming Soon',
    imageUrl: '/projects/wordpress-modern-theme.jpg',
    tags: ['WordPress', 'Full Site Editing', 'AI Integration', 'Performance', 'Block Themes', 'Mobile-First'],
    slug: 'modern-wordpress-theme-2025',
    links: [
      { title: 'Theme Demo', url: '#coming-soon' },
      { title: 'GitHub', url: '#coming-soon' },
    ],
    fullDescription:
      '## Project Overview\n\n' +
      'This modern WordPress theme addresses the top user complaints and demands identified in 2025 research: slow themes, complex customization, and limited design freedom. The theme prioritizes performance, ease of use, and the features users actually request most.\n\n' +
      'Based on current market research, users want lightweight themes with AI assistance, drag-and-drop customization, mobile-first design, and Full Site Editing capabilities without sacrificing performance or requiring coding knowledge.\n\n' +
      '## Technical Approach\n\n' +
      'Building with WordPress\'s native Block Editor and Full Site Editing architecture for maximum compatibility and performance. The theme will feature AI-powered layout suggestions, lightweight clean code, optimized for Core Web Vitals, and extensive pre-built block patterns.\n\n' +
      'Key focus areas include eliminating theme bloat (primary user complaint), implementing granular responsive controls, zero-code customization, and seamless WooCommerce integration. All features will be accessible through WordPress\'s native editor.\n\n' +
      '## Expected Outcomes\n\n' +
      'The theme will deliver the most requested 2025 WordPress features:\n\n' +
      '- Lightning-fast performance with minimal code bloat\n' +
      '- AI-powered design suggestions and layout optimization\n' +
      '- Complete Full Site Editing with drag-and-drop customization\n' +
      '- Mobile-first responsive design with granular breakpoint controls\n' +
      '- 90+ Core Web Vitals scores and instant page loads\n' +
      '- 50+ pre-built professional block patterns and templates\n' +
      '- Zero-code customization for headers, footers, and layouts\n' +
      '- Native WooCommerce integration and PWA support',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="Showcasing completed work and upcoming Laravel & WordPress projects focused on scalable, high-performance solutions"
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
            tags={project.tags}
            slug={project.slug}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}

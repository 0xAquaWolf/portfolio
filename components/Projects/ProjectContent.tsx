'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import RelatedProjects from './RelatedProjects';
import { Project, projectsData } from './Projects';

interface ProjectContentProps extends Project {}

export default function ProjectContent({
  title,
  date,
  imageUrl,
  tags,
  links,
  fullDescription,
  description,
  slug,
}: ProjectContentProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determine the primary link - prioritize live site, then github
  const getPrimaryLink = () => {
    const liveLink = links.find(link => 
      link.title.toLowerCase().includes('live') || 
      link.title.toLowerCase().includes('site') ||
      link.title.toLowerCase().includes('demo')
    );
    
    if (liveLink) return liveLink;
    
    const githubLink = links.find(link => 
      link.title.toLowerCase().includes('github')
    );
    
    return githubLink || links[0]; // fallback to first link if no live or github
  };

  const primaryLink = getPrimaryLink();

  return (
    <div className="flex flex-col gap-8">
      {/* Back Button */}
      <div className="relative z-[9999] flex items-center">
        <Link
          href="/#projects"
          className="group flex items-center gap-2 rounded-full py-3 px-6 text-center text-sm text-white shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta xl:px-8 xl:py-3 xl:text-base"
        >
          <ArrowLeft className="h-4 w-4 transition-all group-hover:brightness-0" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <a
        href={primaryLink?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative aspect-video w-full overflow-hidden rounded-[60px] bg-gray-900 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* Loading Placeholder */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300 ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-32 w-32 animate-pulse rounded-full bg-gray-700" />
        </div>

        {/* Project Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } group-hover:scale-105`}
          priority
          onLoad={() => setIsLoading(false)}
        />

        {/* Overlay with link indicator */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <div className="absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm">
              <ExternalLink className="h-4 w-4" />
              {primaryLink?.title}
            </div>
          </div>
        </div>
      </a>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Project Description */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-100">{title}</h1>
            <span className="text-gray-400">{date}</span>
          </div>
          <article className="prose prose-purple prose-invert mt-6 max-w-none">
            <Markdown>{fullDescription}</Markdown>
          </article>
        </div>

        {/* Right Column - Metadata */}
        <div className="h-fit lg:sticky lg:top-8">
          <div className="space-y-8 rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            {/* Project Links */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Project Links
              </h2>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border border-purple-700/50 bg-purple-900/30 text-purple-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Embed for AquaKit */}
      {slug === 'aquakit-ai-nextjs-starter' && (
        <div className="mt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-100">
            🎥 Development Live Streams
          </h2>
          <p className="mb-6 text-gray-400">
            Watch the complete development process of AquaKit in this YouTube playlist. 
            See how the AI starter kit was built from scratch with real-time problem solving and explanations.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLwbt1uBf9iqDQyGKEJVj2iA3FFsNxMiXj"
              title="AquaKit Development Live Streams"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* YouTube Embed for Portfolio */}
      {slug === 'personal-portfolio-nextjs' && (
        <div className="mt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-100">
            🎥 Development Live Streams
          </h2>
          <p className="mb-6 text-gray-400">
            Watch the complete development process of this portfolio website in this YouTube playlist.
            See how this modern Next.js portfolio was built from scratch with Velite CMS, Drizzle ORM, and more.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLwbt1uBf9iqDWt3IRiW-GhrXrASUG6wsX"
              title="Portfolio Development Live Streams"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Related Projects */}
      <RelatedProjects
        currentProject={{
          title,
          date,
          imageUrl,
          tags,
          links,
          fullDescription,
          description,
          slug,
        }}
        allProjects={projectsData}
      />
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
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

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900">
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
          className={`object-cover transition-opacity duration-700 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          priority
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

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

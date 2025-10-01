'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  links: Array<{ title: string; url: string }>;
}

export default function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  tags,
  slug,
  links,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/projects/${slug}`} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-pink-500/20 hover:to-blue-500/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-4 hover:ring-purple-500/30" style={{maxHeight: '500px'}}>
        <div className="relative h-60 w-full overflow-hidden bg-gray-800">
          <Image
            src={imageError ? '/images/placeholder-project.svg' : imageUrl}
            alt={title}
            width={1600}
            height={900}
            className={`h-full w-full object-cover transition-all duration-500 ${
              isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
            } group-hover:scale-110`}
            onLoad={() => setIsLoading(false)}
            onError={() => setImageError(true)}
            priority
          />
          {date === 'Coming Soon' && (
            <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-sm font-semibold text-white shadow-lg">
              Coming Soon
            </div>
          )}
        </div>
        <div className="flex h-full flex-col justify-between gap-4 p-6">
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-100">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
                +{tags.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

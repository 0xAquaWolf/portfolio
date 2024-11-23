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
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 shadow-lg backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-purple-500/10">
        <div className="relative h-60 w-full overflow-hidden bg-gray-800">
          <Image
            src={imageError ? '/placeholder-project.jpg' : imageUrl}
            alt={title}
            width={1600}
            height={900}
            className={`h-full w-full object-cover transition-all duration-500 ${
              isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
            } group-hover:scale-110`}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setImageError(true)}
            priority
          />
        </div>
        <div className="flex h-full flex-col justify-between gap-4 p-6">
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-100">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

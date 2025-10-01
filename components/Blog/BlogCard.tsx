import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadTimeIcon from '@/public/images/svg/ReadTimeIcon.svg';

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  readTime: string;
  tags?: string[];
}

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  // console.log(blog);
  return (
    <Link href={blog.url} className="block">
      <div className="relative h-[31.25rem] w-64 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[3px] shadow-md transition-all duration-300 hover:scale-105 hover:skew-y-1 lg:w-80" style={{maxHeight: '500px'}}>
        <div className="relative h-full w-full rounded-[calc(1rem-3px)] bg-white overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <div className="mb-2 flex items-center space-x-3">
            <Image
              src="/images/jpeg/featured-blogs/blog-aquawolf-logo.png"
              alt="Author avatar"
              width={40}
              height={40}
              className="rounded-2xl"
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <Image
                  src={ReadTimeIcon}
                  alt="Read Time"
                  width={16}
                  height={16}
                />
                <span className="bg-gradient-to-r from-[#FCD3ED] to-[#F690DF] bg-clip-text font-medium text-transparent">
                  {blog.readTime} read
                </span>
              </div>
              <p className="text-sm text-white">Written by 0xAquaWolf</p>
            </div>
          </div>
          <div className="mt-2 overflow-hidden">
            <h3 className="line-clamp-2 text-lg font-semibold text-white">
              {blog.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-300">
              {blog.description}
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {blog.tags.slice(0, 5).map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-600/20 px-2 py-1 text-xs text-purple-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 5 && (
                  <span className="rounded-full bg-gray-600/20 px-2 py-1 text-xs text-gray-300 backdrop-blur-sm">
                    +{blog.tags.length - 5} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        {/* bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#07070C] to-transparent"></div>
        </div>
      </div>
    </Link>
  );
}

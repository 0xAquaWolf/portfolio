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
}

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  // console.log(blog);
  return (
    <Link href={blog.url} className="block">
      <div className="relative h-[24rem] w-64 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-md lg:h-[30rem] lg:w-80">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
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
            <h3 className="truncate text-lg font-semibold text-white">
              {blog.title}
            </h3>
            <p className="mt-1 truncate text-sm text-gray-300">
              {blog.description}
            </p>
          </div>
        </div>
        {/* bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#07070C] to-transparent"></div>
      </div>
    </Link>
  );
}

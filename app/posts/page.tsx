import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { posts } from '#site/content';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Posts() {
  return (
    <div className="lg:mt-30 relative z-10 mb-8 mt-10 px-2">
      <div className="mx-auto mb-8 mt-4 max-w-[1440px]">
        <h1 className="text-center text-4xl font-bold">Posts</h1>
        <h2 className="mb-12 text-center">
          Thoughts, ideas, and insights about web development, web3, AI, and
          machine learning.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={index} href={post.slug} className="block">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-4">
                    <div className="mb-2 flex items-center">
                      <Image
                        src="/images/jpeg/featured-blogs/blog-aquawolf-logo.png"
                        alt="Author avatar"
                        width={25}
                        height={25}
                        className="mr-2 rounded-full"
                      />
                      <span className="text-sm text-gray-300">
                        Written by 0xAquaWolf
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-4">{post.readTime} read</span>
                      <time dateTime={post.date}>
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                      </time>
                    </div>
                  </div>
                  <div className="flex items-center self-end text-purple-400">
                    <span className="font-medium">Read more</span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

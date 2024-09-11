import React from 'react';
import SectionHeading from '../SectionHeading';
import BlogCard from './BlogCard';
import { allPosts as featuredBlogs } from 'contentlayer/generated';

// console.log(featuredBlogs);

// interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   imageUrl: string;
//   avatarUrl: string;
// }

export default function FeaturedBlogs() {
  return (
    <>
      <SectionHeading
        heading="AI & Tech Blog"
        subheading="Documenting all of my learnings and teachings in AI and technology."
      />
      <div className="rounded-2xllg:mt-40 mt-20">
        <div className="mt-8 overflow-x-auto rounded-2xl pb-4">
          <div className="flex space-x-6 px-4">
            {featuredBlogs.map((blog, idx) => (
              <BlogCard key={idx} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

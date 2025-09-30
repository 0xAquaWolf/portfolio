import React from 'react';
import SectionHeading from '../SectionHeading';
import BlogCard from './BlogCard';
import { posts } from '#site/content';
// console.log(posts)

export default function FeaturedBlogs() {
  return (
    <div id="blog" className="mt-20 lg:mt-40">
      <SectionHeading
        heading="Blog"
        subheading="Documenting my expertise in PHP, WordPress, and Laravel development, plus insights on AI integration."
      />
      <div className="rounded-2xllg:mt-40 mt-20">
        <div className="mt-8 overflow-x-auto rounded-2xl pb-4">
          <div className="flex space-x-6 px-4">
            {posts
              .sort((a, b) => {
                // Put Mautic post at the end, keep others in original order
                if (a.slug.includes('mautic')) return 1;
                if (b.slug.includes('mautic')) return -1;
                return 0;
              })
              .map((post, idx) => (
                <BlogCard
                  key={idx}
                  blog={{
                    title: post.title,
                    description: post.description,
                    imageUrl: post.imageUrl,
                    url: post.slug,
                    readTime: post.readTime,
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import SectionHeading from '../SectionHeading';
import BlogCard from './BlogCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  avatarUrl: string;
}

export const featuredBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI',
    excerpt:
      'Exploring the latest trends in artificial intelligence and their potential impact.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-1.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    excerpt:
      "A beginner's guide to understanding the fundamentals of machine learning algorithms.",
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-2.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '3',
    title: 'Deep Learning in Computer Vision',
    excerpt:
      'How neural networks are revolutionizing image recognition and object detection.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-3.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '4',
    title: 'Natural Language Processing Advancements',
    excerpt:
      'Recent breakthroughs in NLP and their applications in everyday technology.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-4.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '5',
    title: 'Ethical AI: Challenges and Solutions',
    excerpt:
      'Addressing the ethical concerns surrounding AI development and deployment.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-1.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '6',
    title: 'Reinforcement Learning in Robotics',
    excerpt:
      'How AI is enabling robots to learn and adapt in complex environments.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-2.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '7',
    title: 'AI in Healthcare: Diagnosis and Treatment',
    excerpt:
      'Exploring the transformative potential of AI in medical applications.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-3.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '8',
    title: 'The Rise of Generative AI',
    excerpt:
      'Understanding the capabilities and implications of AI that can create content.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-4.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '9',
    title: 'Quantum Computing and AI',
    excerpt:
      'The intersection of quantum computing and AI: what it means for the future.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-1.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '10',
    title: 'AI in Finance: Predictive Analytics',
    excerpt: 'How AI is reshaping financial forecasting and risk management.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-2.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '11',
    title: 'Edge AI: Computing at the Source',
    excerpt: 'The benefits and challenges of implementing AI on edge devices.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-3.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
  {
    id: '12',
    title: 'AI and Cybersecurity',
    excerpt:
      'Leveraging AI to enhance digital security and combat cyber threats.',
    imageUrl: '/images/jpeg/featured-blogs/PlaceHolderBlog-4.jpg',
    avatarUrl: '/images/jpeg/featured-blogs/blog-aquawolf-logo.png',
  },
];

export default function FeaturedBlogs() {
  return (
    <div className="mt-20 rounded-lg lg:ml-64 lg:mt-40">
      <SectionHeading
        heading="AI & Tech Blog"
        subheading="Documenting all of my learnings and teachings in AI and technology."
      />
      <div className="mt-8 overflow-x-auto rounded-2xl pb-4">
        <div className="flex space-x-6 px-4">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

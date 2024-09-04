import React from "react";
import Image from "next/image";
import { CommentData } from "./CommentData";
import SectionHeading from "../SectionHeading";

const TestimonialCard: React.FC<CommentData> = ({
  username,
  handle,
  avatarUrl,
  comment,
  isYouTuber,
}) => (
  <div className="mb-4 rounded-lg border-[1px] border-white/10 bg-gray-600/20 p-4">
    <div className="mb-2 flex items-center">
      <div className="flex min-w-0 flex-grow items-center">
        <Image
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          className="mr-4 select-none rounded-full"
        />
        <div className="min-w-0 flex-shrink">
          <p className="truncate font-semibold text-white">{username}</p>
          <p className="truncate text-sm text-gray-400">{handle}</p>
        </div>
      </div>
      {isYouTuber && (
        <div className="ml-2 flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      )}
    </div>
    <p className="text-white">{comment}</p>
  </div>
);

const ScrollingTestimonials: React.FC<{ testimonials: CommentData[] }> = ({
  testimonials,
}) => {
  // Split testimonials into three groups
  const splitTestimonials = (testis: CommentData[]): CommentData[][] => {
    const third = Math.ceil(testis.length / 3);
    return [
      testis.slice(0, third),
      testis.slice(third, 2 * third),
      testis.slice(2 * third),
    ];
  };

  const [group1, group2, group3] = splitTestimonials(testimonials);

  return (
    <div className="3xl:max-w-[1440px] mx-auto mt-32 overflow-hidden py-16 lg:max-w-[1100px]">
      <SectionHeading
        heading="Loved by Thousands of People"
        subheading="Here's what some of my viewers have to say about 0xAquaWolf"
      />
      <div className="relative">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Mobile view: single column */}
          <div className="marquee-slow h-[600px] overflow-hidden px-10 md:hidden">
            <div className="animate-marquee">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
              {/* Duplicate testimonials to create seamless loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`dup-${i}`} {...testimonial} />
              ))}
            </div>
          </div>
          {/* Desktop view: three columns */}
          {[group1, group2, group3].map((group, index) => (
            <div
              key={index}
              className={`hidden h-[600px] overflow-hidden md:block ${
                index === 1 ? "marquee-slow" : "marquee-fast"
              }`}
            >
              <div className="animate-marquee">
                {group.map((testimonial, i) => (
                  <TestimonialCard key={i} {...testimonial} />
                ))}
                {/* Duplicate testimonials to create seamless loop */}
                {group.map((testimonial, i) => (
                  <TestimonialCard key={`dup-${i}`} {...testimonial} />
                ))}
              </div>
            </div>
          ))}
          {/* top shadow */}
          <div className="absolute left-0 right-0 top-0 h-1/4 bg-gradient-to-t from-transparent to-black"></div>
          {/* bottom shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;

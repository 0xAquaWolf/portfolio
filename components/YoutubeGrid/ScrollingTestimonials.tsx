import React from "react";
import Image from "next/image";
import { CommentData } from "./CommentData";

const TestimonialCard: React.FC<CommentData> = ({
  username,
  handle,
  avatarUrl,
  comment,
  isYouTuber,
}) => (
  <div className="bg-gray-600/20 p-4 rounded-lg mb-4 border-[1px] border-white/10">
    <div className="flex items-center mb-2">
      <div className="flex items-center flex-grow min-w-0">
        <Image
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          className="rounded-full select-none mr-4"
        />
        <div className="min-w-0 flex-shrink">
          <p className="text-white font-semibold truncate">{username}</p>
          <p className="text-gray-400 text-sm truncate">{handle}</p>
        </div>
      </div>
      {isYouTuber && (
        <div className="flex-shrink-0 ml-2">
          <svg
            className="w-5 h-5 text-red-500"
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
    <div className="lg:px-[200px] py-16 overflow-hidden">
      <h2 className="text-1xl lg:text-3xl font-bold text-center text-white mb-2">
        Loved by Thousands of People
      </h2>
      <p className="text-sm w-[80%] mx-auto lg:text-xl text-center text-gray-300 mb-8">
        {"Here's what some of my viewers have to say about 0xAquaWolf"}
      </p>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mobile view: single column */}
          <div className="md:hidden overflow-hidden h-[600px] marquee-slow px-10">
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
              className={`hidden md:block overflow-hidden h-[600px] ${
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
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-t from-transparent to-black"></div>
          {/* bottom shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t to-transparent from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;

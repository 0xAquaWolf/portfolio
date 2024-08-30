import React from "react";
import Image from "next/image";

interface TestimonialProps {
  username: string;
  handle: string;
  avatarUrl: string;
  comment: string;
  isYouTuber: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  username,
  handle,
  avatarUrl,
  comment,
  isYouTuber,
}) => (
  <div className="bg-gray-600/20 p-4 rounded-lg mb-4">
    <div className="flex items-center space-x-2 mb-2 justify-between">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src={avatarUrl}
            alt={`${username}'s avatar`}
            width={40}
            height={40}
            className="rounded-full select-none"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white font-semibold truncate">{username}</p>
          <p className="text-gray-400 text-sm truncate">{handle}</p>
        </div>
      </div>
      <div>
        {isYouTuber && (
          <svg
            className="w-5 h-5 text-red-500 ml-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )}
      </div>
    </div>
    <p className="text-white">{comment}</p>
  </div>
);

const ScrollingTestimonials: React.FC<{ testimonials: TestimonialProps[] }> = ({
  testimonials,
}) => {
  // Split testimonials into three groups
  const splitTestimonials = (
    testis: TestimonialProps[]
  ): TestimonialProps[][] => {
    const third = Math.ceil(testis.length / 3);
    return [
      testis.slice(0, third),
      testis.slice(third, 2 * third),
      testis.slice(2 * third),
    ];
  };

  const [group1, group2, group3] = splitTestimonials(testimonials);
  console.log({ group1, group2, group3 });
  return (
    <div className="lg:px-[200px] py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-2">
        Loved by Thousands of People
      </h2>
      <p className="text-xl text-center text-gray-300 mb-8">
        Here's what some of my viewers have to say about 0xAquaWolf
      </p>

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
      </div>
    </div>
  );
};

export default ScrollingTestimonials;

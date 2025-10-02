import React from 'react';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
}

export default function SectionHeading({
  heading,
  subheading,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 lg:mb-10 text-white">
      <h2 className="text-1xl mb-2 text-center font-bold text-white lg:text-3xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mx-auto mb-8 w-[90%] text-center text-sm text-gray-300/75 lg:text-lg">
          {subheading}
        </p>
      )}
    </div>
  );
}

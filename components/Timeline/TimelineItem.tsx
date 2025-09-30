'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface TimelineData {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  achievements?: string[];
}

interface TimelineItemProps {
  data: TimelineData;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ data, index, isLast }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = data.icon;

  return (
    <div className="group relative flex items-start space-x-4 lg:space-x-8">
      {/* Timeline marker */}
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg ring-4 ring-gray-900/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/25 lg:h-14 lg:w-14">
        <IconComponent className="h-5 w-5 lg:h-7 lg:w-7" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 lg:pb-12">
        <div className="group-hover:scale-[1.02] transition-all duration-300 rounded-xl bg-gray-900/60 p-6 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/60 hover:bg-gray-900/80 lg:p-8 shadow-xl hover:shadow-2xl">
          {/* Year and Title */}
          <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-base font-bold text-blue-300 ring-1 ring-blue-500/30 lg:text-lg">{data.year}</span>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors lg:text-2xl">{data.title}</h3>
          </div>

          {/* Description */}
          <p className="mb-6 text-base text-gray-200 leading-relaxed lg:text-lg">
            {data.description}
          </p>

          {/* Achievements */}
          {data.achievements && (
            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group/button mb-4 flex items-center gap-2 text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors lg:text-lg"
              >
                <ChevronDownIcon 
                  className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                />
                {isExpanded ? 'Hide' : 'Show'} Key Achievements
              </button>

              {isExpanded && (
                <div className="mt-4 space-y-3 bg-gray-800/30 rounded-lg p-4 border border-gray-600/20">
                  {data.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
                      <span className="text-sm text-gray-100 lg:text-base leading-relaxed font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
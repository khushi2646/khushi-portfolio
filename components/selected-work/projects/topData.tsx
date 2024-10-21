// components/ProjectDetails.tsx
import React from "react";

type ProjectDetailsProps = {
  title: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
};

const TopData: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  tags,
  role,
  timeline,
}) => {
  return (
    <div className="max-w-[1440px] h-full flex items-center justify-center mx-auto">
    <div className="flex w-full gap-20">
      {/* Left section */}
      <div className="w-[50%] space-y-7">
        {/* Title */}
        <h1 className="text-xl font-clashGrotesk uppercase font-semibold text-grey-800">
          {title}
        </h1>

        {/* Description */}
        <p className="font-aileron font-semibold text-md2 text-grey-600">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-700 border border-pink-200 px-3 py-2 rounded-sm font-semibold text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div className="w-[50%] flex flex-col justify-between">
        {/* My Role */}
        <div className="space-y-2">
          <h3 className="text-md2 font-semibold text-grey-800">MY ROLE</h3>
          <p className="font-aileron text-md text-grey-600">{role}</p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <h3 className="text-md2 font-semibold text-grey-800">TIMELINE</h3>
          <p className="font-aileron text-md text-grey-600">{timeline}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopData;

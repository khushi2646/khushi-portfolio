

import Image from 'next/image';

const workExperienceData = [
  {
    logo: "/link.svg", // Replace with your image paths
    title: "Senior Product Designer",
    company: "Company ABC",
    subtitle: "2020 - Present",
  },
  {
    logo: "/link.svg",
    title: "UI/UX Designer",
    company: "Company ABC",
    subtitle: "2018 - 2020",
  },
  {
    logo: "/link.svg",
    title: "Junior Designer",
    company: "Company ABC",
    subtitle: "2016 - 2018",
  },
];

const WorkExperience = () => {
  return (
    <section className="max-w-[1440px] h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10">
      <div className=" w-full">
        <div className="space-y-10 w-full mb-28">
          <div className="h-0.5 bg-grey-200/60"></div>
          <div className="flex">
            <div className="w-[55%] text-md2 font-clashGrotesk font-medium text-grey-700">
              Work Experience
            </div>
            <div className="w-[45%] gap-y-5 flex flex-col">
            <div className="space-y-5">
      {workExperienceData.map((experience, index) => (
        <div key={index} className="space-y-5">
        <div  className="flex items-center space-x-5 rounded-lg">
          {/* Left - Logo */}
          <div className="w-16 h-16 bg-grey-100 rounded-md flex-shrink-0 flex justify-center items-center">
            <Image
              src={experience.logo}
              alt={`${experience.title} logo`}
              width={40}
              height={40}
              className=" items-center rounded-lg"
            />
          </div>
          {/* Right - Title and Subtitle */}
          <div className='flex flex-col justify-between'>
            <div className="flex space-x-2 mb-2">
            <h3 className="text-md font font-aileron font-normal text-grey-600">{experience.title} at</h3>
            <h3 className="text-md font font-aileron font-semibold text-grey-700">{experience.company}</h3>
            </div>
            <p className="text-md text-grey-400">{experience.subtitle}</p>
          </div>
          </div>
          <div className="h-[1px] bg-grey-200"></div>

        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

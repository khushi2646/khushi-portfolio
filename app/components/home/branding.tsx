"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// CustomLink component to handle the hover effect on the arrow
const CustomLink = () => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={{
        pathname: "/selected-work",
        query: { tab: "branding" }, // Passing query parameter to indicate the tab
      }}
      className="text-pink-400 bg-pink-100 hover:bg-pink-400 hover:text-pink-100 px-4 py-2 rounded-full text-sm font-semibold font-aileron border border-pink-300 hover:border-pink-600 flex gap-2 items-center text-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      See More{" "}
      <div className="text-pink-400">
        <Image
          src={hover ? "/WhiteArrow.svg" : "/PinkArrow.svg"}
          alt="Arrow"
          width={13}
          height={13}
        />
      </div>
    </Link>
  );
};


const Branding = () => {
  return (
    <section className="max-w-[1440px] h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10 mt-24 ">
      <div className=" space-y-8 w-full ">
        <div className="flex items-center justify-between">
          <div className=" space-y-1.5 ">
            <div className=" text-lg font-aileron font-semibold  text-grey-700">
              Selected Work
            </div>
            <div className=" text-md2 font-aileron font-semibold italic text-grey-500">
              Branding
            </div>
          </div>
          <div className=" ">
          <CustomLink />
          </div>
        </div>
        <div className="gap-5 flex ">
            <div className="w-1/3 h-fit bg-grey-100 rounded-xl p-3 space-y-3 ">
            <div className="bg-white px-2 py-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                <div className=" font-semibold text-md2 font-aileron text-grey-700">Sicada X</div>
                <div className=" font-semibold text-md2 font-aileron text-grey-500">2024</div>
                </div>
            </div>
            <div className="bg-gray-600 aspect-square rounded-lg"></div>
            </div>
            <div className="w-1/3 h-fit bg-grey-100 rounded-xl p-3 space-y-3 ">
            <div className="bg-white px-2 py-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                <div className=" font-semibold text-md2 font-aileron text-grey-700">Sicada X</div>
                <div className=" font-semibold text-md2 font-aileron text-grey-500">2024</div>
                </div>
            </div>
            <div className="bg-gray-600 aspect-square rounded-lg"></div>
            </div>
            <div className="w-1/3 h-fit bg-grey-100 rounded-xl p-3 space-y-3 ">
            <div className="bg-white px-2 py-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                <div className=" font-semibold text-md2 font-aileron text-grey-700">Sicada X</div>
                <div className=" font-semibold text-md2 font-aileron text-grey-500">2024</div>
                </div>
            </div>
            <div className="bg-gray-600 aspect-square rounded-lg"></div>
            </div>
            

            
        </div>
      </div>
    </section>
  );
};

export default Branding;

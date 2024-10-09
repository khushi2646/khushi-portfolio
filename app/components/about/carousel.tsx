"use client";

import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  // Array of images for the carousel
  const images = [
    "/Khushi1.jpg",
    "/Khushi2.jpg",
    "/Khushi1.jpg",
    "/Khushi2.jpg",
    "/Khushi1.jpg",
    "/Khushi2.jpg",
    "/Khushi1.jpg",
  ];

  // State to track the starting index of visible images
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to manage hover state for arrows
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  // Function to go to the previous set of images
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 5 : prevIndex - 1
    );
  };

  // Function to go to the next set of images
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 5) % images.length
    );
  };

  return (
    <div className="relative max-w-[1440px] h-full mx-auto mb-28 px-4 sm:px-6 lg:px-8">
      {/* Image Display */}
      <div className="flex overflow-hidden space-x-4">
        {images
          .slice(currentIndex, currentIndex + 5)
          .concat(
            images.slice(0, Math.max(0, currentIndex + 5 - images.length))
          )
          .map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ flex: "1 0 calc(20% - 16px)", height: "300px" }} // Each image takes up 20% of the container width
            >
              <Image
                src={image}
                alt={`Carousel Image ${index + 1}`}
                width={180}
                height={270}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 font-aileron font-semibold text-pink-400 bg-pink-100 hover:bg-pink-400 hover:text-pink-100 border-[#FAFAFA] border-2 px-3 py-3 rounded-full flex justify-center items-center"
        onMouseEnter={() => setIsHoveredPrev(true)}
        onMouseLeave={() => setIsHoveredPrev(false)}
        onClick={prevImage}
      >
        <Image
          src={isHoveredPrev ? "/WhiteArrow.svg" : "/PinkArrow.svg"}
          alt="Previous Arrow"
          width={20}
          height={20}
        />
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 font-aileron font-semibold text-pink-400 bg-pink-100 hover:bg-pink-400 hover:text-pink-100 border-[#FAFAFA] border-2 px-3 py-3 rounded-full flex justify-center items-center"
        onMouseEnter={() => setIsHoveredNext(true)}
        onMouseLeave={() => setIsHoveredNext(false)}
        onClick={nextImage}
      >
        <Image
          src={isHoveredNext ? "/WhiteArrow.svg" : "/PinkArrow.svg"}
          alt="Next Arrow"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Carousel;

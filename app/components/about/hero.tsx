import Image from "next/image";

const Hero = () => {
    return (
      <section className="max-w-[1440px] h-[75vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10 py-40">
        <div className=" w-[40%] flex flex-col justify-between h-full   ">
  <div className="">
          <div className="lg:text-lg2 font-clashGrotesk font-medium text-pink-500 leading-tight">
            Hey, I am Khushi.
          </div>
          </div>
          <div className="space-y-6">
          <h1 className="lg:text-lg2 font-clashGrotesk font-medium text-grey-700 leading-tight ">
          Design isn’t just what it looks like, it’s how it works—and how it makes you feel.
          </h1>
          <div className=" text-sm font-aileron text-grey-500 font-normal">
          I believe in creating designs that spark a connection, solve real-world problems, and leave a lasting impact.
          </div>
          </div>
        </div>
        <div className=" w-[60%] h-fit mb-20 ">
        <div className="relative w-[400px] h-[350px] mx-auto">
      {/* First Image */}
      <div className="absolute top-0 left-0 w-[340px] h-[400px] border-8  transform rotate-[-9deg]">
        <Image
          src="/Khushi1.jpg" // Replace with your image path
          alt="First Image"
          layout="fill"
          objectFit="cover"
          className=" shadow-lg"
        />
      </div>

      {/* Second Image */}
      <div className="absolute top-6 left-60 w-[340px] h-[400px] border-8  transform rotate-[6deg]">
        <Image
          src="/Khushi2.jpg" // Replace with your image path
          alt="Second Image"
          layout="fill"
          objectFit="cover"
          className=" shadow-lg"
        />
      </div>
    </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
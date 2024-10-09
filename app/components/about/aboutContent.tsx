import Image from "next/image";

const AboutContent = () => {
  return (
    <section className="max-w-[1440px] h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10">
      <div className=" w-full">
        {/* Journey */}
        <div className="space-y-10 w-full mb-28">
          <div className="h-0.5 bg-grey-200/60"></div>
          <div className="flex">
            <div className="w-[55%] text-md2 font-clashGrotesk font-medium text-grey-700">
              My Journey
            </div>
            <div className="w-[45%] gap-y-5 flex flex-col">
              <div className=" text-sm font-aileron text-grey-500 font-normal">
                Every designer has a story. Mine began with a passion for
                graphic design and illustrations, which soon expanded into a
                broader creative career. Early on, I joined a startup where I
                had the opportunity to be an all-in-one designer. This hands-on
                experience taught me the importance of adaptability and
                creativity, and it shaped my approach to problem-solving.
              </div>
              <div className=" text-sm font-aileron text-grey-500 font-normal">
                As I continued to grow, I transitioned into the role of Head of
                Design, where I led the development of brand identities and
                managed the entire digital product suite. It was a rewarding
                challenge that further deepened my expertise in building
                cohesive, user-focused solutions.{" "}
              </div>
            </div>
          </div>
        </div>
        {/* Industries */}
        <div className="space-y-10 w-full mb-28 ">
          <div className="h-0.5 bg-grey-200/60"></div>
          <div className="flex">
            <div className="w-[55%] text-md2 font-clashGrotesk font-medium text-grey-700">
              Industries I’ve Worked In
            </div>
            <div className="w-[45%] gap-4 flex">
              <div className=" text-sm px-3 py-2 bg-pink-200 rounded-sm w-fit font-aileron text-pink-700 font-semibold">
                Fintech
              </div>
              <div className=" text-sm px-3 py-2 bg-pink-200 rounded-sm w-fit font-aileron text-pink-700 font-semibold">
                Web3
              </div>{" "}
              <div className=" text-sm px-3 py-2 bg-pink-200 rounded-sm w-fit font-aileron text-pink-700 font-semibold">
                AI
              </div>{" "}
              <div className=" text-sm px-3 py-2 bg-pink-200 rounded-sm w-fit font-aileron text-pink-700 font-semibold">
                eCommerce
              </div>
              <div className=" text-sm px-3 py-2 bg-pink-200 rounded-sm w-fit font-aileron text-pink-700 font-semibold">
                B2B Marketplaces
              </div>
            </div>
          </div>
        </div>
        {/* Today */}
        <div className="space-y-10 w-full mb-28">
          <div className="h-0.5 bg-grey-200/60"></div>
          <div className="flex">
            <div className="w-[55%] text-md2 font-clashGrotesk font-medium text-grey-700">
              Today
            </div>
            <div className="w-[45%] gap-y-5 flex flex-col">
              <div className=" text-sm font-aileron text-grey-700 font-semibold ">
                Co-Running a Tech Development Agency
              </div>
              <div className=" text-sm font-aileron text-grey-500 font-normal">
                I currently co-run a tech development agency with my partners,
                where our team focuses on developing innovative digital
                solutions for our clients. From startups to established
                companies, we help businesses turn their ideas into functional,
                beautifully designed products that drive results.
              </div>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-aileron font-semibold text-sm underline flex gap-2"
              >
                        <Image
          src="Link.svg" // Replace with your image path
          alt="Link"
          height={20}
          width={20}
        />
                dotenv.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;

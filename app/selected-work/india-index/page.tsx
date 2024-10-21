import TopData from "@/components/selected-work/projects/topData";

export default function IndiaIndex() {
  return (
    <div className=" max-w-[1440px] h-full  mx-auto px-4 sm:px-6 lg:px-10 ">
      {/* Top data */}
      <div className="mb-20 mt-16 ">
        <TopData
        title="India Index"
        description="Developing an innovative digital asset SaaS platform, enhancing transaction efficiency for financial service providers and corporates."
        tags={["UX Design", "UI Design", "Digital Product", "B2B Marketplaces"]}
        role="Working as an end-to-end designer I took ownership of designing core features and played a key role in refining the design strategy and technology stack for the initial phase of the product MVP. This included participating in feature development planning and estimations."
        timeline="2024"
        />
      </div>
      {/* hero image */}
      <div className="bg-grey-100 w-full h-[40vw] mb-16"></div>
      {/* content */}
      <div className="space-y-10 w-full mb-28">
          <div className="flex">
            <div className="w-[50%] text-md2 font-clashGrotesk font-medium text-grey-700">
              About India Index
            </div>
            <div className="w-[50%] gap-y-5 flex flex-col">
              <div className=" text-md font-aileron text-grey-500 font-normal">
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
    </div>
  );
}

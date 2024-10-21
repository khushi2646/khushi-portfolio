const Hero = () => {
  return (
    <section className="max-w-[1440px] h-[80vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10 ">
      <div className=" space-y-5 ">
        <div className=" text-green-400 font-aileron font-semibold  bg-green-200/15 px-4 py-2 text-xs rounded-full border-green-200 border w-fit ">
          Available for opportunities
        </div>

        <h1 className="lg:text-xl font-aileron font-regular text-grey-700 leading-tight w-[75%] ">
          As a{" "}
          <span className="font-aileron font-semibold italic text-pink-400">
            Digital Product & Brand Designer
          </span>
          , I thrive on building innovative products from the ground up,
          transforming ideas into impactful designs that resonate.
        </h1>
        <div className=" text-sm font-aileron text-grey-500 font-normal w-[35%]">
          Drawing on over 3 years of design experience, I’ve partnered with
          founders, product managers and companies to bring their visions to
          life through intuitive digital products and compelling brand
          identities.
        </div>
      </div>
    </section>
  );
};

export default Hero;

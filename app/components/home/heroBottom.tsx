const HeroBottom = () => {
    return (
      <section className="max-w-[1440px] h-[10vh] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10 ">
        <div className=" space-y-2.5 w-full ">
            <div className="flex items-center justify-between">
                <div className=" space-y-1 ">
                    <div className=" text-sm font-aileron font-semibold text-grey-700">06</div>
                    <div className=" text-xxs font-aileron font-normal text-grey-500">Independent Projects</div>
                </div>
                <div className=" space-y-1 text-right ">
                    <div className=" text-sm font-aileron font-semibold text-grey-700">Mumbai, India</div>
                    <div className=" text-xxs font-aileron font-normal text-grey-500">Base Location</div>
                </div>
            </div>
            <div className="h-0.5 bg-grey-200"></div>
        </div>
      </section>
    );
  };
  
  export default HeroBottom;
  
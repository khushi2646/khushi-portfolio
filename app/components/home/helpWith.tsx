import HelpAccordion from "./helpAccordian";

const HelpWith = () => {
    return (
        <section className="max-w-[1440px] h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10 mt-24">
          <div className="space-y-7 w-full"> {/* Ensure w-full is applied here */}
            <div className="space-y-2.5 w-full">
              <div className="text-lg font-aileron font-semibold text-pink-500 italic">I can help you with</div>
              <div className="h-0.5 bg-grey-200/60"></div>
            </div>
            <div className="w-full">
              <HelpAccordion /> {/* Accordion is inside a w-full container */}
            </div>
          </div>
        </section>
    );
};

export default HelpWith;

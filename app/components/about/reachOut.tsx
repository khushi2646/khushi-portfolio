import Image from "next/image";

const ReachOut = () => {
  return (
    <section className="max-w-[1440px] h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-10">
      <div className="w-full">
        <div className="space-y-10 w-full mb-28">
          <div className="h-0.5 bg-grey-200/60"></div>
          <div className="flex">
            <div className="w-[55%] text-md2 font-clashGrotesk font-medium text-grey-700">
              Reach Out
            </div>
            <div className="w-[45%] flex flex-col">
              {/* Email link */}
              <div className="text-md font font-aileron font-normal text-grey-600 py-6 border-b border-grey-200">
                Email me at{" "}
                <a
                  href="mailto:khushi@dotenv.in"
                  className="underline text-pink-500"
                >
                  khushi@dotenv.in
                </a>
              </div>

              {/* LinkedIn link */}
              <div className="text-md font font-aileron font-normal text-grey-600 hover:text-pink-500 hover:underline py-6 border-b border-grey-200">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              {/* Download CV link */}
              <div className="text-md font font-aileron font-normal text-grey-600 hover:text-pink-500 hover:underline py-6 border-b border-grey-200">
                <a
                  href="/path-to-cv.pdf"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;

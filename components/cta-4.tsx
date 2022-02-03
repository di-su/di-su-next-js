import ScrollAnimation from "react-animate-on-scroll";

interface Cta4 {
  title: string;
  description: string;
  ctaText: string;
  secondaryCtaText: string;
  subHeader1: string;
  subDescription1: string;
  subHeader2: string;
  subDescription2: string;
}

export default function Cta4({
  title,
  description,
  ctaText,
  secondaryCtaText,
  subHeader1,
  subDescription1,
  subHeader2,
  subDescription2
}: Cta4) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
          <ScrollAnimation
            className=" lg:col-span-2 lg:pr-8 xl:pr-24"
            animateOnce
            animateIn="animate__fadeInLeft animate__animated"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-pj">{title}</h2>
              <p className="mt-5 text-base font-normal leading-7 text-gray-600 font-pj">{description}</p>
              <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
                <div className="relative inline-flex group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 " />
                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-brand-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 rounded-xl"
                    role="button"
                  >
                    {ctaText}
                  </a>
                </div>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-5 py-2 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-brand-800 focus:bg-brand-800 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            className="lg:col-span-3 lg:pl-8 xl:pl-24"
            animateOnce
            animateIn="animate__fadeInRight animate__animated"
          >
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                <div className="bg-white border border-gray-200 shadow-md rounded-2xl">
                  <div className="px-8 py-6">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-900 lg:mx-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 lg:mt-12 font-pj">{subHeader1}</h3>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-700 font-pj">{subDescription1}</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded-2xl">
                  <div className="px-8 py-6">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-900 lg:mx-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 lg:mt-12 font-pj">{subHeader2}</h3>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-700 font-pj">{subDescription2}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

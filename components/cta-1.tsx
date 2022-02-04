import ScrollAnimation from "react-animate-on-scroll";

interface Cta1 {
  title: string;
  point1: string;
  point2: string;
  point3: string;
  ctaText: string;
  ctaSubText: string;
}

export default function Cta1({
  title,
  point1,
  point2,
  point3,
  ctaText,
  ctaSubText
}: Cta1) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
          <div className="max-w-lg mx-auto text-center">
            <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">
                {title}
              </h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <ul className="flex flex-col items-center justify-center mt-8 space-y-5 sm:mt-12 lg:mt-16 md:flex-row md:space-y-0 md:space-x-12">
              <li className="flex items-center text-gray-900">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold ">{point1}</span>
              </li>
              <li className="flex items-center text-gray-900">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold ">{point2}</span>
              </li>
              <li className="flex items-center text-gray-900">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3 text-lg font-bold ">{point3}</span>
              </li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <div className="mt-8 text-center sm:mt-12">
              <div className="relative inline-flex group">
                <div
                  className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                  style={{
                    background:
                      "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                  }}
                />
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center py-3.5 text-base font-bold text-white transition-all duration-200 bg-brand-800 border border-transparent px-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-opacity-90 rounded-xl"
                  role="button"
                >
                  {ctaText}
                </a>
              </div>
              <p className="mt-5 text-sm font-normal text-gray-500 ">{ctaSubText}</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

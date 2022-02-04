import ScrollAnimation from "react-animate-on-scroll";

interface Facts2 {
  title: string;
  subTitle: string;
  stat1: string;
  description1: string;
  stat2: string;
  description2: string;
  stat3: string;
  description3: string;
}

export default function Facts2({
  title,
  subTitle,
  stat1,
  description1,
  stat2,
  description2,
  stat3,
  description3
}: Facts2) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="lg:max-w-xl lg:mx-auto sm:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">{title}</h2>
            <p className="mt-8 text-lg font-normal text-gray-600 ">{subTitle}</p>
          </div>
        </ScrollAnimation>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-12 lg:mt-16 xl:mt-20 sm:grid-cols-3 lg:gap-x-12 xl:gap-x-20">
          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
              <div className="p-6 lg:py-10 lg:px-9">
                <svg
                  className="w-16 h-16 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p className="mt-24 text-5xl font-bold text-gray-900 ">{stat1}</p>
                <p className="mt-4 text-lg font-normal leading-tight text-gray-900 ">{description1}</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
              <div className="p-6 lg:py-10 lg:px-9">
                <svg
                  className="w-16 h-16 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-24 text-5xl font-bold text-gray-900 ">{stat2}</p>
                <p className="mt-4 text-lg font-normal leading-tight text-gray-900 ">{description2}</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div className="overflow-hidden bg-white border border-gray-300 rounded-2xl">
              <div className="p-6 lg:py-10 lg:px-9">
                <svg
                  className="w-16 h-16 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <p className="mt-24 text-5xl font-bold text-gray-900 ">{stat3}</p>
                <p className="mt-4 text-lg font-normal leading-tight text-gray-900 ">{description3}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

import ScrollAnimation from "react-animate-on-scroll";

interface Facts1 {
  title: string;
  stat1: string;
  description1: string;
  stat2: string;
  description2: string;
  stat3: string;
  description3: string;
}

export default function Facts1({ title, stat1, description1, stat2, description2, stat3, description3 }: Facts1) {
  return (
    <section className="py-12 bg-brand-800 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">{title}</h2>
          </div>
          <div className="mt-8 sm:mt-12">
            <svg
              className="w-auto h-4 mx-auto text-white"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
            </svg>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 mt-16 text-center sm:text-left gap-y-12 gap-x-8 sm:grid-cols-3 lg:gap-0">
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <div className="lg:px-14">
              <p className="text-5xl font-bold text-white font-pj">{stat1}</p>
              <p className="mt-5 text-lg font-normal text-gray-300">{description1}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <div className="relative lg:px-14">
              <div className="absolute bottom-0 left-0 hidden w-px h-16 bg-gray-600 lg:block" />
              <p className="text-5xl font-bold text-white font-pj">{stat2}</p>
              <p className="mt-5 text-lg font-normal text-gray-300">{description2}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <div className="relative lg:px-14">
              <div className="absolute bottom-0 left-0 hidden w-px h-16 bg-gray-600 lg:block" />
              <p className="text-5xl font-bold text-white font-pj">{stat3}</p>
              <p className="mt-5 text-lg font-normal text-gray-300">{description3}</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

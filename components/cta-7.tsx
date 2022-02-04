import ScrollAnimation from "react-animate-on-scroll";

interface Cta7 {
  title: string;
  ctaText: string;
  ctaSubText: string;
}

export default function Cta7({
  title,
  ctaText,
  ctaSubText
}: Cta7) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <ScrollAnimation animateOnce animateIn="animate__fadeInLeft animate__animated">
            <h2 className="max-w-xl mx-auto text-4xl font-bold text-gray-900 lg:mx-0  lg:pr-8 xl:pr-0">
              {title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeInRight animate__animated">
            <div className="flex-shrink-0 mt-8 sm:flex sm:items-center sm:justify-center lg:mt-0 lg:justify-end sm:space-x-5">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-brand-800 focus:bg-brand-800 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
              >
                {ctaSubText}
              </a>
              <div className="relative inline-flex w-full mt-5 group sm:w-auto sm:mt-0">
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
                  className="relative inline-flex items-center justify-center w-full px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-brand-800 border-2 border-transparent lg:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-opacity-90 rounded-xl"
                  role="button"
                >
                  {ctaText}
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

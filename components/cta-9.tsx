import ScrollAnimation from "react-animate-on-scroll";

interface Cta9 {
  title: string;
  description: string;
  ctaText: string;
  secondaryCtaText: string;
}

export default function Cta9({ title, description, ctaText, secondaryCtaText }: Cta9) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 font-pj">{title}</h2>
            <p className="max-w-md mx-auto mt-5 text-base leading-6 text-gray-600 font-pj">{description}</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="max-w-2xl p-8 mx-auto mt-10 overflow-hidden bg-gray-100 rounded-3xl">
            <div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-y-10 gap-x-12">
              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <img
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">C</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Copy any code you want</p>
              </div>
              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <img
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">V</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Paste the code</p>
              </div>
              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <img
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">R</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">Publish your website ⚡</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="flex-shrink-0 mt-10 sm:flex sm:items-center sm:justify-center sm:space-x-5">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-brand-800 focus:bg-brand-800 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
              role="button"
            >
              {secondaryCtaText}
            </a>
            <div className="relative inline-flex w-full mt-5 group sm:mt-0 sm:w-auto">
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
                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-brand-800 border-2 border-transparent sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                role="button"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

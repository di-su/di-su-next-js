import ScrollAnimation from "react-animate-on-scroll";

interface Cta2 {
  title: string;
  imageUrl: string;
  description: string;
  ctaText: string;
}

export default function Cta2({
  title,
  imageUrl,
  description,
  ctaText
}: Cta2) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              {title}
            </h2>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="max-w-lg mx-auto mt-8 overflow-hidden bg-brand-800 md:max-w-4xl sm:mt-16 rounded-2xl">
            <div className="relative px-6 pt-12 md:py-10 md:px-8 lg:py-12">
              <div className="flex items-center justify-end md:order-2">
                <div className="relative text-center md:text-left md:pl-8 lg:pl-0 md:w-1/2">
                  <p className="text-lg font-normal leading-relaxed text-white font-pj">
                    {description}
                  </p>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-gray-900 transition-all duration-200 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white font-pj hover:bg-opacity-90 rounded-xl"
                    role="button"
                  >
                    {ctaText}
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:absolute md:order-1 mdg:left-8 md:top-8">
                <div className="absolute hidden inset-8 md:block">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-80 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                    }}
                  />
                </div>
                <img
                  className="relative w-full mx-auto md:max-w-xs"
                  src={imageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

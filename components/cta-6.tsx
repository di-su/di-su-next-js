import ScrollAnimation from "react-animate-on-scroll";

interface Cta6 {
  title: string;
  description: string;
  ctaText: string;
  ctaSubText: string;
}

export default function Cta6({ title, description, ctaSubText, ctaText }: Cta6) {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 ">{title}</h2>
            <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 ">{description}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="relative max-w-lg mx-auto mt-14">
            <div className="absolute -inset-x-2 -inset-y-5">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                }}
              />
            </div>
            <form action="#" method="POST" className="relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
                className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black  focus:outline-none"
                // required=""
              />
              <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-800 border border-transparent sm:w-auto sm:py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-opacity-90 rounded-xl"
                >
                  {ctaText}
                </button>
              </div>
            </form>
          </div>
          <p className="mt-6 text-sm font-normal text-center text-gray-500 ">{ctaSubText}</p>
        </ScrollAnimation>
      </div>
    </section>
  );
}

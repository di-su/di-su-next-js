import ScrollAnimation from "react-animate-on-scroll";

interface Cta8 {
  title: string;
  description: string;
  ctaPreText: string;
  ctaText: string;
  reviewLogoUrl: string;
  reviewText: string;
  reviewPersonUrl: string;
  reviewPersonName: string;
  reviewPersonTitle: string;
  reviewPersonSignatureUrl: string;
}

export default function Cta8({
  title,
  description,
  ctaPreText,
  ctaText,
  reviewLogoUrl,
  reviewText,
  reviewPersonUrl,
  reviewPersonName,
  reviewPersonTitle,
  reviewPersonSignatureUrl
}: Cta8) {
  return (
    <section className="py-12 bg-brand-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          <div>
            <ScrollAnimation animateOnce animateIn="animate__fadeInLeft animate__animated">
              <div className="max-w-sm mx-auto bg-white xl:max-w-md rounded-2xl -rotate-3">
                <div className="p-6 sm:px-10 sm:py-12">
                  <img
                    className="w-auto h-7"
                    src={reviewLogoUrl}
                    alt=""
                  />
                  <blockquote className="mt-6">
                    <p className="text-lg font-normal leading-relaxed text-gray-900 ">{reviewText}</p>
                  </blockquote>
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={reviewPersonUrl}
                        alt=""
                      />
                      <div className="ml-3">
                        <p className="text-lg font-bold text-gray-900 ">{reviewPersonName}</p>
                        <p className="text-base  font-normal text-gray-600 mt-0.5">{reviewPersonTitle}</p>
                      </div>
                    </div>
                    <img
                      className="w-auto h-12"
                      src={reviewPersonSignatureUrl}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left w-full">
            <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
              <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl ">{title}</h2>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
              <p className="mt-8 text-base font-normal leading-7 text-gray-300 ">{description}</p>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
              <form action="#" method="POST" className="mt-16">
                <label htmlFor="" className="text-lg font-bold text-white ">
                  {ctaPreText}
                </label>
                <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                  <div className="absolute -inset-2">
                    <div
                      className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                      style={{
                        background:
                          "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                      }}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email address"
                      className="block w-full px-5 py-6 text-base font-normal text-white placeholder-white bg-brand-900 border border-transparent rounded-xl focus:border-white focus:ring-1 focus:ring-white  focus:outline-none"
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-white border border-transparent sm:py-3 sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white  hover:bg-opacity-90 rounded-xl"
                      >
                        {ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

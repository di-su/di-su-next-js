import ScrollAnimation from "react-animate-on-scroll";

interface Cta5 {
  title: string;
  description: string;
}

export default function Cta5({ title, description }: Cta5) {
  return (
    <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-80">
        <img
          className="w-full mx-auto opacity-5"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/4/background-pattern.png"
          alt=""
        />
      </div>
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 font-pj">{title}</h2>
            <p className="max-w-sm mx-auto mt-5 text-base font-normal text-gray-600 font-pj">{description}</p>
          </div>
        </ScrollAnimation>
        <div className="relative max-w-md mx-auto mt-8 sm:mt-16">
          <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                }}
              />
            </div>
            <form action="#" method="POST" className="relative bg-white shadow-xl rounded-2xl">
              <div className="p-8 sm:px-10">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="font-medium text-gray-900 font-pj">
                      Your name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your full name"
                        className="block w-full px-5 py-4 text-base font-normal text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-pj focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="font-medium text-gray-900 font-pj">
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your email address"
                        className="block w-full px-5 py-4 text-base font-normal text-gray-900 placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-pj focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="font-medium text-gray-900 font-pj">
                      What do you do?
                    </label>
                    <div className="mt-2.5">
                      <select
                        name=""
                        id=""
                        className="block w-full py-4 pl-5 pr-12 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                      >
                        <option value="">Select a profession</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 rounded-xl"
                    >
                      Get started for free
                    </button>
                    <p className="mt-5 text-sm font-normal text-center text-gray-500 font-pj">
                      No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

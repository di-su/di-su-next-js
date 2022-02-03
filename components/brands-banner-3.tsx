import ScrollAnimation from "react-animate-on-scroll";

export default function BrandsBanner3() {
  return (
    <section className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20 xl:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 xl:grid-cols-2">
          <ScrollAnimation animateOnce animateIn="animate__fadeInLeft animate__animated">
            <div className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">
                Customers and brands love using Rareblocks
              </h2>
              <p className="mt-6 text-lg font-normal text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__fadeInRight animate__animated">
            <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
              <div className="absolute inset-16">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                  }}
                />
              </div>
              <div className="relative space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-vertex.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-martino.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-squarestone.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-6">
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-waverio.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-fireli.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-virogan.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-12">
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-aromix.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-natroma.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full">
                    <img
                      className="w-auto h-8"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/logo-waverio-2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50" />
    </section>
  );
}

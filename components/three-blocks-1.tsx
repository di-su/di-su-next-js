import ScrollAnimation from "react-animate-on-scroll";

interface ThreeBlocks1 {
  title: string;
  imageUrl1: string;
  heading1: string;
  description1: string;
  imageUrl2: string;
  heading2: string;
  description2: string;
  imageUrl3: string;
  heading3: string;
  description3: string;
}

export default function ThreeBlocks1({
  title,
  imageUrl1,
  heading1,
  description1,
  imageUrl2,
  heading2,
  description2,
  imageUrl3,
  heading3,
  description3
}: ThreeBlocks1) {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-0">
          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">{title}</h2>
          </ScrollAnimation>
        </div>
        <div className="relative max-w-md mx-auto mt-12 md:max-w-none md:mt-20">
          <div className="absolute inset-x-0 hidden top-36 xl:block">
            <img
              className="object-contain w-full h-auto max-w-xl mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/how-it-works/2/line-pattern.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 md:gap-x-16 gap-y-12 xl:gap-x-32">
            <ScrollAnimation
              animateOnce
              className="flex flex-col justify-between"
              animateIn="animate__fadeIn animate__animated"
            >
              <div className="relative flex-shrink-0 mx-8 md:mx-0">
                <div className="absolute -inset-1">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                    }}
                  />
                </div>
                <img
                  className="relative w-full h-auto mx-auto filter drop-shadow-lg"
                  src={imageUrl1}
                  alt=""
                />
              </div>
              <div className="mt-6 md:mt-10">
                <h3 className="text-xl font-bold text-gray-900 ">{heading1}</h3>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">{description1}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              className="flex flex-col justify-between"
              animateIn="animate__fadeIn animate__animated"
            >
              <div className="relative flex-shrink-0 mx-8 md:mx-0">
                <div className="absolute -inset-1">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                    }}
                  />
                </div>
                <img
                  className="relative w-full h-auto mx-auto filter drop-shadow-lg"
                  src={imageUrl2}
                  alt=""
                />
              </div>
              <div className="mt-6 md:mt-10">
                <h3 className="text-xl font-bold text-gray-900 ">{heading2}</h3>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">{description2}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              className="flex flex-col justify-between"
              animateIn="animate__fadeIn animate__animated"
            >
              <div className="relative flex-shrink-0 mx-8 md:mx-0">
                <div className="absolute -inset-1">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                    }}
                  />
                </div>
                <img
                  className="relative w-full h-auto mx-auto filter drop-shadow-lg"
                  src={imageUrl3}
                  alt=""
                />
              </div>
              <div className="mt-6 md:mt-10">
                <h3 className="text-xl font-bold text-gray-900 ">See {heading3}</h3>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">{description3}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

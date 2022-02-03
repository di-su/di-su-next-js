import ScrollAnimation from "react-animate-on-scroll";

interface ThreeBlocks2 {
  preTitle: string;
  title: string;
  heading1: string;
  headingSubText1: string;
  imageUrl1: string;
  description1: string;
  heading2: string;
  headingSubText2: string;
  imageUrl2: string;
  description2: string;
  heading3: string;
  headingSubText3: string;
  imageUrl3: string;
  description3: string;
}

export default function ThreeBlocks2({
  preTitle,
  title,
  heading1,
  headingSubText1,
  imageUrl1,
  description1,
  heading2,
  headingSubText2,
  imageUrl2,
  description2,
  heading3,
  headingSubText3,
  imageUrl3,
  description3
}: ThreeBlocks2) {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">{preTitle}</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">{title}</h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-pj">{heading1}</h3>
              <p className="mt-4 text-base leading-7 text-gray-900 font-pj">{headingSubText1}</p>

              <img
                className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
                src={imageUrl1}
                alt=""
              />
              <p className="text-base leading-7 text-gray-700 mt-7 font-pj">{description1}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-pj">{heading2}</h3>
              <p className="mt-4 text-base leading-7 text-gray-900 font-pj">{headingSubText2}</p>

              <img
                className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
                src={imageUrl2}
                alt=""
              />
              <p className="text-base leading-7 text-gray-700 mt-7 font-pj">{description2}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-pj">{heading3}</h3>
              <p className="mt-4 text-base leading-7 text-gray-900 font-pj">{headingSubText3}</p>

              <img
                className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl"
                src={imageUrl3}
                alt=""
              />
              <p className="text-base leading-7 text-gray-700 mt-7 font-pj">{description3}</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

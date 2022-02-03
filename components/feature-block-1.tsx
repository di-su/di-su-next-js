import ScrollAnimation from "react-animate-on-scroll";

interface TwoBlock1 {
  title: string;
  description: string;
  ctaText: string;
  imageUrl: string;
}

export default function FeatureBlock1({
  title,
  description,
  ctaText,
  imageUrl
}: TwoBlock1) {
  return (
    <section className="relative pt-12 bg-brand-800 sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="object-cover object-top w-full h-full transform opacity-20 -translate-y-80"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
          alt=""
        />
      </div>
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="max-w-xl mx-auto text-center xl:max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl ">
            {title}
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-7 text-gray-100 sm:mt-8 ">
            {description}
            </p>
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 mt-8 text-lg font-bold text-white transition-all duration-200 bg-transparent border border-white sm:mt-11 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-900"
              role="button"
            >
              {ctaText}
            </a>
          </div>
        </ScrollAnimation>
      </div>
      
        <div className="relative max-w-6xl mx-auto mt-4">
        <ScrollAnimation offset={630} animateOnce animateIn="animate__bounceIn animate__animated">
          <img
            className="w-full mx-auto"
            src={imageUrl}
            alt=""
          />
          </ScrollAnimation>
        </div>
      
    </section>
  );
}

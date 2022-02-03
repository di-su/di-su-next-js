import ScrollAnimation from "react-animate-on-scroll";

interface TwoBlock1 {
  title: string;
  description: string;
  projUrl: string;
  imageUrl: string;
  ctaText: string;
}
export default function TwoBlock1({ title, description, projUrl, ctaText, imageUrl }: TwoBlock1) {
  return (
    <div className="relative bg-gray-50">
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-0 animate__fadeIn animate__animated">
        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl overflow-hidden max-h-fit">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <ScrollAnimation
              animateOnce
              className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0"
              animateIn="animate__fadeInLeft animate__animated"
            >
              <div className="max-w-sm mx-auto sm:max-w-xl md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:leading-tight lg:text-5xl lg:leading-tight ">
                  {title}
                </h1>
                <p>
                  {projUrl}
                </p>
                <p className="mt-4 text-lg text-gray-900 lg:mt-0 ">{description}</p>
              </div>
              <div className="sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-700 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  hover:bg-gray-600"
                  role="button"
                >
                  {ctaText}
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              style={{ maxHeight: "600px" }}
              className="xl:col-span-3 p-0 lg:p-12 lg:pt-0"
              animateIn="animate__fadeInRight animate__fadeIn animate__animated"
            >
              <img src={imageUrl} alt="" className="shadow-2xl shadow-slate-600"/>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}

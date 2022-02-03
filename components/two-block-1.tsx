import ScrollAnimation from "react-animate-on-scroll";

interface TwoBlock1 {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  appDownloadText: string;
}
export default function TwoBlock1({ title, description, imageUrl, ctaText, appDownloadText }: TwoBlock1) {
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
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  {title}
                </h1>
                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center flex-shrink-0 -space-x-4  lg:justify-start">
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/3/avatar-male.png"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/3/avatar-female-1.png"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/3/avatar-female-2.png"
                      alt=""
                    />
                  </div>
                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">{description}</p>
                </div>
              </div>
              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-700 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                  role="button"
                >
                  {ctaText}
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {appDownloadText}
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              style={{ maxHeight: "600px" }}
              className="xl:col-span-3 p-4"
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

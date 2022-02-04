import ScrollAnimation from "react-animate-on-scroll";

interface TwoBlock {
  title: string;
  description: string;
  projUrl?: string;
  imageUrl: string;
  ctaText?: string;
  extraHtmlText?: any;
  flipPosition?: Boolean;
  discontinued?: Boolean;
  noShadow?: Boolean;
  linkUrl?: string;
}
export default function TwoBlock({
  title,
  description,
  projUrl,
  ctaText = "See website",
  imageUrl,
  extraHtmlText,
  flipPosition,
  discontinued,
  noShadow,
  linkUrl
}: TwoBlock) {
  return (
    <div className={`${flipPosition ? "bg-gray-100" : "bg-white"} relative`}>
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-0 animate__fadeIn animate__animated">
        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-6xl overflow-hidden max-h-fit">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 sm:gap-y-20">
            <ScrollAnimation
              animateOnce
              className={`${flipPosition && "md:order-2"} md:col-span-1 text-left md:px-8`}
              animateIn={`${flipPosition ? "animate__fadeInRight" : "animate__fadeInLeft"}  animate__animated`}
            >
              <div className="lg:mx-auto lg:max-w-full">
                <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:leading-tight lg:text-3xl lg:leading-tight ">
                  {title}
                </h1>
                <p className="">{projUrl}</p>
                <p className="mt-4 text-lg text-gray-900">{description}</p>
              </div>
              <div className="lg:mx-auto lg:max-w-full">{extraHtmlText}</div>
              <div className="mt-4">
                <a
                  href={linkUrl}
                  title=""
                  className={`${
                    discontinued ? "border-red-500 text-red-500" : "border-orange-400 text-orange-400"
                  } inline-flex items-center justify-center px-8 p-2 text-md  transition-all duration-200 border rounded-md "
                  role="button`}
                >
                  {discontinued ? "Discontinued" : ctaText}
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              style={{ maxHeight: "520px" }}
              className="p-0 lg:p-12 lg:pt-0 md:col-span-1"
              animateIn={`${flipPosition ? "animate__fadeInLeft" : "animate__fadeInRight"}  animate__animated`}
            >
              <img src={imageUrl} alt="" className={`${!noShadow && "shadow-2xl shadow-slate-600"} height:200px`} />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}

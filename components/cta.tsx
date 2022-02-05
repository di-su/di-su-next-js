import ScrollAnimation from "react-animate-on-scroll";

interface Cta {
  title: string;
  ctaText: string;
}
export default function Cta({ title, ctaText }: Cta) {
  return (
    <section className="relative p-12 bg-white border-b-2 border-gray-100">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="
            mt-5
            font-bold
            leading-tight
            text-gray-900
            text-2xl sm:leading-tight
            lg:text-3xl lg:leading-tight
            
          "
            >
              {title}
            </p>
            <div className="relative inline-flex mt-6 group">
              <p
                // href="https://di-su.com/contact-me"
                className={`border-orange-400 bg-orange-400 text-white inline-flex items-center justify-center px-8 p-2 text-md  transition-all duration-200 border rounded-md mb-5`}
              >
                {ctaText}
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

import ScrollAnimation from "react-animate-on-scroll";

interface Hero {
  title: string;
  description: string;
  imageUrl: string;
}
export default function Hero({ title, description, imageUrl }: Hero) {
  return (
    <section className="relative p-12 bg-orange-400">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
              <img className="w-32 mx-auto rounded-full border border-white mb-4" src={imageUrl} alt="" />
            </ScrollAnimation>
            <h1
              className="
            mt-5
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl sm:leading-tight
            lg:text-6xl lg:leading-tight
            
          "
            >
              {title}
            </h1>
            <p
              className="
            max-w-md
            mx-auto
            mt-6
            text-base
            leading-7
            text-white
            font-inter
          "
            >
              {description}
            </p>
            <div className="relative inline-flex mt-10 group">
              <div
                className="
              absolute
              transitiona-all
              duration-1000
              opacity-70
              -inset-px
              bg-gradient-to-r
              from-[#44BCFF]
              via-[#FF44EC]
              to-[#FF675E]
              rounded-xl
              blur-lg
              filter
              group-hover:opacity-100
              group-hover:-inset-1
              group-hover:duration-200
            "
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

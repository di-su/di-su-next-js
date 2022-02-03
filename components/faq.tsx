import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Faq() {
  const FaqContent = [
    {
      question: "Question 1",
      answer: "Answer 1"
    },
    {
      question: "Question 2",
      answer: "Answer 2"
    },
    {
      question: "Question 3",
      answer: "Answer 3"
    },
    {
      question: "Question 4",
      answer: "Answer 4"
    },
    {
      question: "Question 5",
      answer: "Answer 5"
    }
  ];

  const FaqItem = (props: any) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
      <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
        <div className="relative">
          {props.index === 0 && (
            <div className="absolute -inset-1">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)"
                }}
              />
            </div>
          )}
          <div role="region" className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
            <h3>
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 "
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <span>{props.question}</span>

                {showAnswer ? (
                  <span aria-hidden="true" className="ml-4">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true" className="ml-4">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                )}
              </button>
            </h3>
            {showAnswer && (
              <div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 animate__fadeIn animate__animated">{props.answer}</div>
              </div>
            )}
          </div>
        </div>
      </ScrollAnimation>
    );
  };

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 animate__fadeIn animate__animated">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <ScrollAnimation animateOnce animateIn="animate__fadeIn animate__animated">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 ">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div className="space-y-4">
            {FaqContent.map((item, index) => {
              return <FaqItem key={index} question={item.question} answer={item.answer} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

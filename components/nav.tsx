import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [state, setState] = useState({
    showMobileNavBar: false,
  });

  const navLinks = [
    {
      title: "Bio",
      link: "/link",
    },
    {
      title: "Another one",
      link: "/link",
    },
  ];

  return (
    // <nav className="text-2xl nav p-3 border-bottom text-red-500">
    //   {/* <Link href="/" passHref>
    //     <h2 className="pointer">Di Su</h2>
    //   </Link> */}
    //   {navLinks.map((item) => {
    //     return (
    //       <Link href={item.link} passHref>
    //         <h2 className="text-center text-xl">{item.title}</h2>
    //       </Link>
    //     );
    //   })}

    //   {/* <Link href="/bio" passHref>
    //     <p className="ms-5 pointer lead my-auto">Bio</p>
    //   </Link> */}
    // </nav>
    <header className="relative py-4 md:py-6 bg-orange-400">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <p
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-white p-3 pl-6 pr-6"
            >
              {/* <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" /> */}
              DI SU
            </p>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="text-white">
              {state.showMobileNavBar ? (
                <span
                  aria-hidden="true"
                  onClick={() =>
                    setState((s) => ({
                      ...s,
                      showMobileNavBar: !state.showMobileNavBar,
                    }))
                  }
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  onClick={() =>
                    setState((s) => ({
                      ...s,
                      showMobileNavBar: !state.showMobileNavBar,
                    }))
                  }
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            <a
              href="#"
              title=""
              className=" text-base font-medium text-white transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-white focus:ring-offset-2 "
            >
              Showcase
            </a>
            <a
              href="#"
              title=""
              className=" text-base font-medium text-white transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-white focus:ring-offset-2 "
            >
              Hire Me
            </a>
            <a
              href="#"
              title=""
              className=" text-base font-medium text-white transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-white focus:ring-offset-2 "
            >
              Articles
            </a>
            <a
              href="#"
              title=""
              className=" text-base font-medium text-white transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-white focus:ring-offset-2 "
            >
              CV
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              title=""
              className=" inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 border border-transparent rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2"
              role="button"
            >
              Contact Me
            </a>
          </div>
        </div>
        <nav className={state.showMobileNavBar ? "lg:hidden" : "lg:hidden hidden"}>
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              {navLinks.map((item) => {
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    title=""
                    className=" flex items-center p-3 -m-3 text-base font-medium text-white transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none  focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
                  >
                    {item.title}
                  </a>
                );
              })}
              {/* <a
                href="#"
                title=""
                className=" flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none  focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                Features
              </a>
              <a
                href="#"
                title=""
                className=" flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none  focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                Pricing
              </a>
              <a
                href="#"
                title=""
                className=" flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none  focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                Automation
              </a>
              <a
                href="#"
                title=""
                className=" flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none  focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                Customer Login
              </a>
              <a
                href="#"
                title=""
                className=" inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
                role="button"
              >
                Sign up
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

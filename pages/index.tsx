import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { frontMatter } from "ts/interfaces/interfaces";
import ProjectShowcase from "components/project-showcase";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "components/layout";
import Head from "next/head";
import CenteredBlock1 from "components/centered-block-1";
import TwoBlock1 from "components/two-block-1";

interface Post {
  posts: [
    {
      slug: string;
      frontMatter: frontMatter;
    }
  ];
}

export default function Home({ posts }: Post) {
  console.log("posts", posts);
  return (
    <>
      <Layout>
        <CenteredBlock1
          title="Hey there 👋, I'm Di."
          description="Welcome! I'm Di, an experienced ecommerce marketer and web developer. Here are some things I've built."
          imageUrl="https://di-su.com/me.jpeg"
        />
        <TwoBlock1
          title="Take your business to the next level"
          description="Managed is the ultimate platform dedicated to streamlining the management of your appointments and clients."
          ctaText="Hello"
          projUrl="google.co.uk"
          imageUrl="https://di-su.com/showcase-img/relic.jpg"
        />
        <ProjectShowcase />
        <div className="overflow-x-hidden bg-gray-50">
          <section className="pt-12 bg-gray-50 sm:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">
                  Smart email campaign builder, made for Developers
                </h1>

                <ScrollAnimation animateOnce animateIn="animate__fadeInUp animate__animated">
                  <p className=" mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight  ">
                    Turn your visitors into profitable
                    <span className="relative inline-flex sm:inline">
                      <span className=" bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0 " />
                      <span className="relative"> business </span>
                    </span>
                  </p>
                </ScrollAnimation>
                <div className=" px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 ">
                  <a
                    href="#"
                    title=""
                    className=" inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
                    role="button"
                  >
                    Get more customers
                  </a>
                  <a
                    href="#"
                    title=""
                    className=" inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900 "
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Watch free demo
                  </a>
                </div>
                <p className="mt-8 text-base text-gray-500 font-inter">
                  {" "}
                  60 Days free trial · No credit card required{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-5">
          {posts.map((post, index) => (
            <Link href={"/blog/" + post.slug} passHref key={index}>
              <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{post.frontMatter.title}</h5>
                      <p className="card-text">{post.frontMatter.description}</p>
                      <p className="card-text">
                        <small className="text-muted">{post.frontMatter.date}</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 m-auto">
                    <Image
                      src={post.frontMatter.thumbnailUrl}
                      className="img-fluid mt-1 rounded-start"
                      alt="thumbnail"
                      width={500}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

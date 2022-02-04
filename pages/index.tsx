import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { frontMatter } from "ts/interfaces/interfaces";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "components/layout";
import Hero from "components/hero";
import TwoBlock from "components/two-block";
import { faCode, faInfoCircle, faMobile, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cta from "components/cta";

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
        <Hero
          title="Hey there 👋, I'm Di."
          description="Welcome! I'm Di, an experienced ecommerce marketer and web developer. Here are some things I've built."
          imageUrl="https://di-su.com/me.jpeg"
        />
        <TwoBlock
          title="Relic"
          description="Multi-step landing page, mobile mockups, email capture and waitlist system. Relic is a new service designed to allow individuals to invest in highly collectible appreciating assets."
          projUrl="relicapp.co.uk"
          imageUrl="https://di-su.com/showcase-img/relic.jpg"
          linkUrl="http://relicapp.co.uk/"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page, photoshop, email capture
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS &amp; API
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="AHOYY"
          description="AHOYY is an Shopify ecommerce business that delivers caffeinated chocolates."
          discontinued
          projUrl="ahoyy.co.uk"
          imageUrl="https://di-su.com/showcase-img/ahoyy.jpeg"
          flipPosition
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website & Business
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Shopify
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS/Liquid
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="Blend my day Acquisiton page"
          description="Landing page for Blend my day's smoothies and oat bowls. A simple introduction to the service and high-quality product and video shots. Used on Facebook and Adwords."
          projUrl="blendmyday.co.uk"
          imageUrl="https://di-su.com/showcase-img/bmd.jpeg"
          linkUrl="https://blendmyday.co.uk/pages/save20"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page, photoshop, video editing
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS & API
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="Poply"
          description="Poply helps homeowners sell their houses with bespoke, professional websites, dedicated to the listing of their property."
          discontinued
          projUrl="poply.co.uk"
          imageUrl="https://di-su.com/showcase-img/poply.jpg"
          flipPosition
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website & Business
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="The Cornerstone Razor"
          description="An acquisition page dedicated to Cornerstone's most popular product - the chrome-plated personalised razor. A simple introduction to the service and high-quality product shots. Intended for Facebook and Adwords."
          projUrl="cornerstone.co.uk"
          imageUrl="https://di-su.com/showcase-img/razor-lp.jpg"
          linkUrl="https://di-su.com/articles/landing-pages-built/pages/razor-focus"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <Cta title="Got a question?" ctaText="Get in touch" />
        <TwoBlock
          title="A Cornerstone Christmas"
          description="Last chance Christmas offer email built for Cornerstone's gifting period. Sent to existing members."
          projUrl="cornerstone.co.uk"
          imageUrl="https://di-su.com/showcase-img/christmas-email.jpg"
          flipPosition
          ctaText="See email"
          linkUrl="https://di-su.com/articles/emails-built/emails/xmas-last"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Email
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS, mjml.io
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="App mockup for Love UnderDogs"
          description="A brief app mockup for Love UnderDogs - a rescue and rehoming service helping to support some of the most under loved dogs."
          projUrl="oveunderdogs.org"
          imageUrl="https://di-su.com/showcase-img/welcome.jpg"
          ctaText="See mockup"
          linkUrl="https://di-su.com/underdogs"
          noShadow
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> App mockup
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Design
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> sketch.com
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> iOS
              </p>
            </div>
          }
        />
        <Cta title="Ready for growth?" ctaText="Get in touch" />
        <TwoBlock
          title="Moneyapp"
          description="A money-budgeting program built using Laravel, a MVC PHP Framework."
          imageUrl="https://di-su.com/showcase-img/money-main.jpg"
          linkUrl="https://di-su.com/moneyapp-demo"
          ctaText="See mockup"
          flipPosition
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS/Laravel/PHP/Databases/SQL
              </p>
            </div>
          }
        />
        <TwoBlock
          title="Configurable template for European launch"
          description="A configurable, mobile-friendly landing page built on unbounce for Bakenight's European launch of their baking masterclass service."
          projUrl="bakenight.com"
          imageUrl="https://di-su.com/showcase-img/bakenight-lp.jpg"
          linkUrl="https://di-su.com/client-work/bakenight"
          ctaText="See page"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> Unbounce.com
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />

        <TwoBlock
          title="Hon's restaurant"
          description="The online home for a restaurant based in Rainham, Kent. With essential information and menu's in .pdf format."
          projUrl="honsrestaurant.co.uk"
          imageUrl="https://di-su.com/showcase-img/hons-site.jpg"
          linkUrl="https://www.honsrestaurant.co.uk/"
          flipPosition
          ctaText="See page"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <Cta title="Got a question?" ctaText="Get in touch" />
        <TwoBlock
          title="Blender dropshipping"
          description="A draft mockup page for the Shopify dropshipping of a blender available from aliexpress."
          imageUrl="https://di-su.com/showcase-img/blender.jpg"
          linkUrl="https://di-su.com/articles/landing-pages-built/pages/blender"
          ctaText="See page"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <Cta title="Like what you see?" ctaText="Get in touch" />
        <TwoBlock
          title="Chop Suey Centre"
          projUrl="chopsueycentre.co.uk"
          description="The online home for a restaurant based in Romford, Essex. With essential information and menu's all available in text format."
          imageUrl="https://di-su.com/showcase-img/chop.jpg"
          linkUrl="https://www.chopsueycentre.co.uk/"
          flipPosition
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <Cta title="Got a question?" ctaText="Get in touch" />
        <TwoBlock
          title="Instagram influencer capture"
          projUrl="cornerstone.co.uk"
          description="A page linked with google forms to capture information submitted by potential instagram influencers for Cornerstone."
          imageUrl="https://di-su.com/showcase-img/influencer.jpg"
          linkUrl="https://di-su.com/articles/landing-pages-built/pages/influencer-program"
          ctaText="See page"
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Landing page
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <TwoBlock
          title="Manaman Games"
          projUrl="manamangames.com"
          description="The home to Manaman Games, an independent developer of casual games for Android and iOS."
          imageUrl="https://di-su.com/showcase-img/manaman-games.jpg"
          linkUrl="https://manamangames.com/"
          flipPosition
          extraHtmlText={
            <div className="mt-4">
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faInfoCircle} /> Website
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faPencilAlt} /> Complete Implementation
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faCode} /> HTML/CSS/JS
              </p>
              <p className="flex">
                <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faMobile} /> Optimised for mobile
              </p>
            </div>
          }
        />
        <div className="text-center p-12 border-b-2 border-gray-100">
          <p className="block mb-4">In case that wasn't enough, there's <b>even more</b> to see..</p>
          <div>
            <a href="" className="text-orange-600 block mb-2">
              Landing pages
            </a>
            <a href="" className="text-orange-600 block mb-2">
              Emails
            </a>
            <a href="" className="text-orange-600 block mb-2">
              Cornerstone.co.uk projects gallery
            </a>
          </div>
        </div>
        <Cta title="Seen enough? 👀" ctaText="Get in touch" />

        {/* <div className="mt-5">
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
        </div> */}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0]
    };
  });
  return {
    props: {
      posts
    }
  };
};

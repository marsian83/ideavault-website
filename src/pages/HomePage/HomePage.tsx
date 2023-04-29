import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import CreatedByExperts from "./components/CreatedByExperts";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ForEveryone from "./components/ForEveryone";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="flex p-page">
        <div className="flex flex-row justify-between my-20 mobile:flex-col mobile:gap-y-12">
          {[
            {
              imageUrl: "/images/beginner-friendly.png",
              title: "Beginner Friendly",
              content:
                " Ideavaults are new ways to invest based on simple ideas that are easy to be understood for almost everyone.",
            },
            {
              imageUrl: "/images/experts.png",
              title: "Managed by professionals",
              content:
                "The best financial experts in Hong Kong make ideavaults, which are backed by solid research.",
            },
            {
              imageUrl: "/images/curated.png",
              title: "Personally curated",
              content:
                "ideavaults can be changed to fit your needs. You can change the things in your ideavault any time, make your own ideavault",
            },
          ].map((item, i) => (
            <div
              className="flex flex-col w-[28%] h-full gap-y-4 mobile:w-[100%]"
              key={i}
            >
              <div className="flex flex-col justify-between items-center">
                <img
                  src={item.imageUrl}
                  className="w-[30%] aspect-square"
                  alt="simple to understand"
                />
              </div>
              <div className="flex flex-col flex-1 gap-y-4 py-2 items-center text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-front text-opacity-60 flex-1 flex flex-col justify-center">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-5 mt-10 mb-20 p-page">
        <h1 className="text-4xl font-bold mobile:text-3xl">
          An ideavault is a basket of stocks that reflects an idea
        </h1>
        <p className="text-lg text-front text-opacity-75">
          Ideavaults are portfolios of stocks or ETFs, that track a theme,
          strategy or objective
        </p>
        <img
          className="w-[35vw] contrast-200 rounded-xl shadow-xl mobile:w-[70vw]"
          src="/images/homepage-video-banner.jpg"
          alt="vid-replace"
        />
      </section>

      <ForEveryone />
      <CreatedByExperts />
      <Testimonials />
      <Faqs />

      <section className="p-page flex flex-col items-center pt-20">
        <h1 className="text-lg font-medium">
          Have more questions or some feedback?
        </h1>
        <p className="py-1 text-front text-opacity-75 text-lg">
          We are just an email away
        </p>
        <Link to="mailto:info@ideavaulthk.com" className="btn-1 px-6 py-4 mt-5">
          Write to us
        </Link>
      </section>
    </>
  );
}

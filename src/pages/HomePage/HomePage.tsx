import { Link } from "react-router-dom";
import useCache from "../../contexts/cacheContext";
import CreatedByExperts from "./components/CreatedByExperts";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="flex flex-row-reverse p-page">
        <div className="basis-1/2 flex flex-col gap-y-5 pl-28">
          <h1 className="text-4xl font-bold">
            An ideavault is a basket of stocks that reflects an idea
          </h1>
          <p className="text-lg text-front text-opacity-75">
            ideavaultssare portfolios of stocks or ETFs, that track a theme,
            strategy or objective
          </p>
          <img
            className="w-full contrast-200 rounded-xl shadow-2xl"
            src="/images/homepage-video-banner.jpg"
            alt="vid-replace"
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-y-10 py-10">
          {[
            {
              imageUrl:
                "https://www.smallcase.com/static/images/svg/what-is-smallcase/1.svg",
              title: "Simple to understand",
              content:
                "ideavaults are modern investing products based on simple ideas you can understand.",
            },
            {
              imageUrl:
                "https://www.smallcase.com/static/images/svg/what-is-smallcase/2.svg",
              title: "Managed by professionals",
              content:
                "ideavaults are created by Hong Kong's leading finance experts & backed by solid research.",
            },
            {
              imageUrl:
                "https://www.smallcase.com/static/images/svg/what-is-smallcase/3.svg",
              title: "Designed for you",
              content:
                "ideavaults are fully customizable. Edit your ideavault constituents any time or create your own ideavault.",
            },
          ].map((item, i) => (
            <div className="flex" key={i}>
              <img src={item.imageUrl} alt="simple to understand" />
              <div className="flex flex-col justify-evenly">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-14">
        <img
          src="/images/ideavault-simplicity-banner.jpg"
          alt="ideavault is for everyone"
          className="w-full"
        />
      </section>

      <Faqs />
      <div className="my-32" />
      <CreatedByExperts />
      <Testimonials />

      {/* pt-20 tha */}
      <section className="p-page flex flex-col items-center pt-8">
        <h1 className="text-lg font-medium">
          Have more questions or some feedback?
        </h1>
        <p className="py-1 text-front text-opacity-75 text-lg">
          We are just an email away
        </p>
        <Link to="mailto:help@ideavaulthk.com" className="btn-1 px-6 py-4 mt-5">
          Write to us
        </Link>
      </section>
    </>
  );
}

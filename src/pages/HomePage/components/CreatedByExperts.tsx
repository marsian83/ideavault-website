import { useState } from "react";
import useCache from "../../../contexts/cacheContext";

export default function CreatedByExperts() {
  const cache = useCache();

  return (
    <section className="flex p-page">
      <div className="basis-1/2 flex flex-col gap-y-5 py-4">
        <h1 className="font-bold text-3xl">
          Curated by Hong Kong's <br /> top investment managers
        </h1>
        <p className="text-front text-opacity-80 pr-16">
          smallcases are created & managed by leading professionals who are
          <br />
          <span className="font-bold pr-2">SFC registered</span>
          research analysts and investment advisors
        </p>
        <div className="flex gap-x-5">
          <button className="btn-1 py-2 px-4">View All Managers</button>
          <button className="btn-2 py-2 px-4">Watch Vault by Vault</button>
        </div>
      </div>
      <div className="basis-1/2 px-8 relative flex flex-wrap gap-y-2 justify-between">
        <div
          className="absolute z-[2] top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(to bottom, white, transparent, white)",
          }}
        ></div>
        <div className="overflow-hidden h-[40vh]">
          <div
            className="flex flex-wrap gap-y-2 justify-between"
            style={{
              animation: `y-carousel-view infinite ${
                ((2.5 * cache.data.homepageCarouselImages.length) / 3) * 1000
              }ms linear`,
            }}
          >
            {cache.data.homepageCarouselImages.map((imageUrl, i) => (
              <div className="w-[32.8%] h-12 rounded-lg border" key={i}>
                <img
                  src={imageUrl}
                  alt="company"
                  className="object-center object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

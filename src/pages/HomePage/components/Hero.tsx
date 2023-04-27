import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = ["/images/hero/4.jpg", "/images/hero/5.webp"];

  setInterval(() => {
    setBannerIndex((bannerIndex + 1) % banners.length);
  }, 2345);

  return (
    <>
      <section className="p-page flex h-[75vh] bg-contain bg-bottom bg-no-repeat">
        <div className="basis-1/2 flex flex-col justify-center">
          <img
            src={banners.at(bannerIndex)}
            alt="hero-banner"
            className="aspect-video w-full"
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-y-5 justify-center items-center">
          <h1 className="text-4xl font-bold text-center tracking-tight">
            Unlock your investment
            <br />
            opportunities with ideavault
          </h1>
          <p className="text-lg text-front text-opacity-80">
            Get simple, smart investment portfolios curated by experts
          </p>
          {/* <div className="flex w-1/2 justify-between"> */}
          {/* <button className="btn-1 px-6 py-4">Login</button> */}
          {/* </div> */}
          <p className="text-lg text-front text-opacity-80">
            Supported by Hong Kong's largest brokers!
          </p>
          <Link to="/vaults/0" className="btn-2 px-6 py-6">
            See Ideavaults
          </Link>
        </div>
      </section>
    </>
  );
}

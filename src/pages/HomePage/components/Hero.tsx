import { useState } from "react";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = ["/images/hero/2.jpg", "/images/hero/1.jpg"];

  setInterval(() => {
    setBgIndex((bgIndex + 1) % backgrounds.length);
  }, 2000);

  return (
    <>
      <section
        className="p-page flex h-[90vh] bg-contain bg-bottom bg-no-repeat bg-[url('/images/hero/2.jpg')]"
        // style={{
        //   background: "/images/hero/2.jpg",
        // }}
      >
        <div className="absolute top-0 left-0 w-full h-full -z-[1]"></div>

        <div className="basis-1/2 flex flex-col gap-y-5 justify-center mb-20">
          <h1 className="text-6xl font-bold tracking-tight">
            Invest in ideas <br /> with ideavault
          </h1>
          <p className="text-lg text-front text-opacity-80">
            Get simple, smart investment portfolios curated by experts
          </p>
          <div className="flex w-1/2 justify-between">
            <button className="btn-1 px-6 py-4">Login</button>
            <button className="btn-2 px-6 py-4">See Ideavaults</button>
          </div>
          <p className="text-lg text-front text-opacity-80">
            Supported by Hong Kong's largest brokers!
          </p>
        </div>
      </section>
      <div className="h-[10vh]" />
    </>
  );
}

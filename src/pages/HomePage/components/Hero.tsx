import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <img
        src="/images/hero-anim/1.webp"
        alt="loader"
        className="w-0 h-0 opacity-0"
      />
      <img
        src="/images/hero-anim/2.webp"
        alt="loader"
        className="w-0 h-0 opacity-0"
      />
      <section
        className="p-page relative flex overflow-hidden"
        style={{
          height: "max(100vh, 840px)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-screen h-full bg-bottom bg-no-repeat bg-cover -z-[1]"
          style={{
            animation: "hero-anim 16000ms",
            animationIterationCount: "infinite",
          }}
        />
        <div className="flex-1 flex flex-col justify-center" />
        <div className="basis-[55%] flex flex-col items-center pt-36 gap-y-4 mobile:basis-[100%]">
          <h1 className="text-4xl font-bold text-center tracking-tight py-2 mobile:py-4 mobile:text-[2.5rem] mobile:-tracking-normal">
            Unlock your investment
            <br />
            opportunities with ideavault
          </h1>
          <p className="text-lg text-front text-opacity-80 mobile:text-center">
            Get simple, smart investment portfolios curated by experts
          </p>
          {/* <div className="flex w-1/2 justify-between"> */}
          {/* <button className="btn-1 px-6 py-4">Login</button> */}
          {/* </div> */}
          <p className="text-lg text-front text-opacity-80 mobile:text-center">
            Supported by Hong Kong's largest brokers!
          </p>
          <Link to="/vaults/0" className="btn-2 px-6 py-6 mobile:py-4 mobile:px-4">
            See Ideavaults
          </Link>
        </div>
      </section>
    </>
  );
}

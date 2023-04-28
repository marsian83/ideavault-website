import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="p-page relative flex h-screen overflow-hidden">
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-bottom bg-no-repeat bg-cover -z-[1]"
          style={{
            animation: "hero-anim 16000ms",
            animationIterationCount: "infinite",
          }}
        />
        <div className="flex-1 flex flex-col justify-center" />
        <div className="basis-[55%] flex flex-col items-center pt-36 gap-y-4">
          <h1 className="text-4xl font-bold text-center tracking-tight py-2">
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

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* <video
        className="videoTag absolute top-0 left-0 h-screen w-screen object-cover object-top -z-[2]"
        autoPlay
        loop
        muted
      >
        <source src="/images/hero-anim/anim.mp4" type="video/mp4" />
      </video> */}
      <section className="p-page flex h-screen bg-cover bg-no-repeat bg-[url('/images/hero/7.png')]">
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

export default function Hero() {
  return (
    <section className="widescreen:h-screen mobile:py-[10vh] bg-secondary flex mobile:flex-col mobile:justify-center p-page ">
      <div className="widescreen:w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl mobile:text-3xl font-bold text-front text-opacity-90 ">
          <br />
          Investing ecosystem <br /> for <br /> ambitious brands
        </h1>
        <p className="text-lg widescreen:w-2/3 pt-4 mobile:py-5 text-front mobile:text-sm mobile:text-opacity-70">
          Connect into Hong Kong's fastest growing investment product layer and
          offer modern products, seamless transactions and delightful
          experiences
        </p>
      </div>
      <div className="basis-1/2 flex flex-col justify-center">
        <img
          className="w-full aspect-auto"
          src="/images/ecosystem.jpg"
          alt="ideavault investment ecosystem"
        />
      </div>
    </section>
  );
}

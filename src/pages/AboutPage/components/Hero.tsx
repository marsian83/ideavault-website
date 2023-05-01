export default function Hero() {
  return (
    <section
      className="p-page py-36 mobile:pt-[13vh] mobile:pb-12 bg-cover bg-left"
      style={{ backgroundImage: "url('/images/about-hero-bg.svg')" }}
    >
      <div className="widescreen:w-1/2 flex flex-col gap-y-8 mobile:gap-y-4 text-back widescreen:p-5">
        <h1 className="text-5xl font-bold mobile:text-3xl mobile:mb-4">
          Changing How <br /> Hong Kong invests
        </h1>
        <p className="text-lg mobile:text-base">
          ideavault is a fintech company building a trusted financial ecosystem
          with advisors, brokers and other market participants for the investor.
        </p>
        <p className="text-lg mobile:text-base">
          Our products are to be used everyday across the Hong Kong capital
          markets landscape by the most respected brands to provide delightful
          customer experiences.
        </p>
      </div>
    </section>
  );
}

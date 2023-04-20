export default function Hero() {
  return (
    <section className="h-screen bg-secondary flex p-page">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-front text-opacity-90">
          Investing ecosystem <br /> for <br /> ambitious brands
        </h1>
        <p className="text-lg w-2/3 pt-4">
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

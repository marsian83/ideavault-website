export default function Gateway() {
  return (
    <section className="p-page flex py-28">
      <div className="w-1/2 flex flex-col justify-center gap-y-3">
        <p className="text-lg font-semibold text-primary">ideavault Gateway</p>
        <h1 className="font-bold text-4xl">
          Putting the invest button on the internet
        </h1>
        <p className="text-xl text-front text-opacity-70">
          Build your own native experiences for your app's users to invest in
          stocks, ETFs and ideavaults across leading brokers in a seamless,
          secure and compliant manner.
        </p>
        <button className="btn-1 w-max px-6 py-3">Coming Soon</button>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/images/gateway.jpg"
          alt="ideavault gateway api example"
          className="w-[60%]"
        />
      </div>
    </section>
  );
}

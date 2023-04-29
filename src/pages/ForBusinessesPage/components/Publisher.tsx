export default function Publisher() {
  return (
    <section className="p-page md:flex py-28">
      <div className="w-1/2 flex flex-col justify-center gap-y-3">
        <p className="text-lg font-semibold">ideavault Publisher</p>
        <h1 className="font-bold text-4xl">
          All you need to build your research business
        </h1>
        <p className="text-xl text-front text-opacity-70">
          Business-in-a-box solution with all functionalities for you to start,
          run and grow your curated portfolio business.
        </p>
        <button className="btn-1 w-max px-6 py-3">Coming Soon</button>
      </div>
      <img
        src="/images/publisher-banner.jpg"
        alt="ideavault publisher example"
        className="md:w-1/2 pt-3"
      />
    </section>
  );
}
import useCache from "../../../contexts/cacheContext";

export default function Testimonials() {
  const cache = useCache();

  const t1: typeof cache.data.testimonials = [];
  const t2: typeof t1 = [];

  return (
    <section className="p-page py-12">
      <div className="text-center flex flex-col gap-y-3">
        <p className="text-lg text-front text-opacity-75">
          Don't take our word for it
        </p>
        <p className="text-3xl font-bold">
          see what other users and experts are saying
        </p>
      </div>
      <div className="overflow-hidden">
        {cache.data.testimonials.map((t, i) => {
          i % 2 == 0 ? t1.push(t) : t2.push(t);
          return <></>;
        })}
        <div
          className="flex gap-2 py-12"
          style={{
            animation: `x-carousel-view infinite ${
              2.5 * cache.data.testimonials.length * 1000
            }ms linear`,
          }}
        >
          {t1.map((t, i) => {
            if (i > Math.min(t1.length, t2.length)) {
              return <></>;
            }
            const a = t1[i];
            const b = t2[i];
            return (
              <div className="flex flex-col gap-y-3">
                {[a, b].map((item, i) => (
                  <div className="border shadow-lg p-3 w-[20vw] rounded">
                    <div className="flex items-center gap-x-2">
                      <img
                        src={a.imageUrl}
                        alt={a.name}
                        className="w-14 aspect-square rounded-full object-cover object-center"
                      />
                      <h5 className="text-xl ">{a.name}</h5>
                    </div>
                    <p className="mt-3">{a.content}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

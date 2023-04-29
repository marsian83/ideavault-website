import { useEffect } from "react";
import useCache from "../../contexts/cacheContext";
import { useParams } from "react-router-dom";
import { ChartComponent } from "../../common/ChartComponent";

export default function DiscoverPage() {
  const cache = useCache();

  const id: number = Number(useParams()["id"]);
  const vault = cache.data.ideavaults.filter(
    (v) => v.id == id
  )[0] as (typeof cache.data.ideavaults)[0];

  return (
    <>
      <div className="h-[15vh]" />

      <section className="bg-primary bg-opacity-5 py-8 px-6 items-start md:flex gap-x-5 m-page rounded-xl">
        <img
          src={vault.imageUrl}
          alt=""
          className="aspect-square rounded-lg object-cover w-24 "
        />
        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold text-2xl">
            {vault.name}{" "}
            <span className="bg-primary ml-1 text-primary bg-opacity-10 text-[9px] font-bold rounded px-[6px] py-[2px]">
              Free Access
            </span>
          </h1>
          <h3 className="text-sm my-[-4px] ">{vault.subtitle}</h3>
          <p className=" md:w-1/3 pt-3 ">{vault.description}</p>
        </div>
        <div className="pr-32">
          <h4 className="text-front text-opacity-70 text-sm">CAGR</h4>
          <h5
            className="text-xl"
            style={{ color: vault.cagr < 0 ? "red" : "#11ad3f" }}
          >
            {vault.cagr}%
          </h5>
        </div>
      </section>

      <section className="p-page py-20 md:flex">
        <div className="flex-1">
          <h1 className="text-primary font-semibold text-xl border-b border-front border-opacity-30 pb-3">
            About the ideavault
          </h1>
          <div className="flex flex-col gap-y-2 py-5">
            {vault.about.map((about, i) => (
              <p key={i}>{about.replace(">", "⠀•⠀")}</p>
            ))}
          </div>
        </div>

        <div className="p-10">
          <h3 className="text-front text-opacity-60 mr-10">
            Minimum Investment Amount
          </h3>
          <p className="brightness-50 text-xl">$ {vault.minimum}</p>
          <p className="text-sm py-3">Get free access forever</p>
          <button className="text-center w-full py-3 bg-[#27bc94] font-medium text-back rounded-md">
            Invest Now
          </button>
          <hr className="my-5 border border-front border-opacity-20" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-front text-opacity-70">Share on</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.toString());

                alert("Link copied to clipboard");
              }}
            >
              <img
                src="/images/socials-panel.jpg"
                alt="socials"
                className="h-4"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="p-page">
        <ChartComponent title="Past Performance" data={vault.performance} />
      </section>
    </>
  );
}

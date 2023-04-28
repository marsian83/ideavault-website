import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-10 p-page bg-primary bg-opacity-5 mt-16 border-t">
        <div className="flex gap-x-16 pb-4">
          <div className="flex flex-col gap-y-3 w-1/2">
            <p className="text-sm mobile:text-xs">
              Ideavault Technologies builds platforms & investment products to
              invest better in US/HK equities. An ideavault is a basket of
              stocks/ETFs curated to reflect an idea
            </p>
            <p className="text-sm mobile:text-xs">
              Investing in Stocks/ETFs (Exchange Traded Funds) are subject to
              market risks. Read all the related documents before investing.
              Investors should consider all risk factors and consult their
              financial advisor before investing
            </p>
            <div className="py-3">
              <h6 className="whitespace-nowrap font-semibold">
                Get market insights and facts right in your inbox
              </h6>
              <form action=" " className="flex gap-x-2 pt-4">
                <input
                  className="rounded-sm border px-1"
                  type="text"
                  placeholder="Email address"
                />
                <button className="btn-1 px-6 py-1 text-base">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="flex justify-evenly widescreen:flex-1 text-sm text-front text-opacity-60 mobile:gap-x-4">
            <div className="flex flex-col gap-y-2">
              <h5 className="font-medium text-front text-opacity-80">
                Company
              </h5>
              <Link to="/about">About</Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <h5 className="font-medium text-front text-opacity-80">
                Fine Print
              </h5>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-3 border-t border-front border-opacity-30">
          <p>The Univeristy of Hong Kong</p>
          <div>
            <p>Contact us on : info@ideavaulthk.com</p>
            <p>Mobile : +85284900225 / +85298172467</p>
          </div>
        </div>
      </footer>
    </>
  );
}

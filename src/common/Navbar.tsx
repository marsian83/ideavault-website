import { Link } from "react-router-dom";
import useCache from "../contexts/cacheContext";
import { useEffect } from "react";

export default function Navbar() {
  return (
    <>
      <nav className="p-page py-4 flex fixed w-full justify-between items-center shadow-lg border-b bg-background z-[999]">
        <div className="flex gap-x-8">
          <Link to="/" className="text-primary font-semibold text-xl">
            ideavault
          </Link>
          <div className="flex gap-x-8 items-center text-sm font-medium text-front text-opacity-70">
            <Link to="/discover" className="">
              Discover
            </Link>
            <Link to="/watchlist" className="">
              Watchlist
            </Link>
          </div>
        </div>
        <div className="flex gap-x-8 items-center text-sm font-medium text-front text-opacity-70">
          <Link to="/for-businesses">For Businesses</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  );
}

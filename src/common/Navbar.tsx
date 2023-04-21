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
            <Link to="/vaults/0" className="">
              Discover
            </Link>
            <Link to="/vaults/0" className="">
              Watchlist
            </Link>
          </div>
        </div>
        <div className="flex gap-x-8 items-center text-sm font-medium text-front text-opacity-70">
          <Link to="/for-businesses">For Businesses</Link>
          <Link to="/about">About</Link>
          <button className="text-primary border border-primary border-opacity-40 rounded-md px-4 py-2 text-sm duration-300 hover:bg-primary hover:text-back">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";
import useCache from "../contexts/cacheContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

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
            {/* <Link to="/vaults/0" className="">
              Watchlist
            </Link> */}
          </div>
        </div>
        <div className="flex gap-x-8 items-center text-sm font-medium text-front text-opacity-70">
          <Link to="/for-businesses">For Businesses</Link>
          <Link to="/about">About</Link>
          <button
            onClick={() => {
              setShowLoginModal(true);
            }}
            className="text-primary border border-primary border-opacity-40 rounded-md px-4 py-2 text-sm duration-300 hover:bg-primary hover:text-back"
          >
            Login
          </button>
        </div>
      </nav>
      {showLoginModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-front bg-opacity-30 z-[1010]">
          <div className="bg-background w-max px-12 rounded-lg z-[1011]">
            <div className="border-b border-primary border-opacity-40 flex justify-between">
              <h1 className="font-medium text-2xl py-4 px-20">
                Login / Signup
              </h1>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                }}
              >
                &#10060;
              </button>
            </div>
            <div className="py-6 flex flex-col gap-y-2">
              <input
                className="border outline-none border-primary rounded border-opacity-70 focus:border-opacity-100 w-full p-2"
                type="text"
                placeholder="username"
              />{" "}
              <input
                className="border outline-none border-primary rounded border-opacity-70 focus:border-opacity-100 w-full p-2"
                type="text"
                placeholder="password"
              />
              <button
                className="my-2 btn-1 py-3"
                onClick={() => {
                  alert("invalid credentials");
                }}
              >
                Login
              </button>
              <p
                className="cursor-pointer text-center underline my-2"
                onClick={() => {
                  alert("registrations are temporarily not available");
                }}
              >
                don't have an account? click here
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

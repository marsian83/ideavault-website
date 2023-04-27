import { Link, NavLink } from "react-router-dom";
import useCache from "../contexts/cacheContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <nav className="p-page flex fixed w-full justify-between items-center shadow-lg border-b bg-background z-[999]">
        <div className="flex gap-x-8">
          <Link to="/" className="text-primary font-semibold text-xl py-4">
            Ideavault
          </Link>
          <div className="flex gap-x-8 items-center text-sm font-medium text-front text-opacity-70">
            <NavLink
              to="/vaults/0"
              className={({ isActive, isPending }) =>
                `h-full flex flex-col justify-center duration-300 ${
                  isPending
                    ? "cursor-not-allowed opacity-50"
                    : isActive
                    ? "border-b-2 border-t-2 border-t-transparent border-b-primary pointer-events-none"
                    : "hover:saturate-200"
                }`
              }
            >
              Explore
            </NavLink>
          </div>
        </div>
        <div className="flex gap-x-8 items-center h-[3.8rem] text-sm font-medium text-front text-opacity-70">
          <NavLink
            to="/for-businesses"
            className={({ isActive, isPending }) =>
              `h-full flex flex-col justify-center duration-300 ${
                isPending
                  ? "cursor-not-allowed opacity-50"
                  : isActive
                  ? "border-b-2 border-t-2 border-t-transparent border-b-primary pointer-events-none"
                  : "hover:saturate-200"
              }`
            }
          >
            For Businesses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              `h-full flex flex-col justify-center duration-300 ${
                isPending
                  ? "cursor-not-allowed opacity-50"
                  : isActive
                  ? "border-b-2 border-t-2 border-t-transparent border-b-primary pointer-events-none"
                  : "hover:saturate-200"
              }`
            }
          >
            About
          </NavLink>
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

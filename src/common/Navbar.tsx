import { Link, NavLink } from "react-router-dom";
import useCache from "../contexts/cacheContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

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
                `h-full flex flex-col justify-center duration-300 mobile:hidden ${
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
              `h-full flex flex-col justify-center duration-300 mobile:hidden ${
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
              `h-full flex flex-col justify-center duration-300 mobile:hidden ${
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
              window.open(
                "https://c3n4byxm1tg.typeform.com/to/scr8y4XT",
                "__blank"
              );
            }}
            className="text-primary border border-primary border-opacity-40 rounded-md px-4 py-2 text-sm duration-300 hover:bg-primary hover:text-back"
          >
            JOIN BETA WAITLIST
          </button>
          <div className="relative widescreen:hidden">
            <button
              onClick={() => {
                setShowMobileNav(!showMobileNav);
              }}
              className="text-xl text-primary"
            >
              &#9776;
            </button>
            {showMobileNav && (
              <div className="bg-background absolute z-[1012] p-5 top-full right-0 my-2 rounded border border-front border-opacity-30 flex flex-col gap-y-3">
                {[
                  { to: "/vaults/0", name: "Explore" },
                  { to: "/for-businesses", name: "For Businesses" },
                  { to: "/about", name: "About" },
                ].map((navItem, i) => (
                  <Link
                    key={i}
                    to={navItem.to}
                    onClick={() => {
                      setShowMobileNav(false);
                    }}
                    className="whitespace-nowrap"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

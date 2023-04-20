import { ReactNode } from "react";
import useCache from "../contexts/cacheContext";

export default function useLoader(element: JSX.Element) {
  const cache = useCache();

  return cache.loading ? (
    <div className="h-screen flex justify-center items-center text-2xl italic text-primary">
      Loading ...
    </div>
  ) : (
    element
  );
}

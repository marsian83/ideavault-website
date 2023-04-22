import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import useCache from "./contexts/cacheContext";
import ForBusinessesPage from "./pages/ForBusinessesPage/ForBusinessesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import { useEffect, useRef } from "react";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/for-businesses" element={<ForBusinessesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vaults/:id" element={<DiscoverPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Root() {
  const cache = useCache();

  const watermark = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const watermarkStyles = watermark.current.style.cssText;
    const watermarkHtml = watermark.current.innerHTML;

    setInterval(() => {
      if (
        watermark.current.style.cssText != watermarkStyles ||
        watermark.current.innerHTML != watermarkHtml
      ) {
        watermark.current.style.cssText = watermarkStyles;
        watermark.current.innerHTML = watermarkHtml;
      }
    }, 100);
  }, []);

  return (
    <main className="relative">
      <div
        className="fixed top-0 left-0 w-screen h-screen z-[100000] items-center text-center justify-center text-lg pointer-events-none hidden"
        ref={watermark}
      >
        <div className="bg-back bg-opacity-10 backdrop-blur-sm">
          This is a demo <br />
          Provided by Spandan Barve
          <br />
          to preview the website
        </div>
      </div>
      <Navbar />
      {cache.loading ? (
        <div className="flex items-center justify-center h-screen">
          Loading ...{" "}
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </main>
  );
}

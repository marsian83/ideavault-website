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
import { useEffect } from "react";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
  const cache = useCache();

  useEffect(() => {
    cache.loadData();
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/for-businesses" element={<ForBusinessesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Root() {
  const cache = useCache();

  useEffect(() => {
    cache.loadData();
  });

  return (
    <main className="relative">
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

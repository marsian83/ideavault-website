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
import useCache, { CacheProvider } from "./contexts/cacheContext";
import ForBusinessesPage from "./pages/ForBusinessesPage/ForBusinessesPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/for-businesses" element={<ForBusinessesPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Root() {
  const cache = useCache();

  return (
    <main className="relative">
      <Navbar />
      <CacheProvider>
        {cache.loading ? (
          <div className="flex items-center justify-center h-screen">
            Loading ...{" "}
          </div>
        ) : (
          <Outlet />
        )}
      </CacheProvider>
      <Footer />
    </main>
  );
}

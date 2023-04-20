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
import ForBusinessesPage from "./pages/ForBusinessesPage/ForBusinessesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import useCache from "./contexts/cacheContext";

export default function App() {
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
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

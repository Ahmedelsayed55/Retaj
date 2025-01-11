import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./Componant/NavBar/NavBar";
import Footer from "./Componant/Footer/Footer";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Oriental from "./Componant/OrientalSweets/Oriental";
import Western from "./Componant/WesternSweets/Western";
import Contact from "./Componant/Contact/Contact";
import Dry from "./Componant/Dry/Dry";
import ProductDetails from "./Page/ProductDetails/ProductDetails";

const Layout = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="oriental" element={<Oriental />} />
        <Route path="western" element={<Western />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dry" element={<Dry />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

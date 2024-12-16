import "./App.css";
// eslint-disable-next-line no-unused-vars
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route,
} from "react-router-dom";
import NavBar from "./Componant/NavBar/NavBar";
import Footer from "./Componant/Footer/Footer";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import StartPage from "./Page/Startpage/StartPage";
import Oriental from "./Componant/OrientalSweets/Oriental";
import Western from "./Componant/WesternSweets/Western";
import Contact from "./Componant/Contact/Contact";
import Dry from "./Componant/Dry/Dry";

const layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={layout()}>
          {/* <Route index element={<StartPage />} ></Route> */}
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/oriental" element={<Oriental />}></Route>
          <Route path="/western" element={<Western />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dry" element={<Dry />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

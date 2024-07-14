import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Resources from "../Pages/Resources/Resources";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

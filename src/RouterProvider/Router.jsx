import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Compiler from "../Pages/Compiler/Compiler";
import Submission from "../Pages/Submission/Submission";
import Resources from "../Pages/Resources/Resources";
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
        path: "/compiler",
        element: <Compiler></Compiler>,
      },
      {
        path: "/submission",
        element: <Submission></Submission>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

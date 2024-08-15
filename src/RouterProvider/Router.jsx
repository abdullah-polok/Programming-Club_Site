import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Compiler from "../Pages/Compiler/Compiler";
import Submission from "../Pages/Submission/Submission";
import Resources from "../Pages/Resources/Resources";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
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
        element: (
          <PrivateRouter>
            <Events></Events>
          </PrivateRouter>
        ),
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/leaderboard",
        element: (
          <PrivateRouter>
            <LeaderBoard></LeaderBoard>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter, useLocation } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Compiler from "../Pages/Compiler/Compiler";
import Resources from "../Pages/Resources/Resources";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Admin from "../Admin/Admin";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Profile from "../Pages/Profile/Profile";
import AdminRouter from "../AdminRouter/AdminRouter";
import Error from "../Pages/Error/Error";
import ProblemSets from "../Pages/Events/ProblemSets/ProblemSets";
import PerProblem from "../Pages/Events/ProblemSets/PerProblem";
import ProblemDetails from "../Pages/Events/ProblemSets/ProblemDetails";

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
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/joinus",
        element: (
          <PrivateRouter>
            <JoinUs></JoinUs>
          </PrivateRouter>
        ),
      },
      {
        path: "/problemset",
        element: (
          <PrivateRouter>
            <ProblemSets></ProblemSets>
          </PrivateRouter>
        ),
      },
      {
        path: "/perproblem",
        element: (
          <PrivateRouter>
            <PerProblem></PerProblem>
          </PrivateRouter>
        ),
      },
      {
        path: "/problemdetails",
        element: (
          <PrivateRouter>
            <ProblemDetails></ProblemDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/admin",
        element: (
          <AdminRouter>
            <Admin></Admin>
          </AdminRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

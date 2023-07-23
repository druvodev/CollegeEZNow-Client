import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllColleges from "../pages/Colleges/AllColleges";
import Admission from "../pages/Admission/Admission";
import SignIn from "../pages/SignInUp/SignIn";
import SignUp from "../pages/SignInUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyCollege from "../pages/MyCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/colleges",
        element: <AllColleges />,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
    ],
  },
  {},
]);

export default router;

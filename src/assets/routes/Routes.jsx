import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllColleges from "../pages/Colleges/AllColleges";
import Admission from "../pages/Admission/Admission";

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
        path: "/colleges",
        element: <AllColleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
    ],
  },
  {},
]);

export default router;

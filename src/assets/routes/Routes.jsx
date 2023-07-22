import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default router;

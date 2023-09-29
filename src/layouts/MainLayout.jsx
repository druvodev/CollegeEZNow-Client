import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { PuffLoader } from "react-spinners";
import Footer from "../pages/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-[#F6F7F9] dark:bg-slate-900 min-h-screen">
      <Navbar />
      {loading ? (
        <div className="min-h-screen flex justify-center items-center mb-16">
          <PuffLoader color="#00f1e8" />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;

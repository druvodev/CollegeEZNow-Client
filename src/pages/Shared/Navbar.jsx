import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Profile from "./Profile";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isTheme, setIsTheme] = useState("");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setIsTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      setIsTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    window.localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      setIsTheme(newTheme);
      document.documentElement.classList.add("dark");
    } else {
      setIsTheme(newTheme);
      document.documentElement.classList.remove("dark");
    }
  };

  const navOption = (
    <>
      <li>
        <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 primary-text font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 primary-text font-bold"
              : ""
          }
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 primary-text font-bold"
              : ""
          }
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCollege"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 primary-text font-bold"
              : ""
          }
        >
          My College
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-50 dark:border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-slate-700 rounded-box w-52 z-40"
          >
            {navOption}
          </ul>
        </div>
        <a href="/" className="text-xl font-semibold">
          College<span className="primary-text font-bold">EZ</span>
          Now
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <button onClick={toggleTheme}>
          {isTheme === "dark" ? (
            <svg
              className="swap-on fill-current w-9 h-9 active:animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg
              className="swap-off fill-current w-9 h-9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </button>

        {user?.displayName ? (
          <div className="dropdown dropdown-end ml-5">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/Ws1r9fp/images.png"
                  }
                  alt={user.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white dark:bg-slate-700 rounded-box w-52"
            >
              <li className="font-semibold">
                <a>{user?.displayName}</a>
                <hr />
              </li>
              <li>
                <Profile />
              </li>
              <li onClick={() => logOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <a
            href="/signIn"
            className="px-7 py-1 border hover:bg-[#00f1e8] hover:text-white duration-200 border-[#00f1e8] font-semibold tracking-wide ml-3"
          >
            SignIn
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;

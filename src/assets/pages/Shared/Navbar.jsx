import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navOption = (
    <>
      <li>
        <NavLink exact to="/" activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/colleges" activeClassName="active-link">
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink to="/admission" activeClassName="active-link">
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink to="/myCollege" activeClassName="active-link">
          My College
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40"
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
        {user?.displayName ? (
          <div className="dropdown dropdown-end">
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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold">
                <a>{user?.displayName}</a>
                <hr />
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li onClick={() => logOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <a
            href="/signIn"
            className="px-7 py-1 border hover:bg-[#00f1e8] hover:text-white duration-200 border-[#00f1e8] font-semibold tracking-wide"
          >
            SignIn
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;

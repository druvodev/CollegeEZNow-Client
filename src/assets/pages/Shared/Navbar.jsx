const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Colleges</a>
      </li>
      <li>
        <a>Admission</a>
      </li>
      <li>
        <a>My College</a>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="text-xl font-semibold">
          College<span className="primary-text font-bold">EZ</span>
          Now
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm">Go</a>
      </div>
    </div>
  );
};

export default Navbar;

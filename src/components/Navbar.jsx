import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  fixed z-10 max-w-[1170px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#23be0a] text-white px-2 py-1 rounded-md"
                    : "px-2 py-1"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listed"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#23be0a] text-white px-2 py-1 rounded-md"
                    : "px-2 py-1"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#23be0a] text-white px-2 py-1 rounded-md"
                    : "px-2 py-1"
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl p-0">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold px-4 btn py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2 btn rounded-xl bg-white shadow-none"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold btn px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2 btn rounded-xl bg-white shadow-none"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold btn px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2 btn rounded-xl bg-white shadow-none"
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <a className="btn text-white bg-[#23be0a]">Sign In</a>
        <a className="btn text-white bg-[#59c6d2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;

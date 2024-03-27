import { Link, NavLink } from "react-router-dom";

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
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#23be0a] text-white px-2 py-1 rounded-md"
                    : "px-2 py-1"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " bg-[#23be0a] text-white px-2 py-1 rounded-md"
                    : "px-2 py-1"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold p-0">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold px-4  py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2  rounded-xl bg-white shadow-none hover:bg-gray-300 hover:duration-200"
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
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold  px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2  rounded-xl bg-white shadow-none hover:bg-gray-300 hover:duration-200"
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
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold  px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2  rounded-xl bg-white shadow-none hover:bg-gray-300 hover:duration-200"
              }
            >
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold  px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2 rounded-xl bg-white shadow-none hover:bg-gray-300 hover:duration-200"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] border-2 border-[#23be0a] font-bold  px-4 py-2 rounded-xl"
                  : "border-2 border-white px-4 py-2  rounded-xl bg-white shadow-none hover:bg-gray-300 hover:duration-200"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <button className="px-2 py-2 bg-[#23be0a] lg:px-4  rounded-lg hover:bg-gray-300 hover:duration-200">
          <a className=" text-white">Sign In</a>
        </button>
        <button className="lg:px-4 rounded-lg px-2 py-2 bg-[#59c6d2] hover:bg-gray-300 hover:duration-200">
          <a className=" text-white">Sign Up</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

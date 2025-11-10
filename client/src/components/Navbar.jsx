import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } `
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } `
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } `
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/create-blog"
        className={({ isActive }) =>
          `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          } `
        }
      >
        Create-Blog
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import ukhLogo from "../../assets/ukhlogo.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/events"}>
          Events
        </NavLink>
      </li>
      <li>
        <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/resources"}>
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/aboutus"}>
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-indigo-50 shadow shadow-gray-50">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img src={ukhLogo}></img>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

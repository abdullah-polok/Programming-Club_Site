import React from "react";
import { Link, NavLink } from "react-router-dom";
import ukhLogo from "../../assets/ukhlogo.png";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const userInfo = useContext(AuthContext);

  const { user, logoutUser, profileData } = userInfo;

  const profileLength = Object.keys(profileData).length;
  const handleUser = () => {
    logoutUser();
  };

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
        <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/compiler"}>
          Compiler
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className="no-underline text-lg mx-0  mr-3 "
              to={"/leaderboard"}
            >
              Leaderboard
            </NavLink>
          </li>
        </>
      )}
      {profileLength ? (
        <li>
          <NavLink className="no-underline text-lg mx-0  mr-3 " to={"/profile"}>
            Profile
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <>
      <div className="navbar shadow-slate-400 shadow-md">
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
              className="bg-white menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={ukhLogo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-sm">
            {user ? (
              <div className="flex items-center justify-between">
                <li>
                  <NavLink
                    onClick={handleUser}
                    className="no-underline text-lg"
                    to={"/"}
                  >
                    Logout
                  </NavLink>
                </li>
              </div>
            ) : (
              <li>
                <NavLink className="no-underline text-lg" to={"/login"}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

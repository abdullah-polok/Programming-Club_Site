import React from "react";
import Navbar from "../Components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
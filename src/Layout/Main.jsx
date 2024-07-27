import React from "react";
import Navbar from "../Components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

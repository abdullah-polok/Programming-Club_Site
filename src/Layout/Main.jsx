import React from "react";
import Navbar from "../Components/Headers/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Main.css";
const Main = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // offset (in pixels) from the original trigger point
      duration: 2000, // duration of animations in milliseconds
      easing: "ease-out", // easing function
      debounceDelay: 50, // delay in milliseconds
      throttleDelay: 99, // delay in milliseconds
    });
  }, []);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-full mx-auto px-3">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

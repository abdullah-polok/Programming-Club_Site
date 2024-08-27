import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Banner.css";

import { Link } from "react-router-dom";

const showAlert = () => {
  MySwal.fire({
    title: "Welcome",
    html: `<div>
        <img src=${qr} />
     </div>`,
    confirmButtonText: "Close",
    width: "30%",
  });
};

const Banner = () => {
  return (
    <div className="heroSection relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed">
      {/* <div className="absolute top-1 inset-0 bg-black opacity-35 h-screen rounded"></div> */}
      <div className="absolute top-[30%]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          className=" text-xl md:text-3xl lg:text-5xl text-white  font-bold bg-opacity-50 p-5 rounded mb-4 text-center"
        >
          WELCOME TO THE UKH PROGRAMMING CLUB />
        </motion.div>
      </div>
      <div className="w-1/2 absolute top-[50%]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 1 }} // Adjusted delay to start after the first message
          className=" text-sm md:text-base lg:text-lg text-white  p-5 text-center "
        >
          <Typewriter
            words={[
              "Become part of our programming club to learn new skills, work on exciting projects, and connect with a vibrant community of coders. Join us and take your passion for technology to new heights!",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>
      </div>
      <div className="w-1/2 absolute top-[85%]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 1 }} // Adjusted delay to start after the first message
          className="  text-sm md:text-base lg:text-lg text-white  p-5 text-center "
        >
          <div className="flex items-center justify-center">
            {/* <button
              onClick={showAlert}
              className="btn  btn-sm md:btn-lg lg:btn-wide bg-white"
            >
              JOIN US
            </button> */}
            <Link
              to={"/joinus"}
              className="btn  btn-sm md:btn-lg lg:btn-wide bg-white"
            >
              JOIN US
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Banner.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <LazyLoadComponent>
      <div className=" mt-4 heroSection flex flex-col items-center justify-center p-5 bg-[url('/src/assets/images/banner1-overlay.png')] h-fit md:h-screen lg:h-screen bg-cover bg-center ">
        {/* <div className="absolute top-1 inset-0 bg-black opacity-35 h-screen rounded"></div> */}

        <div className="w-full  mb-10 mt-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
            className=" text-sm md:text-3xl lg:text-5xl text-white  font-bold bg-opacity-50  rounded  text-center"
          >
            WELCOME TO THE UKH PROGRAMMING CLUB {"/>"}
          </motion.div>
        </div>

        <div className="w-3/4 px-10 mb-10 hidden md:block lg:block">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 1 }} // Adjusted delay to start after the first message
            className=" text-sm md:text-base lg:text-lg text-white text-center "
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

        <div className="">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 1 }} // Adjusted delay to start after the first message
            className="  text-sm md:text-base lg:text-lg text-white  p-5 text-center "
          >
            <div className="flex items-center justify-center">
              <Link
                to={"/joinus"}
                className="btn  btn-xs md:btn-lg lg:btn-wide bg-white"
              >
                JOIN US
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default Banner;

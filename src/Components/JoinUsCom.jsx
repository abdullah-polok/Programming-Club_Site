import React from "react";
import join from "../assets/images/pair-programming-animate.svg";
import JoinButton from "./JoinButton";
import "./commonCSS.css";
import { Link } from "react-router-dom";
const JoinUsCom = () => {
  return (
    <div className="mt-36 ">
      <div className="content-title">
        <h1 className="text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
          Join Us Today!
        </h1>
      </div>
      <div
        data-aos="fade-left"
        className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 justify-center items-center"
      >
        <div className="mt-4">
          <img src={join} />
        </div>
        <div>
          <p className="mt-4 text-justify">
            Join our programming club to enhance your coding skills, work on
            exciting projects, and connect with fellow students passionate about
            technology. Whether you're a beginner or an expert, we welcome all
            skill levels. Sign up online or come to our next meeting to learn
            more and get involved
          </p>
          <div className=" text-center md:text-center lg:text-left mb-4">
            <Link
              className="btn w-40 bg-[#7c8deb] text-white text-lg mt-28"
              to={"/joinus"}
            >
              JOIN US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCom;

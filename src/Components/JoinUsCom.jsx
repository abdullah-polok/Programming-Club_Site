import React from "react";
import join from "../assets/images/Pair programming-cuate.png";
import JoinButton from "./JoinButton";
const JoinUsCom = () => {
  return (
    <div className="mt-40">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
        <div>
          <h1 className="text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
            Join Us Today!
          </h1>
          <p className="mt-4 text-justify">
            Join our programming club to enhance your coding skills, work on
            exciting projects, and connect with fellow students passionate about
            technology. Whether you're a beginner or an expert, we welcome all
            skill levels. Sign up online or come to our next meeting to learn
            more and get involved
          </p>
          <JoinButton></JoinButton>
        </div>
        <div>
          <img src={join} />
        </div>
      </div>
    </div>
  );
};

export default JoinUsCom;

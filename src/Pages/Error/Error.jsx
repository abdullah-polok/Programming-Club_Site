import React from "react";
import notfound from "../../assets/images/404-error-page-not-found-with-people-connecting-a-plug-animate.svg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-1/2 md:w-1/2 lg:3/4" src={notfound} />
      <div>
        <Link
          className="flex items-center gap-4 text-sm md:text-lg lg:text-xl text-[#7c8deb] font-bold"
          to={"/"}
        >
          <IoMdArrowRoundBack></IoMdArrowRoundBack> Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;

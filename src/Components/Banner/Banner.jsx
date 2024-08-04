import React from "react";
import banner from "../../assets/images/banner.png";
import { Typewriter } from "react-simple-typewriter";
import JoinButton from "../JoinButton";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4  items-center bg-indigo-50 px-4 rounded-md">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#7c8deb]">
          <span>
            <Typewriter
              words={[
                "Code. Collaborate. Conquer",
                "Unlock Your Coding Potential",
                "Empower Your Tech Journey",
                "Learn, build, and grow with us",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </span>
        </h1>
        <p className="mt-5">
          Become part of our programming club to learn new skills, work on
          exciting projects, and connect with a vibrant community of coders.
          Join us and take your passion for technology to new heights!
        </p>
        <Link
          className="btn w-40 bg-[#7c8deb] text-white text-lg mt-28"
          to={"https://chat.whatsapp.com/I3vh4wnCFUYBRhBzgyeBC5"}
        >
          JOIN US
        </Link>
      </div>
      <div>
        <img src={banner} className="mx-auto w-full" />
      </div>
    </div>
  );
};

export default Banner;

import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import noevent from "../../assets/images/404 error with people holding the numbers-amico.svg";
const Events = () => {
  const { startCountdown, countdownDate, profileData, startTime } =
    useContext(AuthContext);
  console.log(startTime);
  return (
    <div>
      {countdownDate && profileData?.email ? (
        <div className="mt-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-300 to-blue-400 text-white">
          <div className="p-10 flex items-center justify-between ">
            <div>
              <h1 className="text-2xl">Weekly event</h1>
              <p className="text-base">Date:{startCountdown}</p>
            </div>
            <Link
              onClick={startCountdown}
              to="/problemset"
              className="btn btn-lg lg:btn-wide btn-Danger"
            >
              Join
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl text-center text-[#7c8deb] font-bold">
              Ups!... no event found
            </h1>
          </div>
          <div className="flex justify-center">
            <img className="w-1/2" src={noevent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

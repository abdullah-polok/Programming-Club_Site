import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../src/AuthProvider/AuthProvider";

const CountDownTime = () => {
  const { problemStatus, setTimeTaken, startTime, endTime, countdownDate } =
    useContext(AuthContext);

  // console.log("Probelem status", problemStatus);
  const handleTime = (hours, minutes, seconds) => {
    // console.log("Hours", hours);
    // if (problemStatus) {
    const hour = hours * 60;
    const second = seconds / 60;
    const totalTime = hour + minutes + second;
    const totalTimeInt = parseFloat(totalTime.toFixed(3));
    setTimeTaken(totalTimeInt);
    // }
  };
  if (!startTime || !endTime) {
    return <p>Loading...</p>;
  }

  if (!countdownDate) {
    return (
      <p className="flex justify-center gap-1 mb-4 text-red-500 font-bold border-2 border-[#7c8deb] p-2 rounded-xl mt-4">
        Contest has ended!
      </p>
    );
  }
  return (
    <div>
      <Countdown
        date={countdownDate}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <span className="flex justify-center gap-1 mb-4 text-red-500 font-bold border-2border-[#7c8deb] p-2 rounded-xl mt-4">
                Contest has ended!
              </span>
            );
          } else {
            return (
              <div
                onClick={handleTime(hours, minutes, seconds)}
                className="flex justify-center gap-1 mb-4 mt-4"
              >
                <div className="text-red-500 font-bold border-2 border-[#7c8deb] py-2 px-4 rounded-xl">
                  {hours}h
                </div>
                <div className="text-red-500 font-bold border-2 border-[#7c8deb] py-2 px-4 rounded-xl">
                  {minutes}m
                </div>
                <div className="text-red-500 font-bold border-2 border-[#7c8deb] py-2 px-4 rounded-xl">
                  {seconds}s
                </div>
              </div>
            );
          }
        }}
      />
    </div>
  );
};
export default CountDownTime;

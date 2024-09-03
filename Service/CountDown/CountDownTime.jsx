import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../src/AuthProvider/AuthProvider";
let callTime = 0;
const CountDownTime = () => {
  const { problemStatus, setTimeTaken, startTime, endTime, countdownDate } =
    useContext(AuthContext);

  // console.log("Probelem status", problemStatus);
  const handleTime = (hours, minutes, seconds) => {
    // console.log("Hours", hours);
    if (problemStatus && callTime <= 1) {
      const hour = hours * 60;
      const second = seconds / 60;
      const totalTime = hour + minutes + second;
      const totalTimeInt = parseFloat(totalTime.toFixed(3));
      setTimeTaken(totalTimeInt);
      callTime++;
    }
  };

  if (!startTime || !endTime) {
    return <p>Loading...</p>;
  }

  if (!countdownDate) {
    return (
      <p className="flex justify-center gap-1 mb-4 text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
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
              <span className="flex justify-center gap-1 mb-4 text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
                Contest has ended!
              </span>
            );
          } else {
            return (
              <div
                onClick={handleTime(hours, minutes, seconds)}
                className="flex justify-center gap-1 mb-4"
              >
                <div className="text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
                  {hours}h
                </div>
                <div className="text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
                  {minutes}m
                </div>
                <div className="text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
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

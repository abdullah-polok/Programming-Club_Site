import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../src/AuthProvider/AuthProvider";
let callTime = 0;
const CountDownTime = () => {
  const {
    endTime,
    isCountdownActive,
    problemStatus,
    setTimeTaken,
    setProblemStatus,
  } = useContext(AuthContext);
  const handleCountdownComplete = () => {
    resetCountdown(); // Call resetCountdown when the countdown completes
  };
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
  return (
    <div>
      {!isCountdownActive ? (
        <div className="flex justify-center mb-4">
          <h1>Times up</h1>
        </div>
      ) : (
        <Countdown
          date={new Date(endTime)}
          onComplete={handleCountdownComplete}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <span className="tecy text-red-500 font-bold border-2 border-purple-300 p-2 rounded-xl">
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
      )}
    </div>
  );
};

export default CountDownTime;

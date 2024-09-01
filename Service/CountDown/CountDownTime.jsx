import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../src/AuthProvider/AuthProvider";

const CountDownTime = () => {
  const { endTime, resetCountdown } = useContext(AuthContext);
  if (!endTime) return <span>Contest has ended!</span>;
  return (
    <div>
      <Countdown
        date={new Date(endTime)}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span>Contest has ended!</span>;
          } else {
            return (
              <div className="flex justify-center text-red-500 font-bold border-2 mb-2">
                {hours}h {minutes}m {seconds}s
              </div>
            );
          }
        }}
      />
      {/* Button to reset countdown */}
      {/* <button onClick={resetCountdown}>Reset Countdown</button> */}
    </div>
  );
};

export default CountDownTime;

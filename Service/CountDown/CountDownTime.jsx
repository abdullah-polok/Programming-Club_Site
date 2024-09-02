import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AuthContext } from "../../src/AuthProvider/AuthProvider";

const CountDownTime = () => {
  const { endTime, isCountdownActive } = useContext(AuthContext);
  const handleCountdownComplete = () => {
    resetCountdown(); // Call resetCountdown when the countdown completes
  };

  return (
    <div>
      {!isCountdownActive ? (
        <div>
          <h1>Times up</h1>
        </div>
      ) : (
        <Countdown
          date={new Date(endTime)}
          onComplete={handleCountdownComplete}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return <span>Contest has ended!</span>;
            } else {
              return (
                <div>
                  {hours}h {minutes}m {seconds}s
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

import React from "react";

const Events = () => {
  return (
    <div className="mt-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-300 to-blue-400 text-white">
      <div className="p-10 flex items-center justify-between ">
        <div>
          <h1 className="text-2xl">Weekly event</h1>
          <p className="text-base">Date:28-12-2024</p>
        </div>
        <button className="btn btn-wide btn-Danger">Join</button>
      </div>
    </div>
  );
};

export default Events;

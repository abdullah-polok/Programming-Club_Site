import React from "react";
import CalenderCom from "./CalenderCom";
import event from "../assets/images/Events-pana.png";
const EventCom = () => {
  return (
    <div className="mt-36">
      <h1 className="text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Weekly events
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
        <div className="w-full">
          <img src={event} />
        </div>
        <div>
          <div>
            <CalenderCom></CalenderCom>
          </div>
          <div className="rounded-lg">
            <h1 className="bg-[#677aeb] text-white p-4 ">Events</h1>
            <div className="bg-[#8b99ecd3] text-white p-4">
              <p>Event 1 22024-08-01</p>
              <p>Event 1 22024-08-01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCom;

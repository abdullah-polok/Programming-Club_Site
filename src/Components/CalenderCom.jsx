import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalenderCom.css";

const CalenderCom = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="calendar-container">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalenderCom;

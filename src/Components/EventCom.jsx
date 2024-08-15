import React from "react";
import CalenderCom from "./CalenderCom";
import event from "../assets/images/Events-pana.png";
import eventani from "../assets/images/hand-coding-animate.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const EventCom = () => {
  return (
    <div className="mt-36">
      <div className="content-title">
        <h1 className=" text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
          Weekly events
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 justify-center items-center">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <CalenderCom></CalenderCom>
          </div>
          <div className="rounded-lg mt-2">
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Weekly Events</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Link to={"/events"}>Event:1</Link>
                </Typography>
                <br />
                <Typography>
                  <Link to={"/events"}>Event:2</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full "
        >
          <img className="w-11/12" src={eventani} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventCom;

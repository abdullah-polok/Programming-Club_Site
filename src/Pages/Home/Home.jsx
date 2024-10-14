import React from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUsCom from "../../Components/AboutUsCom";
import EventCom from "../../Components/EventCom";
import JoinUsCom from "../../Components/JoinUsCom";
import Gallery from "../../Components/Gallery/Gallery";
import Objective from "../../Components/Objective/Objective";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EventCom></EventCom>
      <JoinUsCom></JoinUsCom>
      <Gallery></Gallery>
      <Objective></Objective>
      <AboutUsCom></AboutUsCom>
    </div>
  );
};

export default Home;

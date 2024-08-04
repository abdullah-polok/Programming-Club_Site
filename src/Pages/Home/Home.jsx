import React from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUsCom from "../../Components/AboutUsCom";
import EventCom from "../../Components/EventCom";
import JoinUsCom from "../../Components/JoinUsCom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EventCom></EventCom>
      <JoinUsCom></JoinUsCom>

      <AboutUsCom></AboutUsCom>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUsCom from "../../Components/AboutUsCom";
import EventCom from "../../Components/EventCom";
import JoinUsCom from "../../Components/JoinUsCom";
import Gallery from "../../Components/Gallery/Gallery";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EventCom></EventCom>
      <JoinUsCom></JoinUsCom>
      <Gallery></Gallery>
      <AboutUsCom></AboutUsCom>
    </div>
  );
};

export default Home;

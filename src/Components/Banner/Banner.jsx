import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import b1 from "../../assets/images/FtxoW4YWYAAQQIb.jpg";
import b2 from "../../assets/images/Google-Hashcode-Competition-UKH-1-1024x683.jpg";
import b3 from "../../assets/images/Google-Hashcode-Competition-UKH-10-1024x683.jpg";
import b4 from "../../assets/images/Google-Hashcode-Competition-UKH-7-1024x683.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel carousel-auto w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={b1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={b2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={b3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={b4} className="w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;

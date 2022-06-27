import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image from "./net.jpg";

function Container2() {
  return (
    <Carousel>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </Carousel>
  );
}

export default Container2;

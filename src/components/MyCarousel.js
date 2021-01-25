import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../images/mohonk1.png";
import imageTwo from "../images/mohonk2.png";
import imageThree from "../images/mohonk3.png";

const MyCarousel = () => (
  <Carousel plugins={["arrows"]}>
    <img src={imageOne} />
    <img src={imageTwo} />
    <img src={imageThree} />
  </Carousel>
);

export default MyCarousel;

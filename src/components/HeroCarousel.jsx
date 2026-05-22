import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroCarousel.css";
import React from "react";
import image from "../assets/Black-Friday.jpg";
import image2 from "../assets/shoes-sale2.png";
import image3 from "../assets/watch.jpg";
function HeroCarousel() {
  return (
    <div className="carousel-wrapper">

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        swipeable
        emulateTouch
      >

        <div className="slide">
          <img src={image} alt="slide1" />
        </div>

        <div className="slide">
           <img src={image2} alt="slide2" />
        </div>

        <div className="slide">
          <img src={image3} alt="slide3" />
        </div>

      </Carousel>

    </div>
  );
}

export default HeroCarousel;
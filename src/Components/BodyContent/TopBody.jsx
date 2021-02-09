import React from "react";
import "../BodyContent/TopBody.css";
import { Carousel } from "react-bootstrap";
import { SecondBodyContent } from "./SecondBody/SecondBodyContent";
import { CardData } from "./CardContent/CardData";

export const TopBody = () => {
  return (
    <div>

      {/* ----------------------Marqueee----------------------------------- */}
      <marquee className="marquee-content" behavior="" direction="">
        Nawab Shah Alam Khan
      </marquee>

      {/* ------------------------Carousel------------------------------------- */}
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block" src="1.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="2.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src="3jpg.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
      
      {/* ---------------------Card With Animation--------------------------- */}

      <CardData />
      <SecondBodyContent />
    </div>
  );
};

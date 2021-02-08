import React from "react";
import { Carousel } from "react-bootstrap";

export const TopBody = () => {
  return (
    <div>
      <Carousel>
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
    </div>
  );
};

import React from "react";
import "../BodyContent/TopBody.css";
import { Carousel } from "react-bootstrap";

export const TopBody = () => {
  return (
    <div>
      <marquee className="marquee-content" behavior="" direction="">
        Nawab Shah Alam Khan
      </marquee>
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
      <p className="body-para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim
        temporibus excepturi laboriosam reiciendis hic nulla facilis velit qui
        illum, repellat obcaecati aperiam nostrum dolore tempora explicabo!
        Natus accusamus impedit vitae architecto ex quod? Unde vitae aut rerum.
        Consequatur reiciendis similique vero minima omnis impedit pariatur iure
        optio et consectetur, nostrum nesciunt accusamus inventore. Ex cum esse
        dolorum qui suscipit sequi non eaque quas laboriosam natus soluta ipsa,
        cupiditate repellat accusantium quia quo a facere voluptates expedita
        aperiam quidem earum temporibus error odio! Sed voluptatum delectus
        exercitationem, nostrum quaerat provident, voluptatem illum inventore
        temporibus reprehenderit, aliquam eligendi similique sit? Odit. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Unde enim temporibus
        excepturi laboriosam reiciendis hic nulla facilis velit qui illum,
        repellat obcaecati aperiam nostrum dolore tempora explicabo! Natus
        accusamus impedit vitae architecto ex quod? Unde vitae aut rerum.
        Consequatur reiciendis similique vero minima omnis impedit pariatur iure
        optio et consectetur, nostrum nesciunt accusamus inventore. Ex cum esse
        dolorum qui suscipit sequi non eaque quas laboriosam natus soluta ipsa,
        cupiditate repellat accusantium quia quo a facere voluptates expedita
        aperiam quidem earum temporibus error odio! Sed voluptatum delectus
        exercitationem, nostrum quaerat provident, voluptatem illum inventore
        temporibus reprehenderit, aliquam eligendi similique sit? Odit. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Unde enim temporibus
        excepturi laboriosam reiciendis hic nulla facilis velit qui illum,
        repellat obcaecati aperiam nostrum dolore tempora explicabo! Natus
        accusamus impedit vitae architecto ex quod? Unde vitae aut rerum.
        Consequatur reiciendis similique vero minima omnis impedit pariatur iure
        optio et consectetur, nostrum nesciunt accusamus inventore. Ex cum esse
        dolorum qui suscipit sequi non eaque quas laboriosam natus soluta ipsa,
        cupiditate repellat accusantium quia quo a facere voluptates expedita
        aperiam quidem earum temporibus error odio! Sed voluptatum delectus
        exercitationem, nostrum quaerat provident, voluptatem illum inventore
        temporibus reprehenderit, aliquam eligendi similique sit? Odit.
      </p>
    </div>
  );
};

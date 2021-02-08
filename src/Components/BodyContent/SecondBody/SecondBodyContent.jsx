import React from "react";
import "../SecondBody/SecondBodyContent.css";

export const SecondBodyContent = () => {
  return (
    <div className="wrap">
      {/* ------------Card 1-------------- */}
      <div className="title">
        <img src="image1.jpg" />
        <div className="text">
          <h3>Nawab Shah Alam</h3>
          <p className="para">
            This institution has been established under the aegis of
            MADARSA-I-AIZZA, a registered educational society registered on 28th
            December 1961 under the Hyderabad societies registration Act No. 1
            of 1350 fosli.
          </p>
        </div>
      </div>

      {/* ---------------Card 2------------------- */}

      <div className="title">
        <img src="image2.jpg" />
        <div className="text">
          <h3>Price Distribution</h3>
          <p className="para">
            Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
            bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto
            kevin turducken."
          </p>
        </div>
      </div>

      {/* -------------------Card3----------------------- */}

      <div className="title">
        <img src="image3.jpg" />
        <div className="text">
          <h3>Exibition</h3>
          <p className="para">
            Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
            bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto
            kevin turducken.
          </p>
        </div>
      </div>
    </div>
  );
};

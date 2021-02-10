import React from "react";
import "../CardContent/CardData.css";
import { Card } from "react-bootstrap";

export const CardData = () => {
  return (
    <div className="college-details">
      {/* ---------------First Card---------------- */}
      <Card className="content" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="card4.jpg" />
        <Card.Body>
          <Card.Title>Conference Hall</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* -----------Second Card----------------- */}
      <Card className="content" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="card2.jpg" />
        <Card.Body>
          <Card.Title>Playing Hall</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* ------------third Card--------------------- */}

      <Card className="content" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="card3.jpg" />
        <Card.Body>
          <Card.Title>Meeting Room</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card>

      {/* ----------------Fouth Card------------------ */}
      {/* <Card className="content" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="card5.jpg" />
        <Card.Body>
          <Card.Title>Class Room's</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="">See More..</a>
        </Card.Body>
      </Card> */}

      {/* --------------------Latest News----------------------- */}

      <Card className="content" border="light" style={{ width: "18rem" }}>
        <Card.Header className="content-header">Latest News</Card.Header>
        <Card.Body>
          <marquee
            behavior="scroll"
            direction="up"
            onmouseover={"this.stop();"}
            onmouseout={"this.start();"}
          >
            Mohammad Shoaib Mohiuddin from B.tech 1st year has successfully
            achieved Gold Medal representing India against Japanese.
            <hr style={{ color: "white" }} />
          </marquee>
        </Card.Body>
      </Card>
    </div>
  );
};

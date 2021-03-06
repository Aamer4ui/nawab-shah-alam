import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Photos from "../Photos";
// import Civil from "./Civil";
// import Cse from "./Cse";
// import { ListGroup, Card, Row, Col, Carousel } from "react-bootstrap";
import { ListGroup, Card, Row, Col, Carousel } from "react-bootstrap";

import "./Eventhome.css";

function EventHome() {
  return (
    <div className="body_content">
      <Row>
        <Col lg="2">
          <div>
            <Card className="Card_content">
              <Card.Header
                style={{
                  background: "gray",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                EVENTS
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    CSE
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    CIVIL
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    MECHANICAL
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    ECE
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    EEE
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    EXTENTION ACTIVITY
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    INTERNSHIP PROGRAM
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    CERTIFICATION PROGRAM
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    CERTIFICATE COURSES
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    PARIKSHA PE CHARCHA 2.0
                  </Card.Link>
                </ListGroup.Item>
                <ListGroup.Item className="eventitem">
                  <Card.Link className="event-link" href="#">
                    FACULTY DEVELOPMENT PROGRAM
                  </Card.Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Col>

        <Col lg="8">
          <div className="carasoul">
            <Carousel>
              <Carousel.Item>
                <img
                  className="carasoul"
                  src="Recent_Trends.png"
                  alt="First slide"
                  style={{ width: "700px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carasoul"
                  src="Linux_workshop.jpg"
                  alt="Third slide"
                  style={{ width: "700px" }}
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carasoul"
                  src="DBMS.jpg"
                  alt="Third slide"
                  style={{ width: "700px" }}
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EventHome;

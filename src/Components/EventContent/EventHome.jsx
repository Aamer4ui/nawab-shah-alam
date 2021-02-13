import React from 'react'

import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Photos from '../Photos';
import Civil from './Civil';
import Cse from './Cse';
import {ListGroup, Card, Row,Col,Carousel} from "react-bootstrap";

import './Eventhome.css';

function EventHome() {
    return (
        
      <div className="body_content">
        
         

<Row>
                <Col lg="2">
                  <div>
        <Card className="Card_content" >
  <Card.Header style={{background:'lightblue',fontWeight:'bold'}}>EVENTS</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <Card.Link href="#">CSE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CIVIL</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">MECHANICAL</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">ECE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">EEE</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">EXTENTION ACTIVITY</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">INTERNSHIP PROGRAM</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CERTIFICATION PROGRAM</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">CERTIFICATE COURSES</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">PARIKSHA PE CHARCHA 2.0</Card.Link>
    </ListGroup.Item>
    <ListGroup.Item>
    <Card.Link href="#">FACULTY DEVELOPMENT PROGRAM</Card.Link>
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
      src="Eventpic/Recent_Trends.png"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carasoul"
      src="Eventpic/Linux_workshop.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carasoul"
      src="Eventpic/DBMS.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</Col>
</Row>
       


</div>

     
    )
}

export default EventHome

import React from "react";
import "../SecondNavigation/SecondBar.css";
import { Nav, Navbar  } from "react-bootstrap";

export const SecondBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Nav.Link className="secondnav" href="#">
            HOME
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            COURSES
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            DEPARTMENT
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            ADMISSIONS
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            PLACEMENTS
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            FEATURES
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            EVENTS
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            GALLERY
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            EXAMINATION CELL
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            R & D CELL
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            ABOUT US
          </Nav.Link>
          <Nav.Link className="secondnav" href="#">
            CONTACT US
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

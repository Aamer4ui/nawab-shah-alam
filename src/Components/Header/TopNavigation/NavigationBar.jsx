import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../TopNavigation/NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div>
      <header className="container-fluid">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="navclass">AICTE Approvals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">OU & JNTUH Approvals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">SBTET Approvals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">Grievence Redressel cell</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">Student corner</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">Alimni</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">NAAC</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">IQAC</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        {/* ------------------logos---------------------- */}
        <h1 className="logo">
          <a href="">
            <img className="main-logo" src="logo1.jpg" alt="" />
          </a>
          NAWAB SHAH ALAM
        </h1>
        <h2 className="sub-heading">
          <u>Collge Of Engineering & Technology</u>
        </h2>
        <h6 className="sub-heading1">
          <b>BE:</b> CE,ME,EEE,ECE,IT <b>-ME:</b> CSE, Embedded Syd, Structural,
          HVAC <b>-Polytechnice:</b> CE,ME,EEE,ECE
        </h6>
        <br />
        {/* ------------------main Nav------------------------ */}
        <Navbar className="second-bar" expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};

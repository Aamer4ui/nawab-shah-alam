import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../TopNavigation/NavigationBar.css";

export const NavigationBar = () => {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div>
      <header className={`container-fluid ${show && "header-sticky"}`}>
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
            <Nav.Link className="navclass">NSAKCET News Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">Campus Placement</Nav.Link>
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
          <Nav.Item>
            <Nav.Link className="navclass">Online Fee Payment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navclass">EAMCET & JEE Mock Test</Nav.Link>
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
          <u>College Of Engineering & Technology</u>
        </h2>
        <h6 className="sub-heading1">
          <u>
            <b>BE:</b> CE,ME,EEE,ECE,IT <b>-ME:</b> CSE, Embedded Syd,
            Structural, HVAC <b>-Polytechnice:</b> CE,ME,EEE,ECE
          </u>
        </h6>
        <h5 className="sub-heading2">
          <u>
            Approved by AICTE | Affliliated to OU | Accredited to NACC |
            Permitted by Govt. of TS | Included in 2F UGC
          </u>
        </h5>
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

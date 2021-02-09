import React from "react";
import { Nav } from "react-bootstrap";
import "../TopNavigation/NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div>
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
    </div>
  );
};

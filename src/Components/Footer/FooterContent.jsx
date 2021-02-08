import React from "react";
import "../Footer/FooterContent.css";

export const FooterContent = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>
              <u>Quick Links</u>
            </h4>
            <ul className="list-unstyled">
              <a href="">About NSAKCET</a>
              <a href="">Honorary Chairman</a>
              <a href="">Principle</a>
              <a href="">Photo Gallery</a>
              <a href="">Application Form</a>
              <a href="">Solar Panel</a>
              <a href="">Login</a>
            </ul>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>
              <u>COURSES</u>
            </h4>
            <ul className="list-unstyled">
              <a href="">UG Courses</a>
              <a href="">PG Courses</a>
              <a href="">Polytechnic Courses</a>
            </ul>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>
              <u>FACULTY</u>
            </h4>
            <ul className="list-unstyled">
              <a href="">CSE</a>
              <a href="">IT</a>
              <a href="">CIVIL</a>
              <a href="">ME</a>
              <a href="">ECE</a>
              <a href="">EEE</a>
              <a href="">H & BS</a>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col">
            <h4>
              <u>FEATURES</u>
            </h4>
            <ul className="list-unstyled">
              <a href="">Laboratory</a>
              <a href="">Library</a>
              <a href="">Events</a>
              <a href="">Placements</a>
              <a href="">Sports & Games</a>
            </ul>
          </div>
          {/* Column 5 */}

          <div className="col">
            <h4>
              <u>GET IN TOUCH</u>
            </h4>
            <ul className="list-unstyled">
              <a>
                <b>Add</b>: 16-4-1, New Malakpet, Near Railway Station,
                Malakpet, Hyderabad, India
              </a>
              <a>
                <b>Tel</b>: 040-24561118, 24066894
              </a>
              <a>
                <b>Email</b>: info@nsakcet.ac.in
              </a>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} NSAKCET | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

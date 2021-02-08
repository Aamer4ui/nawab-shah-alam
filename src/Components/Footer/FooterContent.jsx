import React from "react";
import "../Footer/FooterContent.css";

export const FooterContent = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Quick Links</h4>
            <h6 className="list-unstyled">
              <a href="">About NSAKCET</a>
              <a>Honorary Chairman</a>
              <a>Principle</a>
              <a>Photo Gallery</a>
              <a>Application Form</a>
              <a>Solar Panel</a>
              <a>Login</a>
            </h6>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>COURSES</h4>
            <ui className="list-unstyled">
              <a>UG Courses</a>
              <a>Ug Courses</a>
              <a>Polytechnic Courses</a>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>FACULTY</h4>
            <ui className="list-unstyled">
              <a>CSE</a>
              <a>IT</a>
              <a>CIVIL</a>
              <a>ME</a>
              <a>ECE</a>
              <a>EEE</a>
              <a>H & BS</a>
            </ui>
          </div>

          {/* Column 4 */}
          <div className="col">
            <h4>FEATURES</h4>
            <a>Laboratory</a>
            <a>Library</a>
            <a>Events</a>
            <a>Placements</a>
            <a>Sports & Games</a>
          </div>
          {/* Column 5 */}

          <div className="col">
            <h4>GET IN TOUCH</h4>
            <ui className="list-unstyled">
              <a>
                <b>Add</b>: 16-4-1, New Malakpet, Near Railway Station,
                Malakpet, Hyderabad, India
              </a>
              <a>
                <b>Tel</b>:040-24561118, 24066894
              </a>
              <a>
                <b>Email</b>:info@nsakcet.ac.in
              </a>
            </ui>
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

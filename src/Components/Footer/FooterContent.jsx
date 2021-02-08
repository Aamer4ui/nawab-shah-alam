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
              <li>About NSAKCET</li>
              <li>Honorary Chairman</li>
              <li>Principle</li>
              <li>Photo Gallery</li>
              <li>Application Form</li>
              <li>Solar Panel</li>
              <li>Login</li>
            </h6>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>COURSES</h4>
            <ui className="list-unstyled">
              <li>UG Courses</li>
              <li>Ug Courses</li>
              <li>Polytechnic Courses</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>FACULTY</h4>
            <ui className="list-unstyled">
              <li>CSE</li>
              <li>IT</li>
              <li>CIVIL</li>
              <li>ME</li>
              <li>ECE</li>
              <li>EEE</li>
              <li>H & BS</li>
            </ui>
          </div>

          {/* Column 4 */}
          <div className="col">
            <h4>FEATURES</h4>
            <ui className="list-unstyled">
              <li>Laboratory</li>
              <li>Library</li>
              <li>Events</li>
              <li>Placements</li>
              <li>Sports & Games</li>
            </ui>
          </div>
          {/* Column 5 */}

          <div className="col">
            <h4>GET IN TOUCH</h4>
            <ui className="list-unstyled">
              <li>
                <b>Add</b>: 16-4-1, New Malakpet, Near Railway Station,
                Malakpet, Hyderabad, India
              </li>
              <li>
                <b>Tel</b>:040-24561118, 24066894
              </li>
              <li>
                <b>Email</b>:info@nsakcet.ac.in
              </li>
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

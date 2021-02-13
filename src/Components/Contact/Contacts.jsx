import React from "react";
// import { Table } from "react-bootstrap";
import "../Contact/cont.css";
// import SideBar from "./SideBar";

export const Contacts = () => {
  return (
    <div>
      {/* <SideBar /> */}
      <article class="item-page" className="page">
        <header class="article-header">
          <h2>
            <a>
              <span class="title-color"></span>
            </a>
          </h2>
          <div className="lolo"> </div>
        </header>

        <table class="category table table-striped table-bordered table-hover">
          <tbody>
            <tr class="cat-list-row0">
              <td
                colspan="2"
                headers="categorylist_header_title"
                class="list-title"
              >
                <h3>
                  <a>
                    <b>Address:</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td
                colspan="2"
                headers="categorylist_header_title"
                class="list-title"
              >
                <b>#</b>16-4-1, Near Railway Station, New Malakpet, Hyderabad,
                INDIA.
                <br />
                <b>Telephones :</b> 040 - 24561118, 24066894, 9849650796,
                9908516988
                <br />
                <b>E-mail :</b>{" "}
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  {" "}
                  info@nsakcet.ac.in, nsakcet@gmail.com{" "}
                </a>
              </td>
            </tr>

            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Honorary Secretary</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Honorary Joint Secretary</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Janab Nawab Mahboob Alam Khan Sahab</b>
                <br />
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Janab Mujahed Alam Khan Sahab</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  nsakcetmak@gmail.com
                </a>
              </td>
            </tr>

            <tr class="cat-list-row0">
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Principal</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Vice Principal 1 (Admin)</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Syed Abdul Sattar</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  principal@nsakcet.ac.in
                </a>
                <br />
                +91-7032580275
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Prof. Syed Farrukh Anwar</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  vp01@gmail.com
                </a>
                <br />
                +91-9441426523
              </td>
            </tr>

            <tr class="cat-list-row0">
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Vice Principal 2 (Academics)</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Diploma Principal</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Mohammad Sanaullah Qaseem</b>
                <br />
                <a href="https://login.yahoo.com/">ms_qaseem@yahoo.com</a>
                <br />
                +91-9866879942
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Prof. Raza Ahmed Khan</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  razahyd@gmail.com
                </a>
                <br />
                +91-9848058830
              </td>
            </tr>

            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Director, Research & Development</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Head, Department of CSE</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Ramesh Reddy</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  directorresearch@nsakcet.ac.in
                </a>
                <br />
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. Mohammed Khaleel Ahmed</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  nsakcet.cse@gmail.com
                </a>{" "}
                <br />
                +91-7207865243
              </td>
            </tr>

            <tr class="cat-list-row0">
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Head, Department of IT</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Head, Department of CIVIL</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Mohammed Khaja Nizam Uddin</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  cse.itdepartment@nsakcet.ac.in
                </a>
                <br />
                +91-9849021341
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Mohammad Ahmed Hussain</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  civildepartment@nsakcet.ac.in
                </a>
                <br />
                +91 7093450987
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Head, Department of ME</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Head, Department of ECE</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Dr. Shaik Magbul Hussain</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  mechdepartment@nsakcet.ac.in
                </a>
                <br />
                +91-9704673877
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Ms. Zeenath</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  ece.eeedepartment@nsakcet.ac.in
                </a>
                <br />
                +91-9703771115
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Head, Department of EEE</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Web Admin</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. Mohd Mansoor Ali</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  eee.nsakcet@gmail.com
                </a>
                <br />
                +91-9849078718
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. Shaik Khaja Hussain</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  nsakcet.website@gmail.com
                </a>
                <br />
                +91-7288809991
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Examination Incharge</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_author" class="list-author">
                <h3>
                  <a>
                    <b>Librarian 1</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. Vijay</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  exambranch@nsakcet.ac.in
                </a>
                <br />
                +91-9885031171
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. R. Srinivasulu</b>
                <br />
                +91-9963059467
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Librarian 2</b>
                  </a>
                </h3>
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <h3>
                  <a>
                    <b>Chief Administrative Officer</b>
                  </a>
                </h3>
              </td>
            </tr>
            <tr class="cat-list-row0">
              <td headers="categorylist_header_title" class="list-title">
                <b>Aliya Parveen - (MLISC)</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  aliya.mlisc@gmail.com
                </a>
                <br />
                +91-9494896384
              </td>
              <td headers="categorylist_header_title" class="list-title">
                <b>Mr. Nisar Ahmed</b>
                <br />
                <a href="https://www.google.com/intl/en_in/gmail/about/">
                  nisarmed83@gmail.com
                </a>
                <br />
                +91-9000702319
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
};

import React from "react";
import "./MainBody.css";
import { Accordion, Card, Table } from "react-bootstrap";

export const MainBody = () => {
  return (
    <div>
      <div >
        <h1 className="page_heading">Placement Home</h1>
        <h2 className="page_subheading">About Training And Placements</h2>
        <img className="img" src="placement.png" alt="recruiter" />

        <p>
          Nawab Shah Alam khan College was established in the year 2008 since
          then students have been serving in reputed companies in India and
          abroad. The Placement Cell plays a crucial role in proving job
          opportunities for all Under Graduates students passing out from the
          college by being connected with reputed firms and industrial
          establishments and helps them in recruiting our students. Training and
          Placement cell has been established to assist students and get them
          placed in reputed organizations before completion of their coursework/
          graduation.The Training and Placement cell is responsible for
          preparing the students to work in a corporate environment. Short term
          industrial training courses are arranged at various reputed government
          organisations including Advanced Training Institute (ATI), Central
          Institute of Plastics Engineering &amp; Technology (CIPET). Under
          guidance of the rich industrial &amp; research experienced faculty,
          students have done wonderful projects and these projects are
          appreciated by JNTU senior professors. Our Students are exposed to
          industrial environment through various industrial visits. Leading
          organizations have been invited for campus selections. Nawab Shah Alam
          Khan College of Engineering &amp; Technology is registered with
          National Apprenticeship Training Scheme (NATS,Central govt.,) and
          Telangana Academy for Skill and Knowledge (TASK, Telangana Govt.,).
          Students can enroll in NATS and TASK through our college for
          Apprenticeship and Employment. Many of our students have been doing
          internship and getting industrial experience in reputed organisations
          such DRDL, Ford Motors, Police Transport Organisation, Bosch India,
          South Central Railway Diesel Loco Sheds and in other companies.
        </p>
        <br />
        <Accordion className="accordian-content">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h4 className="accord_heading">Training Programmes</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table className="table-content">
                  <tbody>
                    <tr>
                      <td>I Semester</td>
                      <td>Soft Skills</td>
                    </tr>
                    <tr>
                      <td>II Semester</td>
                      <td>Quantitative Aptitude (Arithmetic)</td>
                    </tr>
                    <tr>
                      <td>III Semester</td>
                      <td>Learning English Effectively (LEE</td>
                    </tr>
                    <tr>
                      <td>IV Semester</td>
                      <td>Technical Skills</td>
                    </tr>
                    <tr>
                      <td>V Semester</td>
                      <td>Logical and Analytical Reasoning</td>
                    </tr>
                    <tr>
                      <td>VI Semester</td>
                      <td>Personality Development Skills</td>
                    </tr>
                    <tr>
                      <td>VII &amp; VIII SSemester</td>
                      <td>Special Placement Focused Training</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <h4 className="subheading">
          <u>Campus Placement</u>
        </h4>
        <img className="rec_img" src="recruiters.jpg" alt="" />
      </div>
    </div>
  );
};

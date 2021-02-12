import React from "react";
import "../BE(CSE)/BECSE.css";
// import imglogo from "../../../Images/imgaes1.png";
import imgLogo from "../../../Images/imgaes1.jpg.png";
export const AboutCourse = () => {
  return (
    <div>
      <h3 className="headerclass">Computer Science & Engineering (BTECH)</h3>

      <img src={imgLogo} className="cseimage"></img>
      <p className="ptag">
        Computer Science field has become one of the fastest growing segments of
        our economy which leads to huge demand for computer Engineering
        professionals for the development of faster Hardware components, New
        Communication System &amp; Software. Computer tends to be engineering
        oriented especially when talks about software development and
        maintenance. The program is designed to provide the students with the
        foundation of discipline as well as opportunity for specialization.
      </p>
      <p className="ptag">
        A separate department for Computer Science and Engineering was formed
        during year 2008 and is striving for the quality of Technical education
        in the field of Computer Science and Engineering since then. The
        department is well equipped with sufficient software and hardware
        facilities. The department has young &amp; dynamic and well-qualified
        &amp; experienced faculties.{" "}
      </p>
      <p className="ptag">
        The department organizes various co-curricular and extra-curricular
        activities to develop important social and professional facilities in
        the student. Most common co-curricular activity is the programming
        contest, which has become regular by this time.
      </p>

      <h4 className="heading-four">About The Department</h4>
      <ul>
        <li>Our department has CSI (Computer Society of India) membership.</li>

        <li>
          The department has been taking active role in conducting short-term
          and long-term courses and mini projects for the benefit of its
          students.
        </li>
        <li>
          The academic performance of the students has been consistently
          outstanding.
        </li>
      </ul>
      <h4>Career Propspects</h4>
      <ul>
        <li>
          Computer Engineers can work as a Software/Hardware Engineer, which are
          the two main sectors in the computer industry.
        </li>
        <li>
          They can work as programmers, web developers and E-commerce
          specialists with industries that build or use Computer-based systems,
          such as telecommunications, automotive, aerospace, etc.
        </li>
        <li>
          National and multinational computer manufacturing companies, computer
          networking companies, Software development companies as well as
          hardware assembling and maintenance companies, data processing
          departments of modern industries and in areas where computers and
          computer-aided systems are used, such as Aeronautics and space
          science, the petroleum industry, chemical plants and power plants and
          management Consultancy organizations are some among the probable work
          places.
        </li>
        <li>
          There is a great demand for professionals involved in the Testing and
          Designing of computer components.
        </li>
        <li>
          Employment of Computer Software Engineers is expected to increase by
          32 percent from 2008-2018, which is much faster than the average for
          all occupations.
        </li>
      </ul>
      <h4 className="heading-four">Objectives</h4>
      <ul>
        <li>To prepare students to attain 100% result.</li>
        <li>
          To create awareness of the persistent concepts in computer field.
        </li>
        <li>Realization of current trends.</li>
        <li>Understanding of the social impact of computer technology.</li>
        <li>To embrace constant changes in technology and curriculum.</li>
        <li>To prepare students for a professional career in computing.</li>
        <li>Developing leadership qualities in students.</li>
        <li>
          Preparing students for entrepreneurship in their choice of profession.
        </li>
        <li>Providing a supportive and challenging learning environment.</li>
        <li>
          To develop faculty and resources to impart and disseminate knowledge
          and information to students that will enhance their educational level,
          which in turn, will contribute to social and economic betterment of
          society.
        </li>
      </ul>
    </div>
  );
};

import React from "react";
import imgLogo from "../../Images/TaskImage.png";
import { Button } from "react-bootstrap";
import TaskPdf from "../../PDF/TASK-SoftSkills.pdf";
import "../Task/Task.css";

export const TSAcademy = () => {
  return (
    <div>
      <h3 className="headerclass">Telangana Academy For Skill And Knowledge</h3>{" "}
      <p>
        Telangana Academy for Skill &amp; Knowledge was established by the
        Government of Telangana to enable a platform between Government,
        Academia and Industry to enhance employability quotient of youth in the
        state. Nawab Shah Alam Khan College of Engineering and Technology
        (NSAKCET) is registered with TASK. By registering in TASK through
        NSAKCET students can learn Basics &amp; most advanced Global
        certifications courses and get Jobs in National and International
        Companies.
      </p>
      <p>
        <a href="https://www.task.telangana.gov.in/" target="_blank">
          https://www.task.telangana.gov.in/
        </a>
      </p>
      <p>
        <b>
          <u>Employability Quotient:</u>
        </b>
      </p>
      <img src={imgLogo} className="cseimage"></img>
      <h4>Value For Student</h4>
      <ul>
        <li>
          Access to various modules to enhance their technology skills, personal
          skills and organization skills.
        </li>
        <li>On line access to e-learning content.</li>
        <li>Access to practice tests.</li>
        <li>Guest lectures by corporates on various topics.</li>
        <li>Access to English Speaking Courses.</li>
        <li>Access to Virtual Labs for online experiments – IIIT, MHRD.</li>
        <li>Entrepreneurship Development – ISB, JNTU, HYSEA.</li>
        <li>
          Opportunity to participate in placement drives across organizations.
        </li>
        <li>Internship opportunities.</li>
        <li>Participation in various competitions and fests.</li>
      </ul>
      <h4>Value For Colleges</h4>
      <ul>
        <li>Faculty Development Programs.</li>
        <li>Positioning the college to corporates/nodal learning agencies.</li>
        <li>
          Colleges could be chosen for skill pilots by reputed organizations or
          academic institutes.
        </li>
        <li>
          Faculty exposed to Train the Trainer concept, can also avail
          subsidized rates for technical certifications.
        </li>
        <li>Access to Virtual Labs for on line experiments at IIIT.</li>
        <li>Exposure to various avenues for guest lectures.</li>
        <li>Connect to placement drives.</li>
        <li>
          Opportunity to participate in placement drives across organizations.
        </li>
        <li>Industry Projects/Visits.</li>
        <li>Exposure to other initiatives rolled out from time to time.</li>
      </ul>
      <h4>Value For Corporate</h4>
      <ul>
        <li>A forum for industry, academia connect.</li>
        <li>
          Access to a pool of trained graduates for internships and placements.
        </li>
        <li>
          Provision to customize courses/learning content for a specific
          technology/skill area prior to placement drives.
        </li>
        <li>
          Provision to adopt few colleges across any of 10 districts in
          Telangana and partner with them on various projects as part of CSR
          activities.
        </li>
        <li>Captive audience to proliferate their technology/brand.</li>
        <li>
          Provision to send executives from their organization to work on short
          term projects for accelerated development and broad exposure.
        </li>
        <li>
          Forum to connect with the government and share inputs for overall
          development of the state.
        </li>
      </ul>
      <Button
        variant="outline-secondary"
        className="taskbutton"
        href="MYPDF/TASK-SoftSkills.pdf"
      >
        Task-Soft Skills
      </Button>
      <Button
        variant="outline-secondary"
        className="taskbutton"
        href="MYPDF/TASK-GlobalCertifications.pdf"
      >
        Task-Global Certifications
      </Button>
      <p>
        <iframe
          src={TaskPdf}
          type="application/pdf"
          width="800px"
          height="1130"
        ></iframe>
      </p>
    </div>
  );
};

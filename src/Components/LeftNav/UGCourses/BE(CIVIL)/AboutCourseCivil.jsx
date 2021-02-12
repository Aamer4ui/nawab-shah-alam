import React from "react";
import "../BE(CIVIL)/BECivil.css";
// import imglogo from "../../../Images/imgaes1.png";
import imgLogo from "../../../Images/CivilImages.png";
export const AboutCourseCivil = () => {
  return (
    <div>
      <h3 className="headerclass">CIVIL Engineering (BTECH)</h3>
      <img src={imgLogo} className="cseimage"></img>
      <p>
        Department of Civil Engineering is one of the oldest branches of
        Engineering, started with a goal to be a centre of Excellence for
        development and dissemination of knowledge in the Civil Engineering
        disciplines of Structural Engineering, Constructional Engineering, and
        Water Resources &amp; Management for the welfare of the society.
        Increasing development needs plenty of Civil Engineers &amp; the
        plethora of jobs &amp; avenues give a vast scope for the Civil
        Engineering Graduates.
      </p>
      <h4 className="heading-four">Career Propspects</h4>
      <ul>
        <li>
          B.Tech. Civil Engineers can work as Consultant with private
          construction firms like Larsen &amp; Toubro Limited, Jaypee Group,
          Punj Lloyd, IVRCL Infra etc.
        </li>
        <li>
          They can join as Consultants with Architectural Firms and Engineering
          services firms.
        </li>
        <li>
          They are also recruited as Consultant Engineer with IT firms,
          Transportation and even in the Private aviation fields.
        </li>
        <li>
          They can appear in the UPSC exam, IAS, IPS and IES civil service exam
          for getting jobs in the government sectors.
        </li>
        <li>
          Those who are skilled in this field have a chance to get promoted into
          the posts of Assistant Engineers, Executive Engineers etc.
        </li>
        <li>
          Engineering professionals in the field of Civil Engineering are
          required in fields such as Gas and Oil plants, Power generation firms,
          Construction of pipelines and water mains etc.
        </li>
        <li>
          The Railway recruitment Board is another major recruiter of B.Tech.
          Civil Engineers.
        </li>
      </ul>
      <h4 className="heading-four">Objectives</h4>
      <ul>
        <li>
          To produce graduates who have a strong foundation of scientific and
          technical knowledge and are equipped with problem solving, team work
          and communication skills that serve them throughout their career.
        </li>
        <li>
          To produce graduates with the ability to pursue careers as practicing
          civil engineers and to assume leadership roles.
        </li>
        <li>
          To produce graduates with skills and qualifications for career outside
          the traditional focus areas of civil engineering.
        </li>
      </ul>
    </div>
  );
};

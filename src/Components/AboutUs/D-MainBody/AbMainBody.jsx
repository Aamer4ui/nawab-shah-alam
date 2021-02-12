import React from "react";
import "./MainBody.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AbMainBody = () => {
  return (
    // about us page starts from here

    <div className="main">
      <div className="tittle">
        <h2>Nawab Shah Alam Khan College Of Engineering and Technology</h2>
      </div>
      <p className="owner">
        <b>NAWAB SHAH ALAM</b> This institution has been established under the
        aegis of MADARSA-I-AIZZA, a registered educational society registered on
        28th December 1961 under the Hyderabad societies registration Act No. 1
        of 1350 fosli. In fact the Madrasa-i-aizza was founded in the year 1876
        AD by the efforts of Moulvi Shaik Ahmed Husain sahib, Nawab Rafi Yar
        Jung, with the express object of imparting liberal / scientific /
        professional education to the children of Muslim community.
      </p>
      <p>
        In the year 1945, the school was made a feeder of the Osmania University
        preparing students for the H.S.C public examinations. The late Nawab Sir
        Nizamath Jung, an illustrious son of the founder was associated with the
        school as honorary secretary for over 50 years till he retired in 1947
        and during his regime the school made rapid strides on the path of
        progress. Telugu medium classes were opened as parallel section in the
        year 1955. In 1964, English classes were opened and in the year 1987, a
        modern school in English medium with name ?Neo School Aizza? was
        established. The year 1999 was a landmark in the history of the
        educational society when the management decided to start an engineering
        college in the educationally backward region of ADILABAD. The
        engineering college is functioning for the past 8 years very
        successfully.
      </p>
      <p>
        The college is one of the best engineering colleges imparting quality
        education with values. It is affiliated to Jawaharlal Nehru
        Technological University (JNTU) and approved by All India Council for
        Technical Education (AICTE).
      </p>
      {/* features  */}
      <div className="feature">
        <h3 className="headings">
          <i class="fa fa-tags" aria-hidden="true">
            FEATURES
          </i>
        </h3>
        <ul>
          <li>Located" at Malakpet, heart of the city of Hyderabad.</li>
          <li>
            5 acres of sprawling campus with 50,000 sft of built up area..
          </li>
          <li>
            Well connected by train and RTC buses. Very close to Malakpet
            railway station and bus station..
          </li>
          <li>Laboratories with state-of the-art infrastructure.</li>
          <li>Well qualified and experienced faculty.</li>
          <li>Seminar halls for every department.</li>
          <li>
            Full fledged training and placements cell for industry readiness..
          </li>
        </ul>
      </div>
      {/* OUR VISION  */}
      <div>
        <h3 className="headings">
          <i class="fa fa-tags" aria-hidden="true">
            OUR VISION
          </i>
        </h3>
        <p>
          To impart quality technical education with strong ethics, producing
          technically sound engineers capable of serving the society and the
          nation in a responsible manner.
        </p>
      </div>
      {/* OUR MISSION */}
      <div>
        <h3 className="headings">
          <i class="fa fa-tags" aria-hidden="true">
            OUR MISSION
          </i>
        </h3>
        <ul>
          <li>
            To provide adequate knowledge encompassing strong technical concepts
            and soft skills thereby inculcating sound ethics.
          </li>
          <li>
            To provide a conducive environment to nurture creativity in
            teaching- learning process.
          </li>
          <li>
            To identify and provide facilities which create opportunities for
            deserving students of all communities to excel in their chosen
            fields.
          </li>
          <li>
            To strive and contribute to the needs of the society and the nation
            by applying advanced engineering and technical concepts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AbMainBody;

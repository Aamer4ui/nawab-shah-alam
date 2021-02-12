import React from "react";
import CambridgePdf from "../../PDF/BEC.pdf";
export const CambridgeEnglish = () => {
  return (
    <div>
      <h3 className="headerclass">Business English Certificate</h3>{" "}
      <p>
        Telangana Academy for Skill and Knowledge has launched Business English
        Certification training program to up skill the students of Telangana in
        their English language skills. BEC is a prestigious certification
        program offered by Cambridge University which is a globally acknowledged
        and is lifetime valid. Students of Nawab Shah Alam Khan College
        Engineering and Technology have facility of Cambridge English, Business
        English Certification (BEC) classes in Campus. For Admission, students
        can contact NSAKCET English Department.
      </p>
      <p>
        <b>Cambridge English </b>
        <br />
        <a href="http://www.cambridgeenglish.org/" target="_blank">
          http://www.cambridgeenglish.org/
        </a>
      </p>
      <p>
        <b>Cambridge English: </b>Business English Certification (BEC)
        <br />
        <a
          href="http://www.cambridgeenglish.org/exams/business-certificates/business-preliminary/"
          target="_blank"
        >
          http://www.cambridgeenglish.org/exams/business-certificates/business-preliminary/
        </a>
      </p>
      <p>
        <b>Companies Recognition</b>
        <br />
        <a
          href="http://www.cambridgeenglish.org/why-cambridge-english/global-recognition/results.aspx?country=India&amp;type=Corporate&amp;exam=BEC%20Preliminary#"
          target="_blank"
        >
          http://www.cambridgeenglish.org/why-cambridge-english/global-recognition/results.aspx?country=India&amp;type=Corporate&amp;exam=BEC%20Preliminary#
        </a>
      </p>
      <p>
        <iframe
          src={CambridgePdf}
          type="application/pdf"
          width="800px"
          height="1130"
        ></iframe>
      </p>
    </div>
  );
};

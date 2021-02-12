import React from "react";
import imgLogo from "../../../Images/MEMECH.png";

export const MEMech = () => {
  return (
    <div>
      <h3 className="headerclass">
        Heating Ventilation and Air Conditioning Structural Engineering (MTECH){" "}
      </h3>
      <img src={imgLogo} className="cseimage"></img>
      <h5>PG course being offered by the ME Dept.</h5>
      <p>
        The college offers M. Tech. (HEATING VENTILATION AND AIR CONDITIONING)
        course whose details are given below:
      </p>
      <h4>AN INTRODUCTION TO SE</h4>
      <p>
        The design of the HVAC component is critical to achieve an efficient and
        effective environmental control system. The successful integration of
        building constraints, air movement conditions and equipment selection
        can positively impact system overall performance and decrease utility
        expenses and capital expenditures. To achieve the optimal design, one
        should needs good analytical skills and up-to-date technical knowledge
        of various system designs.
      </p>
      <h4>ABOUT PROGRAM</h4>
      <ul>
        <li>
          Our college offers a four-semester M. Tech course in Heating
          Ventilation and Air Conditioning as per JNTUH syllabus with first two
          semesters consisting of course work, third semester consisting of a
          comprehensive viva-voce examination and the last semester consisting
          of project work.
        </li>
      </ul>
      <h4>SYLLABUS</h4>
      <ul>
        <li>
          M. TECH. (HEATING VENTILATION AND AIR CONDITIONING)-R13 Regulations
        </li>
        <li>
          You can download from here{" "}
          <a
            href="MYPDF/HEATING_VENTILATION_AND_AIR_CONDITIONING.pdf"
            target="_blank"
          >
            HVAC.pdf
          </a>
        </li>
      </ul>
      <h4>OPPURTUNITIES & PROSPECTS AFTER COMPLETION</h4>
      <ul>
        <li>
          HVAC field prepares you for outstanding career opportunities. With the
          skills you gain at HTC, you will be in demand as a trained
          professional in residential/commercial air conditioning, heating and
          refrigeration. It acknowledges to work on heat/cool rooftop units,
          high-efficiency electronically controlled forced air furnaces and
          hydronic boilers, chillers and large-building computerized energy
          management control systems, ice cube machines, walk-in
          coolers/freezers and display cases. With HVAC training, the
          possibilities are unlimited.
        </li>
        <li>
          Employment opportunities in the residential/commercial heating,
          cooling, air conditioning and refrigeration field are based on each
          individual’s goals and qualifications. Opportunities exist in
          management, sales, service, installation and maintenance of HVAC and
          refrigeration equipment. Possible positions include: installer,
          quality control technician, service technician, manufacturer’s
          representative, sales consultant, layout person and designer. In
          addition, the A.A.S. degree will help qualify individuals for
          management positions in the sales, installation, and service of HVAC
          equipment.
        </li>
      </ul>
    </div>
  );
};

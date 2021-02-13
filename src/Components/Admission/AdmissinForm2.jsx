import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { AdmissinForm1 } from "./AdmissinForm1";
import { AdmissinForm3 } from "./AdmissinForm3";
export const AdmissinForm2 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>

      <Row
        style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
      >
        <Col>Admission Details (Intr /12th Std.Details)</Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Name Of Exam</Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Board Of Exam</Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col> Name OF School /Collage :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Hall Ticket No. </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Total Marks Obtained :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>Maximum Marks :</Col>
        <Col lg={1}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Passing Month : </Col>
        <Col lg={1}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Year : </Col>
        <Col lg={1}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Percentage Marks Scored: </Col>
        <Col lg={1}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Grade: </Col>
        <Col lg={1}>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>(Note: Attach attested photocopy of 10th sts mark card)</Col>
      </Row>
      <Col>
        <h4>
          Candidate should fill the details of marks obtained in each indiual
          subject at inter /12th/Diploma std.examination in the following table
          /candidte seeking direct year admission can write diploma / degree
          subjects and marks in the table.
        </h4>
      </Col>
      <Row
        style={{ backgroundColor: "darkgray", color: "green", height: "3rem" }}
      >
        <Col>Subject</Col>
        <Col>Marks Obtained</Col>
        <Col>Maximum Marks</Col>
      </Row>
      <Row>
        <Col>English</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Physics</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Chemistry</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Biology</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Mathametics</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Computer Scince</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Other</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Other</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Other</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
      >
        <Col>Address Details :(Local Address)</Col>
      </Row>
      <Row>
        <Col lg={1}>Address</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col lg={10}>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>City:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Pin:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Dist :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>State :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Parents landline No.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Parents Phone No. :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Candidate Mobile No.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>E-mail ID :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Nearest Bus Station.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Railway Station:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
      >
        <Col>Address Details :(Permanent Address)</Col>
      </Row>
      <Row>
        <Col lg={1}>Address</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col lg={10}>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>City:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Pin:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Dist :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>State :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Parents landline No.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Parents Phone No. :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Candidate Mobile No.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>E-mail ID :</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Nearest Bus Station.:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Railway Station:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Button href="/AdmissinForm1" onClick={AdmissinForm1}>
          Previous
        </Button>
        <Button href="/AdmissinForm3" onclick={AdmissinForm3}>
          Next
        </Button>
      </Row>
    </div>
  );
};

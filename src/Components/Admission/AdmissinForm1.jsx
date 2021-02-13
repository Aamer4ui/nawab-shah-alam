import { Label } from "@material-ui/icons";
import React from "react";
import { AdmissinForm2 } from "./AdmissinForm2";
import { Form, Col, Button, Row, Dropdown } from "react-bootstrap";

export const AdmissinForm1 = () => {
  return (
    <Form style={{ margin: "20px" }}>
      <lable>
        Download Student Admission Form
        <Button style={{ margin: "10px" }} href="StudentAdmissionForm.pdf">
          Download
        </Button>
      </lable>

      <Row
        style={{
          backgroundColor: "lightgray",
          height: "3rem",
          textAlign: "center",
        }}
      >
        <Col>For Office Use Only</Col>
      </Row>
      <Row
        style={{
          backgroundColor: "lightgray",
          height: "3rem",
          textAlign: "center",
        }}
      >
        <Col>For Payment Detais (details of DD/Pay order) </Col>
        {/* <Col lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col> */}
      </Row>
      <Row>
        <Col>1.DD.No.</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Amount</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Date</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Bank</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>

      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>2.DD.No.</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Amount</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Date</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>Bank</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row style={{ height: "3rem" }}>
        <Col>NSAKCET Regd No</Col>
        <Col lg={2}>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>
          Signature <br />
          Office Incharge Of Admission Counter
        </Col>
      </Row>

      <br />
      <Row
        style={{
          backgroundColor: "#283747",
          color: "white",
          height: "3rem",
          padding: "10px",
        }}
      >
        Admission Details
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>Hall Ticket No.</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          Name Of The Candidate(Mr./Mrs. /Miss.) <br />
          (IN BLOCK LETTERS AS PER SSC)
        </Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>Adhar ID (UID)</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
        <Col>PAN Card (if any)</Col>
        <Col>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          Name OF Father <br />
          (IN BLOCK LETTERS AS PER SSC)
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>
          Name OF Mother <br />
          (IN BLOCK LETTERS AS PER SSC)
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Date Of Birth (AS PER SSC)</Col>
        <Col>
          <Form.Control size="sm" type="text" placeholder="(DD/MM/YY)" />
        </Col>
        <Col>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            ))}
          </Form.Control>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>
          <Form.Label>Type Of Admission</Form.Label>
        </Col>
        <Col>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Management</option>
            <option>Convener</option>
            <option>Spot</option>
            ))}
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          Admission Category
          <br />
          (SC,OBS,ST,General,GOI etc.)
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Cast</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>Mother Tongue:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Blood Group: </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Email ID:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Identification Mark:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col>Father Occupation:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Phone no: </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>Father Occupation:</Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
        <Col>Phone: </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#283747",
          color: "white",
          height: "3rem",
          padding: "10px",
        }}
      >
        Admission Details (SSC/CBSC/X/ICSE Std.Details)
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
        <Col> Name OF School :</Col>
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
      <Button href="/AdmissinForm2" onClick={AdmissinForm2}>
        Next
      </Button>
    </Form>
  );
};

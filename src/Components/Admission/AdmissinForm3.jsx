import React from "react";
import { Col, Row, Form, Button, Table } from "react-bootstrap";
import { AdmissinForm2 } from "./AdmissinForm2";
import { AdmissinForm4 } from "./AdmissinForm4";

export const AdmissinForm3 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Address Details :(Local Guardian Address)</th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Guardian Name:</th>

            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Guardian Occupation:</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Relation With Guardian :</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Guardian E-mail ID :</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Reimbusment</td>
            <td>Due Amount</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Form>
        <Row
          style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
        >
          <Col>Address Details :(Local Guardian Address)</Col>
        </Row>
        <Row>
          <Col>Guardian Name:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Guardian Occupation:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Relation With Guardian :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Guardian E-mail ID :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
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
          <Col>Pin:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Landline No.:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Mobile No. :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row
          style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
        >
          <Col>Last Qualifying Examination Details :</Col>
        </Row>
        <Row>
          <Col>Last Exam Name:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Exam Year:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>Board or Univ. Name :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Duration Of Year :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>Total Marks Obtained:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Total Max. Marks :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>Percentage Of Marks :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Class:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row
          style={{ backgroundColor: "#EE7C7C", color: "green", height: "3rem" }}
        >
          <Col>Eamcet /ECET /PGcet Score Details :</Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>Eamcet /ECET /PGcet /Other Marks</Col>
        </Row>
        <Row>
          <Col> Eamcet /ECET /PGcet Rank:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Hall Ticket No.:</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>Year Of Exam :</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "darkgray",
            color: "green",
            height: "3rem",
          }}
        >
          <Col>Subject</Col>
          <Col>Marks Obtained</Col>
          <Col>Maximum Marks</Col>
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
          <Col> Mathematics</Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
          <Col>
            <Form.Control size="sm" type="text" />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>* For Direct Second Year Admission</Col>
      </Row>
      <Row>
        <Col>
          I hereby declare the perticulars furnished above are true,complite and
          correct to the best of my knowledge and belief.
        </Col>
      </Row>

      <h4>
        Date:
        <br />
        Place:
      </h4>
      <h4 style={{ float: "right" }}>Signature of Student</h4>
      <br />
      <ol>
        <li>
          10<sup>th</sup> / SSC std and 12<sup>th</sup> / Inter std attested
          photocopy of marks sheet to be attached with this form.
        </li>
        <li>
          The photocopy of admit card to be attached with this registration
          form.
        </li>
        <li>
          Affix passport size colour photograph at the space provided in the
          form.
        </li>
        <li>
          Additional sheet can be attached to provide diploma/degree level exam
          details.
        </li>
        <li>
          Candidate changing branches/courses/ in the subsequent admission round
          are require to compulsorily submit this form along with REGISTRATION
          SSLIP issued by the college during the first time registration.
        </li>
        <li>
          Candidates changing college/cancelling admissions should compulsorily
          submit letter of intimation to college failing which the fees and
          certificates will be withheld till the clearance from the admission
          authority.
        </li>
        <li>
          Candidate should submit notarized copy of Annexture I (affidavit by
          the student) and Annexure II (affidavit by parent/guardian) at the
          time of registration at college.
        </li>
      </ol>
      <Row>
        <Button href="/AdmissinForm2" onClick={AdmissinForm2}>
          Previous
        </Button>
        <Button href="/AdmissinForm4" onclick={AdmissinForm4}>
          Next
        </Button>
      </Row>
    </div>
  );
};

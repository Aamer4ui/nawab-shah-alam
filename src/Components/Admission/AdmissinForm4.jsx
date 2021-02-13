import React from "react";
import { Row, Col, Table, Form, Button } from "react-bootstrap";
import { AdmissinForm3 } from "./AdmissinForm3";

export const AdmissinForm4 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>
      <div style={{ textalign: "justify", padding: "0px 40px 0px 40px" }}>
        <h4>
          <u>DECLARATION BY THE STUDENT/PARENT :</u>
        </h4>
        <ul>
          <li>
            I declare that the above information is correct and that I have read
            all the rules and regulations of the College and the University to
            which I will abide during the studentship.
          </li>
          <li>
            I declare that I have not been convicted for any criminal offence.
            No criminal case or proceeding is presently pending against me in
            any court of law. I have not resorted to any act of indiscipline
            during the previous years.
          </li>
          <li>
            I solemnly declare that I have not been debarred from joining any
            educational institution or rusticated or rusticated from the
            Institution/University/Board last attended.
          </li>
          <li>
            I solemnly declare that I have passed my qualifying examination as a
            regular student of a recognized institution. In all matters, the
            rules &amp; regulations related to the institution.
          </li>
          <li>
            I solemnly declare that the statements made in this application are
            ture to the best of any knowledge and belief. I clearly understand
            that if any of the statement is subsequently found to be unture. I
            will render myself liable to immediate emoval from the college and I
            may be prosecuted.
          </li>
          <li>
            I do hereby solemnly state that I had carefully read the Rules and
            Regulations stipulated by the college in the prospectus, and I agree
            to abide by them. In case I violate any of the rules of conduct,
            discipline, attendance etc.
          </li>
          <li>
            In case of any misbehavior on my part, the Principal/Correspondent
            may cancel take any action on me without any prior information. I
            promise to maintain 75% of attendance, otherwise college can take
            any action on me.
          </li>
        </ul>
        <h4 style={{ float: "right", paddingright: "20px" }}>
          Yours Obediently
        </h4>
        <br />
        <br />
        <h4>
          <i>Signature of the Parent</i>
          <i style={{ float: "right" }}>Signature of the Student</i>
        </h4>
        ---------------------------------------------------------------------------------
      </div>
      <Row style={{ height: "3rem" }}>
        <Col>
          <h4>Fee Particulars Details</h4>
        </Col>
      </Row>
      {/* <Row
        style={{
          backgroundColor: "#EE7C7C",
          color: "white",
          height: "3rem",
          border: "1px",
        }}
      >
        <Col>S.NO.</Col>
        <Col>Total Fee Amount</Col>
        <Col>Year /Sem</Col>
        <Col>Management/Convenor</Col>
        <Col> No. Of Credits</Col>
        <Col>Signature Of Receiver</Col>
      </Row>
      <Row
        style={{ backgroundColor: "#EE7C7C", color: "white", height: "3rem" }}
      >
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>Reimbusment</Col>
        <Col>Due Amount</Col>
        <Col></Col>
      </Row> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Total Fee Amount</th>
            <th>Year /Sem</th>
            <th>Management/Convenor</th>
            <th>No. Of Credits</th>
            <th>Signature Of Receiver</th>
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>1</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>l</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>2</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>ll/l</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>3</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>ll/ll</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>4</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>lll/l</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>5</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>lll/ll</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>6</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>lv/l</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>7</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>lv/ll</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>
        </thead>
      </Table>
      <Row>
        <Col>
          <h5>Note:- Attached a copy of mark sheet</h5>
        </Col>
        <Col>
          <h4>Signature of the receiver</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button href="/AdmissinForm3" onClick={AdmissinForm3}>
            Previous
          </Button>
          <Button type="submit">Finish</Button>
        </Col>
      </Row>
    </div>
  );
};

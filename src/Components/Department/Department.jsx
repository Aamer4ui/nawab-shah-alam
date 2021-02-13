import React from "react";
import { Row, Col, ListGroup, Card, Table } from "react-bootstrap";
import "./Department.css";
export const Department = () => {
  return (
    <fragment className="Department">
      <Row>
        {/* SIDE MENU BAR */}
        <Col className="deptcard" xs lg="2">
          <Card style={{ width: "18rem" }}>
            {/* UG DEPARTMENT */}
            <Card.Header
              style={{
                background: "#283747",
                color: "white",
                fontWeight: "bold",
              }}
            >
              UG DEPARTMENT
            </Card.Header>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (CSE)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (IT)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (CIVIL)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (MECH)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (ECE)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">B.TECH (EEE)</Card.Link>
              </Card.Body>
            </ListGroup>
            {/* PG DEPARTMENT */}
            <Card.Header
              style={{
                background: "#283747",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PG DEPARTMENT
            </Card.Header>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">M.TECH (CSE)</Card.Link>
              </Card.Body>
            </ListGroup>

            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">M.TECH (CIVIL-SRUCTURE)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">M.TECH (MECH-HVAC)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">M.TECH (ECE-ES)</Card.Link>
              </Card.Body>
            </ListGroup>
            <Card.Header
              style={{
                background: "#283747",
                color: "white",
                fontWeight: "bold",
              }}
            >
              POLYTECHNIC DEPARTMENT
            </Card.Header>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">POLYTECHNIC (CIVIL)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">POLYTECHNIC (ME)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">POLYTECHNIC (ECE)</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">POLYTECHNIC (EEE)</Card.Link>
              </Card.Body>
            </ListGroup>

            <Card.Header
              style={{
                background: "#283747",
                color: "white",
                fontWeight: "bold",
              }}
            >
              OTHER DEPARTMENT
            </Card.Header>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">ADDMISSION</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">ACCOUNTS</Card.Link>
              </Card.Body>
            </ListGroup>
            <ListGroup variant="flush">
              <Card.Body>
                <Card.Link href="#">ADMINISTRATIONS</Card.Link>
              </Card.Body>
            </ListGroup>
          </Card>
        </Col>
        <Col lg="8">
          <Table className="deptable" striped bordered hover>
            <thead style={{ background: "#283747", color: "white" }}>
              <tr>
                <th>Sr.No.</th>
                <th>Faculty photo</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>21</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td></td>
                <td>Dr. Mohammad Sanaullah Qaseem </td>
                <td>Professor (CSE) & Vice Principal</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td></td>
                <td>Dr. Mohammed Khaja Nizam Uddin</td>
                <td>Professor</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td></td>
                <td>Mr. Mohammed Khaleel Ahmed</td>
                <td>Professor & HOD</td>
                <td>
                  {" "}
                  <a href="http://">View Details</a>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </fragment>
  );
};

export default Department;

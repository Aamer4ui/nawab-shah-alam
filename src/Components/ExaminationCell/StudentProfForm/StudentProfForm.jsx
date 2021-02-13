import React from "react";
// import "../StudentProfForm/StudentExamForm.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { StudentForm } from "../StudentForm/StudentForm";
import "../StudentProfForm/StudentProfForm.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const StudentProfForm = () => {
  return (
    <Router>
      <section>
        <div>
          <StudentForm />
        </div>
        <div className="list">
          <ListGroup>
            <h3 className="heading-cell">Examination Cell</h3>
            <ListGroup.Item className="element">
              <a href="/StudentForm">Student Profile Reg. Form</a>
            </ListGroup.Item>
            <ListGroup.Item className="element">
              <a href="/StudentExamForm">Student Exam (Fee) Form</a>
            </ListGroup.Item>
            <ListGroup.Item className="element">
              <a href="/NoDueForm">No Due Form</a>
            </ListGroup.Item>
          </ListGroup>
        </div>

        {/* <Switch>
          <Route path="/StudentForm">
            <StudentForm />
          </Route>
          <Route path="/NoDueForm">
            <NoDueForm />
          </Route>
          <Route path="/StudentExamForm">
            <StudentExamForm />
          </Route>
        </Switch> */}
      </section>
    </Router>
  );
};

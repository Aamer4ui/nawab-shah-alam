import React from "react";
import { NavigationBar } from "../Header/TopNavigation/NavigationBar";

import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { MainBody } from "../D-MainBody/MainBody";
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Switch,
} from "react-router-dom";
import { TopBody } from "../BodyContent/TopBody";
import { FooterContent } from "../Footer/FooterContent";
import RightNevigation from "../AboutUs/C-RightNevigation/RightNevigation";
import { RDCell } from "../R&D-Cell/RDCell";
import { Department } from "../Department/Department";
import { SideBar } from "../Gallery/SideBar";
import { StudentProfForm } from "../ExaminationCell/StudentProfForm/StudentProfForm";

export const RoutingComp = () => {
  return (
    <div>
      <NavigationBar />

      <Router>
        <Switch>
          <Route path="/CSEBTECH">
            <UGCoursesDetails />
          </Route>
          <Route path="/AboutPlacement">
            <MainBody />
          </Route>
          <Route path="/about">
            <RightNevigation />
          </Route>
          <Route path="/R&DCell">
            <RDCell />
          </Route>
          <Route path="/Department">
            <Department />
          </Route>
          <Route path="/Gallery">
            <SideBar />
          </Route>
          <Route path="/Examination">
            <StudentProfForm />
          </Route>
          <Route path="/">
            <TopBody />
          </Route>
        </Switch>
      </Router>
      <FooterContent />
    </div>
  );
};

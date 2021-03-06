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
import { AdmissinForm1 } from "../Admission/AdmissinForm1";
import { AdmissinForm2 } from "../Admission/AdmissinForm2";
import { AdmissinForm3 } from "../Admission/AdmissinForm3";
import { AdmissinForm4 } from "../Admission/AdmissinForm4";
import { Contacts } from "../Contact/Contacts";
import EventHome from "../EventContent/EventHome";
import HC from "../AboutUs/Linkpages/A-HC/HC";
// import HS from "../AboutUs/Linkpages/B-HS/HS";

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
          <Route path="/HC">
            <HC />
          </Route>
          {/* <Route path="/HS">
            <HS />
          </Route> */}
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
          {/* ---------------------Nested Routing------------------ */}
          <Route path="/Admission">
            <AdmissinForm1 />
          </Route>
          <Route path="/AdmissinForm2">
            <AdmissinForm2 />
          </Route>
          <Route path="/AdmissinForm3">
            <AdmissinForm3 />
          </Route>
          <Route path="/AdmissinForm4">
            <AdmissinForm4 />
          </Route>
          {/* ---------------Ended------------------------ */}
          <Route path="/ContactUs">
            <Contacts />
          </Route>
          <Route path="/Events">
            <EventHome />
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

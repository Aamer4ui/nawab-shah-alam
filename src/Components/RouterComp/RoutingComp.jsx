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
          <Route path="/">
            <TopBody />
          </Route>
        </Switch>
      </Router>
      <FooterContent />
    </div>
  );
};

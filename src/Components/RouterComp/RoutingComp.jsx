import React from "react";
import { NavigationBar } from "../Header/TopNavigation/NavigationBar";
import { ParentAbout } from "../Header/NavigationC/ParentAbout";
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Switch,
} from "react-router-dom";
import { TopBody } from "../BodyContent/TopBody";
import { FooterContent } from "../Footer/FooterContent";

export const RoutingComp = () => {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/about">
            <ParentAbout />
          </Route>
          <Route path="/">
            <TopBody />
          </Route>
        </Switch>
      </Router>
      <FooterContent/>
    </div>
  );
};

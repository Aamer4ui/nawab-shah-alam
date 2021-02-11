import React from "react";
import { NavigationBar } from "../Header/TopNavigation/NavigationBar";
import { ParentAbout } from "../Header/NavigationC/ParentAbout";
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Switch,
} from "react-router-dom";

export const RoutingComp = () => {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/about">
            <ParentAbout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

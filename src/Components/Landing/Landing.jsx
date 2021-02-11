import React from "react";
// import { NavigationBar } from "../Header/TopNavigation/NavigationBar";
import { FooterContent } from "../Footer/FooterContent";
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Switch,
} from "react-router-dom";
import { TopBody } from "../BodyContent/TopBody";
export const Landing = () => {
  return (
    <div>
      {/* --------routing Dummy----------- */}
      <Router>
        <Switch>
          <Route path="/topbody">
            <TopBody />
          </Route>
        </Switch>
      </Router>
      <FooterContent />
    </div>
  );
};

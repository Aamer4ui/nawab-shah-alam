import React from "react";
import { NavigationBar } from "../Header/TopNavigation/NavigationBar";
import { TopBody } from "../BodyContent/TopBody";
import { FooterContent } from "../Footer/FooterContent";

export const Landing = () => {
  return (
    <div>
      <NavigationBar />
      <TopBody />
      <FooterContent />
    </div>
  );
};

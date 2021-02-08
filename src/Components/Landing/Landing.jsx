import React from "react";
import { TopBody } from "../BodyContent/TopBody";
import { FooterContent } from "../Footer/FooterContent";
import { HeaderContent } from "../Header/HeaderContent";

export const Landing = () => {
  return (
    <div>
      <HeaderContent />
      <TopBody />
      <FooterContent />
    </div>
  );
};

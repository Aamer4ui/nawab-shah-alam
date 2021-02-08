import React from "react";
import { NavigationBar } from "./TopNavigation/NavigationBar";
import { IconContent } from "./HeaderLogo/IconContent";
import { SecondBar } from "./SecondNavigation/SecondBar";

export const HeaderContent = () => {
  return (
    <div>
      <NavigationBar />
      <IconContent />
      <SecondBar />
    </div>
  );
};

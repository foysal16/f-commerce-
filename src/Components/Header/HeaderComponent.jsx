//import { Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import SideNav from "./NavTabs/SideNav";

const HeaderComponent = () => {
  return (
    <div>
      <Navbar />
      <SideNav />
    </div>
  );
};
export default HeaderComponent;

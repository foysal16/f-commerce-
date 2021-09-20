import React from "react";
import NavbarHomeComponent from "../../../../src/Components/Header/HeaderComponent";
import { useStyles } from "../../Header/HeadStyles";
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <NavbarHomeComponent />
      <div className={classes.headerComponent}>
        <h2> Our Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;

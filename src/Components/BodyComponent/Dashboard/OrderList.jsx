import React from "react";
import NavbarHomeComponent from "../../../Components/Header/HeaderComponent";
import { useStyles } from "../../../Components/Header/HeadStyles";
const OrderList = () => {
  const classes = useStyles();
  return (
    <div>
      <NavbarHomeComponent />
      <div className={classes.headerComponent}>
        <h2> Our OrderList</h2>
      </div>
    </div>
  );
};

export default OrderList;

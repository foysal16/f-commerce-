import { Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import SideNav from "./NavTabs/SideNav";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import ProductList from "../BodyComponent/Dashboard/ProductList";
import Users from "../BodyComponent/Dashboard/UserList";
import Orders from "../BodyComponent/Dashboard/OrderList";
import AddUser from "../BodyComponent/Dashboard/MainPages/EditUser";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeadStyles";

const HeaderComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <SideNav />
      <Box className={classes.headerComponent}>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/productList" render={() => <ProductList />} />
          <Route exact path="/users" render={() => <Users />} />
          <Route exact path="/orders" render={() => <Orders />} />
          <Route exact path="/add-user" render={() => <AddUser />} />
        </Switch>
      </Box>
    </div>
  );
};
export default HeaderComponent;

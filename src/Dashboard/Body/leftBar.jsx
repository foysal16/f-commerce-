import {
  Container,
  makeStyles,
  MenuItem,
  MenuList,
  //Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

//import HomeIcon from "@material-ui/icons/Home";
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//import PeopleIcon from "@material-ui/icons/People";
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "#ffffff",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const LeftBar = () => {
  const classes = useStyles();
  //const history = useHistory();

  /* const UserListClick = () => {
    history.push("/userList");
  }; */

  return (
    <Container className={classes.container}>
      <MenuList>
        <MenuItem component={Link} to="/maindashbody">
          Dashboard
        </MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem component={Link} to="/userList">
          Customers
        </MenuItem>
        <MenuItem>Log Out</MenuItem>
      </MenuList>
    </Container>
  );
};

export default LeftBar;

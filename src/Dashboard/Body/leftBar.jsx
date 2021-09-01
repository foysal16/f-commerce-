import { Container, makeStyles, Typography } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";

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
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Dashboad</Typography>
      </div>
      <div className={classes.item}>
        <ShoppingBasketIcon className={classes.icon} />
        <Typography className={classes.text}>Products</Typography>
      </div>
      <div className={classes.item}>
        <ShoppingCartIcon className={classes.icon} />
        <Typography className={classes.text}>Orders</Typography>
      </div>

      <div className={classes.item}>
        <PeopleIcon className={classes.icon} />
        <Typography className={classes.text}>Customers</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Log Out</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;

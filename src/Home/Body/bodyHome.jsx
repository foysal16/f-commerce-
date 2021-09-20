import { makeStyles } from "@material-ui/core";
import React from "react";
import Categories from "./HomePage/Categories";
import Footer from "./HomePage/Footer";
import Products from "./HomePage/Products";
import Slider from "./HomePage/Slider";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

const BodyHome = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default BodyHome;

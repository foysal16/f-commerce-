import React from "react";

import Navbar from "./Navbar/navbar";
import LeftBar from "./Body/leftBar";
import MainDashboad from "./Body/maindashbody";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <MainDashboad />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

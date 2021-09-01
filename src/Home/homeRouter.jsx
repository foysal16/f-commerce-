import React from "react";

import Navbar from "../Dashboard/Navbar/navbar";
import BodyHome from "./Body/bodyHome";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const HomeRouter = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={12}>
          <BodyHome />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeRouter;

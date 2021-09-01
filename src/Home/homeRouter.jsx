import React from "react";

import Navbar from "./Navbar/navbar";
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
        <Grid item sm={2}>
          Home left
        </Grid>
        <Grid item sm={7}>
          Home Main
        </Grid>
        <Grid item sm={3}>
          Home Right
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeRouter;

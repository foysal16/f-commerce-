import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const RightBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1>Right side</h1>
    </Container>
  );
};

export default RightBar;

import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Maindashbody = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>Body</h1>
    </Container>
  );
};

export default Maindashbody;

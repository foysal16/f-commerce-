import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const UserList = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>USER LIST</h1>
    </Container>
  );
};

export default UserList;

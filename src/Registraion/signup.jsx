import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

const paperStyle = {
  padding: 40,
  height: "50vh",
  width: 320,
  margin: "100px auto",
  fontFamily: "Poppins",
};

const avatarStyle = { backgroundColor: "#000000" };
const btstyle = {
  margin: "20px 0",
  height: 40,
  borderRadius: 35,
  backgroundColor: "#000000",
  padding: "18px 36px",
  fontSize: "16px",
  fontFamily: "Poppins",
};

const textFiledStyle = {
  margin: "10px 0",
};
const signUp = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleRoundedIcon />
          </Avatar>
          <h2>Sign Up</h2>

          <TextField
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
          />

          <TextField
            label="First Name"
            placeholder="First Name"
            fullWidth
            required
            style={textFiledStyle}
          />

          <TextField
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            required
          />

          <TextField
            label="Enter New Password"
            placeholder="Enter New Password"
            type="password"
            fullWidth
            required
          />

          <TextField
            label="Re-Enter Password"
            placeholder="Re-Enter Password"
            type="password"
            fullWidth
            required
          />

          <Button
            type="submit"
            color="primary"
            bgColor="#000000"
            fullWidth
            variant="contained"
            style={btstyle}
          >
            Sign Up
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default signUp;

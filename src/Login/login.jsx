import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";

import LockOpenIcon from "@material-ui/icons/LockOpen";

const paperStyle = {
  padding: 40,
  height: "40vh",
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

const linkTypo = { color: "#FF4C29", fontFamily: "Poppins" };

const login = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <h2>Sign In</h2>

          <TextField
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
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
            Sign In
          </Button>

          <Typography>
            <Link style={linkTypo} href="#">
              Forgot Password
            </Link>
          </Typography>

          <Typography>
            Do you have any account ?
            <Link style={linkTypo} href="#">
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default login;

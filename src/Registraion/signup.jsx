import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

import { useState } from "react";
import { requestNewUserAdd } from "../Store/Action/Users/Registration";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
///import { CallMissedSharp } from "@material-ui/icons";

const paperStyle = {
  padding: 40,
  height: "65vh",
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

const linkTypo = {
  color: "#FF4C29",
  fontFamily: "Poppins",
};
const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const [confirmPass, setConfirmPass] = useState("");
  const [isPassMatched, setIsPassMatched] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const setRegValue = (key, e) => {
    setSignUpInfo({ ...signUpInfo, [key]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpInfo.password === confirmPass) {
      setIsPassMatched(true);
      dispatch(requestNewUserAdd(signUpInfo));
      history.push("/login");
    } else {
      setIsPassMatched(false);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleRoundedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <TextField
              type="text"
              label="Username"
              placeholder="Enter Username"
              fullWidth
              required
              value={signUpInfo.username}
              onChange={(e) => setRegValue("username", e)}
            />

            <TextField
              label="First Name"
              placeholder="First Name"
              fullWidth
              required
              style={textFiledStyle}
              value={signUpInfo.firstname}
              onChange={(e) => setRegValue("firstname", e)}
            />

            <TextField
              label="Last Name"
              placeholder="Last Name"
              fullWidth
              style={textFiledStyle}
              required
              value={signUpInfo.lastname}
              onChange={(e) => setRegValue("lastname", e)}
            />

            <TextField
              type="email"
              label="Email"
              placeholder="Email"
              fullWidth
              style={textFiledStyle}
              required
              value={signUpInfo.email}
              onChange={(e) => setRegValue("email", e)}
            />

            <TextField
              label="Enter New Password"
              placeholder="Enter New Password"
              type="password"
              fullWidth
              style={textFiledStyle}
              value={signUpInfo.password}
              onChange={(e) => setRegValue("password", e)}
              required
            />

            <TextField
              label="Re-Enter Password"
              placeholder="Re-Enter Password"
              type="password"
              fullWidth
              style={textFiledStyle}
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            {!isPassMatched && <p>Password not Match!</p>}

            <Button
              color="primary"
              fullWidth
              variant="contained"
              style={btstyle}
              type="submit"
              value="Sign Up"
            >
              Sign Up
            </Button>
          </form>
          <p>
            Already Have a account?
            <Link to="/login" style={linkTypo}>
              Sign In
            </Link>
          </p>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;

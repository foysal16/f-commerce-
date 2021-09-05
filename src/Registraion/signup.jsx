import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

import { useState } from "react";
import { addNewUserRequest } from "../Store/Actions/LoginResgistration/SignUpAction";
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
  const history = useHistory();
  const dispatch = useDispatch();

  const [signUpNew, setSignUpNew] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [setPassConfirm, PassConfirm] = useState("");
  const [setPassMatch, setIsPassMatched] = useState(true);

  const seNewUserReg = (key, n) => {
    setSignUpNew({ ...signUpNew, [key]: n.target.value });
  };

  console.log(signUpNew, "sign Up");

  const handleNewUser = (n) => {
    n.preventDefalut();
    if (signUpNew.password === setPassConfirm) {
      setIsPassMatched(true);
      dispatch(addNewUserRequest(signUpNew));
      console.log("sign Up");
      history.push("/login");
    } else {
      setIsPassMatched(false);
    }
  };
  console.log(setIsPassMatched, "sign Up setIsPassMatched");

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleRoundedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <form onSubmit={() => handleNewUser}>
            <TextField
              type="text"
              label="Username"
              placeholder="Enter Username"
              fullWidth
              required
              value={signUpNew.username}
              onChange={(n) => seNewUserReg("username", n)}
            />

            <TextField
              label="First Name"
              placeholder="First Name"
              fullWidth
              required
              style={textFiledStyle}
              value={signUpNew.firstname}
              onChange={(n) => seNewUserReg("firstname", n)}
            />

            <TextField
              label="Last Name"
              placeholder="Last Name"
              fullWidth
              style={textFiledStyle}
              required
              value={signUpNew.lastname}
              onChange={(n) => seNewUserReg("lastname", n)}
            />

            <TextField
              type="email"
              label="Email"
              placeholder="Email"
              fullWidth
              style={textFiledStyle}
              required
              value={signUpNew.email}
              onChange={(n) => seNewUserReg("email", n)}
            />

            <TextField
              label="Enter New Password"
              placeholder="Enter New Password"
              type="password"
              fullWidth
              style={textFiledStyle}
              value={signUpNew.password}
              onChange={(n) => seNewUserReg("password", n)}
              required
            />

            <TextField
              label="Re-Enter Password"
              placeholder="Re-Enter Password"
              type="password"
              fullWidth
              style={textFiledStyle}
              required
              value={setPassConfirm}
              onChange={(n) => PassConfirm(n.target.value)}
            />

            {!setPassMatch && <p>Password not Match!</p>}

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

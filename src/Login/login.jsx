import {
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import { requestLogin } from "../Store/Action/Users/LoginToken";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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

const Login = () => {
  const { role } = useSelector((store) => store.authReducerStore);
  const [loginInfo, setLoginInfo] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const userSetValue = (key, e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(requestLogin(loginInfo));

    console.log(loginInfo, "===credential");
  };

  useEffect(() => {
    console.log(role);
    if (role) {
      if (role === "admin") {
        history.push("/dashboard");
      } else {
        history.push("/");
      }
    }
  }, [history, role]);

  console.log(role, " User Info");

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <form onSubmit={handleLogin}>
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h2>Sign In</h2>

            <TextField
              label="Email"
              placeholder="Email"
              fullWidth
              required
              value={loginInfo.email}
              onChange={(e) => userSetValue("email", e)}
            />
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="password"
              fullWidth
              required
              value={loginInfo.password}
              onChange={(e) => userSetValue("password", e)}
            />

            <Button
              type="submit"
              color="primary"
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
              Don't have any account ?
              <Link style={linkTypo} to="/SignUp">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;

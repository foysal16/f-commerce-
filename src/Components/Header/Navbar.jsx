import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import ProfileImage from "../../Components/media/logo.png";
import Profile from "./NavTabs/profile";
import Notifications from "./NavTabs/notifications";
import Messages from "./NavTabs/Message";
import { useStyles } from "./HeadStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <img className={classes.logImage} alt="Foysal" src={ProfileImage} />
        </Typography>
        {
          <Box className={classes.search}>
            <SearchIcon className={classes.searchIconLeft} />
            <InputBase
              className={classes.searchInput}
              placeholder="Search..........."
            >
              {" "}
            </InputBase>
          </Box>
        }
        <Box style={{ display: "flex" }}>
          <Messages />
          <Notifications />
          <Profile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

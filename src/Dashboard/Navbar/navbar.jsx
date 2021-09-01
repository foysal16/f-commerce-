import React from "react";
import { useState } from "react";
import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import CancelIcon from "@material-ui/icons/Cancel";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//import ProfileImage from "./Components/media/2.jpg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: "50px",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchIconLeft: {
    marginLeft: 15,
  },

  searchInput: {
    marginLeft: theme.spacing(1),
    color: "#ffffff",
  },

  searchIconButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          F-commerce{" "}
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          F-com
        </Typography>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIconLeft} />
          <InputBase
            className={classes.searchInput}
            placeholder="Search..........."
          >
            {" "}
          </InputBase>
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>

        <div className={classes.icons}>
          <SearchIcon
            onClick={() => setOpen(true)}
            className={classes.searchIconButton}
          />

          <Badge badgeContent={4} className={classes.badge} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} className={classes.badge} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Foysal" src={<AccountCircleIcon />} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

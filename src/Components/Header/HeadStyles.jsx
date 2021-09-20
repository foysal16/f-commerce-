import { makeStyles } from "@material-ui/styles";
import { alpha } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#000000",
  },
  logImage: {
    width: "150px",
    margin: "5px auto",
    paddingTop: "5px",
  },

  Avatar: {
    width: "35px",
    height: "35px",
  },
  Ulavter: {
    backgroundColor: blue["A200"],
    color: "white",
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
  searchIconLeft: {
    marginLeft: 15,
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },

  drawerPaper: {
    marginTop: "67px",
    width: "250px",
    backgroundColor: "#000",
    color: "#FFFFFF",
    borderTop: "2px solid #2C2E43",
  },

  navList: {
    minWidth: "250px",
    maxWidth: "300px",
  },

  menu: {
    marginTop: "52px",
    color: "#000000",
  },

  iconColor: {
    color: "#866632",
  },

  listStyle: {
    marginTop: "20px",
    padding: "10px",
  },

  headerComponent: {
    padding: theme.spacing(1, 40),
  },

  NavLink: {
    color: "#ffffff",
  },

  table: {
    minWidth: 1000,
  },

  profileAvatar: {
    width: "150px",
    height: "150px",
    marginTop: "20px",
    marginBottom: "50px",
  },
  userProfileList: {
    color: "#ffffff",
  },
}));

// import React from "react";
// import { useState } from "react";
// // import { useHistory } from "react-router-dom";

// import {
//   AppBar,
//   InputBase,
//   makeStyles,
//   Toolbar,
//   Typography,
//   alpha,
//   //   Avatar,
// } from "@material-ui/core";

// import SearchIcon from "@material-ui/icons/Search";
// // import LockOpenIcon from "@material-ui/icons/LockOpen";
// // import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import CancelIcon from "@material-ui/icons/Cancel";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// import ProfileImage from "../../Components/media/logo.png";
// //import ProfileImage from "./Components/media/2.jpg";
// import UserProfileMenu from "../Navbar/UserProfileView";

// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },

//   navbar: {
//     backgroundColor: "#000000",
//   },

//   search: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     borderRadius: "50px",
//     width: "50%",
//     [theme.breakpoints.down("sm")]: {
//       display: (props) => (props.open ? "flex" : "none"),
//       width: "70%",
//     },
//   },

//   logoLg: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   logoSm: {
//     display: "block",

//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },

//   logImage: {
//     width: "150px",
//     margin: "5px auto",
//     paddingTop: "5px",
//   },
//   logImagesm: {
//     width: "120px",
//   },

//   searchIconLeft: {
//     marginLeft: 15,
//   },

//   searchInput: {
//     marginLeft: theme.spacing(1),
//     color: "#ffffff",
//   },

//   searchIconButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },

//   icons: {
//     alignItems: "center",
//     display: (props) => (props.open ? "none" : "flex"),
//   },

//   cancel: {
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },

//   button: {
//     marginRight: theme.spacing(2),
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     color: "#ffffff",
//     width: "100px",
//   },
//   iconbutton: {},
//   cartIcon: {
//     color: "#ffffff",
//     background: "linear-gradient(to bottom, #866632 8%, #e7e598 97%)",
//     borderRadius: "50px",
//     width: "40px",
//     height: "40px",
//   },
//   mcartIcon: {
//     display: "flex",
//     margin: "10px auto",
//   },
// }));

// const NavbarHome = () => {
//   const [open, setOpen] = useState(false);
//   //   const history = useHistory();
//   const classes = useStyles({ open });

//   //   const signInHadleClick = () => {
//   //     history.push("/Login");
//   //   };

//   //   const signUpHadleClick = () => {
//   //     history.push("/SignUp");
//   //   };

//   return (
//     <AppBar position="fixed" className={classes.navbar}>
//       <Toolbar className={classes.toolbar}>
//         <Typography className={classes.logoLg}>
//           <img className={classes.logImage} alt="Foysal" src={ProfileImage} />
//         </Typography>
//         <Typography className={classes.logoSm}>
//           <img className={classes.logImagesm} alt="Foysal" src={ProfileImage} />
//         </Typography>
//         <div className={classes.search}>
//           <SearchIcon className={classes.searchIconLeft} />
//           <InputBase
//             className={classes.searchInput}
//             placeholder="Search..........."
//           >
//             {" "}
//           </InputBase>
//           <CancelIcon
//             className={classes.cancel}
//             onClick={() => setOpen(false)}
//           />
//         </div>

//         <div className={classes.icons}>
//           <SearchIcon
//             onClick={() => setOpen(true)}
//             className={classes.searchIconButton}
//           />

//           <div className={classes.cartIcon}>
//             <ShoppingCartIcon className={classes.mcartIcon} />
//           </div>
//           <UserProfileMenu />
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavbarHome;

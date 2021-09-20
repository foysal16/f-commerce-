// import React from "react";
// import {
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   ListItemIcon,
//   ListItemText,
//   Avatar,
// } from "@material-ui/core";

// import { NavLink } from "react-router-dom";

// //import NotificationsIcon from "@material-ui/icons/Notifications";
// import SettingsIcon from "@material-ui/icons/Settings";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { useStyles } from "../../../src/Components/Header/HeadStyles";

// function stringToColor(string) {
//   let hash = 0;
//   let i;

//   /* eslint-disable no-bitwise */
//   for (i = 0; i < string.length; i += 1) {
//     hash = string.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   let color = "#";

//   for (i = 0; i < 3; i += 1) {
//     const value = (hash >> (i * 8)) & 0xff;
//     color += `00${value.toString(16)}`.substr(-2);
//   }
//   /* eslint-enable no-bitwise */

//   return color;
// }

// function stringAvatar(name) {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//   };
// }

// const Profile = () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const dropDownData = [
//     { label: "View Profile", link: "/user-profile", icon: <SettingsIcon /> },
//     { label: "LogOut", link: "/logOut", icon: <ExitToAppIcon /> },
//   ];

//   return (
//     <Box>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         startIcon={<Avatar {...stringAvatar("Kent Dodds")}></Avatar>}
//       ></Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         className={classes.menu}
//       >
//         {dropDownData.map((item, i) => (
//           <MenuItem
//             key={i}
//             component={NavLink}
//             onClick={handleClose}
//             to={item.link}
//             className={classes.NavLink}
//           >
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText>{item.label}</ListItemText>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//   );
// };
// export default Profile;

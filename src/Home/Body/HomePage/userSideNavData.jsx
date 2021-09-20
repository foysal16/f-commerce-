// import React from "react";
// import {
//   Avatar,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@material-ui/core";
// // import DashboardIcon from "@material-ui/icons/Dashboard";
// import EventAvailableIcon from "@material-ui/icons/EventAvailable";
// import { useStyles } from "../../../../src/Components/Header/HeadStyles";
// import { NavLink } from "react-router-dom";

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

// const SideNavData = () => {
//   const classes = useStyles();
//   const listItemData = [
//     {
//       label: "Order List",
//       link: "/user-order-list",
//       icon: <EventAvailableIcon />,
//     },
//   ];
//   return (
//     <List className={classes.listStyle}>
//       <Avatar
//         className={classes.profileAvatar}
//         {...stringAvatar("Kent Dodds")}
//       />
//       {listItemData.map((item, i) => (
//         <ListItem
//           component={NavLink}
//           to={item.link}
//           className={classes.NavLink}
//           key={i}
//         >
//           <ListItemIcon className={classes.iconColor}>{item.icon}</ListItemIcon>
//           <ListItemText className={classes.userProfileList}>
//             {item.label}
//           </ListItemText>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default SideNavData;

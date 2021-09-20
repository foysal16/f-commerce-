import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import EventAvailableNew from "@material-ui/icons/EventAvailable";
import { useStyles } from "../HeadStyles";
import { NavLink } from "react-router-dom";

const SideNavData = () => {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/dashboard", icon: <DashboardIcon /> },
    { label: "Products", link: "/productList", icon: <EventAvailableIcon /> },
    { label: "Users", link: "/users", icon: <GroupAddIcon /> },
    { label: "Orders", link: "/orders", icon: <ShoppingCartIcon /> },
  ];

  return (
    <List className={classes.listStyle}>
      {listItemData.map((item, i) => (
        <ListItem
          component={NavLink}
          to={item.link}
          className={classes.NavLink}
          key={i}
        >
          <ListItemIcon className={classes.iconColor}>{item.icon}</ListItemIcon>
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default SideNavData;

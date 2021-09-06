import React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
  List,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../HeadStyles";

const Notifications = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Foysal", desc: "My New order........" },
    { label: "Ayub", desc: "My New order........" },
    { label: "Maruf", desc: "My New order........" },
    { label: "Mone Nai", desc: "My New order........" },
  ];

  return (
    <Box>
      <IconButton
        aria-controls="Notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="Notification"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <List className={classes.navList}>
          {dropDownData.map((item, i) => (
            <MenuItem key={i} component={ListItem} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.Ulavter}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={item.desc}
              ></ListItemText>
            </MenuItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};
export default Notifications;

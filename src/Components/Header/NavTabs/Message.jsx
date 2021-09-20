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

import ForumIcon from "@material-ui/icons/Forum";
import { useStyles } from "../HeadStyles";

const Messages = () => {
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
    <div>
      <Box>
        <IconButton
          aria-controls="Messages"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <Badge badgeContent={4} color="secondary">
            <ForumIcon />
          </Badge>
        </IconButton>
        <Menu
          id="Messages"
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
    </div>
  );
};
export default Messages;

import * as  React from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import EditNoteIcon from "@mui/icons-material/EditNote";
import BadgeIcon from "@mui/icons-material/Badge";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LogOutButton from '../LogOutButton/LogOutButton';

function Menu() {
  const history = useHistory();

  const [state, setState] = React.useState({
    right: false,
});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event.type === 'keydown' &&
        ((event.key === 'Tab' || event.key === 'Shift'))
    ) {
        return;
    }

    setState({ ...state, [anchor]: open });
};

  return (
    <>
      {/* <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >  */}
      <Divider />
      <List>
        <ListItem key="link1" disablePadding>
          <ListItemButton onClick={() => history.push("/user")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link2" disablePadding>
          <ListItemButton onClick={() => history.push("/addBoxer")}>
            {/* Icons */}
            {/* <PlaylistAddIcon /> */}
            <ListItemText primary="AddBoxer" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link3" disablePadding>
          <ListItemButton onClick={() => history.push("/searchFighters")}>
            <ListItemText primary="Search Fighter" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link4" disablePadding>
          <ListItemButton onClick={() => history.push("/deleteBoxer")}>
            <GroupsIcon />
            <ListItemText primary="Your boxers" />
          </ListItemButton>
        </ListItem>
        <ListItem key="logout">
          <ListItemButton>
            <LogOutButton
              onClick={() => history.push("/user")}
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/* </Box> */}
    </>
  );
}

export default Menu;

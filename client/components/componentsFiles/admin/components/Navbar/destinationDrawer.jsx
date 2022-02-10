import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  FaHome,
  FaUserAlt,
  FaMapMarker,
  FaUserLock,
  FaHotel,
} from "react-icons/fa";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/router";
import DestinationHome from "../DestinationHome";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    background: "#375488",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DestinationDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Manage Destinations
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="hover:bg-pmry hover:text-white">
          <ListItem button key="Home">
            <a className="flex" href="/admin/dashboard">
              <ListItemIcon className="mt-1 text-2xl">
                <FaHome />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </a>
          </ListItem>
        </List>
        <List className="hover:bg-pmry hover:text-white">
          <ListItem button key="Manage Users">
            <a className="flex" href="/admin/users">
              <ListItemIcon className="mt-1 text-2xl">
                <FaUserAlt />
              </ListItemIcon>
              <ListItemText primary="Manage Users" />
            </a>
          </ListItem>
        </List>

        <List className="hover:bg-pmry hover:text-white  bg-pmry text-white">
          <ListItem button key="Destinations">
            <a className="flex" href="/admin/destinations">
              <ListItemIcon className="mt-1 text-white text-2xl">
                <FaMapMarker />
              </ListItemIcon>
              <ListItemText primary="Destinations" />
            </a>
          </ListItem>
        </List>

        <List className="hover:bg-pmry hover:text-white">
          <ListItem button key="Hotels">
            <a className="flex" href="/admin/hotels">
              <ListItemIcon className="mt-1 text-2xl">
                <FaHotel />
              </ListItemIcon>
              <ListItemText primary="Hotels" />
            </a>
          </ListItem>
        </List>

        <List className="hover:bg-pmry hover:text-white">
          <ListItem button key="Owner">
            <a className="flex" href="/admin/owner">
              <ListItemIcon className="mt-1 text-2xl">
                <FaUserLock />
              </ListItemIcon>
              <ListItemText primary="Owner" />
            </a>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <DestinationHome />
        </Typography>
      </Box>
    </Box>
  );
}

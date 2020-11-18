import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, MenuItem, MenuList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  title: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    flexDirection: "row",
  },
  logout: {
    "& .MuiButtonBase-root": {
      background: "#1890ff",
      height: "62px",
    },
  },
}));

function NavBar({ logout, location }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title} />
          <MenuList disablePadding className={classes.links}>
            <MenuItem>Sites</MenuItem>
            <Box className={classes.logout}>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Box>
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.protoType = {
  logout: PropTypes.func,
};

export default NavBar;

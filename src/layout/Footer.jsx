import React, { Fragment, useContext } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { CommonContext } from "../context/CommonContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    // backgroundColor: "red"
  },
  appBarFooter: {
    top: "auto",
    bottom: 0,
    // height: 40,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  }
}));

const Footer = props => {
  const { open, handleDrawerOpen } = useContext(CommonContext);

  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBarFooter, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar style={{ minHeight: 30 }}>
        <Typography variant="body2" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

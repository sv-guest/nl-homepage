import React, { Fragment, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Drawer from "./Drawer";
import clsx from "clsx";

import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import { CommonContext } from "../context/CommonContext";

const useStyles = makeStyles(theme => ({
  content: {
    // ...theme.mixins.gutters(),
    // backgroundColor: theme.palette.background.paper,
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2
    // padding: `128px 0 0 0`,
    // flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    margin: "0 auto"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: theme.drawerWidth
  }
}));

const Layout = props => {
  const classes = useStyles();
  const { open } = useContext(CommonContext);

  return (
    <Fragment>
      <CssBaseline />
      <Drawer />
      <Header />
      <Container
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
        classes={classes}
        open={open}
        maxWidth="xl"
      >
        {props.children}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;

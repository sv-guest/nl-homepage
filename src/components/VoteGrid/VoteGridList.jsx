import React, { useState } from "react";
import {
  GridList,
  Grid,
  GridListTile,
  useMediaQuery,
  makeStyles
} from "@material-ui/core";
import VoteGridItem from "./VoteGridItem";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // height: "300px"
  },
  gridItem: {
    height: "300px"
  }
}));

export default function ImageGridList(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1280px)");
  const isDesktop = useMediaQuery("(min-width:1281px)");

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={(isMobile && 1) || (isTablet && 2) || (isDesktop && 4)}
        cellHeight={"auto"}
      >
        >
        {new Array(50).fill("").map((x, index) => (
          <Grid item key={index} className={classes.gridItem}>
            <VoteGridItem itemData={x} index={index} />
          </Grid>
        ))}
      </GridList>
    </div>
  );
}

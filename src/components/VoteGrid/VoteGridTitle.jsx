import React from "react";
import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";

const VoteGridTitle = props => {
  const { voteTitle, title } = props;
  return (
    <Grid className={voteTitle} style={{ margin: 40 }}>
      <Typography variant="h2" align="center" style={{ fontWeight: "bold" }}>
        {title.title}
      </Typography>
      <Typography variant="h6" align="center">
        {title.subtitle}
      </Typography>
    </Grid>
  );
};

export default VoteGridTitle;

import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ButtonBase from "@material-ui/core/ButtonBase";

const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      img: {
        // width: "auto",
        // height: "auto"
        // maxWidth: "100%",
        // maxHeight: "100%",
        // minWidth: "50%",
        // minHeight: "50%"
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 10
  },

  image: {
    // width: 128,
    // height: 128
    width: "100%"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: "100%",
    height: "38vh",
    borderRadius: "5px"
  }
}));

export default function VoteGridItem(props) {
  const classes = useStyles();
  const { itemData, index } = props;
  const srcURL = `https://picsum.photos/id/${50 + index}/200/300.webp`;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          // style={{ margin: 10 }}
          // spacing={2}
          // style={{ border: "1px solid green" }}
        >
          <Grid item xs={12}>
            {/* <ButtonBase className={classes.image}> */}

            {/* <img
              className={classes.img}
              alt="complex"
              src="https://material-ui.com/static/images/grid/complex.jpg"
            /> */}
            <Avatar
              variant="square"
              src={srcURL}
              // src="https://material-ui.com/static/images/grid/complex.jpg"
              className={classes.large}
            />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item item xs={12} container>
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  style={{ padding: "10px 5px ", fontWeight: "bold" }}
                  variant="subtitle1"
                >
                  Standard license
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <ChatOutlinedIcon></ChatOutlinedIcon>
                  </Grid>
                  <Grid item item style={{ paddingLeft: 3 }}>
                    <Typography variant="subtitle1" component="span">
                      96
                    </Typography>
                  </Grid>
                  <Grid item style={{ paddingLeft: 10 }}>
                    <HowToVoteIcon></HowToVoteIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="span">
                      102
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item>
                  <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                  <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

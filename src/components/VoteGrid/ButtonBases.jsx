import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { ViewContext } from "../../context/ViewContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 1.0,
        backgroundColor: "#4248B5"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
    // borderRadius: 3
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    // backgroundColor: "#0057FF",
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
    // borderRadius: 3
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  selectedTab: {
    opacity: 1.0,
    backgroundColor: "#4248B5"
  }
}));

const ButtonBases = props => {
  const classes = useStyles();
  //   const { categoryData } = useContext(ViewContext);
  const { image, isSelected } = props;

  return (
    <div className={classes.root}>
      {/* {categoryData.map(image => ( */}
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
          // padding:15,
          height: 80
        }}
        // disabled
        // disableRipple
        disableTouchRipple
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`
          }}
        />
        <span
          // className={classes.imageBackdrop}
          className={clsx(
            classes.imageBackdrop,
            isSelected && classes.selectedTab
          )}
        />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="h6"
            color="inherit"
            className={classes.imageTitle}
            // style={{ fontWeight: "bold" }}
          >
            {image.title}
            {/* <span className={classes.imageMarked} /> */}
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};
export default ButtonBases;

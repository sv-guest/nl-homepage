import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Layout from "../layout/Layout";
import clsx from "clsx";

import VoteGridList from "../components/VoteGrid/VoteGridList";
import VoteGridTitle from "../components/VoteGrid/VoteGridTitle";
import ButtonBases from "../components/VoteGrid/ButtonBases";

import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";

import { CommonContext } from "../context/CommonContext";
import { ViewContext } from "../context/ViewContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  bigIndicator: {
    display: "none"
  },
  gridList: {
    height: "calc(90vh - 300px)" //header 100, appbar 100, footer 100
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const VoteMain = props => {
  const classes = useStyles();

  const { open, setOpen } = useContext(CommonContext);

  const [value, setValue] = React.useState(0);
  const [valueDelta, setValueDelta] = useState(0);
  const [categoryData, setCategoryData] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValueDelta(0);

    if (newValue > value && newValue !== categoryData.length - 1) {
      setValueDelta(1);
    }
    if (newValue < value && newValue !== 0) {
      setValueDelta(-1);
    }
    // TODO: 2번 누르고  오른쪽 스크롤 버튼 누르고 5번 클릭시 4번이 자동으로 이동되지 않는 버그 방지용
    // 같을 경우 delta를 -1 곱하는 방식으로 임시 해결
    if (value === newValue) {
      setValueDelta(valueDelta * -1);
    }

    setValue(newValue);
  };

  useEffect(() => {
    const categoryArray = new Array(16).fill("").map((x, index) => {
      return {
        url: `https://picsum.photos/id/${index + 50}/200/300.webp`,
        title: `최고의 Behance${index + 1}`,
        subtitle: `오늘의 큐레이터 추천${index + 1}`
      };
    });
    setCategoryData(categoryArray);

    return () => {};
  }, []);

  return (
    <ViewContext.Provider
      value={{
        categoryData
      }}
    >
      <Layout>
        <AppBar
          position="fixed"
          color="inherit"
          style={{
            top: "64px",
            // paddingTop: "64px",
            boxShadow: "none"
          }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Tabs
            value={value + valueDelta}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            // scrollButtons={isPc ? "on" : "off"}
            variant="scrollable"
            aria-label="full width tabs example"
            // classes={{ indicator: classes.bigIndicator }}
            // ScrollButtonComponent={ScrollButtonComponentGruop}
            classes={{ indicator: classes.bigIndicator }}
          >
            {categoryData.map((x, index) => (
              <Tab
                key={index}
                {...a11yProps(index)}
                label={
                  <ButtonBases
                    image={x}
                    isSelected={index === value ? true : false}
                  ></ButtonBases>
                }
                style={{
                  padding: 0,
                  margin: `10px 5px`,
                  borderRadius: 5,
                  // width: "10.417vw",
                  minWidth: 160,
                  width: 200
                  // maxWidth: 200
                }}
              ></Tab>
            ))}
          </Tabs>
        </AppBar>
        {categoryData.map((x, index) => (
          <TabPanel
            key={index}
            value={value}
            index={index}
            style={{ padding: "170px 0 96px 0" }}
          >
            <VoteGridTitle title={x} gridList={classes.voteTitle} />
            <VoteGridList gridList={classes.gridList} />
          </TabPanel>
        ))}
      </Layout>
    </ViewContext.Provider>
  );
};

export default VoteMain;

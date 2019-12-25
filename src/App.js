import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CommonContext } from "./context/CommonContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tutorial from "./pages/Tutorial";
import VoteMain from "./pages/VoteMain";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white"
        }
      }
    }
  },
  drawerWidth: 240
});

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <CommonContext.Provider
      value={{
        open,
        setOpen,
        handleDrawerOpen,
        handleDrawerClose
      }}
    >
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={VoteMain} />
            <Route path="/VoteMain" component={VoteMain} />
            <Route path="/Tutorial" component={Tutorial} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </CommonContext.Provider>
  );
};

export default App;

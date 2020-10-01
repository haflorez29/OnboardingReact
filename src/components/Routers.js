import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Imagine from "./Imagine";
import Welcome from "./Welcome";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="/imagine">
          <Imagine />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Imagine from "./Imagine";
import Welcome from "./Welcome";
import CareerPath from "./CareerPath";
import Acordion from "./Acordion"

const Routers = () => {
  return (
    <Router>
      <Switch>        
        <Route path="/Acordion" component={Acordion}>
          {/* <Imagine /> */}
        </Route>
        <Route path="/CareerPath" component={CareerPath}>
          {/* <Imagine /> */}
        </Route>
        <Route path="/imagine" component={Imagine}>
          {/* <Imagine /> */}
        </Route>
        <Route exact path="/" component={Welcome}>
          {/* <Welcome /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

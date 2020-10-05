import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Imagine from "./Imagine";
import Welcome from "./Welcome";
import CareerPath from "./Career Path/CareerPath";

const Routers = () => {
  return (
    <Router>
      <Switch>  
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

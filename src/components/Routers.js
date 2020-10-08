import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Imagine from "./Imagine";
import Welcome from "./Welcome";
import CareerPath from "./careerPath/CareerPath"
import Triforce from "./triforce/Triforce"
import Fci from "./fci/Fci";

const Routers = () => {
  return (
    <Router>
      <Switch>  
      <Route path="/FCI" component={Fci}>
          {/* <Imagine /> */}
        </Route>
      <Route path="/Triforce" component={Triforce}>
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

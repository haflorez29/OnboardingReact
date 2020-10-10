import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Imagine from "./Imagine";
import Welcome from "./Welcome";
import CareerPath from "./careerPath/CareerPath";
import Triforce from "./triforce/Triforce";
import Fci from "./fci/Fci";
import KeyPeople from "./keyPeople/KeyPeople";
import Ready from "./ready/Ready";
import Studios from "./studios/Studios";

const Routers = () => {
  return (
    <Router >
      <Switch>
      <Route path="/Studios" component={Studios}>
        </Route>
      <Route path="/Ready" component={Ready}>
        </Route>
        <Route path="/People" component={KeyPeople}>
        </Route>
        <Route path="/FCI" component={Fci}>
        </Route>
        <Route path="/Triforce" component={Triforce}>
        </Route>
        <Route path="/CareerPath" component={CareerPath}>
        </Route>
        <Route path="/imagine" component={Imagine}>
        </Route>
        <Route exact path="/" component={Welcome}>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

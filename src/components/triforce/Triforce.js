import React from "react";
import Tab from "./Tab";
import "../../style/triforce.css";

function Triforce(state) {
  let name = state.location.state.user;
  console.log(name);
  return (
    <div className=" container-fluid bg-Triforce bg-dark">
      <div className="text-warning p-4">
        <h1 className="">The triforce</h1>
        <hr className="bg-warning "></hr>
        <p>The three aspects consist of the Studio, TDC and Accounts</p>
        <div className="d-flex">
          <p>You are here&nbsp;</p>
          <p className="name">{name}</p>
        </div>
      </div>
      <Tab />
    </div>
  );
}

export default Triforce;

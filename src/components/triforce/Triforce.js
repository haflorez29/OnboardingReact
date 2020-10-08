import React from "react";
import Tab from "./Tab";
import Next from "../shared/Next";
import "../../style/triforce.css";

function Triforce(state) {
  let name = state.location.state.user;
  console.log(name);
  return (
    <div className=" container-fluid bg-Triforce bg-dark">
      <div className="text p-4">
        <div className="d-flex justify-content-around align-items-center ">
          <h1 className="">The triforce</h1>
            <Next
            to="./FCI"
            styleArrow="arrow text" />            
        </div>
        <hr className="hr"></hr>
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

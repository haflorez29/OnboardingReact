import React, { useEffect, useState } from "react";
import avatar from "../../images/Avatar.png";
import Next from "../shared/Next"
import Range from "./Range";
import "../../style/careerPath.css"


function CareerPath(state) {
  let name= state.location.state.user
  console.log(name)
  return (
    <div className="container-fluid bg-dark career vh-100 ">
      <div className="row p-4 vh-100">
        <section className="col-12 col-md-6">
          <div className="d-flex align-items-center justify-content-around">
          <h1 className="text">Career Path</h1>
         
          <Next
          styleArrow="arrow text"
          to={{
            pathname: "./Triforce",
            state: {user:name}
          }}>
          </Next>
          </div>
          <hr className="hr"></hr>
          <div className="col-12  d-flex justify-content-center ">
            <img src={avatar} className="w-50 h-100"></img>
          </div>
        </section>
        <section className="col-12 col-md-6">
          <div className="d-flex h-100 align-items-center">
          <Range />
          </div>
        </section>
      </div>
    </div>
  );
}

export default CareerPath;

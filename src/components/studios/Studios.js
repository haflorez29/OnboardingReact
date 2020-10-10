import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Next from "../shared/Next";

function Studios(state) {
  const name = state.location.state.user;

  return (
    <div className="container-fluid p-4 containerbg vh-100">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text">Classes-Studios</h1>
        <div className=""></div>
        <Next
          to={{
            pathname: "./CareerPath",
            state: { user: name },
          }}
          styleArrow="arrow text"
        />
      </div>
      <hr className="hr"></hr>
      
      <Carousel />
    </div>
  );
}

export default Studios;

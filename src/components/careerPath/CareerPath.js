import React, { useEffect, useState } from "react";
import avatar from "../../images/Avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Range from "./Range";
import "../../style/careerPath.css"
import { Link } from "react-router-dom";


function CareerPath(state) {
  let name= state.location.state.user
  console.log(name)
  return (
    <div className="container-fluid bg-dark career ">
      <div className="row p-4 h-100">
        <section className="col-12 col-md-6">
          <div className="d-flex align-items-center justify-content-around">
          <h1 className="text-warning">Career Path</h1>
          <Link
          to={{
            pathname: "./Triforce",
            state: {user:name}
          }}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-warning arrow" />
          </Link>
          </div>
          <hr className="bg-warning"></hr>
          <div className="col-12  d-flex justify-content-center ">
            <img src={avatar} className="w-75 h-100"></img>
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

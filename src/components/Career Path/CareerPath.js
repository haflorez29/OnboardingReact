import React, { useEffect, useState } from "react";
import avatar from "../../images/Avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import Range from "./Range";
import "../../style/careerPath.css"

function CareerPath() {
  return (
    <div className="container-fluid bg-dark career ">
      <div className="row p-4 h-100">
        <section className="col-12 col-md-6">
          <h1 className="text-warning">Career Path</h1>
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

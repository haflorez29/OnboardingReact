import React from "react";
import Category from "./Category";
import User from "../../images/Avatar.png";
import Next from "../shared/Next"

function Fci() {
  return (
    <div className="container-fluid bg-dark vh-auto p-4">
      <div className="row " >
        <section className="col-12 col-md-6 text">
          <div className="d-flex justify-content-between align-items-center">
          <h1 className="">Globant Values &amp; FCI3</h1>
          <Next
          to="/People"
          styleArrow="arrow text"
          ></Next>
          </div>
          <hr className="hr" />
          <div className="d-flex justify-content-center  align-items-center">
            <a
              href="https://sites.google.com/globant.com/people-site-2/talent-manifesto?authuser=0"
              className="d-flex justify-content-center  align-items-center w-50"
            >
              <img src={User} className="w-100 " alt="avatar" />
            </a>
          </div>
        </section>

        <section className="col-12 col-md-6 d-flex justify-content-center align-items-center vh-100">
          <Category />
        </section>
      </div>
    </div>
  );
}

export default Fci;

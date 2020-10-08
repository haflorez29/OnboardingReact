import React from "react";
import Category from "./Category";
import User from "../../images/Avatar.png";

function Fci() {
  return (
    <div className="container-fluid bg-dark vh-100 ">
      <div className="row " >
        <section className="col-12 col-md-6 text">
          <h1 className="">Globant Values &amp; FCI3</h1>
          <hr className="hr" />
          <div className="d-flex justify-content-center  align-items-center">
            <a
              href="https://sites.google.com/globant.com/people-site-2/talent-manifesto?authuser=0"
              className="d-flex justify-content-center  align-items-center w-50"
            >
              <img src={User} className="w-100" />
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

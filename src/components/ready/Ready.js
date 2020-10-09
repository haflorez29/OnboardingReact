import React from "react";
import "../../style/ready.css";
import Logo from "../../images/Globant.png";

function Ready() {
  return (
    <div className=" container-fluid bg vh-100  ">
      <h2 className="text pt-5">We are ready</h2>
      <div className="d-flex justify-content-start  w-100 align-items-start ">
        <hr className="hr w-50 m-0 "></hr>
      </div>
      <a href="https://www.globant.com/" className="d-flex justify-content-end" target="_blank">
        <img src={Logo} alt="logo globant" className=" img-fluid  "></img>
      </a>
    </div>
  );
}

export default Ready;

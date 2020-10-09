import React from "react";

function Person({ image, ins, name, mail, studio, position }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center col-12 col-md-3 col-lg-2">
      <a href={`mailto:${mail}`} className="d-flex justify-content-center ">
        <img src={image} alt={name} className="img-fluid w-100"></img>
      </a>
      <h6 >{name}</h6>
      <small>@{ins}</small>
      <h5 >{studio}</h5>
      <h5>{position}</h5>
    </div>
  );
}

export default Person;

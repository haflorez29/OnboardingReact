import React from "react";

import "../style/Imagine.css"

const Imagine = (user) => {
  let name= user.location.state.user
  console.log('estado', name)
  return (
    <div className="Imagine text-light d-flex flex-column justify-content-around align-items-center container-fluid ">
      <p>
         {name} already belong to a studio, have a seniority and probably already
        work on a specific project. To understand this better
      </p>
      <h4>Let´s imagine!</h4>
      <p>
        First we need to create our <em>fictional character</em>!
      </p>
    </div>
  );
}

export default Imagine;

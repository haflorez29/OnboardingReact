import React from "react";
import {Link} from "react-router-dom"

import "../style/Imagine.css"

const Imagine = (user) => {
  let name= user.location.state.user
  // console.log('estado', name)
  return (
    <div className="Imagine text-center text-light d-flex flex-column justify-content-around align-items-center container-fluid ">
      <p className="imagine-firts__p">
         {name} already belong to a studio, have a seniority and probably already
        work on a specific project. To understand this better
      </p>
      <Link 
      to={{
        pathname: "./Studios",
        state: {user:name}
      }}>
      <h2 className="text"><strong>Let´s imagine!</strong></h2>
      </Link>      
      <p>
        First we need to create our <strong>fictional character</strong>!
      </p>
    </div>
  );
}

export default Imagine;

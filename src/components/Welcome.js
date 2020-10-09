import React, { useState } from "react";
import Welcomelogo from "../images/welcomebg.png";
import FormWelcome from "./FormWelcome";

import "../style/welcome.css"

const Welcome = () => {
  const [state, setState] = useState("");

  console.log(state);

  return (
    <div className="container-fluid bg-dark vh-100 d-flex align-items-center flex-column">
      <h1 className="text">So excited to have you on board!</h1>
      <img src={Welcomelogo} alt="welcome logo"></img>
      <FormWelcome setName={setState} />
    </div>
  );
};

export default Welcome;

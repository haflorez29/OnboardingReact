import React, { useState } from "react";
import Welcomelogo from "../images/Welcome.JPG";
import { FormWelcome } from "./FormWelcome";

import "../style/welcome.css"

export const Welcome = () => {
  const [state, setState] = useState("");

  console.log(state);

  return (
    <div className="welcome d-flex align-items-center flex-column">
      <h1 className="text-light">So excited to have you on board!</h1>
      <img src={Welcomelogo}></img>
      <FormWelcome setName={setState} />
    </div>
  );
};

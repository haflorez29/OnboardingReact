import React, { useState } from "react";
import Welcomelogo from "../images/Welcome.JPG";
import { FormWelcome } from "./FormWelcome";

export const Welcome = () => {
  const [state, setState] = useState("");

  console.log(state);

  return (
    <div>
      <h1>So excited to have you on board!</h1>
      <img src={Welcomelogo}></img>
      <FormWelcome setName={setState} />
    </div>
  );
};

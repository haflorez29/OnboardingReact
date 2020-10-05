import React from "react";
import "../../style/SeniorM.css"

const arraySernioM = ["CTO", " STUDIO PARTNER", "VP TECH "];

function SeniorM() {
  return (
    <ul className="list-group col-12 p-2 seniormurl table-secondary">
      <li className=" text-center list p-1 ">CTO</li>
      <li className=" d-flex list  ">
      <div className="col-6 text-center p-1 ">STUDIO PARTNER</div>
      <div className="col-6 text-center p-1">VP TECH</div>
      </li>
    </ul>
  );
}

export default SeniorM;

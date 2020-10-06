import React from "react";
import SeniorM from "./SeniorM"
import SeniorInitial from './SeniorInitial'
import "../../style/Range.css"

const Senior = ["ARCHITECT","SOFWARE DESIGNER", "SENIOR"]
const Initial = ["SEMI SENIOR ADV", "SEMI SENIOR", "JUNIOR ADV", "JUNIOR"]
const Expert = ["SUBJECT MATTER EXPERT","SUBJECT MATTER EXPERT","SUBJECT MATTER EXPERT"]
const MGM = ["TECHNICAL DIRECTOR", "TECHNICAL DIRECTOR","TECHNICAL MANAGER"]

function Range() {
  return (
    <div className="accordion w-100" id="accordionExample">
      <div className="card ">
        <div className="card-header bg-warning" id="headingOne">
          <h2 className="mb-0">
            <button
              className="text-center  btn btn-block text-light 
              font-weight-bold "
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              SENIOR MGMT
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <SeniorM/>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header expmgm" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="text-center btn btn-block  collapsed text-light 
              font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              EXPERT AND MGM
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body d-flex justify-content-center ">
            <SeniorInitial
            array={Expert}
            style="Expert"
            />
            <SeniorInitial
            array={MGM}
            style="Mgm"
            />    
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header bg-info" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-left collapsed text-light 
              font-weight-bold text-center"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              SENIOR
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body">
          <SeniorInitial
            array={Senior}
            style="seniorul"/>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header bg-success" id="headingFour">
          <h2 className="mb-0">
            <button
              className="btn btn-block text-light 
              font-weight-bold text-center"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              INITIAL AND MID LEVEL
            </button>
          </h2>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordionExample"
        >
          <div class="card-body">
          <SeniorInitial
            array={Initial}
            style="initialul"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;

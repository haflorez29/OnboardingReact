import React from "react";
import "../../style/category.css";
import SeniorIntial from "../careerPath/SeniorInitial";


const Excellent = ["Focused", "Committed"];
const Act = ["Integrity"];
const Const = ["Fast Learner", "Clear Thinker", "Innovative"];
const Team = ["Flexible", "Collaborative", "Inclusive"];

function Category() {
  return (
    <div className="accordion " id="accordionExample">
      <div className="card ">
        <div className="card-header exc" id="headingOne">
          <h2 className="mb-0 ">
            <button
              className="text-center  btn btn-block text-light 
              font-weight-bold "
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Excellent in your work
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
            <SeniorIntial array={Excellent} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header exc" id="headingTwo">
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
              Act Ethically
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
            <SeniorIntial array={Act} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header cons" id="headingFour">
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
              Constantly Innovate &amp; Think Big
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
            <SeniorIntial array={Const} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-info" id="headingSeven">
          <h2 className="mb-0">
            <button
              className="btn btn-block text-light 
              font-weight-bold text-center"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Team Player &amp; Have Fun
            </button>
          </h2>
        </div>
        <div
          id="collapseSeven"
          className="collapse"
          aria-labelledby="headingSeven"
          data-parent="#accordionExample"
        >
          <div class="card-body">
              <SeniorIntial
              array={Team}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

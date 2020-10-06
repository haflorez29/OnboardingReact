import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Acordion({ name, style, datatarget,datatarget1, contenido }) {
  return (
    <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className={`btn btn-block text-left  d-flex align-items-center justify-content-between ${style}`}         
                type="button"
                data-toggle="collapse"
                data-target={datatarget1}
                aria-expanded="true"
                aria-controls="collapseOne"              >
                {name}
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </h2>
          </div>
          
          <div
            id={datatarget}
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {contenido}             
            </div>
          </div>
        </div>
      </div>
  );
}

export default Acordion;

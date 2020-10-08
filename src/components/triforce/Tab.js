import React from "react";
import Cope from "../../images/cope.PNG"
import Studio from "../../images/Studio.png"
import Project from "../../images/project.png"
import "../../style/tab.css"

function Tab() {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-link active bg-primary text-light "
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Expertise
          </a>
          <a
            className="nav-link bg-info text-light"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Sites
          </a>
          <a
            className="nav-link text-light bg-warning"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
           Business
          </a>
        </div>
      </nav>
      <div className="tab-content d-flex justify-content-center p-5 b-tabs "
       id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <img src={Studio}  className="logo" />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <img src={Cope}  className="logo"/>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <img src={Project} className="logo" />
        </div>
      </div>
    </div>
  );
}

export default Tab;

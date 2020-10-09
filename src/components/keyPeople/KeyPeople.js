import React from "react";
import Person from "./Person";
import Damian from "../../images/Damian.png";
import David from "../../images/David.png";
import Luciana from "../../images/Luciana.png";
import Gabriel from "../../images/Gabriel.png";
import Sebastian from "../../images/Sebastian.png";
import Next from "../shared/Next";

function KeyPeople() {
  return (
    <div className="container-fluid bg-dark vh-100 text p-4">
      <div className="d-flex justify-content-around align-items-center">
        <h1>UI Studio COPE</h1>
        <Next to="/Ready" styleArrow="arrow text"></Next>
      </div>
      <hr className="hr"></hr>
      <h3>Key People</h3>
      <section className="d-flex justify-content-between flex-wrap w-100 col-12">
        <Person
          image={Damian}
          name="Damian Lazzarano"
          studio="SP &amp; UI"
          mail="damian.lazzarano@globant.com"
          position="STUDIO PARTNER"
          ins="damian.lazzarano"
        />
        <Person
          image={David}
          name="David Correa"
          studio="SP &amp; UI STUDIO"
          mail="david.correa@globant.com"
          position="PARTNER"
          ins="david.correa"
        />
        <Person
          image={Luciana}
          name="Luciana Zavaleta"
          studio="UI ENGINEERING"
          mail="luciana.zavaleta@globant.com"
          position="PARTNER"
          ins="luciana.zavaleta"
        />
        <Person
          image={Gabriel}
          name="Gabriel Martinez"
          studio="UI TDC FOCAL"
          mail="gabriel.martinez@globant.com"
          position="TECH. DIRECTOR"
          ins="gabo"
        />
        <Person
          image={Sebastian}
          name="Sebastian Gomez"
          studio="UI ENGINEERING"
          mail="s.gomez@globant.com"
          position="TECH. MANAGER"
          ins="s.gomez"
        />
      </section>
    </div>
  );
}

export default KeyPeople;

import React from "react";
import img1 from "../../images/Carrousel1.jpg";
import img2 from "../../images/Carrousel2.jpg";
import img3 from "../../images/Carrousel3.jpg";
import Item from "./Item";
import FO from "../../images/FOO.svg";
import "../../style/carousel.css";

function Carousel() {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div
        id="carousel-example-2"
        className="carousel slide carousel-fade col-12 col-md-8"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" 
        id="carouselimg"
        role="listbox">
          <div className="carousel-item active ">
            <div className="view">
              <img className="d-block w-100 vh-100" src={img1} alt="First slide" />
              <div className="mask rgba-black-light"></div>
            </div>
            <div className="carousel-caption h-100 ">
              <h3 className="h3-responsive text">STRATEGIC</h3>
              <div className="d-flex flex-wrap w-100 mt-4  ">
                <Item letter="FO" name="Future of Organizations" style="blue item" />
                <Item letter="CT" name="Consulting" style="green" />
                <Item letter="SR" name="Stay Relevant" style="fuchsia" />
                <Item letter="AG" name="Agile Delivery" style="lemon green" />
                <Item letter="PO" name="Product Aceleration" style="orange" />
                <Item letter="PA" name="Process Automation" style="red" />
                <Item
                  letter="AI"
                  name="Artificial Intelligence"
                  style="granate"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img className="d-block w-100 vh-100 " src={img2} alt="Second slide" />
              <div className="mask rgba-black-strong"></div>
            </div>
            <div className="carousel-caption h-100">
              <h3 className="h3-responsive text">SPECIALTY</h3>
              <div className="d-flex flex-wrap w-100 mt-4  ">
                <Item letter="UX" name="UX Studio" style="pink" />
                <Item letter="MO" name="Mobile" style="bluegray" />
                <Item letter="GM" name="Gaming" style="orange" />
                <Item letter="OTT" name="Media OTT" style="grey" />
                <Item letter="BD" name="Big Data Aceleration" style="skyblue" />
                <Item letter="DC" name="Digital Content" style="purple" />
                <Item
                  letter="IOT"
                  name="Internet of Things"
                  style="greenblue"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img className="d-block w-100 vh-100" src={img3} />
              <div className="mask rgba-black-slight"></div>
            </div>
            <div className="carousel-caption h-100">
              <h3 className="h3-responsive  text">FOUNDATION</h3>
              <div className="d-flex flex-wrap w-100 mt-4  ">
                <Item letter="CO" name="Cloud Ops" style="lila " />
                <Item letter="QE" name="Quality Engineering" style="yellow" />
                <Item letter="CS" name="Cyber Security" style="turquoise" />
                <Item letter="UI" name="UI Engineering" style="grayblue" />
                <Item letter="SC" name="Scalable Platforms" style="grape" />
                <Item letter="EV" name="Continuous Evolution" style="brown" />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;

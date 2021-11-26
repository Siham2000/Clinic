import React from "react";
import "./Services.css";
import dental from "../../images/001-dental.png";
import tooth1 from "../../images/tooth (1).png";
import tooth from "../../images/tooth.png";
const Services = () => {
  return (
    <div className="all-services" id="service">
      <div className="">
        <p className="title">OUR SERVICES</p>
        <h2>Services We Provide</h2>
        <div className="servicesDetails">
          <div>
            <img src={dental} alt="" />
            <p>Fluoride Treatment</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eos quos nobis fugiat totam vero deleniti modi quis natus quas.{" "}
            </p>
          </div>
          <div>
            <img src={tooth1} alt="" />
            <p>Cavity Filling</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eos quos nobis fugiat totam vero deleniti modi quis natus quas.{" "}
            </p>
          </div>
          <div>
            <img src={tooth} alt="" />
            <p>Teeth Whitening</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eos quos nobis fugiat totam vero deleniti modi quis natus quas.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div>
            <p className="title">Services</p>
          </div>
          <div>
            <small>Emergency Dental Care</small>
            <br />
            <small>Check Up</small>
            <br />
            <small>Treatment of Personal Diseases</small>
            <br />
            <small>Tooth Extraction</small>
            <br />
            <small>Check Up</small>
          </div>
        </div>
        <div>
          <div>
            <p className="title">Oral Health</p>
          </div>
          <div>
            <small>Emergency Dental Care</small>
            <br />
            <small>Check Up</small>
            <br />
            <small>Treatment of Personal Diseases</small>
            <br />
            <small>Tooth Extraction</small>
            <br />
            <small>Check Up</small>
          </div>
        </div>
        <div>
          <div>
            <p className="title">Our Address</p>
          </div>
          <div>
            <small>Ajloun, Jordan</small>
            <div className="brandIcon">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
            <div className="">
              {" "}
              <small className="call">Call Now</small>
              <p className="callNow">+96279887690</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#333",
          fontFamily: "'Montserrat', sansSerif  ",
        }}
      >
        <small>Copyright 2022 All Right Reserved</small>
      </div>
    </div>
  );
};

export default Footer;

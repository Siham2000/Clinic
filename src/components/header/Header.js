import React from "react";
import "./Header.css";
import Reorder from "@material-ui/icons/Reorder";
import { Nav } from "react-bootstrap";
import image from "../../images/Mask Group 1.png";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  //handle click fucntion
  const showIcon = () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
  };
  return (
    <div className="header-section">
      {/* navbar section */}
      <div className="navbar">
        <Nav id="nav" className="justify-content-end nav">
          <Nav.Item className="nav-item">
            <Link2 className="navLink" to="/">
              {" "}
              Home{" "}
            </Link2>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link
              className="navLink"
              to="service"
              smooth={true}
              duration={1000}
            >
              {" "}
              Services
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link className="navLink" to="doctor" smooth={true} duration={1000}>
              {" "}
              Doctor{" "}
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link
              className="navLink"
              to="testimonial"
              smooth={true}
              duration={1000}
            >
              {" "}
              Testimonials
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link
              className="navLink"
              to="contactUs"
              smooth={true}
              duration={1000}
            >
              {" "}
              Contact Us
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link2 className="navLink" to="/loginPage">
              {" "}
              Sign In
            </Link2>
          </Nav.Item>
        </Nav>
        <div className="icon">
          <Reorder
            onClick={showIcon}
            style={{
              fontSize: "70px",
              position: "absolute",
              top: "-10px",
              margin: "0",
              right: "-5px",
              color: "White",
              cursor: "pointer",
              zIndex: "100",
            }}
          />
        </div>
      </div>
      {/* content section */}
      <div className="container" id="header-content">
        {" "}
        <div className="header-content">
          <div className="text">
            <h1>
              Your New <span style={{ color: "#1caa8e" }}>Smile</span>
              <br />
              Starts Here
            </h1>
            <p>
              Oral health is a key indicator of overall health, well-being, and
              quality of life. It encompasses a range of diseases and conditions
              that include dental caries, Periodontal disease, Tooth loss, Oral
              cancer, Oral manifestations of HIV infection, Oro-dental trauma,
              Noma, and birth defects such as cleft lip and palate.
              <br />
              <Link2 className="navLink" to="/loginPage">
                <Button className="book-now-btn">Book Appointement Now </Button>
              </Link2>
            </p>
          </div>

          <div className="header-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

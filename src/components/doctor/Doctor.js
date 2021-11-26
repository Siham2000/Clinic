import React from "react";
import image from "../../images/doctor.png";
import { Button } from "@mui/material";
import "./Doctor.css";
const Doctor = () => {
  return (
    <div className="doctor" id="doctor">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h1 className="name">DR-Ahmad Ali</h1>
        <h3 className="title">specialist for 5 years</h3>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
          doloremque dolore ipsa dolorem exercitationem culpa in inventore
          asperiores nostrum tenetur.
        </p>
        <Button
          variant="contained"
          className="doc-button"
          style={{
            backgroundImage: "linear-gradient(to right, #19D3AE, #0FCFEC)",
            marginTop: "20px",
            padding: "10px",
            fontFamily: " 'Montserrat', sansSerif ",
            fontSize: "18px",
            color: "#fff",
          }}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default Doctor;

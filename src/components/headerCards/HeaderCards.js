import React from "react";

import { Schedule, Room, Call } from "@material-ui/icons/";
import "./HeaderCards.css";
const HeaderCards = () => {
  return (
    <div className="publicServices">
      <div className="service">
        <Schedule
          style={{
            marginRight: "20px",
            fontSize: "100px",
          }}
        />
        <div className="content">
          <p> Opening Hours</p>
          <h4>
            Open 7:00 am <br />
            Closes at 11:00 pm
          </h4>
        </div>
      </div>

      <div className="service">
        <Room
          style={{
            marginRight: "15px",
            fontSize: "100px",
          }}
        />
        <div className="content">
          <p>Visit our location</p>
          <h4>Jordan , Ajloun</h4>
        </div>
      </div>
      <div className="service">
        <Call
          style={{
            marginRight: "15px",
            marginLeft: "-20px",
            fontSize: "80px",
          }}
        />
        <div className="content">
          <p>Contact us now</p>
          <h4>0798876960</h4>
        </div>
      </div>
    </div>
  );
};

export default HeaderCards;

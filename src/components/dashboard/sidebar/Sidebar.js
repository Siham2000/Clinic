import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Reorder from "@material-ui/icons/Reorder";

const Sidebar = () => {
  const showIcon = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-icon");
  };

  return (
    <div className="">
      <div className="icon-sidebar">
        <Reorder
          onClick={showIcon}
          style={{
            fontSize: "50px",
            position: "absolute",
            top: "-4px",
            margin: "0",
            right: "-5px",
            color: "#19d3ae",
            cursor: "pointer",
            zIndex: "120",
          }}
        />
      </div>
      <div className="sidebar" id="sidebar">
        <div className="links-container">
          {SidebarData.map((val, key) => (
            <Link
              key={key}
              to={val.link}
              style={{ textDecoration: "none" }}
              className={
                val.title == "Logout" ? "sidebar-link logout" : "sidebar-link"
              }
            >
              <p className="sidebar-icons ">{val.icon}</p>
              <p>{val.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Person from "@material-ui/icons/PersonRounded";
import List from "@material-ui/icons/ListAltRounded";
import Settings from "@material-ui/icons/Settings";
import PagesSharp from "@material-ui/icons/BookOutlined";
import Dashboard from "@material-ui/icons/Dashboard";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: (
      <Dashboard
        style={{
          fontSize: "35px",
        }}
      />
    ),
    link: "/user",
  },
  {
    title: "Aappointment",
    icon: (
      <List
        style={{
          fontSize: "35px",
        }}
      />
    ),
    link: "/appointment",
  },
  {
    title: "prescription",
    icon: (
      <PagesSharp
        style={{
          fontSize: "35px",
        }}
      />
    ),
    link: "/prescription",
  },
  {
    title: "Logout",
    icon: (
      <Settings
        style={{
          fontSize: "35px",
        }}
      />
    ),
    link: "/loginPage",
  },
];

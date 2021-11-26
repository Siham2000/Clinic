import React, { useState } from "react";
import Dashboard from "../Dashboard";

const UserDashboard = () => {
  const appointments = [
    {
      userName: "siham",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
    {
      userName: "siham",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
    {
      userName: "siham",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },

    {
      userName: "siham",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
    {
      userName: "siham",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
  ];
  return (
    <>
      <Dashboard appointments={appointments} />;
    </>
  );
};

export default UserDashboard;

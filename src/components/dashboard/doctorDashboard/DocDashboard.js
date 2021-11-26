import React from "react";
import Dashboard from "../Dashboard";

const DocDashboard = () => {
  const appointments = [
    {
      userName: "Helen",
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
      userName: "soso",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
    {
      userName: "ahmad",
      service: "cleaning",
      date: "12-12-2022",
      time: "9:30",
    },
  ];
  return (
    <>
      <Dashboard appointments={appointments} />
    </>
  );
};

export default DocDashboard;

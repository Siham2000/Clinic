import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./sidebar/Sidebar";
import {
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  Paper,
  Select,
  MenuItem,
} from "@material-ui/core";

const Dashboard = ({ appointments }) => {
  const useStyles = makeStyles({
    table: {
      maxWidth: 1300,
    },
  });

  return (
    <div className="dashboard">
      <div className="">
        <Sidebar />
      </div>
      <div className="dashboardTable">
        <div className="dashboardHeading">
          <div style={{ backgroundColor: "tomato" }}>
            <h1>{appointments.length}</h1>
            <p>
              Month
              <br />
              Appointments
            </p>
          </div>
          <div style={{ backgroundColor: "deepskyblue" }}>
            <h1>
              {/* {appointment
                ? appointment.filter((value) => value === new Date().getDate())
                : 0} */}
              2
            </h1>
            <p>
              Week
              <br />
              Appointments
            </p>
          </div>
          <div style={{ backgroundColor: "mediumseagreen" }}>
            <h1>
              {/* {appointment
                ? appointment.filter((value) => value === new Date().getDate())
                : 0} */}
              2
            </h1>
            <p>
              Today's
              <br />
              Appointments
            </p>
          </div>
        </div>
        <div className="table-container">
          <TableContainer>
            <h3 className="heading-table">Recent Appointments</h3>
            <Table className="table">
              <TableHead>
                <TableCell className="cell-head">#</TableCell>
                <TableCell className="cell-head">name</TableCell>
                <TableCell className="cell-head">servie</TableCell>
                <TableCell className="cell-head">date</TableCell>
                <TableCell className="cell-head">time</TableCell>
                <TableCell className="cell-head">status</TableCell>
              </TableHead>
              <TableBody>
                {appointments.map((appointment, index) => (
                  <TableRow>
                    <TableCell className="cell-body">{index + 1}</TableCell>
                    <TableCell className="cell-body">
                      {appointment.userName}
                    </TableCell>
                    <TableCell className="cell-body">
                      {appointment.service}
                    </TableCell>
                    <TableCell className="cell-body">
                      {appointment.date}
                    </TableCell>
                    <TableCell className="cell-body">
                      {appointment.time}
                    </TableCell>
                    <TableCell>
                      <Select
                        style={{ color: "white" }}
                        className="actionSelect"
                      >
                        <MenuItem value="delete">Delete</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

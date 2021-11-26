import React, { useState } from "react";
import "./Appointment.css";
import { Grid, Paper, Card } from "@mui/material/";
import { TextField } from "@material-ui/core";
import { Link as Link2 } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { style } from "dom-helpers";
import { Box, color } from "@mui/system";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [service, setService] = useState("");
  const [pickedTime, setPickedTime] = useState("");
  const freeTime = [
    "2:00pm",
    "3:30pm",
    "7:00pm",
    "10:30pm",
    "9:00am",
    "11:00am",
    "2:00pm",
    "3:30pm",
    "7:00pm",
    "10:30pm",
    "9:00am",
    "11:00am",
  ];
  const [availabeTime, setAvailabeTime] = useState(freeTime);
  const handleChange = (e) => {
    return e.target.value;
  };

  const paperStyle = {
    paddingTop: 0,
    padding: 20,
    margin: "0px auto",
  };
  return (
    <div className="wrraper">
      <div className="appointment">
        <div className="">
          <Sidebar />
        </div>
        <div className="appointment-container ">
          <Grid
            style={{
              fontFamily: "Arial",
              margin: "0",
            }}
          >
            <Paper classNmae="singin-paper " style={paperStyle} elevation={10}>
              <div className="fields ">
                <div className="field">
                  {" "}
                  <TextField
                    className="fields-width"
                    InputProps={{
                      style: {
                        color: "#000",
                        fontFamily: "Arial",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        fontFamily: "Arial",
                      },
                    }}
                    style={{
                      margin: "10px",
                      outline: "none",
                      color: "#000",
                    }}
                    label="Name"
                    placeholder="Enter Name"
                    onChange={(e) => setName(handleChange(e))}
                    required
                  ></TextField>
                </div>
                <div className="field">
                  {" "}
                  <TextField
                    className="fields-width"
                    InputProps={{
                      style: {
                        color: "#000",
                        fontFamily: "Arial",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#000",
                        fontFamily: "Arial",
                      },
                    }}
                    style={{
                      margin: "10px",
                      marginBottom: "10px",
                    }}
                    label="ID"
                    type="number"
                    placeholder="Enter ID"
                    onChange={(e) => setID(handleChange(e))}
                    required
                  ></TextField>
                </div>
                <div className="field">
                  <FormControl
                    className="fields-width"
                    style={
                      {
                        // width: "60%",
                      }
                    }
                  >
                    <InputLabel
                      style={{
                        color: "#000",
                        fontFamily: "Arial",
                        paddingLeft: "10px",
                        paddingBottom: "30px",
                      }}
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Services
                    </InputLabel>
                    <NativeSelect
                      style={{
                        color: "#000",
                        fontFamily: "Arial",
                        padding: "5px",
                        marginTop: "3px ",
                      }}
                      defaultValue="Treatment"
                      onChange={(e) => setService(e.target.value)}
                      inputProps={{
                        name: "service",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value="Treatment">Fluoride Treatment</option>
                      <option value="Filling ">Cavity Filling</option>
                      <option value="Whitening">Teeth Whitening</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className="field">
                  <MuiPickersUtilsProvider
                    style={{
                      padding: "10px",
                      paddingTop: "18px",
                      width: "60%",
                      fontFamily: "Arial",
                      color: "#000",
                    }}
                    utils={DateFnsUtils}
                  >
                    <KeyboardDatePicker
                      className="fields-width"
                      // disablePast
                      InputProps={{
                        style: {
                          fontFamily: "Arial",
                          color: "#000",
                        },
                      }}
                      style={{
                        padding: "10px",
                        paddingTop: "18px",

                        fontFamily: "Arial",
                        color: "#000",
                      }}
                      placeholder="yyyy/MM/dd"
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      format="yyyy/MM/dd"
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
                className="field field-card"
              >
                {availabeTime.map((val, key) => (
                  <Card
                    id="cards-time"
                    className="time-cards"
                    style={{
                      width: "80px",
                      height: "40px",
                      color: "#fff",
                      margin: "20px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      const cards = document.querySelectorAll("#cards-time");
                      cards.forEach((card) =>
                        card.classList.remove("picked-card")
                      );
                      e.target.classList.add("picked-card");
                      setPickedTime(e.target.innerText);
                    }}
                    key={key}
                  >
                    {val}
                  </Card>
                ))}
              </div>{" "}
              <button
                className="book-btn "
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Book{" "}
              </button>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

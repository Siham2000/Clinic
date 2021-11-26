import React, { useState } from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import AddCircleOutlineOutlined from "@material-ui/icons/AddCircleOutlineOutlined";
import { TextField } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Link as Link2 } from "react-router-dom";

const SignUp = ({ saveInfoData }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [cheked, setChecked] = useState(false);

  return (
    <Grid
      style={{
        fontFamily: "Arial",
      }}
    >
      <Paper
        style={{
          padding: "20px 20px",
          margin: "0px auto",
        }}
        classNmae="singin-paper"
        elevation={10}
      >
        <Grid align="center">
          <Avatar
            style={{
              backgroundColor: "#1caa8e",
            }}
          >
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2
            style={{
              margin: "10px",
              marginBottom: "4px",
            }}
          >
            Sign Up
          </h2>
          <Typography
            variant="caption"
            style={{
              fontFamily: "Arial",
            }}
          >
            Please fil this form to create an account
          </Typography>
        </Grid>
        <form action="">
          <TextField
            style={{
              margin: "5px",
            }}
            fullWidth
            label="Username"
            id="userName"
            onChange={(e) => setUserName(saveInfoData(e))}
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
          ></TextField>
          <TextField
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
              margin: "5px",
            }}
            fullWidth
            label="Email"
            id="email"
            onChange={(e) => setEmail(saveInfoData(e))}
            type="Email"
          ></TextField>

          <TextField
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
              margin: "5px",
              marginBottom: "15px",
            }}
            fullWidth
            label="Phone Nmumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(saveInfoData(e))}
            type="Phone Nmumber"
          ></TextField>
          <div
            className="radio"
            style={{
              textAlign: "center",
            }}
          >
            <FormControl component="strong" id="gender">
              <FormLabel
                style={{
                  color: "#000",
                  fontFamily: "Arial",
                  paddingtop: "10px",
                  fontSize: "15px",
                }}
                component="legend"
              >
                Gender
              </FormLabel>
              <RadioGroup
                style={{
                  display: "inline",
                }}
                aria-label="gender"
                value={gender}
                onChange={(e) => setGender(saveInfoData(e))}
              >
                <FormControlLabel
                  style={{
                    color: "#000",
                    fontFamily: "Arial",
                    paddingtop: "10px",
                  }}
                  value="female"
                  control={<Radio size="small" style={{ color: "#1caa8e" }} />}
                  label="Female"
                />
                <FormControlLabel
                  style={{
                    color: "#000",
                    fontFamily: "Arial",
                    paddingtop: "10px",
                    fontSize: "3px",
                  }}
                  value="male"
                  control={
                    <Radio
                      preve
                      size="small"
                      style={{
                        color: "#1caa8e",
                      }}
                    />
                  }
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <TextField
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
              margin: "5px",
            }}
            fullWidth
            label="Passwrod"
            type="password"
            id="password"
            onChange={(e) => setPassword(saveInfoData(e))}
          ></TextField>
          <TextField
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
              margin: "5px",
            }}
            fullWidth
            label="Confirm Passwrod"
            type="password"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(saveInfoData(e))}
          ></TextField>

          <FormGroup
            style={{
              fontFamily: "Arial",
              color: "#000",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  style={{
                    color: "#1caa8e",
                    fontFamily: "Arial",
                    paddingtop: "10px",
                  }}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label="I accept all the terms"
            />
          </FormGroup>

          <Link2
            style={{
              textDecoration: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            to="/user"
          >
            {" "}
            <button className="signin-btn" type="submit">
              Sign Up{" "}
            </button>
          </Link2>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;

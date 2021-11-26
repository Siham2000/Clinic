import React, { useState } from "react";
import { Grid, Paper } from "@mui/material/";
import { Avatar } from "@material-ui/core";
import Lock from "@material-ui/icons/Lock";
import { TextField } from "@material-ui/core";
import { Link as Link2 } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./LoginPage.css";
import { Typography, Link } from "@material-ui/core";
import UserDashboard from "../dashboard/userDashboard/UserDashboard";

const SignIn = ({ setValue, handleChange, doctorZone }) => {
  const [checked, setChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    paddingTop: 0,
    padding: 20,
    height: "75vh",

    margin: "0px auto",
  };
  return (
    <Grid
      style={{
        fontFamily: "Arial",
        margin: "0",
      }}
    >
      <Paper classNmae="singin-paper" style={paperStyle} elevation={10}>
        <Grid align="center">
          <Avatar
            style={{
              backgroundColor: "#1caa8e",
              margin: "10px",
            }}
          >
            <Lock />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          value={userName}
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
          fullWidth
          label="Username"
          placeholder="Enter username"
          required
          id="userName"
          onChange={(e) => setUserName(handleChange(e))}
        ></TextField>
        <TextField
          value={password}
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
          }}
          fullWidth
          label="Passwrod"
          type="password"
          placeholder="Enter password"
          id="password"
          onChange={(e) => setPassword(handleChange(e))}
          required
        ></TextField>
        <FormControlLabel
          size="small"
          style={{
            color: "#000",
            marginLeft: "5px",
            fontSize: "2px",
          }}
          label="Remember me"
          control={
            <Checkbox
              style={{
                fontSize: "2px",
                color: "#1caa8e",
              }}
              size="small"
              checked={checked[0]}
              onChange={(e) => setChecked(e.target.checked)}
            />
          }
        />

        <Link2
          style={{
            textDecoration: "none",
            color: "#fff",
            cursor: "pointer",
          }}
          to={doctorZone ? "/doctor" : "/user"}
        >
          {" "}
          <button className="signin-btn" type="submit">
            Sign in{" "}
          </button>
        </Link2>

        <Typography
          style={{
            fontSize: "12px",
            fontFamily: "Arial",
            margin: "5px",
          }}
        >
          <Link
            herf="#"
            style={{
              color: "#1caa8e",
              cursor: "pointer",
            }}
          >
            Forgot Password
          </Link>
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            fontFamily: "Arial",
            margin: "5px",
          }}
        >
          Do you have an account?
          <Link
            onClick={() => setValue("2")}
            style={{
              color: "#1caa8e",
              cursor: "pointer",
            }}
          >
            {" "}
            Sign up now?
          </Link>
        </Typography>
        <div
          className="goBack"
          style={{
            textAlign: "center",
            margin: "15px auto",
            color: "#1caa8e",
            cursor: "pointer",
          }}
        >
          <Link2
            style={{
              textDecoration: "none",
              color: "#1caa8e",
              cursor: "pointer",
            }}
            to="/"
          >
            Home
          </Link2>
        </div>
      </Paper>
    </Grid>
  );
};

export default SignIn;

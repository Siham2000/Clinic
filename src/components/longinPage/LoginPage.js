import React, { useState } from "react";
import "./LoginPage.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginPage = () => {
  const [value, setValue] = useState("1");
  const [doctorZone, setDoctorZone] = useState(false);
  const handleChangeOne = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    return value;
  };

  return (
    <div className="tab-container">
      <Box sx={{ width: "100%", typography: "body1" }} style={{}}>
        <TabContext value={value}>
          <Box sx={{ width: "280", bgcolor: "#1caa8e" }}>
            <TabList
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#fff",
                },
              }}
              onChange={handleChangeOne}
            >
              <Tab
                label="Sign In"
                style={{
                  color: "#fff",
                  fontWeight: "900",
                  textTransform: "capitalize",
                }}
                value="1"
              />
              <Tab
                style={{
                  color: "#fff",
                  fontWeight: "900",
                  textTransform: "capitalize",
                }}
                label="Sign Up"
                value="2"
              />
              <Tab
                style={{
                  color: "#fff",
                  fontWeight: "900",
                  textTransform: "capitalize",
                }}
                onClick={(e) => setDoctorZone(true)}
                label="Doctors"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel
            style={{
              width: "350",
              margin: "0",
              padding: "0",
            }}
            value="1"
          >
            <SignIn setValue={setValue} handleChange={handleChange} />
          </TabPanel>
          <TabPanel
            style={{
              width: "350",
              margin: "0",
              padding: "0",
            }}
            value="2"
          >
            <SignUp saveInfoData={handleChange} />
          </TabPanel>
          <TabPanel
            style={{
              width: "350",
              margin: "0",
              padding: "0",
            }}
            value="3"
          >
            <SignIn
              setValue={setValue}
              handleChange={handleChange}
              doctorZone={doctorZone}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default LoginPage;

import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/longinPage/LoginPage";
import MainPage from "./components/mainPage/Mainpage";
import NotFound from "./components/notFoundPage/NotFound";
import UserDashboard from "./components/dashboard/userDashboard/UserDashboard";
import DocDashboard from "./components/dashboard/doctorDashboard/DocDashboard";
import Appointment from "./components/dashboard/appointment/Appointment";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {" "}
          <Route path="/" exact component={MainPage} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/404" exact component={NotFound} />
          <Route path="/user" component={UserDashboard} />
          <Route path="/doctor" component={DocDashboard} />
          <Route path="/appointment" component={Appointment} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

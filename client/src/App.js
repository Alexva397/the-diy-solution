// import React, { createContext, useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignIn";
import Landing from "./pages/LandingPage";
import Detail from "./pages/Detail";
import "./assets/css/globalStyles.css";
// import axios from "axios";
import Context from "./Context";

function App() {

  return (
    <>
      <div className="App">
        <Context>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/landing">
                <Landing />
              </Route>
              <Route exact path="/landing/:id">
                <Detail />
              </Route>
            </Switch>
          </Router>
        </Context>
      </div>
    </>
  );
}

export default App;
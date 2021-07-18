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

  // const userContext = createContext({});

  // const [userObject, setUserObject] = useState();

  // useEffect(() => {
  //     console.log("app.js", userObject);
  //     if(!userObject) {
  //         axios.get("/api/user/getuser", { withCredentials: true })
  //         .then((res) => {
  //             if (res.data) {
  //                 console.log("app.js found",res.data);
  //                 setUserObject(res.data);
  //             }
  //             // else {
  //             //  console.log("app.js no")
  //             //   setUserObject({notLoggedIn: true});
  //             // }
  //          })
  //     }
  // }, [])




  return (
    <>
      <div className="App">
      {/* <userContext.Provider value={userObject}> */}
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
        {/* </userContext.Provider> */}
      </div>
    </>
  );
}

export default App;
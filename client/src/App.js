import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignIn";
import Landing from "./pages/LandingPage";
import Detail from "./pages/Detail";
import WIP from "./pages/WIP";
import ContactPage from "./pages/Contact";
import "./assets/css/globalStyles.css";
import { userContext } from "./Context";

function App() {

  const { userObject, isAuthenticated } = useContext(userContext);

  console.log(userObject, isAuthenticated);

  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/login">
              {isAuthenticated ? <Redirect to="/landing" /> : <Login />}
            </Route>
            <Route exact path="/signup">
              {isAuthenticated ? <Redirect to="/landing" /> : <Signup />}
            </Route>
            <Route exact path="/landing">
              {isAuthenticated ? <Landing /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/landing/:id">
              {isAuthenticated ? <Detail /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/construction">
              <WIP />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
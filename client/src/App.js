import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";


import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
    
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={LandingPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

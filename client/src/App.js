import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignIn";
import Landing from "./pages/LandingPage";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <div className="App">
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
      </div>
    </>
  );
}

export default App;
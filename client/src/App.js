import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignIn";
import Landing from "./pages/LandingPage";
import Detail from "./pages/ProjectDetail";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

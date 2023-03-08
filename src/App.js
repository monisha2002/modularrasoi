import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar sticky="top" />

          <Route exact path="/work" component={Work} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

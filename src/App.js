import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />

      <Footer />
    </div>
  );
}

export default App;

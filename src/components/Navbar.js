import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LOGO from "./LOGOcropped1.jpeg";
import About from "./About";
import Product from "./Product";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Faq from "./Faq";
import Form from "./Form";
export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div className="fixed">
          <Navbar
            sticky="top"
            className="main py-0 py-0"
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            <Container className="my-width">
              <Navbar.Brand href="#home" className="logo">
                <img alt="logo" src={LOGO} className="Logo" width="160px"></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="size" id="responsive-navbar-nav">
                <Nav className="me-auto nav-links">
                  <Nav.Link as={Link} to={"/"}>
                    <h4 className="linkText">Home</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/work"}>
                    <h4 className="linkText">Our Work</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/product"}>
                    <h4 className="linkText">Product Range</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/faq"}>
                    <h4 className="linkText">FAQ's</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    <h4 className="linkText">About Us</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    <h4 className="linkText">Contact Us</h4>
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to={"/form"}>
                    <Button className="my-nav-button" variant="outline-success">
                      Enquire Now
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

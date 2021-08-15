import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white pt-5 pb-4">
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                  Modular rasoi
                </h5>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error quos nam corrupti quam adipisci ratione vitae inventore
                  perferendis, doloribus, soluta veniam facere explicab blah
                  blahjdhnc.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                  Products
                </h5>
                <p>
                  <a href="" className="text-white">
                    Kitchen Appliances
                  </a>
                </p>
                <p>
                  <a href="" className="text-white">
                    Kitchen Hardware &#38; Accessories
                  </a>
                </p>
                <p>
                  <a href="" className="text-white">
                    Wire Kitchen Basket
                  </a>
                </p>
                <p>
                  <a href="" className="text-white">
                    Shutters &#38; Carcass
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                  Quick Links
                </h5>
                <p>
                  <a
                    href={"/"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href={"/work"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    Our Work
                  </a>
                </p>
                <p>
                  <a
                    href={"/product"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    Product Range
                  </a>
                </p>
                <p>
                  <a
                    href={"/faq"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    FAQ's
                  </a>
                </p>
                <p>
                  <a
                    href={"/about"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href={"/contact"}
                    className="navbar-item text-white"
                    onClick={() =>
                      this.toggleModal("Rental Objects With Current Rent")
                    }
                  >
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 contact">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                  Contact
                </h5>
                <p>
                  <i class="fas fa-store-alt mr-3"></i> &nbsp;D-6/310, Basement,
                  Chitrakoot<br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sector 6, Vaishali Nagar,
                  Jaipur
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> &nbsp;
                  modularrasoi2021@gmail.com <br></br>
                  &nbsp;&nbsp;roodrakshindia@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone-alt mr-3"></i> &nbsp; +91 7062576301
                  <br></br>
                  &nbsp; &nbsp; &nbsp; &nbsp;+91 9828076222
                </p>
                {/* <p>
                  <i class="fas fa-clock"></i> &nbsp; Timing: Monday to Saturday
                  <br></br>
                  &nbsp; &nbsp; &nbsp; &nbsp;11:00 AM - 7:00 PM
                  <br></br> &nbsp; &nbsp; &nbsp; &nbsp;Sunday off
                </p> */}
              </div>
            </div>
            <hr></hr>
            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p>
                  {" "}
                  Copyright &copy; All rights reserved by:
                  <a href="#" className="copyright">
                    <strong className="text-warning ">Modular Rasoi</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        href={
                          "https://www.facebook.com/profile.php?id=100069949256908"
                        }
                        className="btn-floating btn-sm text-white facebook"
                        onClick={() =>
                          this.toggleModal("Rental Objects With Current Rent")
                        }
                      >
                        <i className="fab fa-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={"https://www.instagram.com/modular_rasoi_/"}
                        className="btn-floating btn-sm text-white facebook"
                        onClick={() =>
                          this.toggleModal("Rental Objects With Current Rent")
                        }
                      >
                        <i class="fab fa-instagram fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={"https://wa.me/9116907334"}
                        className="btn-floating btn-sm text-white facebook"
                        onClick={() =>
                          this.toggleModal("Rental Objects With Current Rent")
                        }
                      >
                        <i className="fab fa-whatsapp fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white facebook"
                      >
                        <i className="fab fa-youtube fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

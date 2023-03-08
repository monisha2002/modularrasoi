import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade, Slide } from "react-awesome-reveal";

import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LINE from "./pngegg.png";
import LINE2 from "./pngwing.com.png";
import lara from "./laranza.JPG";
import hind from "./Hettich-Logo.png";
import hafele from "./hafele-logo.jpg";
import kaff from "./kaff.jpg";
import kent from "./kent.png";
import blum from "./Blum-1.png";
import nasaka from "./nasaka.png";
import ozone from "./ozone.png";
import card_4 from "./card-4.png";
import card_5 from "./card-5.jpg";
import card_3 from "./kitchen-hardware.jpg";
import card_2 from "./kitchen-appliances.jpg";
import aa from "./a.jpg";
import bb from "./b.jpg";
import cc from "./c.jpg";
import dd from "./d.jpg";
import ee from "./e.jpg";
import step4 from "./Untitled-5.gif";
import step3 from "./Untitled-4.gif";
import step2 from "./three.gif";
import step1 from "./Untitled-2.gif";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={aa}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bb}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cc}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dd}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ee}></img>
          </SwiperSlide>
        </Swiper>
        <Fade delay={250}>
          <h1 className="MODULAR-RASOI">MODULAR RASOI</h1>
          <img className="line" alt="logo-rasoi" src={LINE} width="330px"></img>

          <h3 className="dream-kitchen">We make your dream kitchen</h3>
          <img className="line-btn" src={LINE2} width="300px"></img>
        </Fade>
        <Container className="my-box">
          <Row className="rows">
            <Col className="columns column-1" xl={2}>
              <Slide>
                <h2>OUR STORY</h2>
                <h3 className="about">OUR STORY</h3>
              </Slide>
            </Col>
            <Col className="columns column-2" xl={10}>
              <p>
                For over 5 years our team has grown and changed, and we've grown
                even further, now all of our products have been created by
                ourselves. We're a firm believer integrity, and we're proud to
                offer our clients the best of everything, from the best modern
                kitchens to the most quality kitchen hardware.Our team of highly
                skilled, creative artists deliver a bespoke blend between
                cutting edge design and comfort at affordable prices. The result
                is chic yet practical luxury kitchens for those looking for
                something new but stylishly priced.
                <br></br>
                <b>Join our growing list today!</b>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="my-second-box">
          <Row className="rows">
            <Col className="column-4" xl={10}>
              <div className="steps">
                <img className="one" src={step1} width="550px"></img>
                <img className="two" src={step3} width="550px"></img>
                <img className="three" src={step2} width="550px"></img>
                <img className="four" src={step4} width="550px"></img>
              </div>
            </Col>

            <Col className="column-6" xl={2}>
              <Slide>
                <div className="slider">
                  <h2>DESIGN &nbsp; YOUR &nbsp; DREAM &nbsp; KITCHEN</h2>
                </div>
                <h3 className="second-heading">
                  DESIGN &nbsp; YOUR &nbsp; DREAM &nbsp; KITCHEN
                </h3>
              </Slide>
            </Col>
          </Row>
        </Container>
        <div className="main-block">
          <button class="slide_from_left block">
            <a
              href={"form.html"}
              onClick={() =>
                this.toggleModal("Rental Objects With Current Rent")
              }
            >
              DESIGN ON YOUR OWN &#40; <em> coming soon </em> &#41;
            </a>
          </button>
        </div>
        <div>
          <button class="slide_from_right block block-2">
            <a
              href={"/form"}
              onClick={() =>
                this.toggleModal("Rental Objects With Current Rent")
              }
            >
              DESIGN BY EXPERTS
            </a>
          </button>
        </div>
        <br></br>
        <div className="product-range">
          <h1>PRODUCT RANGE</h1>
          <p>The Catalyst of Multi-Medium Kitchen Design</p>
        </div>
        <br></br>
        <div className="my-container">
          <div className="card">
            <div className="imgBx">
              <img width="260px" height="260px" src={card_2}></img>
              <h3 className="down-head">Kitchen Appliances</h3>
              <i class="fas fa-chevron-down fa-lg down-arrow more-down"></i>
            </div>
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicab
              </p>
              <Button variant="outline-dark">EXPLORE</Button>
            </div>
          </div>
          <div className="card">
            <div className="imgBx">
              <img src={card_3} width="260px" height="260px"></img>
              <h3>Kitchen Hardware &#38; Accessories</h3>
              <i class="fas fa-chevron-down fa-lg down-arrow"></i>
            </div>
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicab
              </p>
              <Button variant="outline-dark">EXPLORE</Button>
            </div>
          </div>
          <div className="card">
            <div className="imgBx">
              <img src={card_4} width="260px" height="260px"></img>
              <h3 className="down-head">Wire Kitchen Basket</h3>
              <i class="fas fa-chevron-down fa-lg down-arrow more-down"></i>
            </div>
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicab
              </p>
              <Button variant="outline-dark">EXPLORE</Button>
            </div>
          </div>
          <div className="card">
            <div className="imgBx">
              <img src={card_5} width="260px" height="260px"></img>
              <h3 className="down-head">Shutters &#38; Carcass</h3>
              <i class="fas fa-chevron-down fa-lg down-arrow more-down"></i>
            </div>
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicab
              </p>
              <Button variant="outline-dark">EXPLORE</Button>
            </div>
          </div>
        </div>
        <div className="space">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>

          <div className="my-second-container">
            <div className="accordion">
              <div className="accordion-item" id="question1">
                <a className="accordion-link" href="#question1">
                  How often lorem ipsum blah blah?
                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question2">
                <a className="accordion-link" href="#question2">
                  How often lorem ipsum blah blah?
                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question3">
                <a className="accordion-link" href="#question3">
                  How often lorem ipsum blah blah?
                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question4">
                <a className="accordion-link" href="#question4">
                  How often lorem ipsum blah blah?
                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question5">
                <a className="accordion-link" href="#question5">
                  How often lorem ipsum blah blah?
                  <i class="fas fa-plus"></i>
                  {/*  <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-btn">
          <h1>OUR PARTNERS</h1>
        </div>
        <Carousel className="partner" responsive={responsive}>
          <div className="hind">
            <img width="200px" height="80px" src={hind}></img>
          </div>
          <div>
            <img width="200px" height="80px" src={hafele}></img>
          </div>
          <div>
            <img width="200px" height="80px" src={kaff}></img>
          </div>
          <div>
            <img width="200px" height="80px" src={nasaka}></img>
          </div>
          <div className="ozone">
            <img width="200px" height="80px" src={ozone}></img>
          </div>
          <div>
            <img width="200px" height="80px" src={blum}></img>
          </div>
          <div className="lara">
            <img width="200px" height="80px" src={lara}></img>
          </div>
          <div>
            <img width="200px" height="80px" src={kent}></img>
          </div>
        </Carousel>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
                    Error quos nam corrupti quam adipisci ratione vitae
                    inventore perferendis, doloribus, soluta veniam facere
                    explicab blah blahjdhnc.
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
                    <Link
                      as={Link}
                      to="/work"
                      className="navbar-item text-white"
                    >
                      Our Work
                    </Link>
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
                    <i class="fas fa-store-alt mr-3"></i> &nbsp;D-6/310,
                    Basement, Chitrakoot<br></br>
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
      </div>
    );
  }
}

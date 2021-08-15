import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import LINE from "./pngegg.png";
import LINE2 from "./pngwing.com.png";
import aa from "./a.jpg";
import bb from "./b.jpg";
import cc from "./c.jpg";
import dd from "./d.jpg";
import ee from "./e.jpg";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default class Faq extends Component {
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

        <br></br>
        <Fade delay={250}>
          <h1 className="MODULAR-RASOI">MODULAR RASOI</h1>
          <img className="line" alt="logo-rasoi" src={LINE} width="330px"></img>

          <h3 className="dream-kitchen">We make your dream kitchen</h3>
          <img className="line-btn" src={LINE2} width="300px"></img>
        </Fade>
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
      </div>
    );
  }
}

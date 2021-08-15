import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import LINE from "./pngegg.png";
import Button from "react-bootstrap/Button";
import LINE2 from "./pngwing.com.png";
import aa from "./a.jpg";
import bb from "./b.jpg";
import cc from "./c.jpg";
import dd from "./d.jpg";
import ee from "./e.jpg";
import card_4 from "./card-4.png";
import card_5 from "./card-5.jpg";
import card_3 from "./kitchen-hardware.jpg";
import card_2 from "./kitchen-appliances.jpg";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default class Product extends Component {
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
        <br></br>
      </div>
    );
  }
}

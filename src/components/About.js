import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import LINE from "./pngegg.png";
import LINE2 from "./pngwing.com.png";
import aa from "./a.jpg";
import bb from "./b.jpg";
import cc from "./c.jpg";
import dd from "./d.jpg";
import ee from "./e.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);
export default class About extends Component {
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicabo, suscipit
                optio obcaecati cum maxime eius necessitatibus.Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Error quos nam
                corrupti quam adipisci ratione vitae inventore perferendis,
                doloribus, soluta veniam facere explicabo, suscipit optio
                obcaecati cum maxime eius necessitatibus.
                <br></br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                quos nam corrupti quam adipisci ratione vitae inventore
                perferendis, doloribus, soluta veniam facere explicabo, suscipit
                optio obcaecati cum maxime eius necessitatibus.
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

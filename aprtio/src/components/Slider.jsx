import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/slider.css";
import { Autoplay, Navigation } from "swiper/modules";
import pic1 from "../imgs/pic1.jpg";
import pic2 from "../imgs/pic2.jpg";
import pic3 from "../imgs/pic3.jpg";
export default function Slider() {
  return (
    <div>
      <Swiper
        direction="vertical"
        spaceBetween={30}
        centeredSlides={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>slide1</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>slide2</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero
            cupiditate, totam et porro sint praesentium ipsam ut corporis.
          </p>
          <h3>slide3</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

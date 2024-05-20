"use client";
import React from "react";
import HouseCard from "./HouseCard";

import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";

import './customStyle/swiperHouses.css'
const SwiperHouses = () => {
  return (
    <section className="w-full flex flex-col items-center justify-normal mt-10">
      <div className=" w-full  flex flex-col sm:flex-row justify-around gap-4 items-center">
        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <div className="w-full flex flex-col items-start justify-normal gap-3">
            <span className="text-start text-[#D7AB32] font-medium text-xl">
              CHECKOUT OUR NEW
            </span>
            <span className="text-start text-[#000000] font-semibold text-2xl lg:text-5xl">
              Latest Listed Properties
            </span>

            <p className="text-[#808080] font-normal text-base">
              Explore Our Newest Offerings, Discover Fresh Opportunities in{" "}
              <br /> Qatar's Real Estate Market
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="w-[80px] h-[49px] border rounded-[30px] font-medium text-base text-[#D7AB32] border-[#D7AB32]">
            All
          </button>
          <button className="w-[80px] h-[49px] border rounded-[30px] font-medium text-base text-[#D7AB32] border-[#D7AB32]">
            Sell
          </button>
          <button className="w-[80px] h-[49px] border rounded-[30px] font-medium text-base text-[#D7AB32] border-[#D7AB32]">
            Rent
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10">
      <Swiper
        id="houseSSwiper"
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide><HouseCard/></SwiperSlide>
        <SwiperSlide><HouseCard/></SwiperSlide>
        <SwiperSlide><HouseCard/></SwiperSlide>
        <SwiperSlide><HouseCard/></SwiperSlide>
        <SwiperSlide><HouseCard/></SwiperSlide>
        
       
      </Swiper>
      </div>
    </section>
  );
};

export default SwiperHouses;

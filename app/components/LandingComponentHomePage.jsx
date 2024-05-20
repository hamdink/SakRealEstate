"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SearchForm from "./SearchForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
const LandingComponentHomePage = () => {
  return (
    <div className="min-h-screen  w-full flex flex-col  justify-start items-center bg-[url('/assets/background/heading-bg.png')] bg-center bg-contain bg-no-repeat  mt-10
     lg:mt-20 ">
      <div className="w-full lg:w-[80%] flex  flex-col lg:flex-row justify-around items-center p-4 ">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-full flex flex-col items-start justify-normal gap-3">

          
          <span className="text-start text-[#D7AB32] font-medium text-xl">
            REAL ESTATE
          </span>
          <span className="text-start text-[#000000] font-semibold text-2xl lg:text-5xl">
            Find a perfect
          </span>
          <span className="text-start text-[#000000] font-semibold text-2xl lg:text-5xl">
            home you love..!
          </span>
          <p className="text-[#808080] font-normal text-base">
            Discover Your Dream Home, Let SAK Real Estate Help You Find <br />{" "}
            the Perfect Match
          </p>
          </div>
          <div className=" bg-transparent flex justify-center items-center xs:w-[320px] sm:w-[583px] ">
            <Swiper
              loop
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
              className="bg-transparent"
            >
              <SwiperSlide >
                
                <img src="/assets/houses/swiper1.png" alt="" className="w-[333px] sm:w-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/houses/swiper1.png" alt="" className="w-[333px] sm:w-auto"  />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/houses/swiper1.png" alt="" className="w-[333px] sm:w-auto"  />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/houses/swiper1.png" alt="" className="w-[333px] sm:w-auto"  />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SearchForm />
      </div>
      <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-center gap-5 items-center p-4 lg:mt-20">
        <div  style={{boxShadow: '10px 30px 50px 0px #0000000D'}}  className="bg-white flex justify-center items-center gap-2 p-4 rounded-[50px] ">
          
          <AvatarGroup total={54}>
            <Avatar alt="Remy Sharp" src="/assets/avatars/avatar1.png" />
            <Avatar alt="Travis Howard" src="/assets/avatars/avatar2.png" />
            <Avatar alt="Agnes Walker" src="/assets/avatars/avatar3.png" />
            <Avatar alt="Trevor Henderson" src="/assets/avatars/avatar4.png" />
            <Avatar alt="Trevor Henderson" src="/assets/avatars/avatar5.png" />
          </AvatarGroup>
          <span className="text-center text-xl font-medium">
          50+ Happy 
          <br />
          Customers
          </span>
        </div>
        <div  style={{boxShadow: '10px 30px 50px 0px #0000000D'}}  className="bg-white flex justify-center items-center gap-2 p-4 rounded-[50px]">
          
         <img src="/assets/icons/houseIcon.png" alt="" />
          <span className="text-center text-xl font-medium">
          50+ overall 
          <br />
          Listings !
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingComponentHomePage;

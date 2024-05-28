"use client";
import Image from "next/image";
import TestimonialCard from "./smallComponents/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="w-full py-10 px-6 lg:px-40 lg:h-[500px] overflow-hidden">
      <div className="w-full flex xl:flex-row flex-col items-center pt-4 lg:h-full gap-y-[61px] overflow-hidden h-full">
        <div className="flex flex-col items-start flex-[1] sm:pl-0 pl-6 lg:h-[90%]">
          <h3 className="font-poppins text-[#D7AB32] sm:text-[19px] text-[16px] font-medium sm:leading-[29px] leading-[24px]">
            Testimonials
          </h3>
          <p className="font-poppins text-[#2B2B2B] sm:text-[39px] text-[27px] font-semibold sm:leading-[47px] leading-[41px] sm:w-[415px] w-[333px] sm:mt-4 mt-2">
            Look What Our
            <br />
            Customers Say!
          </p>
          <p className="font-poppins text-[#2B2B2B] sm:text-[16px] text-[13px] font-normal sm:leading-[26px] leading-[22px] sm:w-[415px] w-[333px] sm:mt-4 mt-2">
            Hear from Satisfied Clients About Their SAK Real Estate Experience
          </p>
            {/* <div className="flex gap-x-8 sm:mt-8 mt-4">
              <Image
                src="/assets/arrowLeft.png"
                alt="arrowLeft"
                width={50}
                height={50}
                className="sm:block hidden"
              />
              <Image
                src="/assets/arrow.png"
                alt="arrowRight"
                width={50}
                height={50}
                className="sm:block hidden"
              />
            </div> */}
        </div>
        <div className="w-full lg:flex-[1] h-[450px]  overflow-hidden mt-20 sm:mt-0">
          <Swiper direction={"vertical"} className="w-[350px] sm:w-[450px] lg:w-auto" style={{height:"100%",overflowY:'hidden'}}>
            <SwiperSlide >
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide >
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

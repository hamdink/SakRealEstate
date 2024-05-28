"use client";
import { useState } from "react";
import Image from "next/image";

const CareerCard = () => (
  <section className="lg:w-[351px] w-auto md:h-[235px] h-auto flex flex-col md:p-6 p-4 bg-[#111111]">
    <div className="w-full flex justify-between lg:gap-x-0 gap-x-2">
      <span className="border border-[#FFFFFF] rounded-[5px] text-center font-poppins font-normal text-[15px] text-white leading-[22px] px-4 py-2">
        Fulltime
      </span>
      <span className="border border-[#FFFFFF] rounded-[5px] text-center font-poppins font-normal text-[15px] text-white leading-[22px] px-4 py-2">
        Onsite
      </span>
      <span className="border border-[#FFFFFF] rounded-[5px] text-center font-poppins font-normal text-[15px] text-white leading-[22px] px-4 py-2">
        $200k
      </span>
    </div>
    <span className="font-poppins font-bold text-[22px] text-[#FFFFFF] leading-[32px] md:mt-6 mt-4">
      UX Designer
    </span>
    <p className="font-poppins font-normal text-[14px] text-[#FFFFFF] leading-[22px] mt-2">
      advoit digital agency
    </p>
    <div className="flex justify-between items-center mt-5">
      <button className="md:py-[10px] py-[7px] md:px-[20px] px-[15px] text-center bg-[#D7AB32] cursor-pointer rounded-[30px] md:text-[15px] text-[13px] text-[#FFFFFF] leading-[22px] font-poppins font-bold">
        Apply
      </button>
      <div className="flex gap-x-2 justify-center items-center">
        <Image
          src="/assets/career/people.svg"
          alt="people"
          width={22}
          height={22}
        />
        <span className="font-poppins font-bold text-[15px] text-[#FFFFFF] leading-[22px]">
          24 Applied
        </span>
      </div>
    </div>
  </section>
);

const CareerHeading = () => {
  const [activeItem, setActiveItem] = useState("All recent");

  const menuItems = [
    "All recent",
    "Finance",
    "Security",
    "Marketing",
    "Specialist",
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-[url('/assets/background/heading-bg.png')] bg-top bg-cover bg-no-repeat md:px-0 px-4">
      <h1 className="font-poppins font-bold md:text-[40px] text-[20px] text-[#000000] leading-[40px] md:mt-16 mt-20 text-center">
        Newest <span className="text-[#D7AB32]">Jobs</span> For you
      </h1>
      <p className="font-poppins font-normal md:text-[18px] text-[15px] text-[#000000] leading-[28px] md:mt-6 mt-4 text-center">
        Get the fastest application so that your name is above other
        applications
      </p>
      <ul className="flex md:gap-x-14 gap-x-6 md:mt-6 mt-4 items-center justify-center">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            className={`font-poppins font-normal md:text-[18px] text-[10px] leading-[28px] cursor-pointer transition-colors duration-500 ${
              activeItem === item
                ? "text-[#000000] border-b-4 border-[#D7AB32]"
                : "text-[#767676]"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 flex-wrap md:mt-10 mt-6 md:w-[80%] w-[90%] justify-center">
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
      </div>
    </section>
  );
};

export default CareerHeading;

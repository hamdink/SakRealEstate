import React from "react";

const ServiceSection = () => {
  const services = [
    {
      title: "Buy a New Home",
      description: "Begin Your Next Chapter, Find Your Perfect Home with SAK Real Estate",
      image: "/assets/icons/searchhouse.png"
    },
    {
      title: "Sell a House",
      description: "Unlock Your Property's Potential, Trust SAK Real Estate to Secure the Best Deal for Your Home",
      image: "/assets/icons/sellhouse.png"
    },
    {
      title: "Rent a House",
      description: "Find Your Rental Haven, Let SAK Real Estate Match You with Your Ideal Home",
      image: "/assets/icons/rentHouse.png"
    }
  ];

  const Service = ({ title, description, image }) => (
    <div className="flex flex-col items-center max-w-[340px] h-[363px] shadow-sm justify-center gap-5 rounded-[30px] bg-white p-8">
      <div style={{boxShadow: '4px 10px 30px 0px #4361EE66'}} className="w-[90px] h-[90px] rounded-full flex justify-center items-center p-4 bg-[#D7AB32]">
        <img src={image} alt="service" />
      </div>
      <span className="font-medium text-xl text-gray-900">{title}</span>
      <p className="text-base text-gray-600 font-medium text-center">{description}</p>
    </div>
  );

  return (
    <div className="w-full flex flex-col justify-start gap-24 pt-10 items-center  sm:h-[752px] mt-10 p-4 bg-[url('/assets/background/serviceBackground.png')] bg-top bg-cover bg-no-repeat">
      <span className="text-xl font-medium text-center">OUR SERVICES</span>
      <span className="text-4xl text-center font-semibold">
        Elevating Your Real Estate Experience
      </span>
      <div className="w-full bg-transparent flex flex-col sm:flex-row justify-center gap-12 lg:gap-24 items-center">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

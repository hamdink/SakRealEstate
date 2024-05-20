import React from "react";
import Article from "./smallComponents/Article";
const NeighborhoodProperties = () => {
  const articleData = [
    {
      image: "/assets/neighborhood/thePearlIsland.png",
      title: "The Pearl Island",
      numberOfProperties: 216,
      width:'w-[155px] sm:w-[300px]'
    },
    {
      image: "/assets/neighborhood/doha.png",
      title: "Doha",
      numberOfProperties: 141,
      width:'w-[155px] sm:w-[300px]'
    },
    {
      image: "/assets/neighborhood/lusail.png",
      title: "Lusail",
      numberOfProperties: 212,
      width:'w-[155px] sm:w-[420px]'
    },
    {
      image: "/assets/neighborhood/alkhor.png",
      title: "Al Khor",
      numberOfProperties: 183,
      width:'w-[155px] sm:w-[420px]'
    },
    {
      image: "/assets/neighborhood/alwakrah.png",
      title: "Al Wakrah",
      numberOfProperties: 112,
      width:'w-[155px] lg:w-[600px]'
    },
   

  ];
  return (
    <div className="w-full flex flex-col items-center justify-around p-4">
      <div className="sm:w-[70%]">
        <div className=" flex flex-col items-start justify-normal gap-3">
          <span className="text-start text-[#D7AB32] font-medium text-xl">
            AREAS ACROSS THE TOWN
          </span>
          <span className="text-start text-[#000000] font-semibold text-2xl lg:text-5xl">
            Neighborhood Properties
          </span>
        </div>
      </div>
      <div className="sm:w-[70%] flex justify-start sm:justify-around pl-8 flex-wrap gap-4 mt-10">
       {
          articleData.map((article, index) => (
            <Article key={index} number={article.numberOfProperties} width={article.width} title={article.title} image={article.image} />
          ))
       }
      </div>
    </div>
  );
};

export default NeighborhoodProperties;

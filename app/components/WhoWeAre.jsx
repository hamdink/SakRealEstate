import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full flex justify-center items-center">

    <div className=" flex flex-col sm:flex-row justify-around items-center">
      <div className="flex flex-col justify-normal gap-4 items-center p-2">
        <div className="flex flex-col items-start gap-3 ">
          <span className="text-[#D7AB32] font-medium text-xl text-start">
            WHO ARE WE
          </span>
          <span className="text-black font-semibold  text-2xl sm:text-4xl">
            Assisting individuals in <br /> locating the appropriate <br /> real
            estate.
          </span>
          <p className="text-[#808080] font-normal text-base">
            At SAK Real Estate, integrity, transparency, and <br />{" "}
            professionalism are at the core of everything we do. e pride <br />
            ourselves on building long-lasting relationships based on trust{" "}
            <br /> and mutual respect with our clients, ensuring their
            satisfaction <br /> and peace of mind throughout their real estate
            journey
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <div  style={{boxShadow: '10px 30px 50px 0px #0000000D'}} className="  sm:w-[412px] flex justify-normal items-center gap-4 rounded-[30px] p-6 ">
            <img src="assets/icons/icon1.png" alt="" />
            <div>
              <span className="text-[#D7AB32] font-medium text-xl">
                Search for a good property
              </span>
              <p className="text-[#808080] font-normal text-base">
                Find Your Ideal Space: Let Us Navigate <br /> the Real Estate Landscape
                for You
              </p>
            </div>
          </div>
          <div  style={{boxShadow: '10px 30px 50px 0px #0000000D'}} className=" sm:w-[412px] flex justify-normal items-center gap-4 rounded-[30px] p-6 ">
            <img src="assets/icons/icon2.png" alt="" />
            <div>
              <span className="text-[#D7AB32] font-medium text-xl">
              Make an appointment
              </span>
              <p className="text-[#808080] font-normal text-base">
              Unlock the Door to Your Property <br /> Goals with SAK Real Estate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around p-6 ">
        <img src="/assets/houses/houses.png" alt="" className="mt-16 w-auto" />
      
      </div>
    </div>
    </section>
  );
};

export default WhoWeAre;

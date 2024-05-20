import React from "react";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-around gap-10 p-4">
        <div className="flex flex-col w-full justify-center">
        <span className="text-center text-[#D7AB32] font-medium text-base sm:text-xl uppercase">
        Introduce yourself to
      </span>
      <span className="text-center text-[#000] font-semibold text-[28px] sm:text-4xl mt-3 ">
      Our Team of Experts
      </span>
        </div>
     
      <div className="w-full flex items-center justify-evenly gap-4 flex-wrap ">
        <div className="flex flex-col items-center justify-around">
            <img src="/assets/team/member1.png" alt="" className="w-[120px] sm:w-auto" />
            <span className="text-center text-[#0B090A] font-semibold text-xl mt-3">
            Brendon M
            </span>
            <span className="text-center text-[#D7AB32] font-normal text-base">
            CEO & Founder
            </span>
        </div>
        <div className="flex flex-col items-center justify-around">
            <img src="/assets/team/member2.png" alt="" className="w-[120px] sm:w-auto" />
            <span className="text-center text-[#0B090A] font-semibold text-xl mt-3">
            Jodi J. Appleby
            </span>
            <span className="text-center text-[#D7AB32] font-normal text-base">
            Real Estate Developer
            </span>
        </div>
        <div className="flex flex-col items-center justify-around">
            <img src="/assets/team/member3.png" alt="" className="w-[120px] sm:w-auto" />
            <span className="text-center text-[#0B090A] font-semibold text-xl mt-3">
            Justin S. Meza
            </span>
            <span className="text-center text-[#D7AB32] font-normal text-base">
            Listing Agent
            </span>
        </div>
        <div className="flex flex-col items-center justify-evenly ">
            <img src="/assets/team/member4.png" alt="" className="w-[120px] sm:w-auto" />
            <span className="text-center text-[#0B090A] font-semibold text-xl mt-3">
            Susan T. Smith
            </span>
            <span className="text-center text-[#D7AB32] font-normal text-base">
            Buyer's Agent
            </span>
        </div>
      </div>
    </div>
  );
};

export default Team;

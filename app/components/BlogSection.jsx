import React from "react";

const BlogSection = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-normal bg-[url('/assets/background/blogSection-bg.png')] bg-center bg-cover bg-no-repeat lg:h-[799px] p-8">
      <div className="w-full flex flex-col items-center justify-normal gap-5 mt-10">
        <span className="font-medium text-xl text-[#ffffff]">
          WHAT’S TRENDING
        </span>
        <span className="font-semibold text-[27px] sm:text-5xl text-[#ffffff]">
          Latest Blogs & Posts
        </span>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 sm:mt-24">
        <div className="flex flex-col items-center  justify-center max-w-[340px]">
          <div className="relative xs:w-[333px] xs:h-[200px]  overflow-hidden bg-[url('/assets/blog/blog1.png')] bg-center bg-cover  rounded-[30px]">
          
            <div className="absolute w-[49px]  top-1 left-10 z-40 flex flex-col items-center p-2 top bg-white  rounded-b-[10px]">
              <span className="text-[#2B2B2B] text-base font-medium">08</span>
              <span className="text-[#808080] text-[13px] font-normal">
                Mon
              </span>
            </div>
          </div>
         
            <span className="text-[#ffffff] text-start font-medium text-[28px]  leading-10 px-5">
              Top 10 Home Buying Mistakes to Avoid
            </span>
            <p className="text-[#D4D4D4] text-start font-medium text-[16px] leading-6 px-5">
            Lorem ipsum dolor sit amet consectetur. Fermentum nisi mi nibh ac a sit amet.
            </p>
            <div className="flex w-full justify-end p-2 items-center">
            <img src="/assets/arrow.png" alt="" />
          </div>
         
        </div>
        <div className="flex flex-col items-center  justify-center max-w-[340px]">
          <div className="relative xs:w-[333px] xs:h-[200px]  overflow-hidden bg-[url('/assets/blog/blog1.png')] bg-center bg-cover  rounded-[30px]">
          
            <div className="absolute w-[49px]  top-1 left-10 z-40 flex flex-col items-center p-2 top bg-white  rounded-b-[10px]">
              <span className="text-[#2B2B2B] text-base font-medium">08</span>
              <span className="text-[#808080] text-[13px] font-normal">
                Mon
              </span>
            </div>
          </div>
         
            <span className="text-[#ffffff] text-start font-medium text-[28px]  leading-10 px-5">
              Top 10 Home Buying Mistakes to Avoid
            </span>
            <p className="text-[#D4D4D4] text-start font-medium text-[16px] leading-6 px-5">
            Lorem ipsum dolor sit amet consectetur. Fermentum nisi mi nibh ac a sit amet.
            </p>
            <div className="flex w-full justify-end p-2 items-center">
            <img src="/assets/arrow.png" alt="" />
          </div>
         
        </div>
        <div className="flex flex-col items-center  justify-center max-w-[340px]">
          <div className="relative xs:w-[333px] xs:h-[200px]  overflow-hidden bg-[url('/assets/blog/blog1.png')] bg-center bg-cover  rounded-[30px]">
          
            <div className="absolute w-[49px]  top-1 left-10 z-40 flex flex-col items-center p-2 top bg-white  rounded-b-[10px]">
              <span className="text-[#2B2B2B] text-base font-medium">08</span>
              <span className="text-[#808080] text-[13px] font-normal">
                Mon
              </span>
            </div>
            
          </div>
         
            <span className="text-[#ffffff] text-start font-medium text-[28px]  leading-10 px-5">
              Top 10 Home Buying Mistakes to Avoid
            </span>
            <p className="text-[#D4D4D4] text-start font-medium text-[16px] leading-6 px-5">
            Lorem ipsum dolor sit amet consectetur. Fermentum nisi mi nibh ac a sit amet.
            </p>
          <div className="flex w-full justify-end p-2 items-center">
            <img src="/assets/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

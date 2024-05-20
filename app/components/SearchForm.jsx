'use client';
import React, { useState } from "react";

const SearchForm = () => {
    const [search, setSearch] = useState('Sale')
  return (
    <div style={{boxShadow: '10px 30px 50px 0px #0000000D'}} className="flex flex-col justify-around items-center rounded-[30px] bg-white h-[582px] gap-4  w-[80%]  sm:w-[420px]">
        <div className="w-full flex flex-col items-center">

      <div className="w-full flex justify-around items-center h-[80px]">
        <span className={`text-base font-medium ${search==='Sale'?'text-[#D7AB32] ':'text-[#808080]'} cursor-pointer`} onClick={()=>{setSearch('Sale')}}>For Sale</span>
        <span  className={`text-base font-medium ${search==='Rent'?'text-[#D7AB32]':'text-[#808080]'} cursor-pointer`} onClick={()=>{setSearch('Rent')}}>For Rent</span>
      </div>
      <div className="w-full h-[1px] bg-[#AAAAAA] flex justify-around items-center">
        <div className={`w-[120px] ${search==='Sale'?'bg-[#D7AB32]':''} h-[2px]`}></div>
        <div  className={`w-[120px]  ${search==='Rent'?'bg-[#D7AB32]':''} h-[2px]`}></div>
      </div>
        </div>
      <div className="w-full flex flex-col items-center justify-around p-4 gap-4">
        <div className="w-[90%] h-[59px] border bg-[#D4D4D433]   rounded-[20px] p-2 flex justify-start items-center">
          <span className="text-[#AAAAAA] text-base font-normal">Qatar</span>
        </div>
        <select   className="w-[90%] h-[59px] border bg-[#D4D4D433]   rounded-[20px] p-2 flex justify-start items-center">
          <option defaultValue >Select Property Type</option>
          <option>prototype 1</option>
          <option> prototype 2</option>
          <option> prototype 3 </option>
          <option> prototype 4</option>
        </select>
        <select className="w-[90%] h-[59px] border bg-[#D4D4D433]   rounded-[20px] p-2 flex justify-start items-center">
          <option defaultValue >Select Rooms</option>
          <option> 1 room</option>
          <option> 2 rooms</option>
          <option> 3 rooms </option>
          <option> 4 rooms</option>
        </select>
      </div>
      <button
        style={{
          background: "linear-gradient(90deg, #D7AB32 0%, #715A1A 100%)",
        }}
        className="w-[80%] flex justify-center items-center gap-2 rounded-[50px] p-2 h-[60px]"
      >
     <img src="/assets/icons/search.svg" alt="" />
     <span className="text-base font-medium text-white">Search</span>
      </button>
    </div>
  );
};

export default SearchForm;

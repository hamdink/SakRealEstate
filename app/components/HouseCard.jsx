import React from 'react'

const HouseCard = (props) => {
  return (
    <div className="bg-white flex flex-col items-center justify-normal gap-2 w-full max-w-[280px] sm:max-w-[340px]">
    <div className="w-full rounded-3xl bg-[url('/assets/houses/house-1.png')] bg-top bg-cover bg-no-repeat h-[340px] relative">
      <img src="/assets/houses/discount.png" alt=""  className=' w-[141px] h-[42.51px] absolute bottom-4 left-4'/>
    </div>
    <div className='w-full flex flex-col items-start justify-start gap-4 p-4'>
      <span className='text-start font-semibold text-black text-2xl'>$ 5,970</span>
      <span className='text-start font-semibold text-black text-xl'>Tranquil Haven in the Woods</span>
      <span className='text-start font-normal  text-[#808080]'>103 Wright CourtBurien, WA 98168</span>
      <div className='flex justify-normal gap-3 items-center'>
        <div className='flex justify-normal items-center gap-1'>
          <img src="/assets/icons/bed.png" alt="" className='w-[30px] h-[20px]' />
          <span className='text-black font-normal text-base'>4 Beds</span>
        </div>
        <div className='flex justify-normal items-center gap-1'>
          <img src="/assets/icons/bath.png" alt="" className='w-[30px] h-[20px]' />
          <span className='text-black font-normal text-base'>3 bath</span>
        </div>
      </div>

    </div>
    
  </div>
  )
}

export default HouseCard
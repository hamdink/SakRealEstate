import React from 'react'

const Article = ({image,title,number,width}) => {
  return (
    <div  className={`  relative h-[155px] sm:h-[300px]  flex flex-col justify-end overflow-hidden rounded-[30px] px-10 pb-12 ${width} cursor-pointer`}>
    <img
      src={image}
      alt=""
      className=" shadow-sm absolute inset-0 -z-10 h-full w-full rounded-[30px]  "
    />
    
    <h3 className="mt-3 text-lg lg:text-5xl font-semibold leading-6 text-[#e4dfdf34] text-opacity-100">
     
     {number}
     </h3>
    <span className=" text-lg font-medium  text-[#ffffff]">
     
    {title}
    </span>
  </div>
  )
}

export default Article
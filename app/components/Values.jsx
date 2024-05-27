import { valuesData } from "../constants";
import Image from "next/image";

const ValueCard = ({ src, alt, title, description }) => (
  <div className="xl:max-w-[670px] lg:w-[550px] w-auto lg:h-[238px] h-auto lg:py-[39px] py-[20px] lg:px-[27px] px-[15px] rounded-[10px] bg-[#F9F9F9] flex">
    <div className="flex-[0.25] h-full w-auto flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={129}
        className="lg:w-full lg:h-full w-[80%] h-[80%]"
      />
    </div>
    <div className="flex-[0.75] flex flex-col ml-4 h-full justify-center items-start">
      <span className="font-poppins font-bold lg:text-[28px] text-[20px] text-[#242331] lg:leading-[33px] leading-[25px]">
        {title}
      </span>
      <p className="font-poppins font-normal md:text-[18px] text-[13px] text-[#797979] lg:leading-[34px] leading-[24px] text-start mt-4">
        {description}
      </p>
    </div>
  </div>
);

const Values = () => {
  return (
    <section className="w-full lg:px-40 px-15 lg:py-10 py-5 mt-10">
      <div className="w-full flex flex-col items-center justify-center md:mb-16 mb-10">
        <span className="font-poppins font-medium md:text-[25px] text-[19px] text-[#D7AB32] leading-[29px] mb-10">
          Our Values
        </span>
        <h2 className="font-poppins font-extrabold md:text-[40px] text-[20px] text-[#242331] leading-[44px] text-center">
          The story and values behind
          <br />
          our company
        </h2>
      </div>
      <div className="w-full lg:px-0 px-2 flex flex-wrap gap-4">
        {valuesData.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default Values;

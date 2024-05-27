import Image from "next/image";

const CareerCTA = () => {
  return (
    <section className="w-full sm:mt-10 mt-6">
      <div className="flex xl:flex-row flex-col xl:gap-x-8 justify-center items-center lg:py-10 py-5 lg:px-40 md:px-20 px-10">
        <Image
          src="/assets/career/CTA.png"
          alt="CTA Image"
          width={535}
          height={546}
          className="flex-[1]"
        />

        <div className="flex flex-col justify-start items-center flex-[1] xl:mt-0 mt-10">
          <h2 className="font-poppins font-bold lg:text-5xl md:text-3xl text-xl text-[#000000] text-start">
            Always Get The <span className="text-[#D7AB32]">Latest </span>
            Information
          </h2>
          <p className="font-poppins font-normal lg:text-xl md:text-lg text-base text-[#000000] text-start mt-6">
            Lorem ipsum dolor sit amet consectetur. Purus tellus id id et cras
            purus egestas auctor amet.
          </p>
          <div className="relative w-full mt-6">
            <input
              type="email"
              placeholder="Email Address"
              className="md:min-h-[76px] min-h-[50px] w-full border border-[#000000] rounded-[30px] bg-white text-[#AAAAAA] md:placeholder:text-[16px] placeholder:text-[12px] placeholder:font-normal placeholder:text-[#AAAAAA] placeholder:pl-4 pl-4 outline-none"
            />
            <button className="md:w-[135px] md:h-[80%] h-[60%] rounded-[30px] bg-[#D7AB32] md:py-4 md:px-6 py-2 px-4 font-poppins text-[#FFFFFF] text-[16px] font-semibold text-center leading-[28px] absolute md:bottom-[10%] bottom-[20%] right-[2%] hover:cursor-pointer flex justify-center items-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;

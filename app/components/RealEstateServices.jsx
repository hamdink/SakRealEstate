import Image from "next/image";

const RealEstateServices = () => {
  return (
    <section className="w-full sm:px-40 px-10 sm:py-10 py-5 sm:mt-10 mt-4">
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="font-poppins font-bold sm:text-[40px] text-[20px] text-[#D7AB32] sm:leading-[60px] leading-[20px]"
          style={{ textShadow: "0px 4px 31px rgba(0, 0, 0, 0.11)" }}
        >
          End-To-End real estate Services
        </h2>
        <p className="font-poppins font-normal sm:text-[24px] text-[15px] text-[#000000] sm:leading-[36px] leading-[20px] sm:text-center text-start sm:mt-10 mt-4">
          Sometimes, we need to check the time, wondering when our work or
          <br />
          meeting will finish, without getting caught by others.
        </p>
        <Image
          src="/assets/services/realEstateService.png"
          alt="realEstateService"
          width={809}
          height={555}
          className="sm:mt-20 mt-10"
        />
      </div>
    </section>
  );
};

export default RealEstateServices;

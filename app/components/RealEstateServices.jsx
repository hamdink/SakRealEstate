import Image from "next/image";

const RealEstateServices = () => {
  return (
    <section className="w-full px-40 py-10 mt-10">
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="font-poppins font-bold text-[40px] text-[#D7AB32] leading-[60px]"
          style={{ textShadow: "0px 4px 31px rgba(0, 0, 0, 0.11)" }}
        >
          End-To-End real estate Services
        </h2>
        <p className="font-poppins font-normal text-[24px] text-[#000000] leading-[36px] text-center mt-10">
          Sometimes, we need to check the time, wondering when our work or
          <br />
          meeting will finish, without getting caught by others.
        </p>
        <Image
          src="/assets/services/realEstateService.png"
          alt="realEstateService"
          width={809}
          height={555}
          className="mt-20"
        />
      </div>
    </section>
  );
};

export default RealEstateServices;

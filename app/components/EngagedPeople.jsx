import Image from "next/image";

const EngagedPeople = () => {
  return (
    <section className="w-full sm:mt-10 mt-6">
      <div className="flex xl:flex-row flex-col-reverse xl:gap-x-8 justify-center items-center lg:py-10 py-5 lg:px-40 md:px-20 px-10">
        <div className="flex flex-col justify-start items-center flex-[1] xl:mb-0 mb-10">
          <h2 className="font-poppins font-bold lg:text-5xl md:text-3xl text-xl lg:leading-[50px] text-[#000000] text-start capitalize">
            So Many People are <span className="text-[#D7AB32]">engaged </span>
            over the world
          </h2>
          <p className="font-poppins font-normal lg:text-xl md:text-lg text-base text-[#000000] text-start mt-6">
            Lorem ipsum dolor sit amet consectetur. Est montes vitae tortor
            iaculis metus semper fermentum proin.
          </p>
        </div>
        <Image
          src="/assets/career/engagedPeople.png"
          alt="engagedPeople Image"
          width={535}
          height={538}
          className="flex-[1]"
        />
      </div>
    </section>
  );
};

export default EngagedPeople;

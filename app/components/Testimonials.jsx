import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-white w-full">
      <div className="py-6 px-10 w-full flex sm:flex-row flex-col mt-6">
        <div className="flex flex-col flex-[1]">
          <h3 className="font-poppins text-[#D7AB32] text-[19px] font-medium leading-[29px]">
            Testimonials
          </h3>
          <p className="font-poppins text-[#2B2B2B] text-[39px] font-semibold leading-[47px] w-[415px] mt-4">
            Look What Our
            <br />
            Customers Say!
          </p>
          <p className="font-poppins text-[#2B2B2B] text-[16px] font-normal leading-[26px] w-[415px] mt-4">
            Hear from Satisfied Clients About Their SAK Real Estate Experience
          </p>
          <div className="flex gap-x-8 mt-8">
            <Image
              src="/assets/arrowLeft.png"
              alt="arrowLeft"
              width={50}
              height={50}
            />
            <Image
              src="/assets/arrow.png"
              alt="arrowRight"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

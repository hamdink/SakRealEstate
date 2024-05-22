import Image from "next/image";
const TestimonialCard = () => (
  <div className="sm:w-[500px] w-[333px] rounded-[30px] flex flex-col justify-start items-start sm:px-12 sm:py-8 px-6 py-4 bg-white shadow-custom">
    <Image
      src="/assets/icons/slides.svg"
      alt="avatar1"
      width={60}
      height={38}
    />
    <p className="font-poppins text-[#2B2B2B] sm:text-[19px] text-[16px] font-medium sm:leading-[29px] leading-[24px] sm:w-[380px] w-[273px] sm:mt-4 mt-2 text-start">
      I highly recommend Jodi J. Appleby. She was attentive to our needs and
      worked tirelessly to find us the perfect home. We couldn't be happier with
      our new place!
    </p>
    <div className="border border-[#D4D4D4] w-full sm:mt-4 mt-2" />
    <div className="flex justify-center gap-2 items-center sm:mt-4 mt-2 w-full">
      <Image
        src="/assets/icons/testimonialAvatar.png"
        alt="testimonialAvatar"
        width={50}
        height={50}
      />
      <div className="flex sm:flex-row sm:justify-between flex-col items-center w-full">
        <span className="font-poppins font-medium sm:text-[19px] text-[16px] sm:leading-[29px] leading-[24px] text-[#2B2B2B]">
          Barbara D.Smith
        </span>
      </div>
      <Image src="/assets/icons/stars.png" alt="stars" width={86} height={13} />
    </div>
  </div>
);

export default TestimonialCard;

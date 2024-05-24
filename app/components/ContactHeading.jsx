import Image from "next/image";

const Contact = ({ iconSrc, alt, title, contactInfo }) => {
  return (
    <section
      className="border border-[#E8E8E8] rounded-[40px] py-4 lg:px-9 px-5 flex flex-row items-center lg:gap-x-4 gap-x-2 w-full"
      style={{ boxShadow: "0px 24px 33px 0px rgba(181, 181, 181, 0.25)" }}
    >
      <div className="flex-[0.5] lg:h-[90%] lg:w-[90%] h-[60%] w-[60%]">
        <Image
          src={iconSrc}
          alt={alt}
          width={83}
          height={83}
          className="lg:h-[90%] lg:w-[90%] h-[60%] w-[60%]"
        />
      </div>
      <div className="flex flex-[1.5] sm:flex-row  flex-col sm:items-center justify-between">
        <span className="font-poppins sm:font-bold font-semibold sm:text-[20px] lg:text-[25px] text-[15px] text-[#1B2534]">
          {title}
        </span>

        <span className="font-poppins font-normal lg:text-[20px] sm:text-[15px] text-[10px] text-[#797979]">
          {contactInfo}
        </span>
      </div>
    </section>
  );
};

const ContactHeading = () => {
  return (
    <section className="w-full mt-10 sm:px-40 sm:py-10 px-10 py-5">
      <h1 className="font-poppins font-extrabold lg:text-[48px] sm:text-[30px] text-[20px] text-[#D7AB32] md:leading-[52px] leading-[34px] text-center">
        Get in touch today!
      </h1>
      <div className="flex xl:flex-row flex-col lg:gap-x-6 gap-y-6 mt-10">
        <Contact
          iconSrc="/assets/contact/mail.svg"
          alt="contactMail"
          title="Mail Us"
          contactInfo="Contact@sakrealestate.com"
        />
        <Contact
          iconSrc="/assets/contact/phone.svg"
          alt="contactPhone"
          title="Call Us"
          contactInfo="+001 6547 6589"
        />
      </div>
    </section>
  );
};

export default ContactHeading;

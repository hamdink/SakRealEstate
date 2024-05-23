import Image from "next/image";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#FBF7EB] w-full">
      <div className="flex w-full sm:flex-row flex-col py-10 px-40">
        <div className="flex flex-[0.75] sm:items-start items-center flex-col w-full mr-4">
          <Image
            src="assets/footerLogo.svg"
            alt="logo"
            width={128}
            height={185}
          />
          <div className="flex flex-row mt-8">
            <Image
              src="assets/icons/phone.svg"
              alt="phone"
              width={20}
              height={20}
            />
            <span className="font-medium text-[16px] leading-[24px] text-[#2B2B2B] ml-2">
              +00 000 000 000
            </span>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              src="assets/icons/mail.svg"
              alt="mail"
              width={20}
              height={20}
            />
            <span className="font-medium text-[16px] leading-[24px] text-[#2B2B2B] ml-2">
              support@SAKrealestate.com
            </span>
          </div>
        </div>

        <div className="flex-[1] w-full hidden sm:flex flex-wrap lg:justify-evenly md:mt-0 mt-10 px-6">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[#0B090A]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-[#2B2B2B] cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex-[1] flex sm:items-start items-center flex-col mt-4">
          <h2 className="font-poppins font-medium text-[19px] leading-[29px] text-[#0B090A]">
            Subscribe to our <br /> Newsletter!
          </h2>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="min-h-[60px] w-full border-[2px] border-transparent rounded-[30px] bg-white mt-4 text-[#AAAAAA] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#AAAAAA] placeholder:pl-4 pl-4 outline-none shadow-custom"
            />
            <Image
              src="/assets/arrow2.svg"
              alt="arrow2"
              width={16}
              height={16}
              className="absolute h-[50px] w-[50px] bottom-[6%] right-[2%] hover:cursor-pointer"
            />
          </div>

          <span className="font-poppins font-medium text-[20px] text-[#0B090A] leading-[29px] mt-10">
            Follow Us on
          </span>

          <div className="flex flex-row justify-start items-center mt-4">
            {socialMedia.map((social, index) => (
              <Image
                key={social.id}
                src={social.icon}
                alt={social.id}
                width={22}
                height={22}
                className={`w-[22px] h-[22px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#0B090A] border w-full h-[50px] flex items-center sm:justify-between justify-center">
        <span className="font-poppins font-normal text-[16px] leading-[26px] text-[#AAAAAA] sm:pl-40">
          All Rights Reserved
        </span>
        <div className="sm:flex hidden sm:pr-40 sm:gap-x-10">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer">
            Terms and Conditions
          </span>
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer">
            Privacy Policy
          </span>
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer">
            Disclaimer
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#FBF7EB] w-full mt-10">
      <div className="flex w-full sm:flex-row flex-col lg:py-10 py-5 lg:px-40 md:px-20 px-10">
        <div className="flex xl:flex-[0.5] flex-[1] items-start justify-center flex-col w-full mr-4">
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
        <div className="xl:flex-[1.5] flex-[1] flex xl:flex-row sm:flex-col sm:px-4">
          <div className="flex-[1] hidden sm:flex xl:justify-evenly justify-between md:mt-0 mt-10">
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

          <div className="flex flex-[1] items-start flex-col mt-4">
            <h2 className="font-poppins font-medium text-[19px] leading-[29px] text-[#0B090A]">
              Subscribe to our <br className="sm:block hidden" /> Newsletter!
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
                  className={`sm:w-[22px] sm:h-[22px] w-[30px] h-[30px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B090A] border w-full h-[50px] flex items-center sm:justify-between justify-center px-10">
        <span className="font-poppins font-normal text-[16px] leading-[26px] text-[#AAAAAA]">
          All Rights Reserved
        </span>
        <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer sm:block hidden">
          Terms and Conditions
        </span>
        <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer sm:block hidden">
          Privacy Policy
        </span>
        <span className="font-poppins font-normal text-[16px] leading-[24px] text-[#AAAAAA] hover:cursor-pointer sm:block hidden">
          Disclaimer
        </span>
      </div>
    </footer>
  );
};

export default Footer;

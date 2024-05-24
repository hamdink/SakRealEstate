"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {};

  return (
    <section className="w-[96%] mt-10 bg-[rgba(179,179,179,0.25)] rounded-[10px] lg:mx-8 md:mx-4 mx-2">
      <form
        onSubmit={handleSubmit}
        className="md:py-20 md:px-16 py-10 px-8 flex flex-col"
      >
        <div className="flex md:gap-x-4 gap-y-6 md:flex-row flex-col">
          <div className="flex-[1]">
            <label htmlFor="fullName" className="contactForm_label h-[60px]">
              fullName<span className="text-red-700"> *</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="contactForm_input"
            />
          </div>
          <div className="flex-[1]">
            <label htmlFor="email" className="contactForm_label h-[60px]">
              Email<span className="text-red-700"> *</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="contactForm_input"
            />
          </div>
        </div>
        <div className="flex md:gap-x-4 gap-y-6 md:flex-row flex-col md:mt-10 mt-6">
          <div className="flex-[1]">
            <label htmlFor="company" className="contactForm_label h-[60px]">
              Company<span className="text-red-700"> *</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Enter your Full Name"
              value={formData.company}
              onChange={handleChange}
              className="contactForm_input"
            />
          </div>
          <div className="flex-[1]">
            <label htmlFor="subject" className="contactForm_label">
              Subject<span className="text-red-700"> *</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
              className="contactForm_input"
            />
          </div>
        </div>
        <label htmlFor="message" className="contactForm_label md:mt-10 mt-6">
          Message<span className="text-red-700"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Hi there, i would like to talk about"
          value={formData.message}
          onChange={handleChange}
          className="h-[200px] contactForm_input"
        ></textarea>
        <div className="flex items-center justify-center md:mt-10 mt-6">
          <button className="md:py-[25px] py-[15px] md:px-[59px] px-[35px] text-center bg-[#D7AB32] cursor-pointer rounded-[39px] md:text-[18px] text-[15px] text-[#FFFFFF] leading-[27px] font-poppins font-bold">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

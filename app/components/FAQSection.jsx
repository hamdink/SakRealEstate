"use client";
import React, { useState, useEffect, useRef } from "react";
import { faqs } from "../constants/index";
import Image from "next/image";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timerRef.current);
    };
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted && !animationCompleted) {
      if (activeIndex < faqs.length - 1) {
        timerRef.current = setTimeout(() => {
          setActiveIndex((prevIndex) => prevIndex + 1);
        }, 1500);
      } else if (activeIndex === faqs.length - 1) {
        timerRef.current = setTimeout(() => {
          setAnimationCompleted(true);
          setActiveIndex(0);
        }, 1500);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [activeIndex, animationStarted, animationCompleted]);

  const handleQuestionClick = (index) => {
    clearTimeout(timerRef.current);
    setActiveIndex(index);
    setAnimationStarted(true);
    setAnimationCompleted(false);
  };

  return (
    <section ref={sectionRef} className="w-full py-10 px-40 lg:block hidden">
      <div className="w-full relative h-[600px]">
        <h2 className="text-[48px] font-extrabold leading-[64px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 relative w-full h-full">
          <div className="w-[50%] flex flex-col gap-0 h-[408px] absolute top-[5%] left-[0%]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => handleQuestionClick(index)}
                className={`flex w-full justify-between items-center py-[24px] px-[16px] ${
                  activeIndex === index ? "bg-[#FAFBFF]" : "bg-[#F1F4F9]"
                } cursor-pointer transition-all duration-500`}
              >
                <div className="flex gap-x-2">
                  <div
                    className={`rounded-full w-[24px] h-[24px] ${
                      activeIndex === index ? "bg-[#D7AB32]" : "bg-[#FBF7EB]"
                    }`}
                  />
                  <p className="font-poppins font-normal text-[16px] text-[#000000] leading-[24px]">
                    {faq.question}
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/faqArrow.svg"
                    alt="faq arrow"
                    width={8}
                    height={16}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[50%] h-[472px] bg-[#FAFBFF] rounded-[16px] shadow-lg -z-10 absolute top-[0%] right-[5%]">
            {faqs[activeIndex] && (
              <div className="flex flex-col pl-28 pr-3 pt-10">
                <p className="font-poppins font-bold text-[18px] text-[#18191F] leading-[28px] mb-4">
                  {faqs[activeIndex].question}
                </p>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#000000] mt-6">
                  {faqs[activeIndex].answer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

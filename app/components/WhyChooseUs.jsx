"use client";
import Image from "next/image";
import { accordionItems } from "../constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const CustomAccordion = styled(Accordion)({
  boxShadow: "none",
  border: "none",
  "&:before": {
    display: "none",
  },
  "&:not(:last-child)": {
    borderBottom: "none",
  },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "#FFFFFF",
  minHeight: "56px",
  "&.Mui-expanded": { minHeight: "56px" },
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "27px",
  color: "#484848",
  borderBottom: "none",
  display: "flex",
  alignItems: "center",
});

const CustomAccordionDetails = styled(AccordionDetails)({
  padding: "8px 16px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  color: "#000000",
  borderTop: "none",
  display: "flex",
  alignItems: "center",
});

const WhyChooseUs = () => {
  return (
    <section className="w-full px-10 py-10 mt-10 lg:px-40">
      <div className="w-full flex flex-col justify-center items-center">
        <h2
          className="font-poppins font-bold text-4xl text-[#D7AB32] leading-[60px]"
          style={{ textShadow: "0px 4px 31px rgba(0, 0, 0, 0.11)" }}
        >
          Why Choose Us
        </h2>
        <p className="font-poppins font-normal text-xl text-black leading-[36px] text-center mt-10">
          Sometimes, we need to check the time, wondering when our work or
          meeting
          <br />
          will finish, without getting caught by others.
        </p>
        <div className="mt-20 flex flex-col items-center lg:flex-row lg:gap-x-6 gap-y-6 justify-center">
          <Image
            src="/assets/services/whyChooseUs.png"
            alt="whyChooseUs"
            width={809}
            height={555}
            className="flex-1"
          />
          <div className="flex-[1] lg:w-auto">
            {accordionItems.map((item, index) => (
              <CustomAccordion key={index}>
                <CustomAccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#D7AB32" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={15}
                      className="mr-4"
                    />
                    {item.title}
                  </Box>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Image
                      src="/assets/services/verticalLine.svg"
                      alt="verticalLine"
                      width={5}
                      height={78}
                      className="mr-4 h-full"
                    />
                    {item.details}
                  </Box>
                </CustomAccordionDetails>
              </CustomAccordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

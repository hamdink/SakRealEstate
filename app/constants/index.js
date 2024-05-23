import facebook from "../../public/assets/icons/facebook.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "",
      },
      {
        name: "About",
        link: "",
      },
      {
        name: "Listings",
        link: "",
      },
      {
        name: "Services",
        link: "",
      },
      {
        name: "Blogs",
        link: "",
      },
    ],
  },
  {
    title: "Discovery",
    links: [
      {
        name: "Canada",
        link: "",
      },
      {
        name: "United States",
        link: "",
      },
      {
        name: "Germany",
        link: "",
      },
      {
        name: "Africa",
        link: "",
      },
      {
        name: "India",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
];

export const faqs = [
  {
    question: "What is a Payment Gateway?",
    answer:
      "A payment gateway is a service that authorizes credit card payments for online and offline businesses. It is the virtual equivalent of a physical point-of-sale terminal located in most retail outlets.",
  },
  {
    question:
      "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    answer:
      "We do not charge for the setup and annual maintenance. You only pay for the plan that you are opting to.",
  },
  {
    question: "What platforms does Instapay payment gateway support?",
    answer:
      "We support a wide variety of platforms including Shopify, WooCommerce, Wix, and Magento.",
  },
  {
    question: "Does Instapay provide international payments support?",
    answer: "Yes, we support international payments in over 100 currencies.",
  },
  {
    question:
      "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    answer:
      "No, there are no setup or annual maintenance fees. You only pay for the plan that you choose.",
  },
];

export const about = {
  heading1: "About Our Company",
  p_heading1_1:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum",
  p_heading1_2: "ullamcorper sed pharetra sene.",
  image1_src: "/assets/about/aboutImage1.png",
  image1_alt: "aboutImage1",
  image2_src: "/assets/about/aboutImage2.png",
  image2_alt: "aboutImage2",
  heading2: "What we do",
  p_heading2_1:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  p_heading2_2:
    "Content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will cover many web sites still in their infancy.",
};

export const bannersData = [
  { value: 100, label: "Client Satisfaction" },
  { value: 24, label: "Client Satisfaction", highlight: "h" },
  { value: 98, label: "Client Satisfaction", highlight: "+" },
  { value: 208, label: "Client Satisfaction", highlight: "+" },
];

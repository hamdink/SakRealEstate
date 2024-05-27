import RealEstateServices from "@app/components/RealEstateServices";
import { services } from "../constants";
import HeadingPage from "@app/components/HeadingPage";
import WhyChooseUs from "@app/components/WhyChooseUs";
import Testimonials from "@app/components/Testimonials";

const Services = () => {
  return (
    <section className="w-full">
      <HeadingPage {...services} />
      <RealEstateServices />
      <WhyChooseUs />
      <Testimonials />
    </section>
  );
};

export default Services;

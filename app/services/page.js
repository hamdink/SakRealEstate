import RealEstateServices from "@app/components/RealEstateServices";
import { services } from "../constants";
import HeadingPage from "@app/components/HeadingPage";
import WhyChooseUs from "@app/components/WhyChooseUs";

const Services = () => {
  return (
    <section className="w-full">
      <HeadingPage {...services} />
      <RealEstateServices />
      <WhyChooseUs />
    </section>
  );
};

export default Services;

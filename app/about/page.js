import { about } from "../constants";
import WhoWeAre from "@app/components/WhoWeAre";
import HeadingPage from "@app/components/HeadingPage";
import ServiceSection from "@app/components/ServiceSection";
import Team from "@app/components/Team";
import Testimonials from "@app/components/Testimonials";
import FAQSection from "@app/components/FAQSection";
import Banners from "@app/components/Banners";
import Values from "@app/components/Values";

const About = () => {
  return (
    <section className="w-full">
      <HeadingPage {...about} />
      <WhoWeAre />
      <ServiceSection />
      <Banners />
      <Values />
      <Team />
      <Testimonials />
      <FAQSection />
    </section>
  );
};

export default About;

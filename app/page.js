import LandingComponentHomePage from "./components/LandingComponentHomePage";
import WhoWeAre from "./components/WhoWeAre";
import SwiperHouses from "./components/SwiperHouses";
import ServiceSection from "./components/ServiceSection";
import NeighborhoodProperties from "./components/NeighborhoodProperties";
import Team from "./components/Team";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <LandingComponentHomePage />
      <WhoWeAre />
      <SwiperHouses />
      <ServiceSection />
      <NeighborhoodProperties />
      <Team />
      <BlogSection />
      <Testimonials />
    </div>
  );
}
